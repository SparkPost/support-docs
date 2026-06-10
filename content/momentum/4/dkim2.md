---
lastUpdated: "06/09/2026"
title: "Using DKIM2 (DomainKeys Identified Mail v2) Signatures"
description: "DKIM2 is the successor to DKIM that adds replay protection (per-message envelope binding), an explicit chain of custody across forwarders, and a structured way for modifying hops to record what they changed. Momentum implements DKIM2 targeting draft-ietf-dkim-dkim2-spec-02."
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


## <a name="dkim2_intro"></a> What DKIM2 is, and why

[DKIM1](/momentum/4/using-dkim) (RFC 6376) lets a sending domain attach a
cryptographic signature that lets a receiver confirm "this message came from
that domain, and the body + signed headers haven't been altered since
signing". It is widely deployed, but it has two known limitations:

1.  **Replay.** Nothing in a DKIM1 signature is bound to *who the message is
    for*. An attacker who captures a DKIM1-signed message can re-inject it
    to a different recipient and the signature still verifies. Receivers
    have no way to tell, from the signature alone, that the message
    bypassed the original delivery path.

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


## <a name="dkim2_atglance"></a> How it differs from DKIM1 at a glance

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


## <a name="dkim2_config"></a> Enabling the module

Add the following stanza to your Momentum configuration before using any
DKIM2 Lua API:

```
dkim2 {}
```

The `debug_level` option is documented in the
[Debugging](/momentum/4/dkim2#dkim2_debugging) section.

## <a name="dkim2_signing"></a> DKIM2 Signing

DKIM2 signing in Momentum is driven from Lua policy via
`msys.validate.dkim2.sign`; enabling DKIM2 means calling `sign()` from
your validation hook.

### Warning

Always call DKIM2 signing from the **per-recipient** validation hook
(`validate_data_spool_each_rcpt`), not from `validate_data_spool`. The
latter fires once on the shared parent message before per-recipient copies
are split off, and the resulting signature would commit to a single
recipient binding and then be cloned across every delivered copy —
defeating DKIM2's per-recipient replay protection.

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
| `keyfile` | yes (single) | Path to the PEM-encoded private key. When `sig_sets` is used, set per entry inside `sig_sets` instead. |
| `algorithm` | no | `"rsa-sha256"` (default) or `"ed25519-sha256"`. When `sig_sets` is used, set per entry inside `sig_sets` instead. |
| `sig_sets` | no | Array of `{selector, keyfile, algorithm}` tables for multi-algorithm signing (§7.8). When present, `selector`/`keyfile`/`algorithm` at the top level are ignored. |
| `mailfrom` | no | Override the envelope MAIL FROM for the `mf=` tag. Use this when signing as a forwarder. |
| `rcpt` | no | Override the envelope RCPT TO for the `rt=` tag. |
| `timestamp` | no | `t=` value. Defaults to the current UNIX time. |
| `nonce` | no | `n=` value (`-02` §8.3). Caller-supplied ASCII string, ≤ 64 chars, no `;`. Typically a DSN-correlation key or replay-cache key. |
| `nonce_random` | no | If `true` AND `nonce` is not set, the signer fills `n=` with a 22-character base64 random nonce. |
| `flags` | no | Lua array of flag tokens for `f=` (`-02` §8.9). Recognized values: `"exploded"`, `"donotexplode"`, `"donotmodify"`, `"feedback"`. Joined into the on-wire comma-separated form by the glue layer. |
| `recipe` | no | Raw JSON string conforming to `-02` §4. Attached to the `Message-Instance` header as the base64-encoded `r=` tag. Validated against the schema at sign time; malformed recipes fail the sign call with `recipe_invalid: <reason>`. |
| `relax_d_mf_check` | no | §7.7 requires `d=` to match the rightmost labels of the `mf=` (MAIL FROM) domain. Default `false` — `sign()` returns an error on mismatch. Set to `true` to downgrade to a `DWARNING` log and proceed, for configurations where the signing domain intentionally differs from the envelope domain. |
| `allow_recipe_z` | no | If `true`, accept the `b: {"z": true}` (truncated-body) recipe at sign time. Default `false`. The `-02` spec is internally inconsistent on this recipe shape — the changelog removes it but §11.1 still references it — so the signer refuses to emit it without an explicit opt-in. Set this only if you are interoperating with a verifier that requires the truncated-body recipe and you accept that the shape may be removed from the final spec. |
| `mi_hash_algorithms` | no | Lua array of hash algorithms for the `Message-Instance` `h=` body and header hashes (§5). Default `{"sha256"}`. Multiple algorithms produce comma-separated entries in `h=`, e.g. `{"sha256","sha512"}` → `h=sha256:HH:BH,sha512:HH:BH`. A plain string `mi_hash_algorithm="sha512"` is also accepted as a single-algorithm alias. The verifier automatically detects and uses whatever algorithm is present in the received MI `h=` tag. |

`sign()` returns `(true, header_value_string)` on success and `(nil,
error_string)` on failure. Always check the return; on failure the message
is left unmodified (no `DKIM2-Signature:` or `Message-Instance:` is
attached) and an error line is also logged to paniclog at level `error`.

### Forwarder / modifier signing

A forwarder that **re-routes** a message (different envelope) signs with
explicit overrides so the §8.3 chain-of-custody check downstream succeeds:

```lua
-- Hop 2 (forwarder) — its mf= must appear in the upstream rt= list,
-- and its rt= is the new downstream recipient.
msys.validate.dkim2.sign(msg, vctx, {
  domain   = "forwarder.example.net",
  selector = "fwd-2026",
  keyfile  = "/etc/dkim2/forwarder.example.net/fwd-2026.key",
  mailfrom = "list-bounce@forwarder.example.net",
  rcpt     = "subscriber@downstream.example.org",
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


## <a name="dkim2_verifying"></a> DKIM2 Verifying

### Warning

Always call DKIM2 verification from the **per-recipient** validation hook
(`validate_data_spool_each_rcpt`), not from `validate_data_spool`. The
`rt=` binding check compares the signed recipient against the actual
envelope RCPT TO. If `verify()` runs on the shared parent message before per-recipient
copies are split off, the envelope RCPT TO resolves to only the first
recipient and all other copies pass or fail based on that single address
— defeating the per-recipient replay protection.

DKIM2 verification is driven from Lua via `msys.validate.dkim2.verify`.
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
  --                   signature syntax error
  --   "chain_broken"  i= gap, or §8.3 mf=/rt= bridge broken, or §10.6
  --                   recipe-chain reconstruction didn't match MI[1]
  --   "temperror"     resolver-side transient failure (SERVFAIL, timeout)
  --   "none"          no DKIM2-Signature headers on the message

  if result.overall == "temperror" then
    -- Transient DNS failure: set a 4xx code so Momentum issues a
    -- temporary rejection after the validation pipeline completes,
    -- allowing the sender to retry once the resolver recovers.
    vctx:set_code(451, "4.7.5 DKIM2 key lookup failed; please retry")
  end

  if result.overall == "chain_broken" or
     result.overall == "fail"     or
     result.overall == "permerror" then
    vctx:set_code(550, "5.7.1 DKIM2 verification failed")
  end

  return msys.core.VALIDATE_CONT
end

msys.registerModule("my_dkim2_verifier", mod)
```

The wrapper stamps a new `Authentication-Results:` header with one
`dkim2=…` clause per directly-verified signature. RFC 8601 §5 states
that an MTA **MUST NOT** add a result to an existing header field, so
`verify()` always prepends a fresh AR header. `authservid` is required;
nothing is emitted when it is absent.

### Verify options

| Option | Meaning |
|---|---|
| `pubkey_pem` | A PEM-encoded public key. When set, the same key is used for every signature on the message (typically used in tests and policies that already have the key). When absent, each signature's `(d, s)` pair is resolved from DNS at `<selector>._domainkey.<domain>`. |
| `mailfrom` | Override the envelope MAIL FROM used for the `mf=` binding check. Defaults to the bare address from `ec_message_get_mailfrom`. **For testing only** — mirrors sign()'s `mailfrom=` option; useful for simulating specific envelope conditions without real SMTP transit. |
| `rcpt` | Override the actual envelope RCPT TO for the `rt=` binding check. Defaults to the bare address from `ec_message_get_rcptto`. **For testing only** — in production the envelope RCPT TO is always read from the message automatically and this option should not be set. |
| `authservid` | If set and no `Authentication-Results:` header already exists, a new one is created with this value as the authentication service identifier. Not required when an AR header is already present — the dkim2 results are appended to it automatically. |
| `skip_ar_header_update` | If `true`, suppress all AR output. Use this when the policy stamps AR itself. |
| `relax_d_mf_check` | If `true`, downgrade the §7.7 `d=`/`mf=` domain alignment check from a hard failure to a warning. Default `false` (strict — mismatched signing domain fails verification). |
| `skip_recipe_chain` | If `true`, skip the `-02` §10.6 recipe-chain check. The per-signature crypto + envelope checks and the §8.3 chain-of-custody check still run. Default `false` (chain check ON). |
| `relax_s_selectors` | If `true`, accept duplicate selectors within a single `s=` tag (for interop with non-spec-compliant signers). Default `false` — duplicates produce `reason=parse_error` per §7.8. |
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
          |                --   or signature syntax error (§10.1 PERMERROR)
          | "chain_broken" -- chain-of-custody or MI integrity failure
          | "temperror"    -- transient key-fetch failure (DNS timeout / SERVFAIL)
          | "none",        -- no DKIM2 signatures present
  overall_reason = nil              -- nil unless overall="fail" due to a
                 | "d_mf_mismatch"  --   policy downgrade after crypto pass:
                 | "donotmodify_violated"   -- §7.7 domain alignment failed
                 | "donotexplode_violated", -- §10.8 flag violation
  signatures = {
    { seq    = <integer i= value, 1-based; 0 if absent>,
      status = "pass"           -- signature verified
             | "fail"           -- signature failed; see reason
             | "chain_verified" -- earlier hop (i<N), deferred to recipe-chain check
             | "none",          -- all sig-sets used unsupported algorithms (reason="unsupported_algorithm")
      reason = "ok"             -- paired with status="pass"
             | "deferred"       -- paired with status="chain_verified"
             | <failure code>,  -- see Per-signature reason codes table below
      d  = "<signing domain>",
      s  = "<selector>:<alg>:<base64-sig>",  -- raw s= value
      mf = "<bare MAIL FROM>",               -- decoded from base64
      rt = "<bare RCPT TO>",                 -- decoded from base64; first entry only
      n  = "<nonce>",                        -- if present
      f  = "<flags string>",                 -- if present; comma-separated
    },
    ...
  }
}
```

Per `-02` §10.5, **only the most-recently-applied signature** (highest
`i=`) gets full cryptographic verification against the current message
state. Earlier signatures are tracked but marked
`status="chain_verified", reason="deferred"` — the §10.6 recipe-chain
check is the authoritative integrity signal for those hops, not their
own cryptographic verify (which would naturally fail for any modified
message).


## <a name="dkim2_debugging"></a> Debugging

Setting `debug_level` on the `dkim2` configuration stanza routes sign and
verify activity to `paniclog`:

```
dkim2 {
  debug_level = "info"
}
```

`error` (the default) surfaces only failures and resolver problems.
`warning` adds DNS issues and SHOULD-violation warnings. `info` adds one
DNS resolution line per verified signature plus any verification failure
with its cause (`bh_mismatch` with expected vs. actual hash, `sig_invalid`
with selector, algorithm, signed-input length, and OpenSSL detail).
`debug` adds raw TXT-record bytes from the resolver, a per-crypto-check
trace line, and the raw signed-input bytes on failure — too noisy for
steady-state production but useful when chasing a specific sign/verify
mismatch.

### Per-signature `reason` codes

Every signature on a verified message gets a `reason` string in
`result.signatures[i].reason`. The full set:

| Reason | Meaning |
|---|---|
| `ok` | Signature verified cleanly. Paired with `status="pass"`. |
| `deferred` | Earlier signature (i&lt;N) — not directly verified (§10.5); the §10.6 recipe-chain check is the authoritative integrity signal for it. Paired with `status="chain_verified"`. |
| `hh_mismatch` | Header hash mismatch — a content header (Subject, From, etc.) was modified after signing without a new `Message-Instance:` recording the change. |
| `bh_mismatch` | Body hash mismatch — the message body was modified after signing without a new `Message-Instance:` recording the change. |
| `sig_invalid` | Cryptographic verification failed — the signed-input bytes don't match the value in `s=`. Enable `debug_level = info` for selector, algorithm, and signed-input length detail. |
| `parse_error` | The `DKIM2-Signature:` header couldn't be parsed. Corrupt header or a broken upstream signer. |
| `missing_required_tags` | One or more of the seven required tags (`i=`, `m=`, `t=`, `mf=`, `rt=`, `d=`, `s=`) is absent from the signature. |
| `signature_expired` | The `t=` timestamp is older than `max_sig_age_days` (default 14). |
| `signature_future` | The `t=` timestamp is more than `max_sig_future_secs` (default 300 s) in the future. |
| `nonce_too_long` | The `n=` nonce exceeded the 64-character ceiling (§8.3). |
| `mailfrom_mismatch` | The signed `mf=` doesn't match the actual envelope MAIL FROM — replay-to-different-sender. |
| `rcpt_mismatch` | The signed `rt=` doesn't match the actual envelope RCPT TO — replay-to-different-recipient. |
| `d_mf_mismatch` | The signing domain `d=` does not match the rightmost labels of the `mf=` domain (§7.7). Only set when `relax_d_mf_check` is not enabled. |
| `key_unavailable` | DNS resolver returned a transient failure (SERVFAIL, timeout, REFUSED). Rolls up to `overall="temperror"`. |
| `no_key` | DNS returned NXDOMAIN — no TXT record exists for the selector. |
| `key_revoked` | The DNS TXT record exists but `p=` is empty, signalling deliberate key revocation. |
| `key_b64_decode` | The `p=` value in the DNS record is not valid base64. Malformed DNS record. |
| `key_der_parse` | The `p=` base64 decoded successfully but the DER structure is not a valid public key. |
| `key_k_unknown` | The DNS record's `k=` tag names an algorithm Momentum doesn't support. |
| `sig_parse_failed` | The signature value inside the `s=` tag could not be parsed or stripped for canonical-input construction. Indicates a malformed signature from the signer. |
| `unsupported_algorithm` | Every sig-set in `s=` uses an algorithm Momentum does not implement. Per §3.4 these are ignored rather than failed; paired with `status="none"`. |

### `recipe_chain:` detail strings (paniclog only)

When the recipe-chain check fails, the overall verdict rolls up to
`chain_broken` and the underlying cause is logged at `error` level in
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

### `ec_message` context fields

For downstream Lua hooks that need to know what the verifier decided
without re-verifying or re-parsing AR:

```lua
local overall = msg:context_get(msys.core.ECMESS_CTX_MESS, "dkim2_overall")
local n_sigs  = msg:context_get(msys.core.ECMESS_CTX_MESS, "dkim2_n_sigs")
```

Both fields are written by `msys.validate.dkim2.verify()` at the moment
it runs. **They are empty strings until `verify()` has been called on
that message.** Hooks that execute before verification, or on messages
where `verify()` was never called, will receive `""` from
`msg:context_get` — not a verdict string. Always guard with a nil / empty
check before acting on the value.

`dkim2_overall` is one of the six verdict strings above.
`dkim2_n_sigs` is the count of `DKIM2-Signature` headers verified
(string; parse with `tonumber()`).

### Authentication-Results output

`verify()` appends its results to the existing `Authentication-Results:`
header when one is already present (e.g. stamped by SPF or DKIM1
earlier in the pipeline), or creates a new one if `authservid` is
supplied and none exists yet:

```
Authentication-Results: <authservid>;
  dkim2=pass header.d=example.com header.s=sel-1:rsa-sha256:<sig>
        header.i=1 header.mf=<sender@example.com>
        header.rt=<rcpt@a.com>
```

One `dkim2=` clause per **directly-verified** signature. Per `-02` §10.5,
only the most-recently-applied signature (highest `i=`) receives full
cryptographic verification; earlier hops are deferred to the §10.6
recipe-chain check and omitted from the AR header entirely. A two-hop
message therefore produces exactly one `dkim2=` clause (for the i=N sig),
not two. The `reason=` field appears only on failures and uses the per-sig
reason codes from the table above.


## <a name="dkim2_smtp_codes"></a> SMTP response codes (§9.4 guidance)

Momentum leaves the decision of whether to accept, reject, or defer a
message — and which SMTP reply code to use — entirely to the operator's
Lua hook.  The `overall` field of the verify result maps to the following
SMTP behaviour as required by §9.4 of the DKIM2 spec:

| `overall` | Meaning | §9.4 guidance | Suggested action |
|---|---|---|---|
| `pass` | All verifiable signatures passed | — | Accept |
| `none` | No DKIM2 signatures present | — | Local policy |
| `fail` | Verified but wrong: hash/sig mismatch or policy violation (d=/mf= mismatch, donotmodify, etc.) | SHOULD 550/5.7.x if rejecting | Reject or accept per policy |
| `permerror` | Could not verify: key missing, revoked, or invalid; signature syntax error (§10.1 PERMERROR) | SHOULD 550/5.7.x; **MUST NOT 4xx** | Reject (permanent) |
| `chain_broken` | Chain-of-custody or MI integrity failure | SHOULD 550/5.7.x | Reject (permanent) |
| `temperror` | Transient key-fetch failure (DNS timeout / SERVFAIL) | MAY 451/4.7.5 | Defer (temporary) |

**Key rule from §9.4**: permanent failures (`permerror`, `chain_broken`)
**MUST NOT** result in a 4xx (temporary) SMTP reply.  Only `temperror`
warrants a temporary failure code.

Example hook skeleton:

```lua
local result = msys.validate.dkim2.verify(msg, vctx, { ... })
local overall = result and result.overall or "none"

if overall == "permerror" or overall == "chain_broken" or
   overall == "fail" then
  -- §9.4 SHOULD 550/5.7.x for permanent failures.
  -- Note: "permerror" and "chain_broken" MUST NOT use 4xx.
  vctx:set_code(550, "5.7.1", "DKIM2 verification failed")
  return msys.core.SMFIS_REJECT

elseif overall == "temperror" then
  -- §9.4 MAY 451/4.7.5 for transient key-fetch failures
  vctx:set_code(451, "4.7.5", "DKIM2 key server temporarily unavailable")
  return msys.core.SMFIS_TEMPFAIL

else
  -- pass / none: local policy
  return msys.core.VALIDATE_CONT
end
```

> **Note**: Whether to reject on `fail` or `none` is a local policy
> decision.  The spec only mandates the reply-code *type* (4xx vs 5xx)
> for the cases shown above.


## <a name="dkim2_key_management"></a> Key management

DKIM2 reuses the DKIM1 key infrastructure. Keys are PEM-encoded RSA or
Ed25519 private keys on disk; the matching public key is published in DNS
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


### Interoperability

The full DKIM2 logical flow is implemented and exercised end-to-end:

*   Per-signature envelope binding (`mf=` / `rt=`)
*   §8.3 chain-of-custody check
*   §10.5 most-recent-only cryptographic verification
*   §10.6 recipe-chain reconstruction


## <a name="dkim2_caveats"></a> Known limitations

The following features are not yet implemented and may be addressed in a
future release:

*   **§11 DSN routing**: When generating a Delivery Status Notification,
    Momentum does not yet address it to the `mf=` address from the
    highest-numbered DKIM2-Signature of the original message, nor does it
    suppress DSN generation when the original sender was `<>` (null sender).
    Inbound DSN authentication (§11.1.2) is also not implemented.

*   **§8.2 Forwarder auto-detection**: The `sign()` API fully supports
    co-signing (call it twice to add a forwarder signature), but Momentum
    does not auto-detect chain-of-custody breaks. Operators must explicitly
    call `sign()` when forwarding changes the MAIL FROM. Full automation
    requires the Recipe Accumulator API (planned; not yet available).


