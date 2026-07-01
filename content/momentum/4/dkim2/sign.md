---
lastUpdated: "07/01/2026"
title: "DKIM2 Signing — sign()"
description: "Reference for the msys.validate.dkim2.sign() Lua API: hook selection, sign options, forwarder and modifier signing."
---

## DKIM2 Signing

DKIM2 signing in Momentum is driven from Lua policy via
`msys.validate.dkim2.sign`; enabling DKIM2 signing means calling `sign()` from
your validation hook.

### Signing hook: shared vs. per-recipient

`sign()` can be called from either `validate_data_spool` or
`validate_data_spool_each_rcpt`. The choice affects how `rt=` is populated
and whether BCC addresses are exposed. Per **§8.6 the signer MUST NOT reveal
`bcc:` recipients to any other recipient** (RFC 5322 §3.6.3); since `rt=` is
carried in the `DKIM2-Signature:` header that every recipient of a given copy
can read, the `rt=` of a copy delivered to one recipient must not list another
recipient who was blind-copied.

| | `validate_data_spool` | `validate_data_spool_each_rcpt` |
|---|---|---|
| **Fires** | Once on the shared parent message | Once per recipient (cowref) |
| **`rt=` auto-populate** | Primary recipient only (`msg:rcptto()`) — extra recipients are inaccessible in this hook | Single cowref recipient |
| **Multi-recipient rt=** | Must pass explicit `rcptto = {r1, r2, ...}` — collect the full list in an earlier hook (e.g. `validate_rcptto`) | Each cowref signs for its own single address automatically |
| **BCC privacy (§8.6)** | ⚠️ Operator MUST exclude BCC from the explicit `rcptto` list — a shared signature whose `rt=` lists a BCC address reveals it to all recipients | ✅ Satisfied by construction — each cowref is private to its recipient; `rt=` is bound to their address only |
| **Complexity** | Requires explicit recipient collection for multi-recipient | One `sign()` call per cowref; correct by default |

Use `validate_data_spool_each_rcpt` for most deployments — it handles
per-recipient signing automatically and is BCC-safe by construction. Use
`validate_data_spool` only when you need a single signature covering all
recipients and are willing to manage the recipient list and §8.6 BCC exclusion
yourself: Momentum cannot detect which envelope recipients are blind copies
(there is no envelope-level BCC marker), so when you pass an explicit
multi-recipient `rcptto` the §8.6 MUST NOT is **your** obligation — exclude any
BCC address, or fall back to per-recipient signing / separate copies.

Passing an explicit `rcptto` option overrides the auto-populated primary recipient.
Accepts a string (single address) or a Lua table of bare addresses.

### Minimum signer

```lua
require("msys.core")
require("msys.validate.dkim2")

local mod = {}

function mod:validate_data_spool_each_rcpt(msg, ac, vctx)
  local ok, err = msys.validate.dkim2.sign(msg, vctx, {
    domain   = "example.com",
    selector = "dkim2048",
    keyfile  = "/opt/msys/ecelerity/etc/conf/dkim/example.com/dkim2048.key",
  })
  if not ok then
    -- err is a static-literal string describing the failure. See
    -- /momentum/4/dkim2/debug for the full set.
    msys.log(msys.core.LOG_WARNING, "dkim2 sign failed: " .. (err or "unknown"))
  end
  return msys.core.VALIDATE_CONT
end

msys.registerModule("my_dkim2_signer", mod)
```

`mf=` defaults to the message's envelope MAIL FROM and `rt=` defaults to its
RCPT TO; both can be overridden in the options table for forwarder
scenarios (see *Forwarder / modifier signing* below).

### Sign options

`sign()` accepts either a single options table or a multi-algorithm
form using an explicit `sig_sets` key (§8.9 algorithm agility):

```lua
-- Single sig-set (most common):
msys.validate.dkim2.sign(msg, vctx, {
  domain   = "example.com",
  selector = "sel-2048",
  keyfile  = "/etc/dkim2/rsa.key",
})

-- Multi-algorithm (RSA + Ed25519 in one DKIM2-Signature):
msys.validate.dkim2.sign(msg, vctx, {
  domain   = "example.com",
  sig_sets = {
    { selector = "sel-rsa",     keyfile = "/etc/dkim2/rsa.key" },
    { selector = "sel-ed25519", keyfile = "/etc/dkim2/ed25519.key",
      algorithm = "ed25519-sha256" },
  },
})
```

When `sig_sets` is present, all entries sign the same canonical
signed-input and are combined into a single `s=sel1:alg1:sig1,sel2:alg2:sig2`
value on one `DKIM2-Signature` header.  Per §11.6 the verifier checks
every sig-set; overall passes if any one validates, so a receiver that
only supports RSA will still verify cleanly.  On the verifier side, any
sig-set that fails alongside a passing one is reported as a DWARNING in
paniclog (partial-sig-failure condition, §11.6).

**If any sig-set fails**, the entire `sign()` call returns
`(nil, error_string)` — no partial signature is produced.

The `selector`, `keyfile`, and `algorithm` fields belong to each sig-set
entry; all other options below are header-level and go at the top level
of the options table.

| Option | Required? | Meaning |
|---|---|---|
| `domain` | yes | `d=` tag — the signing domain. |
| `selector` | yes (single) | Selector component of `s=<selector>:<alg>:<base64-sig>`. When `sig_sets` is used, set per entry inside `sig_sets` instead. |
| `keyfile` | yes (single) | Path to the PEM-encoded private key on disk. Mutually exclusive with `keybuf`; one of the two is required. When `sig_sets` is used, set per entry inside `sig_sets` instead. |
| `keybuf` | yes (single) | PEM-encoded private key as a string in memory. Alternative to `keyfile` for cases where the key is held in a secrets manager or generated at runtime. When `sig_sets` is used, set per entry inside `sig_sets` instead. |
| `algorithm` | no | `"rsa-sha256"` (default) or `"ed25519-sha256"`. When `sig_sets` is used, set per entry inside `sig_sets` instead. |
| `sig_sets` | no | Array of `{selector, keyfile, keybuf, algorithm}` tables for multi-algorithm signing (§8.9). When `sig_sets` is used, `selector`/`keyfile`/`keybuf`/`algorithm` are set per entry inside `sig_sets` — do not set them at the top level. All other options (`domain`, `mailfrom`, `rcptto`, `flags`, `recipe`, etc.) remain at the top level and apply to all entries. |
| `mailfrom` | no | **Normally omitted** — Momentum reads the live envelope MAIL FROM automatically. Production exception: null-sender DSN/bounce messages where `mailfrom=""` is required since the envelope API returns nil for `MAIL FROM:<>`. Otherwise testing/simulation of specific envelope conditions without real SMTP transit. An explicit value may be given bare (`user@example.com`) or envelope-decorated (`<user@example.com>`, `MAIL FROM:<user@example.com>`, or `msg:mailfrom()`) — it is normalized to the bare address before being written into `mf=`, the same as `rcptto`. `""` (null sender) is preserved. |
| `rcptto` | no | **Normally omitted** — Momentum auto-populates from the active envelope recipient. One production exception: in `validate_data_spool` (shared hook), pass the full recipient list explicitly to cover all recipients in a single `rt=` — but you MUST exclude any `bcc:` recipient (§8.6), since the multi-recipient `rt=` is visible to every recipient of that copy. In `validate_data_spool_each_rcpt` (recommended), each cowref auto-populates correctly and is BCC-safe. Accepts a string or a Lua table of bare addresses. |
| `bridge_mailfrom` | no | The `mf=` for an auto-generated **fabricated** bridging signature when the new `mf=` domain does not relaxed-domain-match (§9.4, domain-only) any address in the previous signature's `rt=` (§9.2). Required when the prior `rt=` has multiple entries; inferred automatically when it has exactly one. |
| `bridge_flags` | no | Flag tokens (same format as `flags`) to set on the auto-generated bridge signature only. The primary signature is unaffected. A non-table value always returns an error regardless of whether a bridge fires. A valid table value (or nil) is silently ignored when no bridge is generated — either because `on_chain_break` is not `"bridge"`/`"nd"`, or because no chain break is detected. Example: `bridge_flags={"donotmodify"}` to prevent further modifications after the bridge hop. |
| `on_chain_break` | no | Action when a §9.2 chain break is detected: `"bridge"` (fabricated `mf=`/`rt=` bridge; default when `bridge_mailfrom` set), `"nd"` (emit an `nd=` "imaginary hop" bridge — §8.7/§9.3), `"skip"` (default otherwise), `"warn"`, or `"error"`. See the Forwarder signing section for details. |
| `bridge_domain`, `bridge_selector`, `bridge_keyfile`, `bridge_keybuf` | no | Signing identity for an `nd=` bridge (`on_chain_break="nd"`). `bridge_domain` MUST be a domain present in the prior `rt=` (per §9.3 the bridge is signed by a domain that actually received the message); the key (`bridge_keyfile`/`bridge_keybuf`) is for that domain. `bridge_selector` defaults to the primary `selector` if omitted. |
| `next_domain` | no | Low-level `nd=` passthrough (§8.7): emit **this** signature as an `nd=` bridge carrying `nd=<next_domain>` and **no** `mf=`/`rt=`. The call's `domain`/`selector`/key must belong to a domain in the prior `rt=`, and `next_domain` MUST equal the `d=` of the next signature in the chain. Chain-break detection is skipped for such a call. Prefer `on_chain_break="nd"` for the common auto-bridge case. |
| `on_donotmodify` | no | Action when any prior `DKIM2-Signature` on the message carries `f=donotmodify` (§8.10 / §11.8). The check is unconditional — it does not detect whether content was actually modified. Values: `"error"` (default — refuse to sign), `"warn"` (proceed; caller is responsible for logging/auditing), `"skip"` (return `(true, nil, {donotmodify=true})` without signing — no headers added to the message), `"ignore"` (proceed silently). |
| `timestamp` | no | `t=` value. Defaults to the current UNIX time. |
| `nonce` | no | `n=` value (`-03` §8.3). Caller-supplied ASCII string, ≤ 64 chars, no `;`. Typically a DSN-correlation key or replay-cache key. |
| `nonce_random` | no | If `true` AND `nonce` is not set, the signer fills `n=` with a 22-character base64 random nonce. Inherited by auto-bridge signatures so every signature in the chain gets its own fresh nonce. |
| `flags` | no | Lua **array** (table) of flag tokens for `f=` (`-03` §8.10): `"exploded"`, `"donotexplode"`, `"donotmodify"`, `"feedback"`, `"feedhere"`. `"feedhere"` (spec-03 §8.10) means this Signer requests that any feedback about how this message is handled during delivery and thereafter is relayed via this hop. A plain string is not accepted — pass a one-element array, e.g. `flags = {"donotmodify"}`. See §8.10 for semantics. Joined into the on-wire comma-separated form by the glue layer. When `rt=` carries multiple recipients, `"exploded"` is added automatically unless already present. **Note:** the auto-`exploded` heuristic is based solely on recipient count — it triggers when `rt=` contains more than one address. Mailing lists with a single subscriber will not have `"exploded"` added automatically; pass `flags = {"exploded"}` explicitly in that case. |
| `recipe` | no | Raw JSON string conforming to `-03` §5. Attached to the `Message-Instance` header as the base64-encoded `r=` tag. Validated against the schema at sign time; malformed recipes fail the sign call with `recipe_invalid: <reason>`. |
| `mi_hash_algorithms` | no | Lua array of hash algorithms for the `Message-Instance` `h=` body and header hashes (§6). Default `{"sha256"}`. Multiple algorithms produce comma-separated entries in `h=`, e.g. `{"sha256","sha512"}` → `h=sha256:HH:BH,sha512:HH:BH`. A plain string `mi_hash_algorithm="sha512"` is also accepted as a single-algorithm alias. The verifier automatically detects and uses whatever algorithm is present in the received MI `h=` tag. |
| `relax_d_mf_check` | no | §9.4 / §11.4 expect `d=` to relaxed-domain-match the `mf=` (MAIL FROM) domain; a §11.4 verifier reports PERMERROR on a mismatch. Default `false` — `sign()` refuses to emit a non-aligned signature and returns an error. **Setting to `true` is non-spec-compliant**; it downgrades the check to a `DWARNING` and proceeds. Recommended only for testing or debugging cross-domain signing configurations. |
| `allow_missing_recipe` | no | If `true`, permit signing when content has changed since the prior `Message-Instance` but no `recipe` is supplied (§8.1 SHOULD). Default `false` (strict — sign call fails). When set, signing succeeds but the downstream §10.2 chain-walk cannot complete for this hop (no recipe to reconstruct prior state) and will produce `permerror`/`chain_broken` at verifiers. Use only when you accept that chain auditability is broken for this hop. |

`sign()` return values:

- `(true, header_value_string)` — success; the `DKIM2-Signature` value was added.
- `(true, header_value_string, info)` — success with chain-break info; `info.chain_break=true`, `info.bridged=true/false`. Returned when `on_chain_break="warn"` fires or a bridge was auto-generated.
- `(true, nil, {donotmodify=true})` — when `on_donotmodify="skip"`: no signature was added, no `DKIM2-Signature` or `Message-Instance` header was written.
- `(true, nil, {chain_break=true, bridged=false})` — when `on_chain_break="skip"`: signing skipped due to chain break.
- `(nil, error_string)` — failure; the message is left unmodified.

Always check the first return value. On `nil`, no headers were modified. Recipe validation failure and content-changed-without-recipe also log to paniclog at level `error`.

### Forwarder and modifier signing

The chain-of-custody link between adjacent signatures is a **relaxed,
domain-only** match (§9.4): a hop's `mf=` links to the previous `rt=` when its
*domain* relaxed-matches a prior `rt=` domain (local part ignored, labels
stripped from the left of the MAIL FROM domain). A forwarder breaks the chain
only when its outgoing MAIL FROM is at a **domain** that matches no prior `rt=`
domain. A same-domain re-send — even with a different local part, as a
single-domain mailing list does (`list@example.com` received,
`bounce@example.com` sent) — is **not** a break and needs **no** bridge.

A genuine **domain change** does break the chain, and §9.2 requires a bridging
`DKIM2-Signature` before the primary. Momentum automates the **fabricated**
bridge: supply `bridge_mailfrom` with the address this hop received at, and
`sign()` prepends a bridge whose `mf=` is that address and whose `rt=` is the
new outgoing MAIL FROM. The fabricated bridge signs both the bridge and the
primary with the call's `domain`, so it fits domain *shifts within one
parent* (sibling subdomains); for a cross-organisation domain change prefer the
`nd=` bridge below (it signs the bridge with the prior-`rt=` domain's own key).

```lua
-- Subdomain-shift forward (received at in.relay.example, sent from
-- out.relay.example — sibling subdomains of relay.example):
--   i=1 (originator):  mf=alice@sender.com          rt=fwd@in.relay.example
--   i=2 (auto-bridge): mf=fwd@in.relay.example      rt=bounce@out.relay.example
--   i=3 (primary):     mf=bounce@out.relay.example  rt=subscriber@recipient.com
local ok, val, info = msys.validate.dkim2.sign(msg, vctx, {
  domain          = "relay.example",  -- relaxed-matches both in. and out. subdomains
  selector        = "relay-2026",
  keyfile         = "/etc/dkim2/relay.example/relay-2026.key",
  mailfrom        = "bounce@out.relay.example",
  rcptto          = "subscriber@recipient.com",
  bridge_mailfrom = "fwd@in.relay.example",  -- the address this hop received at
  -- on_chain_break defaults to "bridge" since bridge_mailfrom is provided
})
if not ok then
  -- sign() failed (key error, bridge error, etc.)
  vctx:set_code(550, "5.7.1 DKIM2 signing failed: " .. tostring(val))
  return msys.core.VALIDATE_DONE
end
-- info.chain_break=true, info.bridged=true when bridge was auto-generated
```

When the forwarding address is unambiguous (prior `rt=` has a single entry),
`bridge_mailfrom` can be omitted — Momentum infers it automatically. When the
prior `rt=` has multiple entries, `bridge_mailfrom` is required to identify
which entry this hop received at.

#### `nd=` "imaginary hop" bridge (spec-03 §8.7 / §9.3)

Spec-03 added an alternative to the fabricated bridge above: the `nd=`
("next domain") tag. Instead of inventing `mf=`/`rt=` values for the imaginary
transfer, the bridge signature carries `nd=<next signing domain>` and **omits**
`mf=`/`rt=` entirely; a verifier checks that `nd=` exactly matches the `d=` of
the next signature in the chain. Per §9.3 the bridge MUST be signed by a domain
that actually received the message — i.e. a domain present in the prior `rt=` —
so the bridge uses a **different signing identity** from the forwarder's own.

Momentum both **emits** `nd=` (`on_chain_break="nd"`, or the low-level
`next_domain` passthrough) and **verifies** it. To auto-generate an `nd=`
bridge on chain break:

```lua
-- Cross-domain mailing list: received at list@mailing-list.com, re-sent from a
-- different outbound domain (relay.example) — a real domain change, bridged via
-- nd= signed by the receiving domain (mailing-list.com, present in the prior rt=):
--   i=1 (originator):  d=sender.com        mf=alice@sender.com      rt=list@mailing-list.com
--   i=2 (nd= bridge):  d=mailing-list.com  nd=relay.example         (no mf=/rt=)
--   i=3 (primary):     d=relay.example     mf=bounce@relay.example  rt=subscriber@recipient.com
local ok, val, info = msys.validate.dkim2.sign(msg, vctx, {
  domain          = "relay.example",
  selector        = "relay-2026",
  keyfile         = "/etc/dkim2/relay.example/relay-2026.key",
  mailfrom        = "bounce@relay.example",
  rcptto          = "subscriber@recipient.com",
  on_chain_break  = "nd",
  -- bridge identity: a domain in the prior rt= (the list received at
  -- list@mailing-list.com, so the bridge is signed by mailing-list.com):
  bridge_domain   = "mailing-list.com",
  bridge_selector = "list-2026",
  bridge_keyfile  = "/etc/dkim2/mailing-list.com/list-2026.key",
})
-- info.chain_break=true, info.bridged=true, info.nd=true when an nd= bridge was added
```

The `on_chain_break` option controls what happens when a chain break is
detected but cannot be bridged:

| `on_chain_break` | Behavior | Third return value |
|---|---|---|
| `"bridge"` (default with `bridge_mailfrom`) | Fabricated `mf=`/`rt=` bridge; error if ambiguous | `{chain_break=true, bridged=true}` |
| `"nd"` | `nd=` bridge; requires `bridge_domain` + key | `{chain_break=true, bridged=true, nd=true}` |
| `"skip"` (default without `bridge_mailfrom`) | Skip signing | `{chain_break=true, bridged=false}` |
| `"warn"` | Sign without bridge | `{chain_break=true, bridged=false}` |
| `"error"` | Return `(nil, errmsg)` | — |

The third return value gives policy full control: inspect `info.chain_break`
and `info.bridged` to decide whether to accept, reject, or log — regardless
of which `on_chain_break` value was used.

A forwarder that does not change the MAIL FROM (pure relay) signs with
the envelope values directly — no bridge needed since the chain is intact:

A modifier that **rewrites** the message (Subject change, body footer,
attachment strip, etc.) additionally attaches a `recipe`:

```lua
-- Forwarder rewrote Subject; recipe restores the original on
-- reverse-apply.
local ok, err = msys.validate.dkim2.sign(msg, vctx, {
  domain   = "list.example.org",
  selector = "list-2026",
  keyfile  = "/etc/dkim2/list.example.org/list-2026.key",
  recipe   = [[{"h":{"Subject":[{"d":["Original subject"]}]}}]],
})
if not ok then
  msys.log(msys.core.LOG_WARNING, "dkim2 modifier sign failed: " .. (err or "unknown"))
end
```

The recipe schema is documented in `-03` §5. Recipes are mandatory only
when the hop modifies content; non-modifying hops (pure-forwarding without
edits) omit `recipe` entirely.

When `on_chain_break="bridge"` is used and the message was modified,
supply `recipe` on the outer `sign()` call — Momentum forwards it
automatically to the auto-generated bridge signature. The bridge needs
the recipe to document the content change in its `Message-Instance`
header so the §10.2 chain walk can reconstruct the original state.

**Note**: auto-bridge signatures do not inherit `flags`. Use `bridge_flags`
to set flags on the bridge signature independently of the primary. For
example, `bridge_flags={"donotmodify"}` marks the bridge hop as
non-modifiable while leaving the primary signature's `flags` unchanged.

`nonce_random` is inherited by the bridge so that when it is set, each
signature gets its own fresh nonce. An explicit `nonce=` value is NOT
inherited — the bridge's `n=` tag is absent (unless `nonce_random` was
set) to avoid two signatures sharing the same nonce value, which would
defeat anti-replay protection.
