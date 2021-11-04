---
lastUpdated: "03/26/2020"
title: "tls_ca"
description: "tls ca certificate authority for outbound mail TLS Ca path to C Alist TLS Ca specifies a file containing a trusted certificate authority list These certificates should be in PEM format This CA list will be referenced if TLS Verify is set to either ca or host tls ca is..."
---

<a name="conf.ref.tls_ca"></a> 
## Name

tls_ca — certificate authority for outbound mail

## Synopsis

`TLS_Ca = "/path/to/CAlist"`

<a name="idp12045632"></a> 
## Description

TLS_Ca specifies a file containing a trusted certificate authority list. These certificates should be in PEM format. This CA list will be referenced if TLS_Verify is set to either `ca` or `host`.

<a name="idp12048288"></a> 
## Scope

tls_ca is valid in the binding, binding_group, domain and global scopes.