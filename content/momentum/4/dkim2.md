---
lastUpdated: "06/09/2026"
title: "Using DKIM2 — Overview"
description: "DKIM2 is the successor to DKIM that adds replay protection (per-message envelope binding), an explicit chain of custody across forwarders, and a structured way for modifying hops to record what they changed. Momentum implements DKIM2 targeting draft-ietf-dkim-dkim2-spec-02."
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
[Debugging](/momentum/4/dkim2/debug) reference page.


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
  -- result.overall: "pass" | "fail" | "permerror" | "temperror" | "none"
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

*   **§10.5/§10.6 Lower-hop signatures not cryptographically verified**:
    §10.5 covers the full per-signature verification procedure (key
    lookup, record validation, and EVP cryptographic verification) for all
    signatures; §10.6 requires that the recipe chain be checked for every
    hop. Momentum satisfies §10.6 for all hops, and applies the full §10.5
    procedure only to the highest-i signature (the most recent hop). For
    earlier hop signatures (`i < max_i`), only the §10.6 recipe-chain hash
    comparison is performed — no key lookup and no EVP crypto. These
    appear as `status="chain_verified"`. The recipe chain confirms
    end-to-end content integrity (the fully reconstructed original-state
    hashes match the recorded MI[1] values) but does not verify that each
    lower-hop signature was made with the claimed signing key. Full §10.5
    compliance for lower hops would require reconstructing each hop's
    message state by reverse-applying subsequent recipes and
    EVP-verifying each lower-hop signature against that state — a
    significant architectural change that can be planned in a future
    release if desirable.

*   **§9.1 / §11 DSN**: The spec requires that when DKIM2 verification
    fails the MTA MUST NOT generate a DSN — reject with 5xx instead.
    This is not automatically enforced; policy must explicitly reject
    rather than bounce on verify failure. When generating a DSN, Momentum
    does not yet address it to the `mf=` address from the
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
    correctly. See the [Forwarder and modifier signing](/momentum/4/dkim2/sign#forwarder-and-modifier-signing) section for how to
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
    is not possible. See the [Forwarder and modifier signing](/momentum/4/dkim2/sign#forwarder-and-modifier-signing) section for
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

*   **§12 Bare CR/LF normalization**: The spec (§12) requires signing the
    message with all line endings in CRLF form. **Set
    [`rfc2822_lone_lf_in_body`](/momentum/4/config/ref-rfc-2822-lone-lf-in-body)
    and
    [`rfc2822_lone_lf_in_headers`](/momentum/4/config/ref-rfc-2822-lone-lf-in-headers)
    to `fix` when DKIM2 signing is in use** — `ignore` causes DKIM2 to
    sign non-CRLF content as-is, breaking the signature at any downstream
    hop that normalizes line endings.
