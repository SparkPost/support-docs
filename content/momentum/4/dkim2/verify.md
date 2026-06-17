---
lastUpdated: "06/09/2026"
title: "DKIM2 Verifying — verify()"
description: "Reference for the msys.validate.dkim2.verify() Lua API: verify options, result table, and SMTP response codes."
---

## DKIM2 Verifying

DKIM2 verification is driven from Lua via `msys.validate.dkim2.verify`.
`verify()` can be called from either `validate_data_spool` or
`validate_data_spool_each_rcpt`. The choice affects how the §10.4 `rt=`
binding check is performed:

| | `validate_data_spool` | `validate_data_spool_each_rcpt` |
|---|---|---|
| **Fires** | Once on shared parent message | Once per recipient (cowref) |
| **`rt=` auto-check** | First accessible recipient only (`msg:rcptto()`) — **all other recipients bypass the §10.4 check** unless explicitly listed in `rcptto` | Single cowref recipient checked; §10.4 satisfied per-delivery |
| **Multi-recipient §10.4** | ⚠️ Must pass explicit `rcptto = {r1, r2, ...}` — omitting any recipient silently skips its binding check | ✅ Every recipient verified automatically in its own cowref |
| **BCC support** | ⚠️ Operator must exclude BCC from explicit `rcptto` — omitting a BCC address skips its §10.4 binding check | ✅ Each cowref checked independently; no special handling needed |
| **Complexity** | Requires explicit recipient collection for complete §10.4 compliance | One `verify()` call per cowref; correct by default |

Use `validate_data_spool_each_rcpt` for most deployments — it satisfies §10.4
for every recipient automatically without additional setup.
Typical inbound policy:

```lua
require("msys.core")
require("msys.validate.dkim2")

local mod = {}

function mod:validate_data_spool_each_rcpt(msg, ac, vctx)
  local result, err = msys.validate.dkim2.verify(msg, vctx, {
    authservid = "mta-1.example.com",
  })
  if not result then
    -- Internal error (alloc failure, crypto init error, etc.) — err carries
    -- the reason string.  Distinct from a per-sig fail, which lands in
    -- result.signatures.  Defer rather than silently accepting.
    msys.log(msys.core.DWARNING, "DKIM2 verify failed internally: " .. tostring(err))
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
  --   "none"          no DKIM2-Signature headers, or all use unsupported
  --                   algorithms (§3.4 — ignored rather than failed)

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

See [Authentication-Results Output](/momentum/4/dkim2/ar-clauses) for the AR
header format, `ar_clauses()` API, and examples of building combined headers.

### Verify options

| Option | Meaning |
|---|---|
| `pubkey_pem` | A PEM-encoded public key. When set, the same key is used for every signature on the message (typically used in tests and policies that already have the key). When absent, each signature's `(d, s)` pair is resolved from DNS at `<selector>._domainkey.<domain>`. |
| `mailfrom` | **Normally omitted** — Momentum reads the live envelope MAIL FROM automatically. Production exception: null-sender DSN/bounce messages where `mailfrom=""` is required since the envelope API returns nil for `MAIL FROM:<>`. Otherwise test/simulation use only. |
| `rcptto` | **Normally omitted** — Momentum auto-populates from the active envelope recipient. Production exception: in `validate_data_spool` (shared hook), pass the full recipient list explicitly for complete §10.4 multi-recipient checking. In `validate_data_spool_each_rcpt` (recommended), auto-populates correctly per cowref. Accepts a string or a Lua table of bare addresses. ALL listed addresses must be present in `rt=` for the signature to pass. |
| `authservid` | When set, a new `Authentication-Results:` header is prepended (when the result contains at least one actionable clause) with this value as the authentication service identifier. Existing AR headers are never modified. When absent, no AR header is emitted. |
| `relax_d_mf_check` | If `true`, downgrade the §7.7 `d=`/`mf=` domain alignment check from a hard failure to a warning. Default `false` (spec-compliant). **Setting to `true` is non-spec-compliant**; recommended only for testing. |
| `skip_recipe_chain` | If `true`, skip the `-02` §10.6 recipe-chain check. The per-signature crypto + envelope checks and the §8.3 chain-of-custody check still run. Default `false` (chain check ON). **Setting this to `true` makes the verifier non-spec-compliant** — §10.6 is a SHOULD requirement. Use only for debugging or when interoperating with a signer whose recipe implementation is known to be broken. |
| `relax_s_selectors` | If `true`, accept duplicate selectors within a single `s=` tag. Default `false` — duplicates produce `reason=parse_error` per §7.8. **Setting this to `true` makes the verifier non-spec-compliant** — §7.8 places a MUST requirement on distinct selectors. Use only for interop with known non-compliant signers. |
| `max_sig_age_days` | §10.3: reject signatures whose `t=` timestamp is older than this many days. Default `14`. Values `<= 0` disable the age check. |
| `max_sig_future_secs` | §7.4: reject signatures whose `t=` timestamp is more than this many seconds in the future. Default `300` (5-minute clock-skew tolerance). Values `<= 0` disable the check. |
| `emit_debug_headers` | If `true`, stamp `X-MSYS-DKIM2-Verify-Overall` and `X-MSYS-DKIM2-Verify-Sig` headers on the message. Useful for staging and debugging; **do not enable in production** as these headers expose internal verification detail and inflate message size. Default `false`. |

`verify()` returns `(result, err)`:
- **Normal execution** (including messages with no DKIM2 signatures): `result` is
  the result table below, `err` is `nil`. A message with no signatures returns
  `result.overall = "none"` — `result` is never `nil` in this case.
- **Internal failure** (alloc or crypto init error): `result` is `nil`, `err` is a
  non-nil string describing the cause.

Always capture both return values so internal failures can be logged and acted on
separately from signature verdicts.

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
          | "none",        -- no DKIM2-Signature headers present, or all
          |                --   use unsupported algorithms (§3.4)
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
`overall_reason="chain_broken"`. `overall="pass"` means the content
chain is intact; note that public-key (§10.5) cryptographic verification
is only performed for the most recent hop — see [Known Limitations](/momentum/4/dkim2#known-limitations) for
details.


### SMTP response codes (§9.4 guidance)

Momentum leaves the decision of whether to accept, reject, or defer a
message — and which SMTP reply code to use — entirely to the operator's
Lua hook.  The `overall` field of the verify result maps to the following
SMTP behaviour as required by §9.4 of the DKIM2 spec:

| `overall` | Meaning | §9.4 guidance | Suggested action |
|---|---|---|---|
| `pass` | All verifiable signatures passed | — | Accept |
| `none` | No DKIM2 signatures present, or all use unsupported algorithms (§3.4) | — | Local policy |
| `fail` | Verified but wrong: hash/sig mismatch or policy violation (d=/mf= mismatch, donotmodify, etc.) | SHOULD 550/5.7.x; **MUST NOT 4xx** | Reject or accept per policy |
| `permerror` | Could not verify: key missing/revoked/invalid, syntax error, or chain integrity failure (`overall_reason="chain_broken"`) (§10.1 PERMERROR) | SHOULD 550/5.7.x; **MUST NOT 4xx** | Reject (permanent) |
| `temperror` | Transient key-fetch failure (DNS timeout / SERVFAIL) | MAY 451/4.7.5 | Defer (temporary) |

**Key rules from §9.4**:
- `fail` and `permerror` **MUST NOT** use a 4xx reply code.
- Only `temperror` warrants a temporary (4xx) failure code.

Example hook skeleton:

```lua
local result, err = msys.validate.dkim2.verify(msg, vctx, { ... })
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
