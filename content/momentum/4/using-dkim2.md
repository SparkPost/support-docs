---
lastUpdated: "05/23/2026"
title: "Using DKIM2 (DomainKeys Identified Mail v2) Signatures"
description: "DKIM2 is the successor to DKIM that adds replay protection (per-message envelope binding), an explicit chain of custody across forwarders, and a structured way for modifying hops to record what they changed. Momentum ships a prototype DKIM2 implementation that targets draft-ietf-dkim-dkim2-spec-02."
---


### Warning

DKIM2 is a **prototype** implementation that targets the in-progress IETF draft
[`draft-ietf-dkim-dkim2-spec-02`](https://datatracker.ietf.org/doc/html/draft-ietf-dkim-dkim2-spec-02)
(May 2026, expires November 2026). The wire format is **not stable** — the
working group can and will revise it. Do not enable DKIM2 on production
outbound traffic without staging it first, and do not rely on the current
wire format being byte-compatible with any future Momentum release.

Known prototype-versus-draft gaps are listed under
[Known limitations](/momentum/4/using-dkim2#dkim2_caveats) at the end of
this page.


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
[Debugging](/momentum/4/using-dkim2#dkim2_debugging) section below.


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
[Debugging](/momentum/4/using-dkim2#dkim2_debugging) section.

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

| Option | Required? | Meaning |
|---|---|---|
| `domain` | yes | `d=` tag — the signing domain. Combined with `selector` to locate the public key in DNS at `<selector>._domainkey.<domain>`. |
| `selector` | yes | First component of `s=<selector>:<sig-name>:<base64-sig>`. |
| `keyfile` | yes | Path to the PEM-encoded private key on disk. |
| `algorithm` | no | `"rsa-sha256"` (default) or `"ed25519"` / `"ed25519-sha256"`. |
| `mailfrom` | no | Override the envelope MAIL FROM for the `mf=` tag. Use this when signing as a forwarder. |
| `rcpt` | no | Override the envelope RCPT TO for the `rt=` tag. |
| `timestamp` | no | `t=` value. Defaults to the current UNIX time. |
| `nonce` | no | `n=` value (`-02` §8.3). Caller-supplied ASCII string, ≤ 64 chars, no `;`. Typically a DSN-correlation key or replay-cache key. |
| `nonce_random` | no | If `true` AND `nonce` is not set, the signer fills `n=` with a 22-character base64 random nonce. |
| `flags` | no | Lua array of flag tokens for `f=` (`-02` §8.9). Recognized values: `"exploded"`, `"donotexplode"`, `"donotmodify"`, `"feedback"`. Joined into the on-wire comma-separated form by the glue layer. |
| `recipe` | no | Raw JSON string conforming to `-02` §4. Attached to the `Message-Instance` header as the base64-encoded `r=` tag. Validated against the schema at sign time; malformed recipes fail the sign call with `recipe_invalid: <reason>`. |
| `allow_recipe_z` | no | If `true`, accept the `b: {"z": true}` (truncated-body) recipe at sign time. Default `false`. The `-02` spec is internally inconsistent on this recipe shape — the changelog removes it but §11.1 still references it — so the signer refuses to emit it without an explicit opt-in. Set this only if you are interoperating with a verifier that requires the truncated-body recipe and you accept that the shape may be removed from the final spec. |

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
  --   "fail"          at least one sig failed (see signatures[i].reason)
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

  if result.overall == "chain_broken" or result.overall == "fail" then
    -- Local policy: reject, quarantine, lower reputation, etc.
  end

  return msys.core.VALIDATE_CONT
end

msys.registerModule("my_dkim2_verifier", mod)
```

The wrapper automatically updates the `Authentication-Results:` header
with one `dkim2=…` clause per directly-verified signature. If an AR
header already exists on the message (stamped by an earlier verifier
such as SPF or DKIM1), the dkim2 results are appended to it. If no AR
header exists, a new one is created — but only when `authservid` is
supplied, since a well-formed AR header requires an authentication
service identifier.

### Verify options

| Option | Meaning |
|---|---|
| `pubkey_pem` | A PEM-encoded public key. When set, the same key is used for every signature on the message (typically used in tests and policies that already have the key). When absent, each signature's `(d, s)` pair is resolved from DNS at `<selector>._domainkey.<domain>`. |
| `rcpt` | Override the actual envelope RCPT TO for the `rt=` binding check. Defaults to the bare address from `ec_message_get_rcptto`. |
| `authservid` | If set and no `Authentication-Results:` header already exists, a new one is created with this value as the authentication service identifier. Not required when an AR header is already present — the dkim2 results are appended to it automatically. |
| `skip_ar_header_update` | If `true`, suppress all AR output. Use this when the policy stamps AR itself. |
| `skip_recipe_chain` | If `true`, skip the `-02` §10.6 recipe-chain check. The per-signature crypto + envelope checks and the §8.3 chain-of-custody check still run. Default `false` (chain check ON). |

### Result table

```
result = {
  overall = "pass" | "fail" | "chain_broken" | "temperror" | "none",
  signatures = {
    { seq      = <integer i= value, 0 if absent>,
      status   = "pass" | "fail" | "chain_verified",
      reason   = "ok" | "deferred" | <failure code>,
      d        = "<signing domain>",
      s        = "<selector>:<sig-name>:<base64-sig>",
      mf       = "<envelope MAIL FROM>",
      rt       = "<envelope RCPT TO>",
      n        = "<nonce>",          -- if present
      f        = "<flags string>",   -- if present
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
line per sign / verify with the signature i= value, the resolved key
source, and the overall verdict. `debug` adds raw TXT-record bytes from
the resolver and per-step trace lines — too noisy for steady-state
production but useful when chasing a specific record.

### Per-signature `reason` codes

Every signature on a verified message gets a `reason` string in
`result.signatures[i].reason`. The full set:

| Reason | Meaning |
|---|---|
| `ok` | Signature verified cleanly. Paired with `status="pass"`. |
| `deferred` | Earlier signature (i&lt;N) — not directly verified per `-02` §10.5; the recipe-chain check is the authoritative integrity signal for it. Paired with `status="chain_verified"`. |
| `sig_invalid` | Cryptographic verification failed — signed bytes don't hash to the value in `s=`. Almost always means a hop modified a signed header or the body without recording it. |
| `bh_mismatch` | The body the verifier sees doesn't hash to the body-hash recorded in the upstream Message-Instance. The body was modified without a corresponding new Message-Instance. |
| `parse_error` | The `DKIM2-Signature:` header didn't parse as a valid tag-value list. Corrupt header or a broken signer. |
| `missing_required_tags` | The signature is missing the required `s=` tag. |
| `nonce_too_long` | The `n=` nonce exceeded the 64-character ceiling (per `-02` §8.3 the verifier rejects oversize nonces). |
| `mailfrom_mismatch` | The signed `mf=` doesn't match the actual envelope MAIL FROM. Classic replay-to-different-sender symptom. |
| `rcpt_mismatch` | The signed `rt=` doesn't match the actual envelope RCPT TO. Classic replay-to-different-recipient symptom. |
| `key_unavailable` | DNS resolver returned a transient failure (SERVFAIL, timeout, REFUSED). |
| `no_key` | DNS returned NXDOMAIN, or the TXT record had `p=` empty (key revocation per RFC 6376 §3.6.1). |
| `key_k_unknown` | DNS returned a record but its `k=` algorithm tag names an algorithm the verifier doesn't support. |

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
| `parse_h` | `Message-Instance` `m=1`'s `h=` tag didn't parse as `sha256:<header-hash>:<body-hash>`. The originator's MI is malformed. |
| `recipe_decode` | A hop's `r=` value didn't base64-decode. Wire-format corruption or a broken signer. |
| `recipe_invalid` | A hop's recipe failed schema validation at verify time. Should not occur with conforming signers (sign-time validation prevents emission of bad recipes); appearing here means the signer is broken. |
| `irreversible` | A hop's recipe declared `"h": null`, `"b": null`, or `"b": {"z": true}`. The verifier can't reverse-reconstruct past this hop. Local policy may accept irreversibility from trusted forwarders. |
| `apply_failed` | A recipe references a header or body line that doesn't exist in the current message. The recipe is inconsistent with the modification it claims to describe — likely a downstream hop modified the message AGAIN without recording it. |
| `hash_mismatch` | After walking all recipes in reverse, the reconstructed instance-1 hashes didn't match `Message-Instance` `m=1`'s recorded `h=`. Most common cause: a hop modified the message but didn't emit a recipe, or the recipe was wrong. |

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

`dkim2_overall` is one of the five verdict strings above.
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


## <a name="dkim2_key_management"></a> Key management

DKIM2 reuses the DKIM1 key infrastructure. Keys are PEM-encoded RSA or
Ed25519 private keys on disk; the matching public key is published in DNS
at `<selector>._domainkey.<domain>` as a TXT record with the standard
RFC 6376 §3.6.1 format (`v=DKIM1; k=rsa; p=<base64-SPKI>`).

If you already publish DKIM1 keys at a selector, you can reuse the same
selector for DKIM2 without any DNS change. To generate fresh keys for
DKIM2 specifically, follow the standard openssl recipe in
[Generating DKIM Keys](/momentum/4/using-dkim#using_dkim.generating).

### Warning

DKIM2 signatures and DKIM1 signatures **coexist on the wire**: they are
distinct headers (`DKIM2-Signature:` vs. `DKIM-Signature:`) and use
separate verifier paths. A message can carry both and either or both can
pass independently. If you enable DKIM2 signing for a domain that
already does DKIM1 signing, downstream verifiers that don't know about
DKIM2 will simply ignore the new header — they will continue to verify
the DKIM1 signature normally.


## <a name="dkim2_caveats"></a> Known limitations of the prototype

DKIM2 in Momentum currently differs from the `-02` draft in a few ways.
These don't affect signature validity within Momentum's own sign / verify
loop (the signer and verifier are symmetric, so DKIM2-signed traffic
between two Momentum nodes verifies correctly today), but they may
matter for byte-level interop with strict-`-02` verifiers in other
implementations:

*   **Multi-value `s=`** (the `s=set1,set2` shape sketched in `-02`
    §7.8 for future signature-set evolution) is not handled; single
    sig-set only.

These are the only known wire-level deltas. The full DKIM2 logical
flow — per-signature envelope binding, `-02` §8.3 chain-of-custody,
`-02` §10.6 recipe-chain reconstruction with `-02` §10.5's
most-recent-only crypto verification — is implemented and exercised
end-to-end.
