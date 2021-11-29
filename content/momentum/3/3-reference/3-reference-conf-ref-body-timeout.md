---
lastUpdated: "03/26/2020"
title: "body_timeout"
description: "body timeout network timeout once the DATA phase is complete Body Timeout 600 The amount of time in seconds to wait for a response once the DATA phase has been terminated by a CRLF CRLF This timeout is relatively long because this is the only phase of transmission which involves..."
---

<a name="conf.ref.body_timeout"></a> 
## Name

body_timeout — network timeout once the DATA phase is complete

## Synopsis

`Body_Timeout = 600`

<a name="idp8306448"></a> 
## Description

The amount of time in seconds to wait for a response once the `DATA` phase has been terminated by a `CRLF.CRLF`. This timeout is relatively long because this is the only phase of transmission which involves significant network transmission. This option applies to outbound mail only. The default value for this option is `600`.

<a name="idp8309664"></a> 
## Scope

body_timeout is valid in the binding, binding_group, domain and global scopes.