---
title: "19.7. Inbound TLS"
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

*   [tls_allow_renegotiation](config.tls_allow_renegotiation "tls_allow_renegotiation")

*   [tls_certificate](config.tls_certificate "tls_certificate")

*   [tls_ciphers](config.tls_ciphers "tls_ciphers")

*   [tls_client_ca](config.tls_client_ca "tls_client_ca")

*   [tls_dhparams_file](conf.ref.tls_dhparams_file "tls_dhparams_file")

*   [tls_enable_dhe_ciphers](conf.ref.tls_enable_dhe_ciphers "tls_enable_dhe_ciphers")

*   [tls_key](config.tls_key "tls_key")

*   [tls_protocols](config.tls_protocols "tls_protocols")

*   tls_verified_peer_can_relay

*   [tls_verify_mode](config.tls_verify_mode "tls_verify_mode")

If client certificate verification fails, the SMTP session does not terminate. The TLS status is stored in predefined context validation variables, so it is possible to drive TLS policy from policy scripts. You can use this to reject messages when client verification failed. For more information regarding the TLS-related context variables, see [Section 63.1.1, “Global Predefined Connection Context Variables”](policy.context.variables#policy.predefined-context-conn-global "63.1.1. Global Predefined Connection Context Variables").