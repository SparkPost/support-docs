---
lastUpdated: "03/26/2020"
title: "skip_hosts"
description: "skip hosts skip the specified host but consider other hosts in the domain skip hosts 127 0 0 1 skip hosts 127 0 0 1 fe 80 a 00 1 Unlike prohibited hosts Skip hosts does not permanently deny a domain Instead it enables you to skip the specified host..."
---

<a name="conf.ref.skip_hosts"></a> 
## Name

skip_hosts — skip the specified host, but consider other hosts in the domain

## Synopsis

`skip_hosts = ("127.0.0.1")`

`skip_hosts = ("127.0.0.1" "fe80::a00:1")`

<a name="idp26510864"></a> 
## Description

Unlike [prohibited_hosts](/momentum/4/config/ref-prohibited-hosts), `Skip_hosts` does not permanently deny a domain. Instead, it enables you to skip the specified host but still consider other hosts in the domain. For example, to prevent delivery to loopback addresses (127.0.0.0/8) or the null route 0.0.0.0, you can use the following line:

`skip_hosts = ( "127.0.0.0/8" "0.0.0.0" )`
### Note

Note: This setting does not affect where you receive mail from, only where you can deliver mail to.

<a name="idp26515712"></a> 
## Scope

skip_hosts is valid in the global scope.

<a name="idp26517536"></a> 
## See Also

[prohibited_hosts](/momentum/4/config/ref-prohibited-hosts)