---
lastUpdated: "03/26/2020"
title: "tls_client_ca"
description: "tls client ca certificate authority for inbound mail TLS Client Ca path to C Alist TLS Client Ca specifies a file containing a trusted certificate authority list These certificates should be in PEM format This CA list will be referenced if TLS Verify is set to either ca or host..."
---

<a name="conf.ref.tls_client_ca"></a> 
## Name

tls_client_ca — certificate authority for inbound mail

## Synopsis

`TLS_Client_Ca = "/path/to/CAlist"`

<a name="idp12111136"></a> 
## Description

TLS_Client_Ca specifies a file containing a trusted certificate authority list. These certificates should be in PEM format. This CA list will be referenced if TLS_Verify is set to either `ca` or `host`.

<a name="idp12113792"></a> 
## Scope

`tls_client_ca` is valid in the ecstream_listener, esmtp_listener, global, http_listener, listen, pathway, pathway_group and peer scopes.