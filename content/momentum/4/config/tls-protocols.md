---
lastUpdated: "06/03/2026"
title: "tls_protocols"
description: "tls protocols allowable ciphers for TLS inbound and outbound sessions tls protocols baseprotocol additional protocols Configuration Change This option is available as of version 4 1 0 2 tls protocols specifies the allowable protocols for an Open SSL TLS session The available protocols are ALL SS Lv 2 SS Lv..."
---

<a name="config.tls_protocols"></a> 
## Name

tls_protocols — allowable ciphers for TLS inbound and outbound sessions

## Synopsis

`tls_protocols = "+<baseprotocol>[:[+|-]<additional protocols]"`

<a name="idp26990416"></a> 
## Description

`tls_protocols` specifies the allowable protocols for an OpenSSL TLS session. Momentum parses the
tokens `ALL`, `SSLv2`, `SSLv3`, `TLSv1.0`, `TLSv1.1`, `TLSv1.2` and `TLSv1.3` (the last since Momentum
4.6). Each is enabled or disabled by prefixing its name with a “+” or “-“ respectively. The following example disables the older protocols, leaving TLS 1.2 and TLS 1.3:

`TLS_Protocols = "+ALL:-SSLv3:-TLSv1.0:-TLSv1.1"`

This option has no meaning for GNUTLS.

The default value is “+ALL”.

### Note

The tokens above are still accepted for backward compatibility, but which protocols can **actually** be negotiated is determined by the OpenSSL build (1.1.1, as on RHEL 8, through the 3.5.x series) and — on distributions that ship one — the system-wide crypto policy:

*   **SSLv2** — removed from OpenSSL as of 1.1.0 and never negotiated. Momentum builds its contexts with `TLS_method()`, so the `SSLv2` token has no effect.

*   **SSLv3** — insecure and disabled by default; platform OpenSSL packages (including RHEL 8) typically compile it out or block it via the crypto policy. Treat it as unavailable.

*   **TLSv1.0 / TLSv1.1** — deprecated; still implemented by OpenSSL but commonly disabled by the OS crypto policy. For example, the RHEL 8 DEFAULT policy permits only TLS 1.2 and TLS 1.3, so enabling these tokens has no effect there.

*   **TLSv1.2 / TLSv1.3** — the protocols in normal use.

As a result, `+ALL` no longer implies SSLv2 or SSLv3, and on a typical RHEL 8 deployment it resolves to TLS 1.2 and TLS 1.3 only.

<a name="idp26999712"></a> 
## Scope

`tls_protocols` is valid in the binding, binding_group, domain, ecstream_listener, esmtp_listener, global, http_listener, listen, pathway, pathway_group and peer scopes.
