---
lastUpdated: "10/03/2026"
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
  --   "pass"          every signature checked verified and the chain of custody
  --                   is intact
  --   "fail"          verified but wrong: hash/sig mismatch or policy
  --                   violation (donotmodify/donotexplode)
  --   "permerror"     a permanent error; result.overall_reason names it
  --   "temperror"     resolver-side transient failure (SERVFAIL, timeout)
  --   "none"          no DKIM2-Signature headers, or every signature set
  --                   aside (ignored rather than failed)

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
| `mailfrom` | **Normally omitted** — Momentum reads the envelope MAIL FROM, including the null sender `<>`. Pass `mailfrom=""` to check as the null sender whatever the envelope says, or an address to check against a MAIL FROM other than the envelope's. An address may be given bare (`user@example.com`) or envelope-decorated (`<user@example.com>`, `MAIL FROM:<user@example.com>`, or `msg:mailfrom()`); it is normalized to the bare address before the `mf=` binding comparison, the same as `rcptto`. |
| `rcptto` | **Normally omitted** — Momentum auto-populates from the active envelope recipient. Production exception: in `validate_data_spool` (shared hook), pass the full recipient list explicitly for complete §11.4 multi-recipient checking. In `validate_data_spool_each_rcpt` (recommended), auto-populates correctly per recipient. Accepts a string or a Lua table of bare addresses. A string may hold one address or several separated by commas. ALL listed addresses must be present in `rt=` for the signature to pass. |
| `authservid` | When set, a new `Authentication-Results:` header is prepended (when the result contains at least one clause) with this value as the authentication service identifier. It must be a host name or another token: printable ASCII characters other than space, double quote and `()<>@,;:\/[]?=`. A number is accepted as its decimal text. Any other value makes `verify()` return an error. Existing AR headers are never modified. When absent, no AR header is emitted. |
| `relax_d_mf_check` | If `true`, do not require the `mf=` domain to lie within `d=` (§8.8 / §11.4), so `mf_d_mismatch` is never reported. Default `false`: a mismatch is a `permerror` for the signature. **Setting this to `true` is non-spec-compliant**; use it only for testing. |
| `skip_recipe_chain` | If `true`, Momentum reads no recipe and does not rebuild or check any `Message-Instance` below the highest one. A signature that covers a lower instance then has `status="none"` unless a problem names it. Default `false`. **Setting this to `true` makes the verifier non-spec-compliant** — §10.2 is a SHOULD requirement. Use it only for debugging or when a signer's recipes are known to be broken. |
| `relax_s_selectors` | If `true`, accept duplicate selectors within a single `s=` tag. Default `false` — duplicates give `reason="sig_dup_selector"` per §8.9. **Setting this to `true` makes the verifier non-spec-compliant** — §8.9 places a MUST requirement on distinct selectors. Use only for interop with known non-compliant signers. |
| `allow_nd_highest` | §8.7 special case: accept a message whose **highest-numbered** DKIM2-Signature carries an `nd=` tag (and therefore no `mf=`/`rt=`) — the "imaginary final hop". The receiver cannot validate `MAIL FROM`/`RCPT TO` and must "rely on out-of-band information" to accept it. Default `false`: such a message is a `permerror` with `reason="nd_unexpected"`. Set to `true` **only** when such an out-of-band arrangement exists; the §11.4 envelope check is then skipped for that hop. Lua policy can gate acceptance further by inspecting the `nd=` and `d=` values. |
| `reject_body_redaction` | §5.2 irreversible body: a recipe with `"b": null` says a hop redacted the body and the earlier body cannot be recreated. Default `false`: the message can pass, `result.body_redacted` is `true`, and the body of the instances below the redaction is not verified; the header fields and the highest signature are checked as usual. Set to `true` to make such a message a `permerror` with reason `body_redacted`. |
| `on_recipe_key_case` | What to do with a recipe whose header-field keys are not lower case (§5.1): `"lowercase"` (default) applies the recipe as if its keys were lower case; `"error"` makes the recipe invalid, a `permerror` with reason `mi_invalid_json`. |
| `on_bad_hash_algorithm` | What to do with a `Message-Instance` that names a hash algorithm twice (§7.3): `"error"` (default) makes it a `permerror` with reason `mi_dup_hash_alg`; `"drop"` keeps the first hash-set for that algorithm and reads the instance as usual. |
| `max_sig_age_days` | §11.3: reject signatures whose `t=` timestamp is older than this many days. Default `14`. Values `<= 0` disable the age check. |
| `max_sig_future_secs` | §8.4: reject signatures whose `t=` timestamp is more than this many seconds in the future. Default `300` (5-minute clock-skew tolerance). Values `<= 0` disable the check. |
| `emit_debug_headers` | If `true`, stamp `X-MSYS-DKIM2-Verify-Overall` and `X-MSYS-DKIM2-Verify-Sig` headers on the message. Useful for staging and debugging; **do not enable in production** as these headers expose internal verification detail and inflate message size. Default `false`. |

`verify()` returns `(result, err)`:
- **Normal execution** (including messages with no DKIM2 signatures): `result` is
  the result table below, `err` is `nil`. A message with no signatures returns
  `result.overall = "none"` — `result` is never `nil` in this case.
- **Internal failure**, such as running out of memory: `result` is `nil`,
  `err` is a non-nil string describing the cause.
- **Invalid option value**, such as `on_bad_hash_algorithm = "dropped"`:
  `result` is `nil` and `err` names the option.

Always capture both return values so internal failures can be logged and acted on
separately from signature verdicts.

### Result table

```
result = {
  overall = "pass"         -- every signature checked passed
          | "fail"         -- verified but wrong: a hash or signature
          |                --   mismatch, or a donotmodify/donotexplode
          |                --   violation
          | "permerror"    -- a permanent error; overall_reason names it
          | "temperror"    -- transient key-fetch failure (DNS timeout / SERVFAIL)
          | "none",        -- no DKIM2-Signature headers, or every signature
          |                --   set aside
  overall_reason = "<reason>",   -- the reason of the problem that decided
                                 --   overall; absent when overall is "pass"
                                 --   or "none" with no problem
  overall_text   = "<text>",     -- that problem's text, in the draft's
                                 --   wording where it has one
  overall_detail = "<detail>",   -- why, for an operator; often absent
  signatures = {                 -- highest i= first
    { seq    = <i=>,             -- 1 for the originator, 2 for the first
                                 --   forwarder, ...
      m      = <m=>,             -- the Message-Instance it covers
      status = "pass" | "fail" | "permerror" | "temperror" | "none",
      reason = "<reason>",       -- see the reason table below
      d  = "<signing domain>",
      nd = "<next domain>",      -- only on an nd= bridge
      mf = "<bare MAIL FROM>",   -- "" for the null sender; absent on a bridge
      rt = "<bare RCPT TO>[,<bare RCPT TO>...]",
      s  = "<selector>[,<selector>...]",
      n  = "<nonce>",           -- if present
      f  = "<flags>",           -- if present, comma-separated
      t  = <timestamp>,
      key_testing = true,        -- a key had t=y (RFC 6376 §3.6.1)
      current     = true,        -- its Message-Instance records the same
                                 --   hashes as the highest signature's
      sets = {                   -- one per sig-set of s=, in order
        { selector = "<selector>", alg = "<algorithm>",
          outcome  = "pass" | "fail" | "key_fault" | "testing" | "unchecked",
          reason   = "<reason>", -- for a key_fault
          key_name = "<selector>._domainkey.<domain>",
          detail   = "<why it failed>",
          key_bits = <size of the key>, },
        ...
      },
    },
    ...
  },
  problems = {                   -- every problem found, in the order checked
    { result = "<result>", reason = "<reason>", i = <i=>, m = <m=>,
      text = "<text>", detail = "<detail>" },
    ...
  },
  ar = {                         -- the Authentication-Results entries
    { result = "<result>", i = <i=>, d = "<domain>",
      reason = "<reason>", text = "<reason= text>" },
    ...
  },
  highest_i  = <i= of the highest signature>,   -- absent with no signature
  highest_mf = "<bare MAIL FROM of the highest signature>",
                 -- the DSN target (§12); "<>" for the null sender;
                 -- absent when the highest signature has no mf=
  dsn_prohibited = true | false,  -- true when the message must not get a DSN
  replay_id      = "<identity>",  -- only when the message has one (§11.9)
  replay_record  = true | false,  -- with replay_id: true when the identity
                                  --   may be recorded
  body_redacted  = true,          -- only when a recipe declared an earlier
                                  --   body irreversible
}
```

Absent fields are `nil`. The `reason` names are listed under
[Reason codes](#reason-codes).

**Key testing mode (`key_testing`)**: When a signing key is published with
`t=y` in its DNS TXT record, the signer is testing that key in production.
RFC 6376 §3.6.1 (inherited by DKIM2) says verifiers MUST NOT treat a message
signed with a testing key differently from unsigned mail. Momentum sets
`key_testing=true` on the signature. A signature whose checked keys are all
in testing mode is set aside: its `status` is `"none"` and its `reason` is
`key_testing`, and it decides `overall` only when no other signature passed.

For a message that passed through several signing hops, Momentum checks
every signature: it looks up each key, verifies each signature, and compares
the hashes of each `Message-Instance` with the message as reconstructed from
the recipes. Each entry in `result.signatures` carries its own verdict.
Momentum also checks the chain of custody — the §11.4 envelope `mf=`/`rt=` links —
end to end. `overall` is the first `fail` or `permerror` found, in the order
of §11, else the first `temperror`, else `none` when a signature was set
aside and none passed, else `pass`. A signature whose `Message-Instance`
cannot be rebuilt has `status="none"` unless a problem names it.

**`nd=` "imaginary hop" bridges (§8.7 / §9.3).** A forwarder that changes
domains may insert a bridge signature carrying an `nd=` ("next domain") tag
instead of fabricating `mf=`/`rt=` values. Momentum verifies these. The
bridge must not be the highest-numbered signature, unless `allow_nd_highest`
is set (`reason="nd_unexpected"`). Its `nd=` value must exactly match the
`d=` of the next signature: if it does not, the next signature has
`reason="custody_break"`, and the bridge, when it verifies,
`reason="nd_mismatch"`. Its own signing domain must relaxed-match a
recipient domain in the prior hop's `rt=` (`reason="custody_break"`). The
bridge appears in `result.signatures` with its `nd` field set.

### Reason codes

`reason` is set on each entry of `result.signatures` and `result.problems`,
on a `key_fault` entry of `signatures[].sets`, and on
`result.overall_reason`. Policy code can branch on them. A signature's
`reason` also appears in the `X-MSYS-DKIM2-Verify-Sig` debug header. A
signature whose checks all pass has `status="pass"` and a `reason` of `none`.

The result for each reason is `permerror` unless the table says otherwise.

| Reason | Meaning |
|---|---|
| `mi_missing` | A signature names a `Message-Instance` that is not on the message. |
| `mi_syntax`, `mi_tag_missing`, `mi_invalid_json` | A `Message-Instance` is malformed, lacks a required tag, or its recipe is not valid JSON or fails the recipe schema (for example, a header-field key that is not lower case with `on_recipe_key_case="error"`). |
| `mi_not_signed` | No signature covers a `Message-Instance`. |
| `mi_dup_hash_alg` | A `Message-Instance` names a hash algorithm twice. See `on_bad_hash_algorithm`. |
| `mi_no_supported_hash` | A `Message-Instance` has no hash-set in an algorithm Momentum implements (`sha256`, `sha512`). |
| `sig_missing`, `sig_syntax`, `sig_tag_missing`, `sig_tag_unexpected` | A `DKIM2-Signature` is missing from the `i=` sequence, malformed, lacks a required tag, or carries a tag it should not. |
| `sig_dup_selector`, `sig_too_many_selectors` | `s=` repeats a selector (§8.9; see `relax_s_selectors`), or has more than two sig-sets for one algorithm. |
| `sig_m_order` | A signature covers an older `Message-Instance` than the signature below it. |
| `sig_expired` | `t=` is older than `max_sig_age_days`. |
| `sig_future` | `t=` is more than `max_sig_future_secs` in the future. |
| `mail_from_mismatch`, `rcpt_to_mismatch` | The signed `mf=` or `rt=` does not match the envelope MAIL FROM or RCPT TO. |
| `mf_d_mismatch` | The `mf=` domain does not lie within `d=` (see `relax_d_mf_check`). |
| `nd_mismatch`, `nd_unexpected` | An `nd=` value differs from the next `d=`, or `nd=` is on the highest signature. See `allow_nd_highest`. |
| `custody_break` | The chain of custody is broken: an `mf=` or bridge `d=` matches no `rt=` of the previous signature, a `d=` is not the domain the previous signature's `nd=` names, or `mf=` is `<>` after a signature with `rt=`. |
| `key_unavailable` | DNS returned a transient failure (SERVFAIL, timeout). Result `temperror`. |
| `key_missing` | No TXT record exists for the selector. |
| `key_multiple` | More than one TXT record exists for the selector. |
| `key_syntax` | The key record cannot be used: malformed record, `p=` that is not base64 or not a usable key of the record's `k=`, RSA key under 1024 bits or over 4096 bits, or an exponent other than 65537; `detail` says which. For an Ed25519 key in the form Momentum 5.3.0 expected, see [Upgrading from Momentum 5.3.0](/momentum/4/dkim2/sign#upgrading-from-momentum-530). |
| `key_alg_mismatch` | The key's type does not match the signature's algorithm. |
| `key_revoked` | The key record has an empty `p=`. |
| `sig_incorrect` | The signature does not verify. Result `fail`. |
| `sig_partial` | At least one sig-set of a signature verified and another sig-set's signature did not. A sig-set with a missing or unusable key does not cause this. Result `fail`. |
| `sig_no_supported_alg` | Every sig-set uses an algorithm Momentum does not implement (§3.4). Result `none`. |
| `key_testing` | Every key checked is in testing mode. Result `none`. |
| `header_hash_mismatch`, `body_hash_mismatch` | A hash in a `Message-Instance` does not match the message. Result `fail`. |
| `recipe_unappliable` | A recipe cannot be applied to the message, so the instance below it cannot be rebuilt. |
| `donotmodify_violated`, `donotexplode_violated` | The message was modified or exploded after a signature asked it not to be. Result `fail`. |
| `body_redacted` | A recipe declared an earlier body irreversible and `reject_body_redaction` is `true`. |
| `limit` | The message exceeds a verification limit, such as the number of header fields. |

A `Message-Instance` may carry both `sha256` and `sha512` hash-sets; every
one is compared, and one mismatch fails the signature (§11.7).

Authentication-Results output uses these results; see
[Authentication-Results Output](/momentum/4/dkim2/ar-clauses).

### ec_message context fields

`verify()` writes the following context variables so downstream hooks can
read the outcome without re-verifying or parsing `Authentication-Results:`:

| Context key | Type | Value |
|---|---|---|
| `dkim2_overall` | string | Verdict: `"pass"`, `"fail"`, `"permerror"`, `"temperror"`, or `"none"`. See the [SMTP response codes](/momentum/4/dkim2/verify#smtp-response-codes-104-guidance) table. |
| `dkim2_n_sigs` | string | Number of `DKIM2-Signature` headers found on the message. Parse with `tonumber()`. |
| `dkim2_highest_mf` | string | §12 DSN target: the `mf=` (bare MAIL FROM) of the highest-`i=` signature — the address a bounce would be addressed to. `"<>"` for the null sender, for which §12 says a DSN MUST NOT be sent. Not set when the highest readable signature has no `mf=`. |

These keys are not set until `verify()` runs.

### SMTP response codes (§10.4 guidance)

Momentum leaves the decision of whether to accept, reject, or defer a
message — and which SMTP reply code to use — entirely to the operator's
Lua hook.  The `overall` field of the verify result maps to the following
SMTP behaviour as required by §10.4 of the DKIM2 spec:

| `overall` | Meaning | §10.4 guidance | Suggested action |
|---|---|---|---|
| `pass` | All verifiable signatures passed | — | Accept |
| `none` | No DKIM2 signatures present, or every signature set aside | — | Local policy |
| `fail` | Verified but wrong: hash/sig mismatch or policy violation (`donotmodify`/`donotexplode`, etc.) | SHOULD 550/5.7.x; **MUST NOT 4xx** | Reject or accept per policy |
| `permerror` | A permanent error; `overall_reason` names it (see [Reason codes](#reason-codes)) | SHOULD 550/5.7.x | Reject (permanent) |
| `temperror` | Transient key-fetch failure (DNS timeout / SERVFAIL) | MAY 451/4.7.5 | Defer (temporary) |

**Key rules from §10.4**:
- `fail` (cryptographic signature verification failure) **MUST NOT** use a
  4xx reply code; other permanent errors (`permerror`) SHOULD also use 5xx.
- Only `temperror` (a temporary failure such as key-server unavailability)
  warrants a temporary (4xx) failure code.

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
  -- §10.4 SHOULD 550/5.7.x for permanent failures;
  -- "fail" (crypto failure) MUST NOT use 4xx.
  vctx:set_code(550, "5.7.1 DKIM2 verification failed")
  return msys.core.VALIDATE_DONE

elseif overall == "temperror" then
  -- §10.4 MAY 451/4.7.5 for transient key-fetch failures
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
