---
lastUpdated: "06/25/2026"
title: "Using DKIM2 — Overview"
description: "DKIM2 is the successor to DKIM that adds replay protection (per-message envelope binding), an explicit chain of custody across forwarders, and a structured way for modifying hops to record what they changed. Momentum implements DKIM2 targeting draft-ietf-dkim-dkim2-spec-03."
---

## On This Page

- [What DKIM2 is, and why](#what-dkim2-is-and-why)
- [How it differs from DKIM1 at a glance](#how-it-differs-from-dkim1-at-a-glance)
- [Enabling the module](#enabling-the-module)
- [Key management](#key-management)
- [Known limitations](#known-limitations)

## Reference

- [DKIM2 Signing — sign()](/momentum/4/dkim2/sign)
- [DKIM2 Verifying — verify()](/momentum/4/dkim2/verify)
- [DKIM2 Authentication-Results — ar_clauses()](/momentum/4/dkim2/ar-clauses)
- [DKIM2 Debugging Reference](/momentum/4/dkim2/debug)

---

### Warning

DKIM2 targets the in-progress IETF draft
[`draft-ietf-dkim-dkim2-spec-03`](https://datatracker.ietf.org/doc/html/draft-ietf-dkim-dkim2-spec-03)
(24 June 2026). The wire format is **not yet final** — the working group may revise
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
draft](https://datatracker.ietf.org/doc/html/draft-ietf-dkim-dkim2-spec-03);
the operationally-relevant signal codes (per-signature reasons, overall
verdicts, paniclog lines) are inventoried in the
[Debugging](/momentum/4/dkim2/debug) reference page.


## How it differs from DKIM1 at a glance

| Concern | DKIM1 (RFC 6376) | DKIM2 (draft `-03`) |
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

**Step 1 — Configuration**: Add the following stanza to your Momentum
configuration before using any DKIM2 Lua API:

```
dkim2 {}
```

The `debug_level` option is documented in the
[Debugging](/momentum/4/dkim2/debug) reference page.

**Step 2 — Policy hook**: DKIM2 signing and verification are driven
entirely from Lua policy. The module does nothing automatically — you
must call the APIs explicitly from a validation hook. The recommended
hook is `validate_data_spool_each_rcpt`, which runs once per recipient
and gives sign() access to the per-recipient envelope address for
`rt=` binding:

Signing and verification are separate concerns — typically signing is done
on outbound messages and verification on inbound. The examples below show
each in isolation.

**Outbound signing:**

```lua
require("msys.core")
require("msys.validate.dkim2")

local mod = {}

function mod:validate_data_spool_each_rcpt(msg, ac, vctx)
  local ok, err = msys.validate.dkim2.sign(msg, vctx, {
    domain   = "example.com",
    selector = "dkim2-2026",
    keyfile  = "/etc/dkim2/example.com/dkim2-2026.key",
  })
  if not ok then
    msys.log(msys.core.LOG_WARNING,
             "dkim2 sign failed: " .. (err or "unknown"))
    -- message continues unsigned; adjust policy as needed
  end
  return msys.core.VALIDATE_CONT
end

msys.registerModule("my_dkim2_signer", mod)
```

**Inbound verification:**

```lua
require("msys.core")
require("msys.validate.dkim2")

local mod = {}

function mod:validate_data_spool_each_rcpt(msg, ac, vctx)
  local result, err = msys.validate.dkim2.verify(msg, vctx, {
    authservid = "mta.example.com",
  })
  if not result then
    -- internal error; treat as temperror
    msys.log(msys.core.LOG_WARNING,
             "dkim2 verify error: " .. (err or "unknown"))
    vctx:set_code(451, "4.7.5 DKIM2 verification error; please retry")
    return msys.core.VALIDATE_DONE
  end
  -- Apply local policy based on result.overall.
  -- See /momentum/4/dkim2/verify for the full skeleton with all cases.
  if result.overall == "temperror" then
    vctx:set_code(451, "4.7.5 DKIM2 key lookup failed; please retry")
    return msys.core.VALIDATE_DONE
  end
  if result.overall == "fail" or result.overall == "permerror" then
    vctx:set_code(550, "5.7.1 DKIM2 verification failed")
    return msys.core.VALIDATE_DONE
  end
  -- "pass" or "none": accept per local policy
  return msys.core.VALIDATE_CONT
end

msys.registerModule("my_dkim2_verifier", mod)
```

See [DKIM2 Signing](/momentum/4/dkim2/sign) and
[DKIM2 Verifying](/momentum/4/dkim2/verify) for the full option
reference and more complete policy examples.

## Key management

DKIM2 reuses the DKIM1 key infrastructure. Keys are PEM-encoded RSA or
Ed25519 private keys, supplied either as a file path (`keyfile`) or as
raw PEM bytes in memory (`keybuf`). The matching public key is published in DNS
at `<selector>._domainkey.<domain>` as a TXT record with the standard
RFC 6376 §3.6.1 format (`v=DKIM1; k=rsa; p=<base64-SPKI>`).

If you already publish DKIM1 keys at a selector, you can reuse the same
selector for DKIM2 without any DNS change. To generate fresh keys for
DKIM2 specifically, follow the standard openssl recipe in
[Generating DKIM Keys](/momentum/4/using-dkim#generating-dkim-keys).

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

*   **Lower-hop signatures not cryptographically verified (§10.1 / §9.2 / §11.5–11.6)**:
    Momentum runs the full cryptographic procedure — key fetch (§11.5) and
    EVP signature verification (§11.6) — only on the highest-`i` signature,
    which §10.1 makes a SHOULD. Earlier hops (`i < max_i`) get no key lookup
    and no crypto (`s`tatus="chain_verified"); their integrity rests on the
    §9.2/§9.4 chain-of-custody check and the §11.4 recipe reconstruction,
    which reverse-applies each hop's recipe to rebuild the original message
    and confirms the reconstructed instance-1 hashes match MI[1]'s `h=`. This
    proves end-to-end content integrity but does not authenticate each lower
    hop's signing key, so earlier-hop signer identities should not be used
    for Reviser reputation. The spec does not yet clearly mandate per-hop
    cryptographic verification, and reputation of intermediate signers is not
    yet specified — the draft mentions it only in passing in its introduction
    (§1). Full per-hop verification — reverse-applying subsequent recipes to
    rebuild each hop's state and EVP-verifying each signature — would close
    this and is deferred to a future release.

*   **§10.1 / §12 DSN**: Per §10.1, after a failed DKIM2 verification the
    MTA MUST NOT generate a DSN; the spec recommends rejecting with a 5xx
    during the SMTP conversation as the best alternative. This is not
    automatically enforced — `verify()` only reports a verdict, so policy
    must explicitly reject rather than bounce on verify failure. On the
    generation side (§12), Momentum does not yet address a DSN to the `mf=`
    of the highest-numbered DKIM2-Signature of the original message, nor
    suppress DSN generation when that highest-numbered `mf=` is `<>` (null
    sender). Inbound DSN authentication (§12.1.2, a SHOULD) is also not
    implemented: the reject/propagate decision is scriptable via the inbound
    hooks, but verifying the embedded returned message's signatures — and
    checking signing-domain alignment against its highest-`i= rt=` — has no
    exposed API, since `verify()` operates only on the live message. Note
    also the -03 rule (§12.1.1): a DSN always contains the message headers
    up to the point at which the DSN creator saw the message on the outward
    journey, and the DSN is rebuilt to reflect the state the message was in
    when it was forwarded.  

*   **§9.2 Forwarder auto-detection**: When Momentum acts as a forwarder
    or mailing list (changing the envelope MAIL FROM and re-delivering),
    the policy hook must explicitly call `sign()` to add the forwarder's
    own DKIM2 signature. Momentum does not automatically detect that a
    forward is happening and call `sign()` on its own. Without this
    explicit call, the receiver only sees the original sender's signature —
    it has no way to verify that the forwarder handled the message
    correctly. See the [Forwarder and modifier signing](/momentum/4/dkim2/sign#forwarder-and-modifier-signing)
    section for how to do this.

*   **Content modifier recipe composition**: When an upstream-signed
    message passes through a Momentum stage that modifies it — the
    engagement tracker rewriting URLs, a footer filter, a list processor
    changing headers — `sign()` automatically detects the change (its
    freshly computed header/body hashes no longer match the prior
    Message-Instance) and requires a `recipe=` describing how to reverse
    the hop; without one the sign call fails. Header changes MUST be
    reversible: a recipe MUST be provided for any changed header
    field, and there is no null-header form. To remove all instances of a
    header field, give that field name an empty step array (`[]`). When
    the full body diff isn't available, a null **body** recipe declaring
    the change irreversible is permitted: `recipe='{"b":null}'` for a body
    change. This lets signing succeed and this hop's signature verifies
    downstream — but earlier signatures' content can no longer be
    reconstructed past this hop, so the inner chain is broken for that
    field and acceptance depends on the verifier's policy toward a broken
    chain. (Originated mail needs no recipe — there's no prior instance to
    diff against.) See the [Forwarder and modifier signing](/momentum/4/dkim2/sign#forwarder-and-modifier-signing) section for
    examples. Automatic change-recording by pipeline stages is not yet
    built; a planned Recipe Accumulator API would let `sign()` assemble
    the recipe without operator involvement.

    Both this limitation and the forwarder auto-detection above are blocked
    on the same Recipe Accumulator API (planned; not yet available).

*   **§11.1 AR reason strings use simplified form**: The spec defines
    error string templates with interpolated values, e.g.
    `"FAIL: Message Instance m=<x> body hash <value> mismatch"`. Momentum
    emits simplified strings without the ordinals or hash values, e.g.
    `reason="body hash mismatch"`. The full detail is always available
    from the message itself — ordinals and key values are in the
    `DKIM2-Signature:` and `Message-Instance:` headers, and the structured
    AR property tokens (`header.i=`, `header.m=`, `header.d=`,
    `header.s=`) repeat them in the AR clause. This is a §11.1 SHOULD —
    not a MUST — so verification behaviour is unaffected.

*   **§13 Bare CR/LF normalization**: The spec (§13) requires signing the
    message with all line endings in CRLF form. **Set
    [`rfc2822_lone_lf_in_body`](/momentum/4/config/ref-rfc-2822-lone-lf-in-body)
    and
    [`rfc2822_lone_lf_in_headers`](/momentum/4/config/ref-rfc-2822-lone-lf-in-headers)
    to `fix` when DKIM2 signing is in use** — `ignore` causes DKIM2 to
    sign non-CRLF content as-is, breaking the signature at any downstream
    hop that normalizes line endings.
