---
lastUpdated: "03/26/2020"
title: "Inbound TLS"
description: "Transport Layer Security TLS can be easily configured on an SMTP listener using the following configuration snippet The following are the configuration options related to inbound TLS tls allow renegotiation tls certificate tls ciphers tls client ca tls dhparams file tls enable dhe ciphers tls key tls protocols tls verified..."
---

Transport Layer Security (TLS) can be easily configured on an SMTP listener using the following configuration snippet:

```
ESMTP_Listener {
  Listen ":25" {
    TLS_Certificate = "/path/to/cert.pem"
    TLS_Key = "/path/to/key.pem"
    TLS_Client_CA = "/path/to/clientca.bundle"
    TLS_Ciphers = "DEFAULT"
    TLS_Verify_Mode = "require"
    SMTP_Extensions = ( "ENHANCEDSTATUSCODES" "STARTTLS" )
  }
}
```

The following are the configuration options related to inbound TLS:

*   [tls_allow_renegotiation](/momentum/4/config/tls-allow-renegotiation)

*   [tls_certificate](/momentum/4/config/tls-certificate)

*   [tls_ciphers](/momentum/4/config/tls-ciphers)

*   [tls_client_ca](/momentum/4/config/tls-client-ca)

*   [tls_dhparams_file](/momentum/4/config/ref-tls-dhparams-file)

*   [tls_enable_dhe_ciphers](/momentum/4/config/ref-tls-enable-dhe-ciphers)

*   [tls_key](/momentum/4/config/tls-key)

*   [tls_protocols](/momentum/4/config/tls-protocols)

*   tls_verified_peer_can_relay

*   [tls_verify_mode](/momentum/4/config/tls-verify-mode)

If client certificate verification fails, the SMTP session does not terminate. The TLS status is stored in predefined context validation variables, so it is possible to drive TLS policy from policy scripts. You can use this to reject messages when client verification failed. For more information regarding the TLS-related context variables, see [“Global Predefined Connection Context Variables”](/momentum/4/4-policy-context-variables#policy.predefined-context-conn-global).