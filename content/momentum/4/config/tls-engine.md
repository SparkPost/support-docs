---
lastUpdated: "03/26/2020"
title: "tls_engine"
description: "tls engine specify the TLS library to use TLS Engine openssl gnutls Configuration Change Support for GNUTLS is available as of version 4 1 for SMTP reception and SMTP deliveries only If TLS is set to required or ifavailable this option specifies whether to use Open SSL or GNUTLS This..."
---

<a name="config.tls_engine"></a> 
## Name

tls_engine — specify the TLS library to use

## Synopsis

`TLS_Engine = "openssl|gnutls"`

<a name="idp26936800"></a> 
## Description

**Configuration Change. ** Support for GNUTLS is available as of version 4.1 for SMTP reception and SMTP deliveries only.

If TLS is set to `required` or `ifavailable`, this option specifies whether to use OpenSSL or GNUTLS. This option cannot be changed at runtime. The ecelerity service must be restarted.

This option can be set to the following:

*   `openssl` – OpenSSL is used. The following components support OpenSSL:

    *   HTTP listener (including REST APIs)

    *   XMPP listener

*   `gnutls` – GNU Transport Layer Security is used. The following components support GNUTLS:

    *   ESMTP listener (SMTP reception)

    *   SMTP deliveries

The default value is `openssl`.

<a name="idp26951120"></a> 
## Scope

`tls_engine` is valid in the global scope.