---
lastUpdated: "06/09/2026"
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
and whether BCC addresses are exposed.

| | `validate_data_spool` | `validate_data_spool_each_rcpt` |
|---|---|---|
| **Fires** | Once on the shared parent message | Once per recipient (cowref) |
| **`rt=` auto-populate** | Primary recipient only (`msg:rcptto()`) — extra recipients are inaccessible in this hook | Single cowref recipient |
| **Multi-recipient rt=** | Must pass explicit `rcptto = {r1, r2, ...}` — collect the full list in an earlier hook (e.g. `validate_rcptto`) | Each cowref signs for its own single address automatically |
| **BCC privacy** | ⚠️ Operator must exclude BCC from the explicit `rcptto` list — a shared signature exposing a BCC address is visible to all recipients | ✅ No concern — each cowref is private to that recipient; `rt=` is bound to their address only |
| **Complexity** | Requires explicit recipient collection for multi-recipient | One `sign()` call per cowref; correct by default |

Use `validate_data_spool_each_rcpt` for most deployments — it handles
per-recipient signing automatically. Use `validate_data_spool`
only when you need a single signature covering all recipients and are willing
to manage the recipient list and BCC exclusion yourself.

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
    print("dkim2 sign failed: " .. tostring(err))
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
form using an explicit `sig_sets` key (§7.8 algorithm agility):

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
value on one `DKIM2-Signature` header.  Per §7.2 the verifier checks
every sig-set; overall passes if any one validates, so a receiver that
only supports RSA will still verify cleanly.  On the verifier side, any
sig-set that fails alongside a passing one is reported as a DWARNING in
paniclog (partial-sig-failure condition, §7.2).  The `selector`, `keyfile`, and
`algorithm` fields belong to each sig-set entry; all other options below
are header-level and go at the top level of the options table.

| Option | Required? | Meaning |
|---|---|---|
| `domain` | yes | `d=` tag — the signing domain. |
| `selector` | yes (single) | Selector component of `s=<selector>:<alg>:<base64-sig>`. When `sig_sets` is used, set per entry inside `sig_sets` instead. |
| `keyfile` | yes (single) | Path to the PEM-encoded private key on disk. Mutually exclusive with `keybuf`; one of the two is required. When `sig_sets` is used, set per entry inside `sig_sets` instead. |
| `keybuf` | yes (single) | PEM-encoded private key as a string in memory. Alternative to `keyfile` for cases where the key is held in a secrets manager or generated at runtime. |
| `algorithm` | no | `"rsa-sha256"` (default) or `"ed25519-sha256"`. When `sig_sets` is used, set per entry inside `sig_sets` instead. |
| `sig_sets` | no | Array of `{selector, keyfile, keybuf, algorithm}` tables for multi-algorithm signing (§7.8). When present, fields supplied in `sig_sets[1]` override the corresponding top-level fields; any field omitted from `sig_sets[1]` falls back to the top-level value. |
| `mailfrom` | no | **Normally omitted** — Momentum reads the live envelope MAIL FROM automatically. Two production exceptions: (1) null-sender DSN/bounce messages where `mailfrom=""` is required since the envelope API returns nil for `MAIL FROM:<>`; (2) testing/simulation of specific envelope conditions without real SMTP transit. |
| `rcptto` | no | **Normally omitted** — Momentum auto-populates from the active envelope recipient. One production exception: in `validate_data_spool` (shared hook), pass the full recipient list explicitly to cover all recipients in a single `rt=`. In `validate_data_spool_each_rcpt` (recommended), each cowref auto-populates correctly. Accepts a string or a Lua table of bare addresses. |
| `bridge_mailfrom` | no | The `mf=` for an auto-generated bridging signature when the new `mf=` is not in the previous signature's `rt=` (§8.2). Required when the prior `rt=` has multiple entries; inferred automatically when it has exactly one. |
| `bridge_flags` | no | Flag tokens (same format as `flags`) to set on the auto-generated bridge signature only. The primary signature is unaffected. A non-table value always returns an error regardless of whether a bridge fires. A valid table value (or nil) is silently ignored when no bridge is generated — either because `on_chain_break` is not `"bridge"`, or because `on_chain_break` is `"bridge"` but no chain break is detected. Example: `bridge_flags={"donotmodify"}` to prevent further modifications after the bridge hop. |
| `on_chain_break` | no | Action when a §8.2 chain break is detected: `"bridge"` (default when `bridge_mailfrom` set), `"skip"` (default otherwise), `"warn"`, or `"error"`. See the Forwarder signing section for details. |
| `on_donotmodify` | no | Action when any prior `DKIM2-Signature` on the message carries `f=donotmodify` (§7.9 / §10.8). The check is unconditional — it does not detect whether content was actually modified. Values: `"error"` (default — refuse to sign), `"warn"` (proceed; caller is responsible for logging/auditing), `"skip"` (return `(true, nil, {donotmodify=true})` without signing), `"ignore"` (proceed silently). |
| `timestamp` | no | `t=` value. Defaults to the current UNIX time. |
| `nonce` | no | `n=` value (`-02` §7.3). Caller-supplied ASCII string, ≤ 64 chars, no `;`. Typically a DSN-correlation key or replay-cache key. |
| `nonce_random` | no | If `true` AND `nonce` is not set, the signer fills `n=` with a 22-character base64 random nonce. Inherited by auto-bridge signatures so every signature in the chain gets its own fresh nonce. |
| `flags` | no | Lua array of flag tokens for `f=` (`-02` §7.9): `"exploded"`, `"donotexplode"`, `"donotmodify"`, `"feedback"`. See §7.9 for semantics. Joined into the on-wire comma-separated form by the glue layer. When `rt=` carries multiple recipients, `"exploded"` is added automatically unless already present. **Note:** the auto-`exploded` heuristic is based solely on recipient count — it triggers when `rt=` contains more than one address. Mailing lists with a single subscriber will not have `"exploded"` added automatically; pass `flags = {"exploded"}` explicitly in that case. |
| `recipe` | no | Raw JSON string conforming to `-02` §4. Attached to the `Message-Instance` header as the base64-encoded `r=` tag. Validated against the schema at sign time; malformed recipes fail the sign call with `recipe_invalid: <reason>`. |
| `mi_hash_algorithms` | no | Lua array of hash algorithms for the `Message-Instance` `h=` body and header hashes (§5). Default `{"sha256"}`. Multiple algorithms produce comma-separated entries in `h=`, e.g. `{"sha256","sha512"}` → `h=sha256:HH:BH,sha512:HH:BH`. A plain string `mi_hash_algorithm="sha512"` is also accepted as a single-algorithm alias. The verifier automatically detects and uses whatever algorithm is present in the received MI `h=` tag. |
| `relax_d_mf_check` | no | §7.7 requires `d=` to match the rightmost labels of the `mf=` (MAIL FROM) domain. Default `false` (spec-compliant — `sign()` returns an error on mismatch). **Setting to `true` is non-spec-compliant**; it downgrades the check to a `DWARNING` and proceeds. Recommended only for testing or debugging cross-domain signing configurations. |
| `allow_recipe_z` | no | If `true`, accept the `b: {"z": true}` (truncated-body) recipe at sign time. Default `false`. The `-02` spec is internally inconsistent on this recipe shape — the changelog removes it but §11.1 still references it — so the signer refuses to emit it without an explicit opt-in. Set this only if you are interoperating with a verifier that requires the truncated-body recipe and you accept that the shape may be removed from the final spec. |

`sign()` returns `(true, header_value_string)` on success and `(nil,
error_string)` on failure. Always check the return; on failure the message
is left unmodified (no `DKIM2-Signature:` or `Message-Instance:` is
attached). Recipe validation failure and content-changed-without-recipe
also log to paniclog at level `error`; most other failure paths return
only the error string to the caller without logging.

### Forwarder and modifier signing

When a forwarder changes the envelope MAIL FROM to an address not present
in the previous signature's `rt=` list, §8.2 requires an extra bridging
`DKIM2-Signature` before the primary — one whose `mf=` matches the previous
`rt=` and whose own `rt=` contains the new outgoing MAIL FROM. Momentum
automates this: supply `bridge_mailfrom` with the address this hop received
the message at, and `sign()` detects the chain break and prepends the bridge
automatically.

The most common case is a **mailing list**: the original sender's signature
has `rt=list@mailing-list.com`; the list re-sends with
`MAIL FROM: bounce@mailing-list.com`, which is not in the prior `rt=` —
a chain break that requires a bridge:

```lua
-- Mailing list scenario:
--   i=1 (originator):  mf=alice@sender.com        rt=list@mailing-list.com
--   i=2 (auto-bridge): mf=list@mailing-list.com   rt=bounce@mailing-list.com
--   i=3 (primary):     mf=bounce@mailing-list.com rt=subscriber@recipient.com
local ok, val, info = msys.validate.dkim2.sign(msg, vctx, {
  domain          = "mailing-list.com",
  selector        = "list-2026",
  keyfile         = "/etc/dkim2/mailing-list.com/list-2026.key",
  mailfrom        = "bounce@mailing-list.com",
  rcptto          = "subscriber@recipient.com",
  bridge_mailfrom = "list@mailing-list.com",  -- the address the list received at
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

The `on_chain_break` option controls what happens when a chain break is
detected but cannot be bridged:

| `on_chain_break` | Behavior | Third return value |
|---|---|---|
| `"bridge"` (default with `bridge_mailfrom`) | Auto-bridge; error if ambiguous | `{chain_break=true, bridged=true}` |
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
msys.validate.dkim2.sign(msg, vctx, {
  domain   = "list.example.org",
  selector = "list-2026",
  keyfile  = "/etc/dkim2/list.example.org/list-2026.key",
  recipe   = [[{"h":{"Subject":[{"d":["Original subject"]}]}}]],
})
```

The recipe schema is documented in `-02` §4. Recipes are mandatory only
when the hop modifies content; non-modifying hops (pure-forwarding without
edits) omit `recipe` entirely.

When `on_chain_break="bridge"` is used and the message was modified,
supply `recipe` (and `allow_recipe_z` if needed) on the outer `sign()`
call — Momentum forwards them automatically to the auto-generated bridge
signature. The bridge needs the recipe to document the content change in
its `Message-Instance` header so the §10.6 chain walk can reconstruct the
original state.

**Note**: auto-bridge signatures do not inherit `flags`. Use `bridge_flags`
to set flags on the bridge signature independently of the primary. For
example, `bridge_flags={"donotmodify"}` marks the bridge hop as
non-modifiable while leaving the primary signature's `flags` unchanged.

`nonce_random` is inherited by the bridge so that when it is set, each
signature gets its own fresh nonce. An explicit `nonce=` value is NOT
inherited — the bridge's `n=` tag is absent (unless `nonce_random` was
set) to avoid two signatures sharing the same nonce value, which would
defeat anti-replay protection.
