---
lastUpdated: "03/26/2020"
title: "Outbound TLS"
description: "A recent initiative among the large IS Ps and receiving domains is to use Transport Layer Security protocol TLS by default for mail traffic TLS is a standard for providing cryptographic protection of communication sessions between two systems It is derived from the earlier standard Secure Sockets Layer SSL and..."
---

A recent initiative among the large ISPs and receiving domains is to use Transport Layer Security protocol (TLS) by default for mail traffic. TLS is a standard for providing cryptographic protection of communication sessions between two systems. It is derived from the earlier standard, Secure Sockets Layer (SSL) and is the replacement for SSL. – They are not the same.

Momentum supports enforced TLS and opportunistic TLS. When TLS is enforced, Momentum will deliver messages only if TLS is successfully negotiated. Opportunistic TLS enables Momentum to deliver messages over TLS if the remote host advertises TLS support and the TLS negotiation succeeds but also provides an option to send the message as plain-text if the TLS negotiation fails.

### <a name="tls_option.configuration"></a> Configuration

Outbound TLS is configured using options in the `ecelerity.conf` file. You may configure Momentum to use TLS in the global, domain, binding, or binding_group scope when delivering mail. Momentum 4 supports the OpenSSL and GNUTLS libraries.

**Configuration Change. ** Support for GNUTLS is available as of version 4.1 for SMTP reception and SMTP deliveries only. Support for opportunistic TLS is available as of version 4.1.

By default, TLS is disabled. To use TLS, you must change the `TLS` option in the `ecelerity.conf` file and configure the following TLS-related options:

*   [crypto_lock_method](/momentum/4/config/crypto-lock-method)

*   [ssl_lock_method](/momentum/4/config/ssl-lock-method)

*   [starttls_injection_policy](/momentum/4/config/starttls-injection-policy)

*   [tls](/momentum/4/config/ref-tls)

*   [tls_allow_renegotiation](/momentum/4/config/tls-allow-renegotiation)

*   [tls_ca](/momentum/4/config/tls-ca)

*   [tls_certificate](/momentum/4/config/tls-certificate)

*   [tls_ciphers](/momentum/4/config/tls-ciphers)

*   [tls_dhparams_file](/momentum/4/config/ref-tls-dhparams-file)

*   [tls_enable_dhe_ciphers](/momentum/4/config/ref-tls-enable-dhe-ciphers)

*   [tls_engine](/momentum/4/config/tls-engine)

*   [tls_ifavailable_fallback](/momentum/4/config/tls-ifavailable-fallback)

*   [tls_key](/momentum/4/config/tls-key)

*   [tls_protocols](/momentum/4/config/tls-protocols)

*   [tls_verified_peer_is_authorized](/momentum/4/config/tls-verified-peer-is-authorized)

*   [tls_verify](/momentum/4/config/tls-verify)

### Note

If you enable TLS, see [“Security Considerations”](/momentum/4/install-security-considerations) for information on how to fix the POODLE vulnerability using either the [tls_protocols](/momentum/4/config/tls-protocols) option (for OpenSSL) or the [tls_ciphers](/momentum/4/config/tls-ciphers) option (for GNUTLS).

The following is an example configuration in the `ecelerity.conf` file:

```
# TLS settings for customer-1
binding "customer-1" {
  tls_key = "/path/to/customer1.key"
  tls_certificate = "/path/to/customer2.cert"

  domain "trusted.partner.example.com" {
    tls = "required"
    tls_ca = "/path/to/customer1/partners.cabundle"
  }
}
```

### <a name="tls_option.logging"></a> Logging Macros

A number of macros are available to enable logging of details about the TLS session used for a delivery attempt. To use these macros, you must load the tls_macros module. See [“tls_macros – TLS-related Logging”](/momentum/4/4-tls-macros).