---
lastUpdated: "06/09/2026"
title: "Using DKIM2 (DomainKeys Identified Mail v2) Signatures"
description: "DKIM2 is the successor to DKIM that adds replay protection (per-message envelope binding), an explicit chain of custody across forwarders, and a structured way for modifying hops to record what they changed. Momentum implements DKIM2 targeting draft-ietf-dkim-dkim2-spec-02."
---

## On This Page

- [What DKIM2 is, and why](#what-dkim2-is-and-why)
- [How it differs from DKIM1 at a glance](#how-it-differs-from-dkim1-at-a-glance)
- [Enabling the module](#enabling-the-module)
- [DKIM2 Signing](#dkim2-signing)
  - [Signing hook: shared vs. per-recipient](#signing-hook-shared-vs-per-recipient)
  - [Sign options](#sign-options)
  - [Forwarder and modifier signing](#forwarder-and-modifier-signing)
- [DKIM2 Verifying](#dkim2-verifying)
  - [Verify options](#verify-options)
  - [Result table](#result-table)
  - [SMTP response codes](#smtp-response-codes-94-guidance)
- [Authentication-Results output](#authentication-results-output)
- [Debugging](#debugging)
  - [Per-signature reason codes](#per-signature-reason-codes)
  - [recipe_chain detail strings](#recipe-chain-detail-strings-paniclog-only)
  - [ec_message context fields](#ec-message-context-fields)
- [Key management](#key-management)
- [Known limitations](#known-limitations)

---

### Warning

DKIM2 targets the in-progress IETF draft
[`draft-ietf-dkim-dkim2-spec-02`](https://datatracker.ietf.org/doc/html/draft-ietf-dkim-dkim2-spec-02)
(May 2026). The wire format is **not yet final** — the working group may revise
it before publication. Do not enable DKIM2 on production outbound traffic
without staging it first. If the spec changes, a future Momentum release may
not verify messages signed by an earlier release.

> **What this means in practice:** Stage DKIM2 on a limited outbound mail
> stream first. If you later upgrade Momentum and the spec has changed, messages
> signed by the old release will fail verification at receivers that have also
> upgraded. Messages signed by DKIM1 are unaffected.


## What DKIM2 is, and why

[DKIM1](/momentum/4/using-dkim) (RFC 6376) lets a sending domain attach a
cryptographic signature that lets a receiver confirm "this message came from
that domain, and the body + signed headers haven't been altered since
signing". It is widely deployed, but it has two known limitations:

1.  **Replay.** DKIM1 can sign the `To:` header field, but nothing in a
    DKIM1 signature is bound to the *SMTP envelope RCPT TO* — the address
    that controls actual delivery. An attacker who captures a DKIM1-signed
    message can change the envelope recipient and re-inject it; the `To:`
    header and the signature remain intact and valid. Receivers have no way
    to tell, from the signature alone, that the message was delivered to
    someone other than the originally intended recipient.

2.  **Indirect mail flows.** Forwarders and mailing lists routinely modify
    messages — rewriting the Subject, adding a footer, expanding the
    recipient list — and DKIM1 has no native way for them to attest to
    those modifications. The upstream signature breaks, and the receiver
    has to fall back on ARC or on heuristics.

DKIM2 addresses both:

*   Each signature **binds the envelope** to the signed bytes (per-signature
    `mf=` for MAIL FROM and `rt=` for RCPT TO). A replay to a different
    recipient mismatches `rt=`; a replay from a different sender mismatches
    `mf=`.

*   The chain of signatures forms an explicit **chain of custody**: each
    hop's `mf=` must appear in the previous hop's `rt=` list (which may
    encode more than one recipient, comma-separated), so the verifier can
    confirm the path was a real forward, not a detour.

*   Modifying hops **record their modifications** as a JSON "recipe" on a
    new `Message-Instance:` header. The verifier can reverse-apply the
    recipe to reconstruct the previous instance's bytes and confirm the
    upstream hashes still hold.

This page covers everything an operator needs to enable, observe, and
debug DKIM2 signing and verification on Momentum. The wire-format
specifics live in the [IETF
draft](https://datatracker.ietf.org/doc/html/draft-ietf-dkim-dkim2-spec-02);
the operationally-relevant signal codes (per-signature reasons, overall
verdicts, paniclog lines) are inventoried in the
[Debugging](/momentum/4/dkim2#dkim2_debugging) section below.


## How it differs from DKIM1 at a glance

| Concern | DKIM1 (RFC 6376) | DKIM2 (draft `-02`) |
|---|---|---|
| Header name | `DKIM-Signature:` | `DKIM2-Signature:` |
| Hashes carried in | The signature header itself (`bh=` + `b=`) | A separate `Message-Instance:` header (`h=sha256:<hh>:<bh>`) referenced via `m=` |
| Envelope binding | None | `mf=<MAIL FROM>` / `rt=<RCPT TO>`, base64-encoded |
| Chain | Implicit (multiple sigs, no required ordering) | Explicit (`i=N` 1..N, `i=N`'s `mf=` must appear in `i=N-1`'s `rt=`) |
| Modifications | Break the upstream signature | Recorded as a JSON recipe on the modifier's MI; reverse-applicable |
| Key record | DNS TXT at `<selector>._domainkey.<domain>` | Same — DKIM2 reuses the DKIM1 key-publishing format |
| Algorithm | `rsa-sha256`, `ed25519-sha256` | `rsa-sha256`, `ed25519-sha256` |

Sending domains keep their existing DKIM1 keys: DKIM2 uses the same
`<selector>._domainkey.<domain>` TXT-record format. There is no extra DNS
provisioning step to start signing DKIM2.


## Enabling the module

Add the following stanza to your Momentum configuration before using any
DKIM2 Lua API:

```
dkim2 {}
```

The `debug_level` option is documented in the
[Debugging](/momentum/4/dkim2#dkim2_debugging) section.

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
| **Fires** | Once on shared parent message | Once per recipient (cowref) |
| **`rt=` default** | All envelope recipients (comma-separated list) | Single cowref recipient |
| **Replay protection** | Rejects delivery to any address not in the original list | Each copy bound exclusively to its own recipient |
| **BCC privacy** | ⚠️ BCC addresses appear in `rt=` on every copy, visible to TO/CC recipients | ✅ Each copy carries only its own recipient; no address leaks to others |
| **Complexity** | Simpler — one `sign()` call per message | One `sign()` call per recipient |

Use `validate_data_spool_each_rcpt` when your deployment uses BCC or when
you need each signature to be exclusive to one recipient. `validate_data_spool`
is sufficient for TO/CC-only delivery.

Passing an explicit `rcptto` option overrides the automatic recipient
enumeration. If you supply a single address (string), the signature commits
only to that address and will not cover any other recipients.

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
    -- err is a static-literal string describing the failure. See the
    -- "Debugging" section below for the full set.
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
only supports RSA will still verify cleanly.  Any sig-set that fails
alongside a passing one is reported as a DWARNING in paniclog
(partial-sig-failure condition).  The `selector`, `keyfile`, and
`algorithm` fields belong to each sig-set entry; all other options below
are header-level and go at the top level of the options table.

| Option | Required? | Meaning |
|---|---|---|
| `domain` | yes | `d=` tag — the signing domain. |
| `selector` | yes (single) | Selector component of `s=<selector>:<alg>:<base64-sig>`. When `sig_sets` is used, set per entry inside `sig_sets` instead. |
| `keyfile` | yes (single) | Path to the PEM-encoded private key on disk. Mutually exclusive with `keybuf`; one of the two is required. When `sig_sets` is used, set per entry inside `sig_sets` instead. |
| `keybuf` | yes (single) | PEM-encoded private key as a string in memory. Alternative to `keyfile` for cases where the key is held in a secrets manager or generated at runtime. |
| `algorithm` | no | `"rsa-sha256"` (default) or `"ed25519-sha256"`. When `sig_sets` is used, set per entry inside `sig_sets` instead. |
| `sig_sets` | no | Array of `{selector, keyfile, keybuf, algorithm}` tables for multi-algorithm signing (§7.8). When present, `selector`/`keyfile`/`keybuf`/`algorithm` at the top level are ignored. |
| `mailfrom` | no | Override the envelope MAIL FROM for the `mf=` tag. Use this when signing as a forwarder. |
| `rcptto` | no | Override the envelope RCPT TO(s) for the `rt=` tag. Accepts a string (single bare address) or a Lua table of bare addresses (multiple). When not set, the wrapper enumerates all envelope recipients automatically via `ctx:iterate_rcpt()`. |
| `timestamp` | no | `t=` value. Defaults to the current UNIX time. |
| `nonce` | no | `n=` value (`-02` §7.3). Caller-supplied ASCII string, ≤ 64 chars, no `;`. Typically a DSN-correlation key or replay-cache key. |
| `nonce_random` | no | If `true` AND `nonce` is not set, the signer fills `n=` with a 22-character base64 random nonce. |
| `flags` | no | Lua array of flag tokens for `f=` (`-02` §7.9): `"exploded"`, `"donotexplode"`, `"donotmodify"`, `"feedback"`. See §7.9 for semantics. Joined into the on-wire comma-separated form by the glue layer. When `rt=` carries multiple recipients, `"exploded"` is added automatically unless already present. **Note:** the auto-`exploded` heuristic is based solely on recipient count — it triggers when `rt=` contains more than one address. Mailing lists with a single subscriber will not have `"exploded"` added automatically; pass `flags = {"exploded"}` explicitly in that case. |
| `recipe` | no | Raw JSON string conforming to `-02` §4. Attached to the `Message-Instance` header as the base64-encoded `r=` tag. Validated against the schema at sign time; malformed recipes fail the sign call with `recipe_invalid: <reason>`. |
| `mi_hash_algorithms` | no | Lua array of hash algorithms for the `Message-Instance` `h=` body and header hashes (§5). Default `{"sha256"}`. Multiple algorithms produce comma-separated entries in `h=`, e.g. `{"sha256","sha512"}` → `h=sha256:HH:BH,sha512:HH:BH`. A plain string `mi_hash_algorithm="sha512"` is also accepted as a single-algorithm alias. The verifier automatically detects and uses whatever algorithm is present in the received MI `h=` tag. |
| `relax_d_mf_check` | no | §7.7 requires `d=` to match the rightmost labels of the `mf=` (MAIL FROM) domain. Default `false` (spec-compliant — `sign()` returns an error on mismatch). **Setting to `true` is non-spec-compliant**; it downgrades the check to a `DWARNING` and proceeds. Recommended only for testing or debugging cross-domain signing configurations. |
| `allow_recipe_z` | no | If `true`, accept the `b: {"z": true}` (truncated-body) recipe at sign time. Default `false`. The `-02` spec is internally inconsistent on this recipe shape — the changelog removes it but §11.1 still references it — so the signer refuses to emit it without an explicit opt-in. Set this only if you are interoperating with a verifier that requires the truncated-body recipe and you accept that the shape may be removed from the final spec. |

`sign()` returns `(true, header_value_string)` on success and `(nil,
error_string)` on failure. Always check the return; on failure the message
is left unmodified (no `DKIM2-Signature:` or `Message-Instance:` is
attached) and an error line is also logged to paniclog at level `error`.

### Forwarder and modifier signing

A forwarder that **re-routes** a message (different envelope) signs with
explicit overrides so the §8.3 chain-of-custody check downstream succeeds:

```lua
-- Hop 2 (forwarder): mf= is the forwarder's own bounce address (must
-- match the rt= in hop 1's signature that listed this forwarder as a
-- recipient); rt= is the new downstream recipient.  Using the forwarder's
-- own envelope values here does not break the chain — it builds the next
-- link correctly.
msys.validate.dkim2.sign(msg, vctx, {
  domain   = "forwarder.example.net",
  selector = "fwd-2026",
  keyfile  = "/etc/dkim2/forwarder.example.net/fwd-2026.key",
  mailfrom = "list-bounce@forwarder.example.net",
  rcptto   = "subscriber@downstream.example.org",
})
```

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


## DKIM2 Verifying

DKIM2 verification is driven from Lua via `msys.validate.dkim2.verify`.
`verify()` can be called from either `validate_data_spool` or
`validate_data_spool_each_rcpt`. The choice affects how the §10.4 `rt=`
binding check is performed:

| | `validate_data_spool` | `validate_data_spool_each_rcpt` |
|---|---|---|
| **Fires** | Once on shared parent message | Once per recipient (cowref) |
| **`rt=` check** | All envelope recipients enumerated into `rcptto` and checked against `rt=` (§10.4 MUST) | Single cowref recipient enumerated into `rcptto` and checked |
| **BCC support** | No — Bcc recipients will not be in `rt=` and will fail the check | Yes — each cowref is checked independently |
| **Complexity** | Simpler — one `verify()` call per message | One `verify()` call per recipient |

Use `validate_data_spool_each_rcpt` when your deployment uses BCC.
Typical inbound policy:

```lua
require("msys.core")
require("msys.validate.dkim2")

local mod = {}

function mod:validate_data_spool_each_rcpt(msg, ac, vctx)
  local result = msys.validate.dkim2.verify(msg, vctx, {
    authservid = "mta-1.example.com",
  })
  if not result then
    -- Internal error during verification (alloc failure, etc.) —
    -- distinct from a per-sig fail, which lands in result.signatures.
    -- Defer rather than silently accepting: the message has not been
    -- verified and should not be treated as if it were.
    vctx:set_code(451, "4.7.5 DKIM2 verification unavailable; please retry")
    return msys.core.VALIDATE_CONT
  end

  -- result.overall is one of:
  --   "pass"          all sigs verified, chain intact
  --   "fail"          verified but wrong: hash/sig mismatch or policy
  --                   violation (d=/mf= mismatch, donotmodify, etc.)
  --   "permerror"     could not verify: key missing/invalid/revoked,
  --                   signature syntax error, or chain integrity failure
  --                   (overall_reason="chain_broken" for chain failures;
  --                   nil for key/syntax errors — check signatures[i].reason)
  --   "temperror"     resolver-side transient failure (SERVFAIL, timeout)
  --   "none"          no DKIM2-Signature headers on the message

  if result.overall == "temperror" then
    -- Transient DNS failure: set a 4xx code so Momentum issues a
    -- temporary rejection after the validation pipeline completes,
    -- allowing the sender to retry once the resolver recovers.
    vctx:set_code(451, "4.7.5 DKIM2 key lookup failed; please retry")
  end

  if result.overall == "fail" or result.overall == "permerror" then
    vctx:set_code(550, "5.7.1 DKIM2 verification failed")
  end

  return msys.core.VALIDATE_CONT
end

msys.registerModule("my_dkim2_verifier", mod)
```

The wrapper stamps a new `Authentication-Results:` header with one
`dkim2=…` clause per directly-verified signature. RFC 8601 §5 states
that an MTA **MUST NOT** add a result to an existing header field, so
`verify()` always prepends a fresh AR header. AR emission is opt-in:
nothing is emitted unless `authservid` is supplied. Alternatively, a
policy hook can omit `authservid` and build a combined
`Authentication-Results:` header later, merging DKIM2 results with those
from other authentication methods (SPF, DKIM1, ARC, etc.) into a single
header.

### Verify options

| Option | Meaning |
|---|---|
| `pubkey_pem` | A PEM-encoded public key. When set, the same key is used for every signature on the message (typically used in tests and policies that already have the key). When absent, each signature's `(d, s)` pair is resolved from DNS at `<selector>._domainkey.<domain>`. |
| `mailfrom` | Override the envelope MAIL FROM used for the `mf=` binding check. Defaults to the bare address from `ec_message_get_mailfrom`. **For testing only** — mirrors sign()'s `mailfrom=` option; useful for simulating specific envelope conditions without real SMTP transit. |
| `rcptto` | Override the envelope RCPT TO(s) for the `rt=` binding check. Accepts a string (single bare address) or a Lua table of bare addresses (multiple). ALL listed addresses must be present in `rt=` for the signature to pass (§10.4). When not set, the wrapper enumerates all envelope recipients automatically. |
| `authservid` | When set, a new `Authentication-Results:` header is always prepended with this value as the authentication service identifier. Existing AR headers are never modified. When absent, no AR header is emitted. |
| `relax_d_mf_check` | If `true`, downgrade the §7.7 `d=`/`mf=` domain alignment check from a hard failure to a warning. Default `false` (spec-compliant). **Setting to `true` is non-spec-compliant**; recommended only for testing. |
| `skip_recipe_chain` | If `true`, skip the `-02` §10.6 recipe-chain check. The per-signature crypto + envelope checks and the §8.3 chain-of-custody check still run. Default `false` (chain check ON). **Setting this to `true` makes the verifier non-spec-compliant** — §10.6 is a SHOULD requirement. Use only for debugging or when interoperating with a signer whose recipe implementation is known to be broken. |
| `relax_s_selectors` | If `true`, accept duplicate selectors within a single `s=` tag. Default `false` — duplicates produce `reason=parse_error` per §7.8. **Setting this to `true` makes the verifier non-spec-compliant** — §7.8 places a MUST requirement on distinct selectors. Use only for interop with known non-compliant signers. |
| `max_sig_age_days` | §10.3: reject signatures whose `t=` timestamp is older than this many days. Default `14`. Values `<= 0` disable the age check. |
| `max_sig_future_secs` | §7.4: reject signatures whose `t=` timestamp is more than this many seconds in the future. Default `300` (5-minute clock-skew tolerance). Values `<= 0` disable the check. |
| `emit_debug_headers` | If `true`, stamp `X-MSYS-DKIM2-Verify-Overall` and `X-MSYS-DKIM2-Verify-Sig` headers on the message. Useful for staging and debugging; **do not enable in production** as these headers expose internal verification detail and inflate message size. Default `false`. |

### Result table

```
result = {
  overall = "pass"         -- all verifiable signatures passed
          | "fail"         -- verified but wrong: hash/sig mismatch, or
          |                --   policy violation (d=/mf= mismatch, donotmodify, etc.)
          | "permerror"    -- could not verify: key missing/revoked/invalid,
          |                --   signature syntax error, or chain integrity failure
          |                --   (§10.1 PERMERROR)
          | "temperror"    -- transient key-fetch failure (DNS timeout / SERVFAIL)
          | "none",        -- no DKIM2 signatures present
  overall_reason = nil                      -- nil when overall="pass", "temperror",
                                            --   or when overall is non-pass due to
                                            --   per-sig failures (key errors, bad
                                            --   crypto, syntax errors) — check
                                            --   result.signatures[i].reason for detail.
                                            -- Non-nil only for structural conditions
                                            --   that apply to the chain as a whole:
                 | "chain_broken"           --   overall="permerror": chain integrity
                                            --   failure (MI gap, recipe mismatch, etc.)
                 | "d_mf_mismatch"          --   overall="fail": d= doesn't match
                                            --   mf= domain after crypto pass (§7.7)
                 | "donotmodify_violated"   --   overall="fail": f=donotmodify sig
                                            --   followed by a modifying hop (§10.8)
                 | "donotexplode_violated", --   overall="fail": f=donotexplode sig
                                            --   followed by f=exploded (§10.8)
  signatures = {
    { seq    = <i= chain sequence: 1 for originator, 2 for first forwarder, …>,
      m      = <m= Message-Instance revision referenced by this signature, 0 if absent>,
      status = "pass"           -- signature verified
             | "fail"           -- signature failed; see reason
             | "chain_verified" -- earlier hop (i<N), deferred to recipe-chain check
             | "none",          -- all sig-sets used unsupported algorithms (reason="unsupported_algorithm")
      reason = "ok"             -- paired with status="pass"
             | "deferred"       -- paired with status="chain_verified"
             | <failure code>,  -- see Per-signature reason codes table below
      d  = "<signing domain>",
      s  = "<selector>:<alg>:<base64-sig>",  -- raw s= value; AR header.s= carries
                                             --   only "<selector>:<alg>" (base64 stripped)
      mf = "<bare MAIL FROM>",               -- decoded from base64
      rt = "<bare RCPT TO>[,<bare RCPT TO>...]", -- all entries decoded from base64
      n  = "<nonce>",                        -- if present
      f  = "<flags string>",                 -- if present; comma-separated
      key_testing = true,                    -- if present: signing key has t=y
                                             --   (RFC 6376 §3.6.1 testing mode).
                                             --   Per spec, failures SHOULD NOT be
                                             --   treated as definitive when set.
    },
    ...
  }
}
```

For messages that passed through multiple signing hops, Momentum verifies
the **most recent signature** cryptographically (§10.5) and confirms the
**full chain of custody** end-to-end (§10.6). Earlier signatures in a
multi-hop message appear in `result.signatures` with
`status="chain_verified"` — this means Momentum validated that each
intermediate hop correctly recorded what it changed, and that those
changes are consistent all the way back to the original sender. If
anything in that chain is wrong (a hop modified the message without
recording it, or a recipe was incorrect), `overall` is `permerror` with
`overall_reason="chain_broken"`. You do not need to do anything special
in policy code — `overall="pass"` means the entire history checked out.


### SMTP response codes (§9.4 guidance)

Momentum leaves the decision of whether to accept, reject, or defer a
message — and which SMTP reply code to use — entirely to the operator's
Lua hook.  The `overall` field of the verify result maps to the following
SMTP behaviour as required by §9.4 of the DKIM2 spec:

| `overall` | Meaning | §9.4 guidance | Suggested action |
|---|---|---|---|
| `pass` | All verifiable signatures passed | — | Accept |
| `none` | No DKIM2 signatures present | — | Local policy |
| `fail` | Verified but wrong: hash/sig mismatch or policy violation (d=/mf= mismatch, donotmodify, etc.) | SHOULD 550/5.7.x if rejecting | Reject or accept per policy |
| `permerror` | Could not verify: key missing/revoked/invalid, syntax error, or chain integrity failure (`overall_reason="chain_broken"`) (§10.1 PERMERROR) | SHOULD 550/5.7.x; **MUST NOT 4xx** | Reject (permanent) |
| `temperror` | Transient key-fetch failure (DNS timeout / SERVFAIL) | MAY 451/4.7.5 | Defer (temporary) |

**Key rule from §9.4**: `permerror` **MUST NOT** result in a 4xx (temporary)
SMTP reply.  Only `temperror` warrants a temporary failure code.

Example hook skeleton:

```lua
local result = msys.validate.dkim2.verify(msg, vctx, { ... })
local overall = result and result.overall or "none"

if overall == "permerror" or overall == "fail" then
  -- §9.4 SHOULD 550/5.7.x for permanent failures.
  -- Note: "permerror" MUST NOT use 4xx.
  vctx:set_code(550, "5.7.1 DKIM2 verification failed")
  return msys.core.VALIDATE_DONE

elseif overall == "temperror" then
  -- §9.4 MAY 451/4.7.5 for transient key-fetch failures
  vctx:set_code(451, "4.7.5 DKIM2 key server temporarily unavailable")
  return msys.core.VALIDATE_DONE

else
  -- pass / none: local policy
  return msys.core.VALIDATE_CONT
end
```

> **Note**: Whether to reject on `fail` or `none` is a local policy
> decision.  The spec only mandates the reply-code *type* (4xx vs 5xx)
> for the cases shown above.


## Debugging

Setting `debug_level` on the `dkim2` configuration stanza routes sign and
verify activity to `paniclog`:

```
dkim2 {
  debug_level = "info"
}
```

| Level | What surfaces |
|---|---|
| `error` | Failures and resolver problems only. **Default.** |
| `warning` | Adds DNS issues and SHOULD-violation warnings. |
| `info` | Adds one DNS resolution line per verified signature plus verification failures with their cause (`bh_mismatch` with expected vs. actual hash; `sig_invalid` with selector, algorithm, signed-input length, and OpenSSL detail). |
| `debug` | Adds raw TXT-record bytes from the resolver, a per-crypto-check trace line, and the raw signed-input bytes on failure. Too noisy for steady-state production; useful when chasing a specific sign/verify mismatch. |

### Per-signature reason codes

Every signature on a verified message gets a `reason` string in
`result.signatures[i].reason`. These codes are Momentum-internal tokens —
not defined by the DKIM2 spec — but are exposed through the `verify()` API.
They appear in `result.signatures[i].reason`, in the
`X-MSYS-DKIM2-Verify-Sig` debug header, and in `Authentication-Results:`
`reason=` output. Policy code can safely branch on them. The full set:

| Reason | Meaning |
|---|---|
| `ok` | Signature verified cleanly. Paired with `status="pass"`. |
| `deferred` | An earlier hop's signature in a multi-hop message. Momentum validates the full chain of custody end-to-end rather than re-running that hop's cryptographic check directly (the content was legitimately modified by later hops, so a direct crypto check would always fail). If the chain is intact, `overall="pass"`. Paired with `status="chain_verified"`. |
| `hh_mismatch` | Header hash mismatch — a content header (Subject, From, etc.) was modified after signing without a new `Message-Instance:` recording the change. |
| `bh_mismatch` | Body hash mismatch — the message body was modified after signing without a new `Message-Instance:` recording the change. |
| `sig_invalid` | Cryptographic verification failed — the signed-input bytes don't match the value in `s=`. Enable `debug_level = info` for selector, algorithm, and signed-input length detail. |
| `parse_error` | The `DKIM2-Signature:` header couldn't be parsed. Corrupt header or a broken upstream signer. |
| `missing_required_tags` | One or more of the seven required tags (`i=`, `m=`, `t=`, `mf=`, `rt=`, `d=`, `s=`) is absent from the signature. |
| `signature_expired` | The `t=` timestamp is older than `max_sig_age_days` (default 14). |
| `signature_future` | The `t=` timestamp is more than `max_sig_future_secs` (default 300 s) in the future. |
| `nonce_too_long` | The `n=` nonce exceeded the 64-character ceiling (§7.3). |
| `mailfrom_mismatch` | The signed `mf=` doesn't match the actual envelope MAIL FROM — replay-to-different-sender. |
| `rcpt_mismatch` | The signed `rt=` doesn't match the actual envelope RCPT TO — replay-to-different-recipient. |
| `d_mf_mismatch` | The signing domain `d=` does not match the rightmost labels of the `mf=` domain (§7.7). Only set when `relax_d_mf_check` is not enabled. |
| `key_unavailable` | DNS resolver returned a transient failure (SERVFAIL, timeout, REFUSED). Rolls up to `overall="temperror"`. |
| `no_key` | DNS returned NXDOMAIN — no TXT record exists for the selector. |
| `key_revoked` | The DNS TXT record exists but `p=` is empty, signalling deliberate key revocation. |
| `key_b64_decode` | The `p=` value in the DNS record is not valid base64. Malformed DNS record. |
| `key_multiple_records` | DNS returned more than one TXT record for the selector (§10.5). DNS admin misconfiguration on the sender side — only one TXT record is allowed per selector. |
| `key_service_mismatch` | The DNS TXT record's `s=` service list does not include `email` or `*` (RFC 6376 §3.6.1). The key is published for a different service. |
| `key_invalid` | The DNS TXT record was present but structurally unusable (empty content, internal resolver error, or selector/domain too long to query). |
| `key_der_parse` | The `p=` base64 decoded successfully but the DER structure is not a valid public key. |
| `key_k_unknown` | The DNS record's `k=` tag names an algorithm Momentum doesn't support. |
| `sig_parse_failed` | The signature value inside the `s=` tag could not be parsed or stripped for canonical-input construction. Indicates a malformed signature from the signer. |
| `mi_hash_missing` | The body hash could not be retrieved from the `Message-Instance:` `h=` tag: either no MI with a matching sequence number (`m=`) was present, or the MI's `h=` tag was malformed or lacked a hash entry for the algorithm named in its own `h=` prefix. |
| `unsupported_algorithm` | Every sig-set in `s=` uses an algorithm Momentum does not implement. Per §3.4 these are ignored rather than failed; paired with `status="none"`. |

**Authentication-Results mapping (§10.1):** Most `status="fail"` reasons produce `dkim2=fail` in the AR header. Exceptions, per the §10.1 FAIL / PERMERROR / TEMPERROR distinction:
- `key_unavailable` → `dkim2=temperror` (transient DNS failure)
- The following produce `dkim2=permerror` (unrecoverable errors): `no_key`, `key_invalid`, `key_multiple_records`, `key_service_mismatch`, `key_k_unknown`, `key_revoked`, `key_b64_decode`, `key_der_parse`, `missing_required_tags`, `parse_error`, `sig_parse_failed`, `mi_hash_missing`, `signature_expired`, `verify_internal`

`reason=` is only included in failure clauses (`dkim2=fail`, `dkim2=permerror`, `dkim2=temperror`). Pass clauses (`dkim2=pass`) do not carry `reason=`.

### recipe_chain detail strings (paniclog only)

When the recipe-chain check fails, the overall verdict is `permerror`
with `overall_reason="chain_broken"`, and the underlying cause is logged at `error` level in
paniclog as `recipe-chain check failed: recipe_chain: <detail>`. The
chain-check failure does NOT appear in the per-signature result struct —
it's a cross-hop verdict, not a per-signature outcome — so paniclog is the
only place this detail surfaces.

| Detail | Meaning |
|---|---|
| `no_mi_1` | The message had ≥ 2 signatures but no `Message-Instance` with `m=1`. The chain has no anchor. |
| `parse_h` | `Message-Instance` `h=` tag didn't parse as `<algorithm>:<header-hash>:<body-hash>`. The MI is malformed. |
| `recipe_decode` | A hop's `r=` value didn't base64-decode. Wire-format corruption or a broken signer. |
| `recipe_invalid` | A hop's recipe failed schema validation at verify time. Should not occur with conforming signers (sign-time validation prevents emission of bad recipes); appearing here means the signer is broken. |
| `irreversible` | A hop's recipe declared `"h": null`, `"b": null`, or `"b": {"z": true}`. The verifier can't reverse-reconstruct past this hop. Local policy may accept irreversibility from trusted forwarders. |
| `apply_failed` | A recipe references a header or body line that doesn't exist in the current message. The recipe is inconsistent with the modification it claims to describe — likely a downstream hop modified the message AGAIN without recording it. |
| `no_recipe` | One or more non-first `Message-Instance` headers had no `r=` tag (treated as no-modification hops), yet the final reconstructed hashes didn't match `MI[1]`. A hop likely modified the message without recording a recipe. The signer should emit `r={"h":null,"b":null}` to declare irreversibility rather than omitting `r=` entirely. |
| `hash_mismatch` | After walking all recipes in reverse, the reconstructed instance-1 hashes didn't match `Message-Instance` `m=1`'s recorded `h=`. Every non-first MI had a recipe, so the mismatch indicates a hop's recipe was wrong or a hop modified the message after signing. |

### ec_message context fields

`verify()` writes the following context variables so downstream hooks can
read the outcome without re-verifying or parsing `Authentication-Results:`:

| Context key | Type | Value |
|---|---|---|
| `dkim2_overall` | string | Verdict: `"pass"`, `"fail"`, `"permerror"`, `"temperror"`, or `"none"`. See the verdict table above. |
| `dkim2_n_sigs` | string | Number of `DKIM2-Signature` headers found on the message. Parse with `tonumber()`. |

These keys are not set until `verify()` runs.

### Authentication-Results output

`verify()` always prepends a **new** `Authentication-Results:` header
when `authservid` is supplied; any prior AR headers (e.g. from SPF or
DKIM1) are left untouched (see RFC 8601 §5 note above).

Normal pass:

```
Authentication-Results: mta-1.example.com;
  dkim2=pass header.d=example.com header.s=sel-1:rsa-sha256 header.i=1 header.m=1
        header.mf=<sender@example.com> header.rt=<rcpt@a.com>
```

> **Note on `header.s=`:** RFC 8601 expects the selector name only. In DKIM2 the
> `s=` tag encodes selector, algorithm, and signature together, but Momentum emits
> only the selector and algorithm (e.g. `sel-1:rsa-sha256`) in `header.s=`,
> omitting the bulk base64 signature bytes.

Transient DNS failure (`key_unavailable` → `dkim2=temperror`):

```
Authentication-Results: mta-1.example.com;
  dkim2=temperror reason="public key could not be fetched" header.d=example.com header.s=sel-1:rsa-sha256 header.i=1
```

Failure with reason (simplified string per §10.1 — ordinals come from `header.i=` / `header.m=`):

```
Authentication-Results: mta-1.example.com;
  dkim2=fail reason="body hash mismatch" header.d=example.com header.i=1
```

When the overall verdict is worse than the per-sig result — chain failure or policy downgrade after a crypto pass — an extra overall clause is appended:

Chain-broken example (crypto passed but recipe-chain check failed):

```
Authentication-Results: mta-1.example.com;
  dkim2=pass header.d=example.com header.i=2;
  dkim2=permerror reason="chain of custody broken"
```

Policy-downgrade example (`d=` does not match the `mf=` domain):

```
Authentication-Results: mta-1.example.com;
  dkim2=pass header.d=example.com header.i=1;
  dkim2=fail reason="MAIL FROM and d= do not match"
```


## Key management

DKIM2 reuses the DKIM1 key infrastructure. Keys are PEM-encoded RSA or
Ed25519 private keys, supplied either as a file path (`keyfile`) or as
raw PEM bytes in memory (`keybuf`). The matching public key is published in DNS
at `<selector>._domainkey.<domain>` as a TXT record with the standard
RFC 6376 §3.6.1 format (`v=DKIM1; k=rsa; p=<base64-SPKI>`).

If you already publish DKIM1 keys at a selector, you can reuse the same
selector for DKIM2 without any DNS change. To generate fresh keys for
DKIM2 specifically, follow the standard openssl recipe in
[Generating DKIM Keys](/momentum/4/using-dkim#using_dkim.generating).

### Note

DKIM2 signatures and DKIM1 signatures **coexist on the wire**: they are
distinct headers (`DKIM2-Signature:` vs. `DKIM-Signature:`) and use
separate verifier paths. A message can carry both and either or both can
pass independently. If you enable DKIM2 signing for a domain that
already does DKIM1 signing, downstream verifiers that don't know about
DKIM2 will simply ignore the new header — they will continue to verify
the DKIM1 signature normally.

ARC also coexists with DKIM2 without conflict: ARC uses its own header
set (`ARC-Seal:`, `ARC-Message-Signature:`, `ARC-Authentication-Results:`)
and an independent chain model. A message can carry DKIM1, DKIM2, and ARC
headers simultaneously. Momentum's ARC module (`msys.validate.openarc`)
and the DKIM2 module operate independently — enabling one does not affect
the other. Receivers that support both will evaluate each chain separately.


## Known limitations

The following are known gaps or operational considerations to be aware of:

*   **§11 DSN routing**: When generating a Delivery Status Notification,
    Momentum does not yet address it to the `mf=` address from the
    highest-numbered DKIM2-Signature of the original message, nor does it
    suppress DSN generation when the original sender was `<>` (null sender).
    Inbound DSN authentication (§11.1.2) is also not implemented.

*   **§8.2 Forwarder auto-detection**: When Momentum acts as a forwarder
    or mailing list (changing the envelope MAIL FROM and re-delivering),
    the policy hook must explicitly call `sign()` to add the forwarder's
    own DKIM2 signature. Momentum does not automatically detect that a
    forward is happening and call `sign()` on its own. Without this
    explicit call, the receiver only sees the original sender's signature —
    it has no way to verify that the forwarder handled the message
    correctly. See the *Forwarder / modifier signing* section for how to
    do this.

*   **Content modifier recipe composition**: When a Momentum pipeline
    stage modifies message content — for example, the engagement tracker
    rewriting URLs, a content filter adding a footer, or a list processor
    changing headers — Momentum automatically detects the change and
    requires a `recipe=` to proceed without a failure. The practical workaround is to pass
    `recipe='{"b":null}'` (declaring the body change irreversible) when
    the full diff is not available, or a precise recipe when it is. This
    allows signing to succeed; downstream verifiers will accept the
    message while understanding that body reconstruction through this hop
    is not possible. See the *Forwarder / modifier signing* section for
    examples. The missing automation is having pipeline stages record
    their changes automatically — a planned Recipe Accumulator API will
    do this, letting `sign()` assemble the recipe without operator
    involvement.

    Both this limitation and the forwarder auto-detection above are blocked
    on the same Recipe Accumulator API (planned; not yet available).

*   **§10.1 AR reason strings use simplified form**: The spec defines
    error string templates with interpolated values, e.g.
    `"FAIL: Message Instance m=<x> body hash <value> mismatch"`. Momentum
    emits simplified strings without the ordinals or hash values, e.g.
    `reason="body hash mismatch"`. The full detail is always available
    from the message itself — ordinals and key values are in the
    `DKIM2-Signature:` and `Message-Instance:` headers, and the structured
    AR property tokens (`header.i=`, `header.m=`, `header.d=`,
    `header.s=`) repeat them in the AR clause. This is a §10.1 SHOULD —
    not a MUST — so verification behaviour is unaffected.

*   **§12 Bare CR/LF normalization**: Momentum's
    [`rfc2822_lone_lf_in_body`](/momentum/4/config/ref-rfc-2822-lone-lf-in-body)
    and
    [`rfc2822_lone_lf_in_headers`](/momentum/4/config/ref-rfc-2822-lone-lf-in-headers)
    options control bare LF handling. If either is set to `ignore`, DKIM2
    signs bare-LF content as-is; a downstream SMTP hop that normalizes it
    to CRLF will silently break the signature. **Set both options to `fix`
    when DKIM2 signing is in use.**


