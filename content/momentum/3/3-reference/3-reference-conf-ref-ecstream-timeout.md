---
lastUpdated: "03/26/2020"
title: "ecstream_timeout"
description: "ecstream timeout the amount of time to wait for an ecstream connection to be established ecstream timeout 600 Configuration Change This feature is available as of version 3 2 The amount of time in seconds to spend waiting for a remote ecstream connection to be established The default value for..."
---

<a name="conf.ref.ecstream_timeout"></a> 
## Name

ecstream_timeout — the amount of time to wait for an ecstream connection to be established

## Synopsis

`ecstream_timeout = 600`

<a name="idp9458240"></a> 
## Description

**Configuration Change. ** This feature is available as of version 3.2.

The amount of time in seconds to spend waiting for a remote ecstream connection to be established. The default value for this option is `600`.

<a name="idp9463168"></a> 
## Scope

ecstream_timeout is valid in the binding, binding_group, domain and global scopes.

<a name="idp9464848"></a> 
## See Also

[ecstream_port](/momentum/3/3-reference/3-reference-conf-ref-ecstream-port)