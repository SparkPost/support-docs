---
lastUpdated: "06/03/2026"
title: "tls"
description: "tls show cache tls flush cache tls rekey manage TLS cache used by Momentum tls flush cache tls rekey tls show cache tls show cache shows information of the TLS cache used by the server tls flush cache flushes TLS cache tls rekey removes the temporary RSA key Next use..."
---

<a name="console_commands.tls"></a> 
## Name

tls show cache, tls flush cache, tls rekey — manage TLS cache used by Momentum

> **NOTE: The `tls rekey` subcommand was REMOVED in Momentum 5.3.0 and is no longer a valid command.** It managed a temporary RSA key used for export-grade cipher suites; that mechanism was retired from OpenSSL (the `SSL_CTX_set_tmp_rsa_callback()` API) and from Momentum as part of the OpenSSL 1.1.1+/3.5.x modernization. On 5.3.0 and later, `tls show cache` no longer prints a "Temp RSA key" line. The `tls rekey` description below is retained for reference on releases prior to 5.3.0.

## Synopsis

`tls flush cache`

`tls rekey`

`tls show cache`

<a name="idp11308032"></a> 
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