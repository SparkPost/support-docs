---
lastUpdated: "09/20/2023"
title: "tlsv13_ciphersuits"
description: "specify allowable ciphersuites for TLS inbound and outbound sessions when TLSv1.3 protocol is negotiated and used"
---

<a name="config.tlsv13_ciphersuites"></a>
## Name

tlsv13_ciphersuites — specify allowable TLSv1.3 ciphersuites for TLS inbound and outbound sessions

## Synopsis

`TLSv13_Ciphersuites = "TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256"`

## Description

**Configuration Change. ** Support for OpenSSL is available as of version 4.6 for SMTP reception,
    HTTP reception, and SMTP deliveries only.

This option specifies the allowable ciphersuites for a TLS session using TLSv1.3 protocol. The
allowable ciphersuites must be a subset of the available ciphersuites on the host system.

**OpenSSL**

When TLS_Engine is set to `openssl`, TLSv13_Ciphersuites specifies a "ciphersuite list", which is a
colon (":") separated list of the supported TLSv1.3 ciphersuite names in order of preference.
There are 5 valid TLSv1.3 ciphersuites that are supported by OpenSSL 1.1.1:
```
    TLS_AES_256_GCM_SHA384
    TLS_CHACHA20_POLY1305_SHA256
    TLS_AES_128_GCM_SHA256
    TLS_AES_128_CCM_8_SHA256
    TLS_AES_128_CCM_SHA256
```
By default (if not explicitly specified through this configuration option), only the first three are enabled.
On the host machine, `openssl11 ciphers -s -tls1_3` can show the default TLSv1.3 ciphersuites;
`openssl11 ciphers -tls1_3 -v -s -ciphersuites TLS_AES_128_CCM_8_SHA256:TLS_AES_128_CCM_SHA256` can
check whether the last two ciphersuites are supported if enabled.
For more information about the TLSv1.3 cihersuites, see
[https://wiki.openssl.org/index.php/TLS1.3#Ciphersuites](https://wiki.openssl.org/index.php/TLS1.3#Ciphersuites).


* To set the option to all the 5 TLSv1.3 ciphersuites supported by OpenSSL 1.1.1:
`TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:TLS_AES_128_CCM_8_SHA256:TLS_AES_128_CCM_SHA256`

The default value (when this option leaves unset) is
`TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256`.

**GNUTLS**

This option has no meaning for GNUTLS.


### Note
This option is new in Momentum 4.6.

## Scope

`tlsv13_ciphersuites` is valid in the binding, binding_group, domain, esmtp_listener, global, http_listener, listen, pathway, pathway_group and peer scopes.
