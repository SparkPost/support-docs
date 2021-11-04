---
lastUpdated: "03/26/2020"
title: "tls"
description: "tls show cache tls flush cache tls rekey manage TLS cache used by Momentum tls flush cache tls rekey tls show cache tls show cache shows information of the TLS cache used by the server tls flush cache flushes TLS cache tls rekey removes the temporary RSA key Next use..."
---

<a name="console_commands.tls"></a> 
## Name

tls show cache, tls flush cache, tls rekey — manage TLS cache used by Momentum

## Synopsis

`tls flush cache`

`tls rekey`

`tls show cache`

<a name="idp16516096"></a> 
## Description

**tls show cache**            shows information of the TLS cache used by the server.

```
10:47:35 /tmp/2025> tls show cache
   1) server context
              age: 28404 seconds old
        in use by: 0 sessions
      certificate: /opt/msys/ecelerity/etc/mail.omniti.com.cert
          ca list: /etc/ssl/ca.cert
          ciphers: default
   2) server context
              age: 25681 seconds old
        in use by: 0 sessions
      certificate: /opt/msys/ecelerity/etc/mail.omniti.com.cert
          ca list: /opt/msys/ecelerity/etc/ca-bundle.crt
          ciphers: default
Temp RSA key is uncached.
```

**tls flush cache**             flushes TLS cache.

```
10:47:35 /tmp/2025> tls flush cache
Cache flush request submitted.
```

**tls rekey**       removes the temporary RSA key. Next use will force the generation and caching of a new key.

```
13:34:55 ecelerity(/tmp/2025)> tls rekey
Rekey request submitted.
```