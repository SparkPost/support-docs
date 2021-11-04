---
lastUpdated: "03/26/2020"
title: "tls_protocols"
description: "tls protocols allowable ciphers for TLS inbound and outbound sessions tls protocols baseprotocol additional protocols tls protocols specifies the allowable protocols for an Open SSL TLS session The available protocols are ALL SS Lv 2 SS Lv 3 TL Sv 1 0 TL Sv 1 1 and TL Sv 1..."
---

<a name="conf.ref.tls_protocols"></a> 
## Name

tls_protocols — allowable ciphers for TLS inbound and outbound sessions

## Synopsis

`tls_protocols = "+<baseprotocol>[:[+|-]<additional protocols]"`

<a name="idp12150432"></a> 
## Description

`tls_protocols` specifies the allowable protocols for an OpenSSL TLS session. The available protocols are ALL, SSLv2, SSLv3, TLSv1.0, TLSv1.1, and TLSv1.2\. Each set can be enabled or disabled by prefixing its name with a “+” or “-“ respectively. For example, to enable all protocols except SSLv3, the setting “:ALL:-SSLv3” would be applied. Protocol strings should be separated from one another with a colon.

This option has no meaning for GNUTLS.

**Configuration Change. ** This option is available as of version 3.6.6.

The default value is “+ALL”.

### Note

In Centos/RHEL 5, which are typically shipped with OpenSSL 0.98, TLSv1.1 and TLSv1.2 are not available.

<a name="idp12156720"></a> 
## Scope

`tls_ciphers` is valid in the binding, binding_group, domain, ecstream_listener, esmtp_listener, global, http_listener, listen, pathway, pathway_group and peer scopes.