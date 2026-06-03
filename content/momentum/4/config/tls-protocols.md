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

**Configuration Change. ** This option is available as of version 4.1.0.2\.

`tls_protocols` specifies the allowable protocols for an OpenSSL TLS session. The available
protocols are `ALL`, `SSLv2`, `SSLv3`, `TLSv1.0`, `TLSv1.1`, `TLSv1.2` and `TLSv1.3` (since Momentum
4.6). Each set can be enabled or disabled by prefixing its name with a “+” or “-“ respectively. The following example shows the SSLv2 and SSLv3 protocols being disabled:

`TLS_Protocols = "+ALL:-SSLv2:-SSLv3"`

This option has no meaning for GNUTLS.

The default value is “+ALL”.

### Note

The supported OpenSSL range is 1.1.1 or later — from 1.1.1 (as shipped with RHEL 8) through the 3.5.x series — so `TLSv1.1`, `TLSv1.2` and `TLSv1.3` are always available and can be enabled or disabled freely.

<a name="idp26999712"></a> 
## Scope

`tls_protocols` is valid in the binding, binding_group, domain, ecstream_listener, esmtp_listener, global, http_listener, listen, pathway, pathway_group and peer scopes.
