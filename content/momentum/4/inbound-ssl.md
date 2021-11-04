---
lastUpdated: "03/26/2020"
title: "Inbound SSL"
description: "Secure Sockets Layer SSL can be configured on an SMTP listener using the following configuration snippet SSL Listeners function similarly to STARTTLS Listeners except that connections are handed up to SSL immediately For this reason SSL is mutually exclusive with STARTTLS and cannot be configured on the same listener The..."
---

Secure Sockets Layer (SSL) can be configured on an SMTP listener using the following configuration snippet:

```
ESMTP_Listener = {
  Listen ":465" {
    Use_SSL = true
    TLS_Certificate = "/path/to/cert.pem"
    TLS_Key = "/path/to/key.pem"
    TLS_Client_CA = "/path/to/clientca.bundle"
    TLS_Ciphers = "DEFAULT"
  }
}
```

SSL Listeners function similarly to STARTTLS Listeners, except that connections are handed up to SSL immediately. For this reason, SSL is mutually exclusive with STARTTLS and cannot be configured on the same listener. The recommended configuration is to have any SSL listeners on separate ports from standard or STARTTLS listeners.