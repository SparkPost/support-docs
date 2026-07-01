---
lastUpdated: "07/01/2026"
title: "DKIM2 Verifying — verify()"
description: "Reference for the msys.validate.dkim2.verify() Lua API: verify options, result table, and SMTP response codes."
---

## DKIM2 Verifying

DKIM2 verification is driven from Lua via `msys.validate.dkim2.verify`.
`verify()` can be called from either `validate_data_spool` or
`validate_data_spool_each_rcpt`. The choice affects how the §11.4 `rt=`
binding check is performed:

| | `validate_data_spool` | `validate_data_spool_each_rcpt` |
|---|---|---|
| **Fires** | Once on shared parent message | Once per recipient (cowref) |
| **`rt=` auto-check** | First accessible recipient only (`msg:rcptto()`) — **all other recipients bypass the §11.4 check** unless explicitly listed in `rcptto` | Single cowref recipient checked; §11.4 satisfied per-delivery |
| **Multi-recipient §11.4** | ⚠️ Must pass explicit `rcptto = {r1, r2, ...}` — omitting any recipient silently skips its binding check | ✅ Every recipient verified automatically in its own cowref |
| **BCC support** | ⚠️ Operator must exclude BCC from explicit `rcptto` — omitting a BCC address skips its §11.4 binding check | ✅ Each cowref checked independently; no special handling needed |
| **Complexity** | Requires explicit recipient collection for complete §11.4 compliance | One `verify()` call per cowref; correct by default |

Use `validate_data_spool_each_rcpt` for most deployments — it satisfies §11.4
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
    -- the reason string.  Defer rather than silently accepting.
    msys.log(msys.core.LOG_WARNING, "DKIM2 verify failed internally: " .. (err or "unknown"))
    vctx:set_code(451, "4.7.5 DKIM2 verification unavailable; please retry")
    return msys.core.VALIDATE_DONE
  end

  -- result.overall is one of:
  --   "pass"          chain intact and most-recent sig cryptographically verified
  --                   (lower-hop sigs confirmed via §10.2 recipe chain only)
  --   "fail"          verified but wrong: hash/sig mismatch or policy
  --                   violation (donotmodify/donotexplode, etc.)
  --   "permerror"     could not verify: key missing/invalid/revoked,
  --                   key/algorithm mismatch (overall_reason=
  --                   "key_alg_mismatch"), signature syntax error, chain
  --                   integrity failure (overall_reason names the cause:
  --                   mi_syntax / mi_missing_tag / mi_revision_ahead /
  --                   mi_revision_gap / mi_unsigned / i_sequence_broken /
  --                   custody_break / recipe_chain_mismatch), or d=/mf=
  --                   domain mismatch (§11.4, overall_reason="d_mf_mismatch")
  --   "temperror"     resolver-side transient failure (SERVFAIL, timeout)
  --   "none"          no DKIM2-Signature headers, or all use unsupported
  --                   algorithms (§3.4 — ignored rather than failed)

  if result.overall == "temperror" then
    vctx:set_code(451, "4.7.5 DKIM2 key lookup failed; please retry")
    return msys.core.VALIDATE_DONE
  end

  if result.overall == "fail" or result.overall == "permerror" then
    vctx:set_code(550, "5.7.1 DKIM2 verification failed")
    return msys.core.VALIDATE_DONE
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
| `mailfrom` | **Normally omitted** — Momentum reads the live envelope MAIL FROM automatically. Production exception: null-sender DSN/bounce messages where `mailfrom=""` is required since the envelope API returns nil for `MAIL FROM:<>`. Otherwise test/simulation use only. An explicit value may be given bare (`user@example.com`) or envelope-decorated (`<user@example.com>`, `MAIL FROM:<user@example.com>`, or `msg:mailfrom()`) — it is normalized to the bare address before the `mf=` binding comparison, the same as `rcptto`. `""` (null sender) is preserved. |
| `rcptto` | **Normally omitted** — Momentum auto-populates from the active envelope recipient. Production exception: in `validate_data_spool` (shared hook), pass the full recipient list explicitly for complete §11.4 multi-recipient checking. In `validate_data_spool_each_rcpt` (recommended), auto-populates correctly per cowref. Accepts a string or a Lua table of bare addresses. ALL listed addresses must be present in `rt=` for the signature to pass. |
| `authservid` | When set, a new `Authentication-Results:` header is prepended (when the result contains at least one actionable clause) with this value as the authentication service identifier. Existing AR headers are never modified. When absent, no AR header is emitted. |
| `relax_d_mf_check` | If `true`, downgrade the §9.4 / §11.4 `d=`/`mf=` domain alignment check from a hard failure to a warning. Default `false`: a mismatch on the most-recently-applied signature downgrades `pass` → `permerror` (§11.4 enumerates this as a PERMERROR output state). **Setting to `true` is non-spec-compliant**; recommended only for testing. |
| `skip_recipe_chain` | If `true`, skip the `-03` §10.2 recipe-chain check. The per-signature crypto + envelope checks and the §9.2 chain-of-custody check still run. Default `false` (chain check ON). **Setting this to `true` makes the verifier non-spec-compliant** — §10.2 is a SHOULD requirement. Use only for debugging or when interoperating with a signer whose recipe implementation is known to be broken. |
| `relax_s_selectors` | If `true`, accept duplicate selectors within a single `s=` tag. Default `false` — duplicates produce `reason=parse_error` per §8.9. **Setting this to `true` makes the verifier non-spec-compliant** — §8.9 places a MUST requirement on distinct selectors. Use only for interop with known non-compliant signers. |
| `max_sig_age_days` | §11.3: reject signatures whose `t=` timestamp is older than this many days. Default `14`. Values `<= 0` disable the age check. |
| `max_sig_future_secs` | §8.4: reject signatures whose `t=` timestamp is more than this many seconds in the future. Default `300` (5-minute clock-skew tolerance). Values `<= 0` disable the check. |
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
          |                --   policy violation (donotmodify/donotexplode, etc.)
          | "permerror"    -- could not verify: key missing/revoked/invalid,
          |                --   signature syntax error, chain integrity failure,
          |                --   or d=/mf= domain mismatch (§11.1 / §11.4 PERMERROR)
          | "temperror"    -- transient key-fetch failure (DNS timeout / SERVFAIL)
          | "none",        -- no DKIM2-Signature headers, or a lone signature
          |                --   using an unsupported algorithm (§3.4). NB: an
          |                --   unsupported *highest* sig in a multi-hop chain is
          |                --   permerror (highest_sig_unsupported), not none.
  overall_reason = nil                      -- nil when overall="pass", "temperror",
                                            --   or when overall is non-pass due to
                                            --   per-sig failures (key errors, bad
                                            --   crypto, syntax errors) — check
                                            --   result.signatures[i].reason for detail.
                                            -- Non-nil only for structural conditions
                                            --   that apply to the chain as a whole:
                 | "chain_broken"           --   overall="permerror": chain integrity
                                            --   failure (MI gap, recipe mismatch, etc.)
                 | "d_mf_mismatch"          --   overall="permerror": d= doesn't match
                                            --   mf= domain of the most-recent sig after
                                            --   crypto pass (§9.4 / §11.4)
                 | "donotmodify_violated"   --   overall="fail": f=donotmodify sig
                                            --   followed by a modifying hop (§11.8)
                 | "donotexplode_violated"  --   overall="fail": f=donotexplode sig
                                            --   followed by f=exploded (§11.8)
                 | "highest_sig_unsupported",-- overall="permerror": the highest-i
                                            --   sig uses an unsupported algorithm in a
                                            --   multi-hop chain, so the most-recent hop
                                            --   can't be authenticated — not "none"
                                            --   (§3.4 / §11.5)
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
      s  = "<selector>:<alg>:<base64-sig>",      -- raw s= value; AR header.s= carries
                                                 --   only "<selector>:<alg>" (base64 stripped)
      mf = "<bare MAIL FROM>",                   -- decoded from base64; absent on an nd= bridge
      rt = "<bare RCPT TO>[,<bare RCPT TO>...]", -- all entries decoded from base64; absent on an nd= bridge
      nd = "<next domain>",                      -- present (with mf/rt absent) on an
                                                 --   "imaginary hop" bridge signature
      n  = "<nonce>",                            -- if present
      f  = "<flags string>",                     -- if present; comma-separated
      key_testing = true,                        -- if present: signing key has t=y
                                                 --   (RFC 6376 §3.6.1 testing mode).
                                                 --   Per spec, failures SHOULD NOT be
                                                 --   treated as definitive when set.
    },
    ...
  },
  highest_i  = <i= of the highest-numbered signature; 0 if none>,
  highest_mf = "<bare MAIL FROM of the highest-i hop>",  -- §12 DSN target;
                 -- "<>" for the null sender (a DSN MUST NOT be sent);
                 -- absent when no signature carried an mf=
}
```

**Key testing mode (`key_testing`)**: When a signing key is published with `t=y` in its DNS TXT record, the signer is testing that key in production. RFC 6376 §3.6.1 (inherited by DKIM2) says verifiers SHOULD NOT treat failures as definitive in this case. Momentum surfaces the flag as `key_testing=true` on the affected per-sig entry and logs a `DWARNING`, but leaves the policy decision to operator code. To follow the SHOULD recommendation:

```lua
for _, sig in ipairs(result.signatures or {}) do
  if sig.key_testing and sig.status ~= "pass" then
    -- key is in testing mode; treat this sig's failure as non-definitive
    -- (e.g. override result.overall to "none" or log and accept)
  end
end
```

For messages that passed through multiple signing hops, Momentum verifies
the **most recent signature** cryptographically (§11.5) and confirms the
**full chain of custody** end-to-end — the §11.4 envelope `mf=`/`rt=` linkage
plus the §10.2 Message-Instance recipe reconstruction. Earlier signatures in a
multi-hop message appear in `result.signatures` with
`status="chain_verified"` — this means Momentum validated that each
intermediate hop correctly recorded what it changed, and that those
changes are consistent all the way back to the original sender. If
anything in that chain is wrong (a hop modified the message without
recording it, or a recipe was incorrect), `overall` is `permerror` with
an `overall_reason` naming the specific cause — one of `mi_syntax`,
`mi_missing_tag`, `mi_revision_ahead`, `mi_revision_gap`, `mi_unsigned`,
`i_sequence_broken`, `custody_break`, or `recipe_chain_mismatch` (the
generic `chain_broken` remains as a fallback). `overall="pass"` means the content
chain is intact; note that public-key (§11.5) cryptographic verification
is only performed for the most recent hop. This is correct for the §10.1
acceptance decision, but §10.3 use cases that need each lower hop's
signature individually verified — Reviser reputation, `feedback` handling,
explosion assessment — are not supported (there is no option to crypto-verify
every hop); see [Known Limitations](/momentum/4/dkim2#known-limitations) for
details.

**`nd=` "imaginary hop" bridges (§8.7 / §9.3).** A forwarder that changes
domains may insert a bridge signature carrying an `nd=` ("next domain") tag
instead of fabricating `mf=`/`rt=` values. Momentum verifies these: an `nd=`
signature must omit `mf=`/`rt=`, must not be the highest-numbered signature,
and its `nd=` value must exactly match the `d=` of the next signature in `i=`
order (§11.4). Momentum additionally checks that the bridge's own signing
domain (`d=`) relaxed-matches a recipient domain in the prior hop's `rt=`
(§9.3 — the bridge must be signed by a domain that received the message). Any
of these failing surfaces as `overall="permerror"`, `overall_reason="custody_break"`,
with the specific cause (`nd= does not match`, `nd= with mf=/rt=`, etc.) logged
at `info` level. The bridge signature itself appears in `result.signatures`
with `status="chain_verified"` and its `nd` field populated.

### Per-signature reason codes

Every signature on a verified message gets a `reason` string in
`result.signatures[i].reason`. These codes are Momentum-internal tokens —
not defined by the DKIM2 spec — but are exposed through the `verify()` API.
They appear in `result.signatures[i].reason`, in the
`X-MSYS-DKIM2-Verify-Sig` debug header, and in `Authentication-Results:`
`reason=` output. Policy code can safely branch on them.

The per-signature AR verdict is derived from `status` and `reason` together:
`status="pass"` → `dkim2=pass`; `status="fail"` → `dkim2=fail` by default,
promoted to `dkim2=temperror` or `dkim2=permerror` for specific reason codes
(noted in the table below); `status="chain_verified"` and `status="none"` are excluded from AR output.

The full set. Unless otherwise noted, each reason code below pairs with `status="fail"` in `result.signatures[i].status`.

> **Note:** `d_mf_mismatch`, `donotmodify_violated`, and `donotexplode_violated` are
> **not** per-signature reason codes. They are set on `result.overall_reason` when a
> policy check downgrades the overall verdict after crypto passes. See the [Result table](/momentum/4/dkim2/verify#result-table)
> for details.

| Reason | Meaning |
|---|---|
| `ok` | Signature verified cleanly. Paired with `status="pass"`. |
| `deferred` | An earlier hop's signature in a multi-hop message. Momentum validates the full chain of custody end-to-end via the §10.2 recipe chain rather than performing a full §11.5 per-signature key lookup and cryptographic check for each lower hop. If the chain is intact, `overall="pass"`. See [Known Limitations](/momentum/4/dkim2#known-limitations) for what this means for key provenance. Paired with `status="chain_verified"`. |
| `hh_mismatch` | Header hash mismatch — a content header (Subject, From, etc.) was modified after signing without a new `Message-Instance:` recording the change. |
| `bh_mismatch` | Body hash mismatch — the message body was modified after signing without a new `Message-Instance:` recording the change. |
| `sig_invalid` | Cryptographic verification failed — the signed-input bytes don't match the value in `s=`. Enable `debug_level = info` for selector, algorithm, and signed-input length detail. |
| `parse_error` | The `DKIM2-Signature:` header couldn't be parsed. Corrupt header or a broken upstream signer. |
| `missing_required_tags` | One or more of the seven required tags (`i=`, `m=`, `t=`, `mf=`, `rt=`, `d=`, `s=`) is absent from the signature. |
| `signature_expired` | The `t=` timestamp is older than `max_sig_age_days` (default 14). §11.3 says verifiers SHOULD reject such signatures; Momentum's implementation choice is to treat this as PERMERROR (permanently unverifiable — no cryptographic verification is attempted). Maps to `dkim2=permerror` in AR output. |
| `signature_future` | The `t=` timestamp is more than `max_sig_future_secs` (default 300 s) in the future. Treated as a soft policy failure (`dkim2=fail`): the timestamp was evaluated and rejected, but it is not a permanent infrastructure error — the spec (§8.4 MAY) does not define a verdict for this case. |
| `nonce_too_long` | The `n=` nonce exceeded the 64-character ceiling (§8.3 SHOULD). Treated as `dkim2=fail` — the constraint is a SHOULD, not a structural permanent error. |
| `mailfrom_mismatch` | The signed `mf=` doesn't match the actual envelope MAIL FROM — replay-to-different-sender. |
| `rcpt_mismatch` | The signed `rt=` doesn't match the actual envelope RCPT TO — replay-to-different-recipient. |
| `key_unavailable` | DNS resolver returned a transient failure (SERVFAIL, timeout, REFUSED). Rolls up to `overall="temperror"`. |
| `no_key` | DNS returned NXDOMAIN — no TXT record exists for the selector. |
| `key_revoked` | The DNS TXT record exists but `p=` is empty, signalling deliberate key revocation. |
| `key_b64_decode` | The `p=` value in the DNS record is not valid base64. Malformed DNS record. |
| `key_multiple_records` | DNS returned more than one TXT record for the selector (§11.5). DNS admin misconfiguration on the sender side — only one TXT record is allowed per selector. |
| `key_service_mismatch` | The DNS TXT record's `s=` service list does not include `email` or `*` (RFC 6376 §3.6.1). The key is published for a different service. |
| `key_invalid` | The DNS TXT record was present but structurally unusable (empty content, internal resolver error, or selector/domain too long to query). |
| `key_der_parse` | The `p=` base64 decoded successfully but the DER structure is not a valid public key. |
| `key_k_unknown` | The DNS record's `k=` tag names an algorithm Momentum doesn't support. |
| `key_alg_mismatch` | The resolved public key's type doesn't match the signature's named algorithm — e.g. an `rsa-sha256` sig-set verified against a `k=ed25519` key (or vice versa), a DNS record whose `k=` tag disagrees with the actual `p=` key, or an RSA-PSS public key; maps to `dkim2=permerror`. |
| `key_v_mismatch` | The DNS TXT record's `v=` tag does not match the expected value. Malformed or wrong-version key record. Maps to `dkim2=permerror`. |
| `key_p_missing` | The DNS TXT record has no `p=` tag (distinct from empty `p=` which is revocation). Malformed key record. Maps to `dkim2=permerror`. |
| `key_size_invalid` | The RSA public key is outside the accepted size range — smaller than the 1024-bit minimum required, or larger than 16384 bits. The upper bound bounds DoS-via-huge-key (an oversized modulus makes verification expensive). Maps to `dkim2=permerror`. |
| `key_e_invalid` | The RSA public key exponent is not 65537 as required by §3.2. Maps to `dkim2=permerror`. |
| `sig_parse_failed` | The signature value inside the `s=` tag could not be parsed or stripped for canonical-input construction. Indicates a malformed signature from the signer. |
| `mi_hash_missing` | The body hash could not be retrieved from the `Message-Instance:` `h=` tag: either no MI with a matching sequence number (`m=`) was present, the MI's `h=` tag was malformed, or it carried no entry for a hash algorithm Momentum implements. Momentum allow-lists `sha256` / `sha512`; it ignores any other algorithm (e.g. `md5`, `sha1`) rather than computing it, so an `h=` that names only an unsupported algorithm yields this reason instead of a downgraded hash check. |
| `verify_internal` | An internal error occurred during signature verification (memory allocation failure or cryptographic library error). The signature could not be evaluated. Maps to `dkim2=permerror` in AR output. |
| `unsupported_algorithm` | Every sig-set in `s=` uses an algorithm Momentum does not implement. Per §3.4 these are ignored rather than failed; paired with `status="none"`. |

**Authentication-Results mapping (§11.1):** Most `status="fail"` reasons produce `dkim2=fail` in the AR header. Exceptions, per the §11.1 FAIL / PERMERROR / TEMPERROR distinction:
- `key_unavailable` → `dkim2=temperror` (transient DNS failure)
- The following produce `dkim2=permerror` (unrecoverable errors): `no_key`, `key_invalid`, `key_multiple_records`, `key_service_mismatch`, `key_k_unknown`, `key_alg_mismatch`, `key_revoked`, `key_b64_decode`, `key_der_parse`, `key_v_mismatch`, `key_p_missing`, `key_size_invalid`, `key_e_invalid`, `missing_required_tags`, `parse_error`, `sig_parse_failed`, `mi_hash_missing`, `signature_expired`, `verify_internal`

`reason=` is included in all failure clauses (`dkim2=fail`, `dkim2=permerror`, `dkim2=temperror`) and absent from pass clauses (`dkim2=pass`).

### recipe_chain detail strings (paniclog only)

When the recipe-chain check fails, the overall verdict is `permerror`
with `overall_reason="recipe_chain_mismatch"`, and the underlying cause is logged at `error` level in
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
| `irreversible` | A hop's recipe declared `"b": null` (an unrecoverable body). The verifier can't reverse-reconstruct past this hop. Local policy may accept irreversibility from trusted forwarders. |
| `apply_failed` | A recipe references a header or body line that doesn't exist in the current message. The recipe is inconsistent with the modification it claims to describe — likely a downstream hop modified the message AGAIN without recording it. |
| `no_recipe` | One or more non-first `Message-Instance` headers had no `r=` tag (treated as no-modification hops), yet the final reconstructed hashes didn't match `MI[1]`. A hop likely modified the message without recording a recipe. The signer should always emit an `r=` recipe rather than omitting it: provide a header recipe for any changed header field (an empty step array `[]` removes all instances of a field); the body may be declared irreversible with `"b":null`. |
| `hash_mismatch` | After walking all recipes in reverse, the reconstructed instance-1 hashes didn't match `Message-Instance` `m=1`'s recorded `h=`. Every non-first MI had a recipe, so the mismatch indicates a hop's recipe was wrong or a hop modified the message after signing. |

### ec_message context fields

`verify()` writes the following context variables so downstream hooks can
read the outcome without re-verifying or parsing `Authentication-Results:`:

| Context key | Type | Value |
|---|---|---|
| `dkim2_overall` | string | Verdict: `"pass"`, `"fail"`, `"permerror"`, `"temperror"`, or `"none"`. See the [SMTP response codes](/momentum/4/dkim2/verify#smtp-response-codes-111-guidance) table. |
| `dkim2_n_sigs` | string | Number of `DKIM2-Signature` headers found on the message. Parse with `tonumber()`. |
| `dkim2_highest_mf` | string | §12 DSN target: the `mf=` (bare MAIL FROM) of the highest-`i=` signature — the address a bounce would be addressed to. `"<>"` for the null sender, for which §12 says a DSN MUST NOT be sent. Not set when no signature carried an `mf=`. |

These keys are not set until `verify()` runs.

### SMTP response codes (§11.1 guidance)

Momentum leaves the decision of whether to accept, reject, or defer a
message — and which SMTP reply code to use — entirely to the operator's
Lua hook.  The `overall` field of the verify result maps to the following
SMTP behaviour as required by §11.1 of the DKIM2 spec:

| `overall` | Meaning | §11.1 guidance | Suggested action |
|---|---|---|---|
| `pass` | All verifiable signatures passed | — | Accept |
| `none` | No DKIM2 signatures present, or all use unsupported algorithms (§3.4) | — | Local policy |
| `fail` | Verified but wrong: hash/sig mismatch or policy violation (`donotmodify`/`donotexplode`, etc.) | SHOULD 550/5.7.x; **MUST NOT 4xx** | Reject or accept per policy |
| `permerror` | Could not verify: key missing/revoked/invalid, key/algorithm mismatch (`overall_reason="key_alg_mismatch"`), syntax error, chain integrity failure (`overall_reason` is one of `mi_syntax`/`mi_missing_tag`/`mi_revision_ahead`/`mi_revision_gap`/`mi_unsigned`/`i_sequence_broken`/`custody_break`/`recipe_chain_mismatch`, or the generic `chain_broken`), or `d=`/`mf=` domain mismatch (`overall_reason="d_mf_mismatch"`) (§11.1 / §11.4 PERMERROR) | SHOULD 550/5.7.x; **MUST NOT 4xx** | Reject (permanent) |
| `temperror` | Transient key-fetch failure (DNS timeout / SERVFAIL) | MAY 451/4.7.5 | Defer (temporary) |

**Key rules from §11.1**:
- `fail` and `permerror` **MUST NOT** use a 4xx reply code.
- Only `temperror` warrants a temporary (4xx) failure code.

Example hook skeleton:

```lua
local result, err = msys.validate.dkim2.verify(msg, vctx, { ... })
if not result then
  -- internal error (e.g. OOM); defer rather than silently accepting
  msys.log(msys.core.LOG_WARNING, "dkim2 verify error: " .. (err or "unknown"))
  vctx:set_code(451, "4.7.5 DKIM2 verification unavailable; please retry")
  return msys.core.VALIDATE_DONE
end
local overall = result.overall

if overall == "permerror" or overall == "fail" then
  -- §11.1 SHOULD 550/5.7.x for permanent failures.
  -- Note: "permerror" MUST NOT use 4xx.
  vctx:set_code(550, "5.7.1 DKIM2 verification failed")
  return msys.core.VALIDATE_DONE

elseif overall == "temperror" then
  -- §11.1 MAY 451/4.7.5 for transient key-fetch failures
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
