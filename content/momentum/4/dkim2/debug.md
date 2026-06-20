---
lastUpdated: "06/09/2026"
title: "DKIM2 Debugging Reference"
description: "Per-signature reason codes, recipe_chain detail strings, and ec_message context fields for DKIM2 sign and verify operations."
---

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
| `deferred` | An earlier hop's signature in a multi-hop message. Momentum validates the full chain of custody end-to-end via the §10.6 recipe chain rather than performing a full §10.5 per-signature key lookup and cryptographic check for each lower hop. If the chain is intact, `overall="pass"`. See [Known Limitations](/momentum/4/dkim2#known-limitations) for what this means for key provenance. Paired with `status="chain_verified"`. |
| `hh_mismatch` | Header hash mismatch — a content header (Subject, From, etc.) was modified after signing without a new `Message-Instance:` recording the change. |
| `bh_mismatch` | Body hash mismatch — the message body was modified after signing without a new `Message-Instance:` recording the change. |
| `sig_invalid` | Cryptographic verification failed — the signed-input bytes don't match the value in `s=`. Enable `debug_level = info` for selector, algorithm, and signed-input length detail. |
| `parse_error` | The `DKIM2-Signature:` header couldn't be parsed. Corrupt header or a broken upstream signer. |
| `missing_required_tags` | One or more of the seven required tags (`i=`, `m=`, `t=`, `mf=`, `rt=`, `d=`, `s=`) is absent from the signature. |
| `signature_expired` | The `t=` timestamp is older than `max_sig_age_days` (default 14). §10.3 says verifiers SHOULD reject such signatures; Momentum's implementation choice is to treat this as PERMERROR (permanently unverifiable — no cryptographic verification is attempted). Maps to `dkim2=permerror` in AR output. |
| `signature_future` | The `t=` timestamp is more than `max_sig_future_secs` (default 300 s) in the future. Treated as a soft policy failure (`dkim2=fail`): the timestamp was evaluated and rejected, but it is not a permanent infrastructure error — the spec (§7.4 MAY) does not define a verdict for this case. |
| `nonce_too_long` | The `n=` nonce exceeded the 64-character ceiling (§7.3 SHOULD). Treated as `dkim2=fail` — the constraint is a SHOULD, not a structural permanent error. |
| `mailfrom_mismatch` | The signed `mf=` doesn't match the actual envelope MAIL FROM — replay-to-different-sender. |
| `rcpt_mismatch` | The signed `rt=` doesn't match the actual envelope RCPT TO — replay-to-different-recipient. |
| `key_unavailable` | DNS resolver returned a transient failure (SERVFAIL, timeout, REFUSED). Rolls up to `overall="temperror"`. |
| `no_key` | DNS returned NXDOMAIN — no TXT record exists for the selector. |
| `key_revoked` | The DNS TXT record exists but `p=` is empty, signalling deliberate key revocation. |
| `key_b64_decode` | The `p=` value in the DNS record is not valid base64. Malformed DNS record. |
| `key_multiple_records` | DNS returned more than one TXT record for the selector (§10.5). DNS admin misconfiguration on the sender side — only one TXT record is allowed per selector. |
| `key_service_mismatch` | The DNS TXT record's `s=` service list does not include `email` or `*` (RFC 6376 §3.6.1). The key is published for a different service. |
| `key_invalid` | The DNS TXT record was present but structurally unusable (empty content, internal resolver error, or selector/domain too long to query). |
| `key_der_parse` | The `p=` base64 decoded successfully but the DER structure is not a valid public key. |
| `key_k_unknown` | The DNS record's `k=` tag names an algorithm Momentum doesn't support. |
| `key_v_mismatch` | The DNS TXT record's `v=` tag does not match the expected value. Malformed or wrong-version key record. Maps to `dkim2=permerror`. |
| `key_p_missing` | The DNS TXT record has no `p=` tag (distinct from empty `p=` which is revocation). Malformed key record. Maps to `dkim2=permerror`. |
| `key_size_invalid` | The RSA public key is smaller than the 1024-bit minimum required by §3.2. Maps to `dkim2=permerror`. |
| `key_e_invalid` | The RSA public key exponent is not 65537 as required by §3.2. Maps to `dkim2=permerror`. |
| `sig_parse_failed` | The signature value inside the `s=` tag could not be parsed or stripped for canonical-input construction. Indicates a malformed signature from the signer. |
| `mi_hash_missing` | The body hash could not be retrieved from the `Message-Instance:` `h=` tag: either no MI with a matching sequence number (`m=`) was present, or the MI's `h=` tag was malformed or lacked a hash entry for the algorithm named in its own `h=` prefix. |
| `verify_internal` | An internal error occurred during signature verification (memory allocation failure or cryptographic library error). The signature could not be evaluated. Maps to `dkim2=permerror` in AR output. |
| `unsupported_algorithm` | Every sig-set in `s=` uses an algorithm Momentum does not implement. Per §3.4 these are ignored rather than failed; paired with `status="none"`. |

**Authentication-Results mapping (§10.1):** Most `status="fail"` reasons produce `dkim2=fail` in the AR header. Exceptions, per the §10.1 FAIL / PERMERROR / TEMPERROR distinction:
- `key_unavailable` → `dkim2=temperror` (transient DNS failure)
- The following produce `dkim2=permerror` (unrecoverable errors): `no_key`, `key_invalid`, `key_multiple_records`, `key_service_mismatch`, `key_k_unknown`, `key_revoked`, `key_b64_decode`, `key_der_parse`, `key_v_mismatch`, `key_p_missing`, `key_size_invalid`, `key_e_invalid`, `missing_required_tags`, `parse_error`, `sig_parse_failed`, `mi_hash_missing`, `signature_expired`, `verify_internal`

`reason=` is included in all failure clauses (`dkim2=fail`, `dkim2=permerror`, `dkim2=temperror`) and absent from pass clauses (`dkim2=pass`).

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
| `dkim2_overall` | string | Verdict: `"pass"`, `"fail"`, `"permerror"`, `"temperror"`, or `"none"`. See the [SMTP response codes](/momentum/4/dkim2/verify#smtp-response-codes-94-guidance) table. |
| `dkim2_n_sigs` | string | Number of `DKIM2-Signature` headers found on the message. Parse with `tonumber()`. |

These keys are not set until `verify()` runs.
