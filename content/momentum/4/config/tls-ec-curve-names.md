---
lastUpdated: "05/21/2026"
title: "tls_ec_curve_names"
description: "tls_ec_curve_names selects the OpenSSL elliptic curves or TLS groups used for ECDHE key exchange in inbound and outbound TLS sessions. Specify a single curve short name (e.g. secp384r1) or, in newer versions, a colon-separated list in preference order (e.g. secp384r1:prime256v1)."
---

<a name="config.tls_ec_curve_names"></a>
## Name

tls_ec_curve_names — select the elliptic curves or TLS groups used for ECDHE key exchange in inbound and outbound TLS sessions

## Synopsis

`TLS_EC_Curve_Names = "<curve>[:<another curve>]"`

## Description

This option selects the elliptic curves (or TLS groups, in TLS 1.3 terminology) advertised and used during ECDHE key exchange for TLS sessions established by Momentum. The value is a curve short name as accepted by OpenSSL, for example `secp384r1` or `prime256v1`. A full list of curve short names available on the host can be obtained by running `openssl ecparam -list_curves` on the host machine.

This option has no default value; when unset, Momentum lets OpenSSL pick the curve from its built-in defaults.

**Configuration Change.** As of version 5.3, the value may also be a colon-separated list of curve or TLS group short names, in preference order. For example:

`TLS_EC_Curve_Names = "secp384r1:prime256v1"`

In earlier versions, only a single curve short name is accepted; setting a colon-separated list is rejected.

The list must be normalized: no leading or trailing whitespace, no spaces around the `:` delimiters, and no empty segments (e.g. `"a::b"` or `":a"` are rejected). Each token must be a curve or group name accepted by OpenSSL; if any token is unknown, the whole value is rejected at `config set` time with an `invalid curve or group list` error.

This option has no meaning for GNUTLS.

### Note

When Momentum is built or deployed against a *FIPS-validated cryptographic library* (for example OpenSSL with the FIPS provider, or a drop-in FIPS-validated replacement like SafeLogic), the set of curves the library will actually use is restricted to those approved by the active FIPS module — typically a subset of the NIST P-curves, with `prime256v1`, `secp384r1`, and `secp521r1` being the safe baseline across modules. Curves outside that subset are likely to be rejected by OpenSSL at config-set time with the `invalid curve or group list` error, even if `openssl ecparam -list_curves` shows them as known to the binary.

The exact accepted set varies by OpenSSL version, FIPS module version, and (on Linux distributions that ship one, like Red Hat Enterprise Linux) the system-wide crypto policy, which layers on top of the FIPS module's own restrictions. FIPS 140 itself — currently FIPS 140-3, with FIPS 140-2 modules still common in production through the transition — governs the *module*: its cryptographic boundary, self-tests, and key handling. *Which* curves that module is permitted to expose is defined separately, by NIST Special Publications: SP 800-186 (finalized February 2023) for ECDH curves, and FIPS 186-5 (also 2023) for ECDSA. A module certified against earlier revisions of those publications will reject curves added later — for example, `x25519` is recognized by OpenSSL 3 and listed by `openssl ecparam -list_curves`, but FIPS modules certified before SP 800-186 (including most FIPS 140-2 modules) refuse it, so setting `tls_ec_curve_names = "x25519"` against such a module fails validation. Non-certified FIPS-style libraries add yet another axis of variation: they may approximate the restrictions of a certified module but do not necessarily track the latest Special Publication updates.

**Operators targeting a FIPS-enabled environment should validate their `tls_ec_curve_names` value** against the curves enabled on the host before relying on it. As a practical safeguard, prefer building the list around the universally-FIPS-approved baseline (`prime256v1`, `secp384r1`, `secp521r1`); when targeting a host whose FIPS module's accepted set is unknown or heterogeneous across a fleet, a baseline-only value such as `TLS_EC_Curve_Names = "secp384r1:prime256v1"` is accepted across all FIPS modules and avoids the risk that the whole list is rejected because of a single curve the active provider does not register.

## Scope

`tls_ec_curve_names` is valid in the global scope.
