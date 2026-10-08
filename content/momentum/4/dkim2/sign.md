---
lastUpdated: "10/03/2026"
title: "DKIM2 Signing — sign()"
description: "Reference for the msys.validate.dkim2.sign() Lua API: hook selection, sign options, forwarder and modifier signing."
---

## DKIM2 Signing

DKIM2 signing in Momentum is driven from Lua policy via
`msys.validate.dkim2.sign`; enabling DKIM2 signing means calling `sign()` from
your validation hook.

### Signing hook

Call `sign()` from **`core_final_validation2`** — the recommended hook for DKIM2
signing. It fires **once per recipient** (per cowref on the SMTP/relay swap-out
path; once per generated message on the HTTP/`msg_gen` transmissions path, where
each recipient is already generated as its own message), so `rt=` auto-populates
to a single address and the signature is **BCC-safe by construction**. Crucially
it fires on **every injection path** — SMTP *and* HTTP/transmissions — unlike the
`validate_data_spool*` hooks (see the warning below).

`core_final_validation2` returns a status: return `msys.core.EC_HOOK_CONT` to
continue — including after a signing failure you choose to tolerate, in which
case the message is delivered unsigned — or `EC_HOOK_DONE` / `EC_HOOK_RETRY` to
reject or defer the message on a signing error. See the
[final_validation / final_validation2](/momentum/3/3-api/hooks-core-final-validation)
hook reference.

> **⚠️ The `validate_data_spool*` hooks do not fire on transmissions.**
> `validate_data_spool` and `validate_data_spool_each_rcpt` are driven only by
> the SMTP swap-out engine. They fire on SMTP/relay injection but **never on the
> HTTP/`msg_gen` (transmissions) path** — a signer registered on them leaves
> transmission-injected messages **unsigned**. Use `core_final_validation2`
> unless you are certain all traffic is SMTP-injected.

The three hooks compared:

| | `core_final_validation2` (recommended) | `validate_data_spool_each_rcpt` | `validate_data_spool` |
|---|---|---|---|
| **Injection paths** | SMTP **and** HTTP/transmissions | SMTP only | SMTP only |
| **Fires** | Once per recipient | Once per recipient (cowref) | Once on the shared parent message |
| **`rt=` auto-populate** | Single recipient | Single cowref recipient | Primary recipient only (`msg:rcptto()`) — extra recipients inaccessible |
| **Multi-recipient `rt=`** | Each recipient signs for its own address automatically | Each cowref signs for its own single address automatically | Must pass explicit `rcptto = {r1, r2, ...}` — collect the full list in an earlier hook (e.g. `validate_rcptto`) |
| **BCC privacy (§8.6)** | ✅ Satisfied by construction | ✅ Satisfied by construction | ⚠️ Operator MUST exclude BCC from the explicit `rcptto` list |
| **Return** | `EC_HOOK_CONT` / `EC_HOOK_DONE` / `EC_HOOK_RETRY` | `VALIDATE_CONT` / `VALIDATE_DONE` / `VALIDATE_AGAIN` | `VALIDATE_CONT` / `VALIDATE_DONE` / `VALIDATE_AGAIN` |

All three hooks return similar statuses so a signer on any of them can let the message
through unsigned (`…CONT`), reject it (`…DONE`), or tempfail it (`…AGAIN`/`…RETRY`)
on a signing error.

Per **§8.6 the signer MUST NOT reveal `bcc:` recipients to any other recipient**
(RFC 5322 §3.6.3): since `rt=` is carried in the `DKIM2-Signature:` header that
every recipient of a copy can read, the `rt=` of a copy delivered to one
recipient must not list another recipient who was blind-copied. The
per-recipient hooks (`core_final_validation2`, `validate_data_spool_each_rcpt`)
satisfy this by construction — each copy's `rt=` is bound to its own single
address. Only `validate_data_spool` puts this obligation on you: Momentum cannot
detect which envelope recipients are blind copies (there is no envelope-level BCC
marker), so when you pass an explicit multi-recipient `rcptto` the §8.6 MUST NOT
is **your** obligation — exclude any BCC address, or fall back to per-recipient
signing / separate copies. Note that this shared single-signature mode is in any
case unavailable on the HTTP/transmissions path, which never presents a shared
multi-recipient message to a signing hook.

### Signing order: DKIM2, DKIM v1, and ARC

When more than one signing scheme is active they run in a fixed order at the
final validation steps, because each later stage must sign or seal over the
output of the earlier ones:

1. **DKIM2** (`core_final_validation2`) runs first.
2. **DKIM v1** / OpenDKIM (`core_final_validation`) runs next — `core_final_validation2`
   is always invoked before `core_final_validation` at this point.
3. **ARC** sealing runs last, in
   [`post_final_validation`](/momentum/4/hooks/core-post-final-validation), so the
   ARC seal covers the completed DKIM2 and DKIM v1 signatures.

### Minimum signer

```lua
require("msys.core")
require("msys.validate.dkim2")

local mod = {}

function mod:core_final_validation2(msg, ac, vctx)
  local ok, err = msys.validate.dkim2.sign(msg, vctx, {
    domain   = "example.com",
    selector = "dkim2048",
    keyfile  = "/opt/msys/ecelerity/etc/conf/dkim/example.com/dkim2048.key",
  })
  if not ok then
    -- err describes the failure.
    msys.log(msys.core.LOG_WARNING, "dkim2 sign failed: " .. (err or "unknown"))
  end
  -- Return EC_HOOK_CONT to continue even on a sign failure (message is
  -- delivered unsigned). Return EC_HOOK_DONE / EC_HOOK_RETRY instead to
  -- reject / defer the message when signing must not be skipped.
  return msys.core.EC_HOOK_CONT
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
signed-input and are combined into a single
`s=sel1:alg1:sig1,sel2:alg2:sig2` value on one `DKIM2-Signature`
header.  Per §11.6 the verifier checks
every sig-set. A signature passes when at least one of its sig-sets
verifies and none fails to verify: a sig-set whose signature does not verify
makes the verdict `fail` with reason `sig_partial`, and a sig-set whose key
is missing or cannot be read is set aside.

**If any sig-set fails**, the entire `sign()` call returns
`(nil, error_string)` — no partial signature is produced.

The `selector`, `keyfile`, and `algorithm` fields belong to each sig-set
entry; all other options below are header-level and go at the top level
of the options table.

| Option | Required? | Meaning |
|---|---|---|
| `domain` | yes | `d=` tag — the signing domain. |
| `selector` | yes (single) | Selector component of `s=<selector>:<alg>:<base64-sig>`. When `sig_sets` is used, set per entry inside `sig_sets` instead. |
| `keyfile` | yes (single) | Path to the PEM-encoded private key on disk. One of `keyfile` and `keybuf` is required; when both are set, `keybuf` is used. When `sig_sets` is used, set per entry inside `sig_sets` instead. |
| `keybuf` | yes (single) | PEM-encoded private key as a string in memory. Alternative to `keyfile` for cases where the key is held in a secrets manager or generated at runtime. When `sig_sets` is used, set per entry inside `sig_sets` instead. |
| `algorithm` | no | `"rsa-sha256"` (default) or `"ed25519-sha256"`. When `sig_sets` is used, set per entry inside `sig_sets` instead. |
| `sig_sets` | no | Array of `{selector, keyfile, keybuf, algorithm}` tables for multi-algorithm signing (§8.9). When `sig_sets` is used, `selector`/`keyfile`/`keybuf`/`algorithm` are set per entry inside `sig_sets` — do not set them at the top level. All other options (`domain`, `mailfrom`, `rcptto`, `flags`, `recipe`, etc.) remain at the top level and apply to all entries. At most two entries may use the same algorithm (§8.9); a third fails the sign call. |
| `mailfrom` | no | **Normally omitted** — Momentum reads the envelope MAIL FROM, including the null sender `<>` of a DSN or bounce. Pass `mailfrom=""` to sign as the null sender whatever the envelope says, or an address to sign with a MAIL FROM other than the envelope's. An address may be given bare (`user@example.com`) or envelope-decorated (`<user@example.com>`, `MAIL FROM:<user@example.com>`, or `msg:mailfrom()`); it is normalized to the bare address before being written into `mf=`, the same as `rcptto`. |
| `rcptto` | no | **Normally omitted** — Momentum auto-populates from the active envelope recipient. In the recommended `core_final_validation2` hook (and in `validate_data_spool_each_rcpt`), each recipient/cowref auto-populates correctly and is BCC-safe. One exception applies only to the shared `validate_data_spool` hook: pass the full recipient list explicitly to cover all recipients in a single `rt=` — but you MUST exclude any `bcc:` recipient (§8.6), since the multi-recipient `rt=` is visible to every recipient of that copy. Accepts a string or a Lua table of bare addresses. A string may hold one address or several separated by commas. |
| `bridge_mailfrom` | no | The `mf=` for an auto-generated **fabricated** bridging signature when the new `mf=` domain does not relaxed-domain-match (§9.4, domain-only) any address in the previous signature's `rt=` (§9.2). Required when the prior `rt=` has multiple entries; inferred automatically when it has exactly one. |
| `bridge_flags` | no | Flag tokens (same format as `flags`) to set on the auto-generated bridge signature only. The primary signature is unaffected. A value that is not a table, or an entry that is not a string or number, always returns an error regardless of whether a bridge fires. A valid table value (or nil) is silently ignored when no bridge is generated — either because `on_chain_break` is not `"bridge"`/`"nd"`, or because no chain break is detected. Example: `bridge_flags={"donotmodify"}` to prevent further modifications after the bridge hop. |
| `on_chain_break` | no | Action when signing would break the chain of custody (§9.4): the new `mf=` domain links to no prior `rt=`, `mf=` is `<>` after a signature with `rt=`, or the previous signature's `nd=` is not a domain or not this one. Values: `"bridge"` (fabricated `mf=`/`rt=` bridge; default when `bridge_mailfrom` is set; mends only an unlinked `mf=` domain), `"nd"` (emit an `nd=` "imaginary hop" bridge — §8.7/§9.3), `"skip"` (default otherwise), `"warn"`, or `"error"`. See the Forwarder signing section for details. |
| `bridge_domain`, `bridge_selector`, `bridge_keyfile`, `bridge_keybuf` | no | Signing identity for an `nd=` bridge (`on_chain_break="nd"`). `bridge_domain` is a domain that received the message (§9.3): a prior `rt=` domain must be `bridge_domain` or a parent of it, or the previous `nd=` must name it. The key (`bridge_keyfile`/`bridge_keybuf`) is for that domain. `bridge_selector` defaults to the primary `selector` if omitted. |
| `next_domain` | no | Low-level `nd=` passthrough (§8.7): emit **this** signature as an `nd=` bridge carrying `nd=<next_domain>` and **no** `mf=`/`rt=`. The call's `domain`/`selector`/key must belong to a domain in the prior `rt=`, and `next_domain` MUST equal the `d=` of the next signature in the chain. A chain break is an error for such a call, whatever `on_chain_break` says. Prefer `on_chain_break="nd"` for the common auto-bridge case. |
| `on_donotmodify` | no | Action when any prior `DKIM2-Signature` on the message carries `f=donotmodify` (§8.10 / §11.8). The check is unconditional — it does not detect whether content was actually modified. Values: `"error"` (default — refuse to sign), `"warn"` (sign over the request; caller is responsible for logging/auditing), `"skip"` (return `(true, nil, {donotmodify=true})` without signing — no headers added to the message), `"ignore"` (sign over the request silently). With `"warn"` and `"ignore"` the other checks are still made: the chain of custody (see `on_chain_break`), gaps in `i=` or `m=`, and prior fields that cannot be read. |
| `timestamp` | no | `t=` value, a whole number of seconds that is not negative. `0` or absent means the current UNIX time. |
| `nonce` | no | `n=` value (`-06` §8.3). Caller-supplied string of at most 64 printable ASCII characters, without spaces or `;`. Typically a DSN-correlation key or replay-cache key. |
| `nonce_random` | no | If `true` AND `nonce` is not set, the signer fills `n=` with a 22-character base64 random nonce. Inherited by auto-bridge signatures so every signature in the chain gets its own fresh nonce. |
| `flags` | no | Lua **array** (table) of flag tokens for `f=` (§8.10): `"exploded"`, `"donotexplode"`, `"donotmodify"`, `"feedback"`, `"feedhere"`. Each flag must be a word; anything else fails the sign call. `"feedhere"` means this Signer requests that any feedback about how this message is handled during delivery and thereafter is relayed via this hop. A plain string is not accepted — pass a one-element array, e.g. `flags = {"donotmodify"}`. See §8.10 for semantics. When `rt=` carries multiple recipients, `"exploded"` is added automatically unless already present. **Note:** the auto-`exploded` heuristic is based solely on recipient count — it triggers when `rt=` contains more than one address. Mailing lists with a single subscriber will not have `"exploded"` added automatically; pass `flags = {"exploded"}` explicitly in that case. |
| `recipe` | no | Raw JSON string conforming to `-06` §5. Attached to the `Message-Instance` header as the base64-encoded `r=` tag. Validated against the schema at sign time; a recipe that is not JSON or does not follow the schema fails the sign call, with an error naming the problem. For header-field keys that are not lower case, see `on_recipe_key_case`. |
| `mi_hash_algorithms` | no | Lua array of hash algorithms for the `Message-Instance` `h=` body and header hashes (§6). Default `{"sha256"}`. Multiple algorithms produce comma-separated entries in `h=`, always `sha256` first and then `sha512`, whatever the order of the list: `{"sha512","sha256"}` → `h=sha256:HH:BH,sha512:HH:BH`. A plain string `mi_hash_algorithm="sha512"` is also accepted as a single-algorithm alias. For an unsupported or repeated algorithm, see `on_bad_hash_algorithm`. |
| `relax_d_mf_check` | no | §8.8 / §11.4 expect the `mf=` (MAIL FROM) domain to lie within `d=`; a §11.4 verifier reports PERMERROR on a mismatch. Default `false` — `sign()` refuses to emit a non-aligned signature and returns an error. **Setting to `true` is non-spec-compliant**; it signs the non-aligned signature. Recommended only for testing or debugging cross-domain signing configurations. |
| `require_recipe` | no | What to do when the message has changed since the highest `Message-Instance` and no `recipe` is supplied (§8.1 SHOULD). Default `false`: `sign()` adds a `Message-Instance` with the recipe `{"b":null}` (§5.2), which declares the earlier body unrecoverable. Header fields that changed still fail the header hash of the instances below, so supply a `recipe` for them. `true` makes `sign()` return an error. |
| `on_recipe_key_case` | no | What to do with a `recipe` whose header-field keys are not lower case (§5.1): `"error"` (default) fails the sign call; `"lowercase"` signs the recipe as written, with only its header-field keys lower-cased. |
| `on_bad_hash_algorithm` | no | What to do when `mi_hash_algorithms` names something other than `sha256` or `sha512`, or names one twice (§7.3): `"error"` (default) fails the sign call; `"drop"` signs with the valid algorithms, each once, and fails only if none is left. |

`sign()` return values:

- `(true, header_value_string)` — success; the `DKIM2-Signature` value was added.
- `(true, header_value_string, info)` — success with chain-break info; `info.chain_break=true`, `info.bridged=true/false`. Returned when `on_chain_break="warn"` fires or a bridge was auto-generated.
- `(true, nil, {donotmodify=true})` — when `on_donotmodify="skip"`: no signature was added, no `DKIM2-Signature` or `Message-Instance` header was written.
- `(true, nil, {chain_break=true, bridged=false})` — when `on_chain_break="skip"`: signing skipped due to chain break.
- `(nil, error_string)` — failure; the message is left unmodified. A bridge added for `on_chain_break` is removed again when the signature after it fails.
- `(nil, error_string, refusal)` — failure because `sign()` refused to sign the message. `refusal` is a table:
  - `refused`: the reason, one of `too_large`, `sig_unreadable`, `donotmodify`, `mi_unreadable`, `seq_gap`, `seq_limit`, `bad_header`, `chain` or `bad_rcpt`.
  - `chain_break`: set only when `refused` is `chain`; it names the break (`null_sender`, `mf_unrelated`, `nd_mismatch`, `mf_d_mismatch`, `bad_nd` or `no_mf_domain`).
  - `i`: the `i=` of the signature the refusal names, absent when it names none.

  When a bridge signature failed, the refusal is the bridge's. Other failures, such as a bad option, return only the error string.

Always check the first return value.

### Publishing the public key

Publish one TXT record per sig-set. A verifier does one lookup per
sig-set, at `<selector>._domainkey.<domain>` — the selector from that
sig-set's entry in `s=`, the domain from the signature's `d=` — and
reads the public key from the record's `p=` tag. A multi-algorithm
`DKIM2-Signature` therefore needs one record per selector it names.
DKIM2 reuses a subset of the DKIM v1 key-record format (RFC 6376
§3.6.1), so the record's `v=` stays `DKIM1` — for compatibility with
existing key deployment (draft-chuang-dkim2-dns-04 §3.4.1). The
`DKIM2-Signature` header carries no version tag of its own; the
generation is identified by the field name
(draft-ietf-dkim-dkim2-spec-06 §8).

**The `p=` encoding is not the same for both algorithms.** Publish the
form shown below for each. For `k=ed25519` that form is exactly what
the specs require; for `k=rsa` it is deployed practice rather than the
RFC's normative text, as explained below.

For `rsa-sha256`, `p=` is the base64 of a SubjectPublicKeyInfo — the
body of the PEM with the `-----BEGIN/END-----` lines and all whitespace
removed. (RFC 6376 §3.6.1, and draft-chuang-dkim2-dns-04 §3.4.1 to the
same effect, call for a bare `RSAPublicKey` instead — but RFC
6376's own Appendix C recipe emits a SubjectPublicKeyInfo, and so does
every deployed signer; errata 6674 and 7001 record the discrepancy in
RFC 6376. Publish the SPKI form below.)

```bash
openssl rsa -in /etc/dkim2/rsa.key -pubout | sed '/-----/d' | tr -d '\n'
```

```
sel-rsa._domainkey.example.com. IN TXT (
  "v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA..."
  "...the rest of the base64, continued in as many further quoted"
  "...strings as it takes, none exceeding 255 octets..." )
```

A DNS character-string holds at most 255 octets (RFC 1035 §3.3), and
an RSA `p=` easily runs past that on its own — 392 base64 characters
plus the `v=DKIM1; k=rsa; p=` prefix is 410 octets at 2048 bits, more
at larger key sizes — so it must be split across as many adjacent
quoted strings as needed, none over the limit. Verifiers concatenate
them, Momentum included. Ed25519 records never need this — 44
characters fit in one string.

For `ed25519-sha256`, `p=` is the base64 of the **bare 32-byte public
key** — no ASN.1 wrapper of any kind, so always 44 characters. This
comes from draft-chuang-dkim2-dns-04 §3.4.1, which
draft-ietf-dkim-dkim2-spec-06 §3.6 defers to for the key-record format,
and identically from RFC 8463 §4.2.

`openssl` has no output format for the bare key — `-outform` is
PEM or DER only — but an Ed25519 SubjectPublicKeyInfo is a fixed
12-byte prefix followed by the key, so the last 32 bytes of the DER
form are exactly it:

```bash
openssl pkey -in /etc/dkim2/ed25519.key -pubout -outform DER | tail -c 32 | base64
```

```
sel-ed25519._domainkey.example.com. IN TXT (
  "v=DKIM1; k=ed25519; p=11qYAYKxCrfVS/7TyWQHOg7hcvPapiMlrwIaaPcHURo=" )
```

An empty `p=` signals deliberate key revocation.

#### Upgrading from Momentum 5.3.0

Momentum 5.3.0 reads every `p=` as a
SubjectPublicKeyInfo, including for `k=ed25519`. A deployment that
published an Ed25519 key in that form to make 5.3.0 verify its
own mail has a record that conformant verifiers reject. Momentum now
rejects it too: `verify()` reports the sig-set as `key_fault` with reason
`key_syntax`. Republish the record in the raw 32-byte form above. Nothing
needs to change for `k=rsa`.

The quickest check is the record itself: a conformant Ed25519 `p=` is
44 base64 characters, the SubjectPublicKeyInfo form 60.

Replace the record; do not publish both forms side by side. Two TXT
records at one selector is a §11.5 PERMERROR, so a verifier that would
have accepted either accepts neither.

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
  return msys.core.EC_HOOK_DONE   -- reject
end
-- info.chain_break=true, info.bridged=true when bridge was auto-generated
```

With `on_chain_break="bridge"`, `bridge_mailfrom` can be omitted when the
prior `rt=` has a single entry — Momentum infers it. When the prior `rt=`
has multiple entries, `bridge_mailfrom` is required to identify which entry
this hop received at.

#### `nd=` "imaginary hop" bridge (spec-06 §8.7 / §9.3)

The spec provides an alternative to the fabricated bridge above: the `nd=`
("next domain") tag. Instead of inventing `mf=`/`rt=` values for the imaginary
transfer, the bridge signature carries `nd=<next signing domain>` and **omits**
`mf=`/`rt=` entirely; a verifier checks that `nd=` exactly matches the `d=` of
the next signature in the chain. Per §9.3 the bridge MUST be signed by a domain
that actually received the message — i.e. a domain present in the prior `rt=` —
so the bridge uses a **different signing identity** from the forwarder's own.

Normally an `nd=` signature is never the highest-numbered one — the chain
MUST end with a signature carrying `mf=`/`rt=`. Draft-04 §8.7 added one
**special case**: where out-of-band arrangements exist, the *highest*
signature MAY carry `nd=` (an "imaginary final hop"). Such a message cannot
have its `MAIL FROM`/`RCPT TO` validated by the receiver, so a verifier
rejects it by default; acceptance is opt-in via the `allow_nd_highest` verify
option (see [verify](verify)).

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

The `on_chain_break` option controls what happens when signing would break
the chain of custody:

| `on_chain_break` | Behavior | Third return value |
|---|---|---|
| `"bridge"` (default with `bridge_mailfrom`) | Fabricated `mf=`/`rt=` bridge; error if ambiguous | `{chain_break=true, bridged=true}`; on an error, `refusal` |
| `"nd"` | `nd=` bridge; requires `bridge_domain` + key | `{chain_break=true, bridged=true, nd=true}`; on an error, `refusal` |
| `"skip"` (default without `bridge_mailfrom`) | Skip signing | `{chain_break=true, bridged=false}` |
| `"warn"` | Sign without bridge | `{chain_break=true, bridged=false}` |
| `"error"` | Return `(nil, errmsg, refusal)` | `refusal` |

The third return value gives policy full control: inspect `info.chain_break`
and `info.bridged` to decide whether to accept, reject, or log — regardless
of which `on_chain_break` value was used. `info.reason` names the break:
`mf_unrelated` (the new `mf=` domain links to no prior `rt=`), `null_sender`
(`mf=` is `<>` after a signature with `rt=`), `nd_mismatch` (the previous
`nd=` names another domain) or `bad_nd` (the previous `nd=` is not a
domain).

A fabricated bridge mends only `mf_unrelated`. For the other three,
`on_chain_break="bridge"` returns an error; use `"nd"`, `"warn"` or `"skip"`
(`"nd"` cannot mend `bad_nd`).

A relay sends the message with its own MAIL FROM, which must lie within
the signing domain, and signs with that address. Set the relay's own
address as the envelope MAIL FROM, and pass it as `mailfrom`. This links
to the previous signature only when that signature's `rt=` names an
address at the relay's MAIL FROM domain or a parent of it. Otherwise, or
if the envelope MAIL FROM is still the original sender's, the signature
would break the chain (`mf_unrelated`): under the default
`on_chain_break="skip"`, `sign()` returns without signing. To sign such
a message, set `on_chain_break` to `"bridge"` or `"nd"` (see above).

```lua
msys.validate.dkim2.sign(msg, vctx, {
  domain   = "relay.example.org",
  selector = "relay-2026",
  keyfile  = "/etc/dkim2/relay.example.org/relay-2026.key",
  mailfrom = "bounces@relay.example.org",
})
```

A modifier that **rewrites** the message (Subject change, body footer,
attachment strip, etc.) additionally attaches a `recipe`:

```lua
-- Forwarder rewrote Subject; recipe restores the original on
-- reverse-apply.
local ok, err = msys.validate.dkim2.sign(msg, vctx, {
  domain   = "list.example.org",
  selector = "list-2026",
  keyfile  = "/etc/dkim2/list.example.org/list-2026.key",
  recipe   = [[{"h":{"subject":[{"d":["Original subject"]}]}}]],
})
if not ok then
  msys.log(msys.core.LOG_WARNING, "dkim2 modifier sign failed: " .. (err or "unknown"))
end
```

The recipe schema is documented in `-06` §5. Without a recipe,
a hop that changed the content signs a `{"b":null}` recipe, which declares
the earlier body unrecoverable; set `require_recipe` to refuse that. A hop
that did not change the content omits `recipe`.

When a bridge is added (`on_chain_break="bridge"` or `"nd"`) and the
message was modified, supply `recipe` on the outer `sign()` call — Momentum
forwards it to the auto-generated bridge signature. The bridge needs
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
