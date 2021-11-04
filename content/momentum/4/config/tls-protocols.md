---
lastUpdated: "03/26/2020"
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

**Configuration Change. ** This option is available as of version 4.1.0.2\.

`tls_protocols` specifies the allowable protocols for an OpenSSL TLS session. The available protocols are `ALL`, `SSLv2`, `SSLv3`, `TLSv1.0`, `TLSv1.1`, and `TLSv1.2`. Each set can be enabled or disabled by prefixing its name with a “+” or “-“ respectively. The following example shows the SSLv2 and SSLv3 protocols being disabled:

`TLS_Protocols = "+ALL:-SSLv2:-SSLv3"`

This option has no meaning for GNUTLS.

The default value is “+ALL”.

### Note

In Centos/RHEL 5, which are typically shipped with OpenSSL 0.98, TLSv1.1 and TLSv1.2 are not available.

<a name="idp26999712"></a> 
## Scope

`tls_ciphers` is valid in the binding, binding_group, domain, ecstream_listener, esmtp_listener, global, http_listener, listen, pathway, pathway_group and peer scopes.