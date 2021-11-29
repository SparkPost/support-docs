---
lastUpdated: "03/26/2020"
title: "dns_failures_to_purge"
description: "dns failures to purge configure the maximum number of DNS lookups dns failures to purge 10 After the specified number of failed DNS lookups a message will be failed permanently The default value is 10 dns failures to purge is valid in the domain and global scopes mx failures fallback..."
---

<a name="conf.ref.dns_failures_to_purge"></a> 
## Name

dns_failures_to_purge — configure the maximum number of DNS lookups

## Synopsis

`dns_failures_to_purge = 10`

<a name="idp8981664"></a> 
## Description

After the specified number of failed DNS lookups, a message will be failed permanently. The default value is `10`.

<a name="idp8983792"></a> 
## Scope

`dns_failures_to_purge` is valid in the domain and global scopes.

<a name="idp8985840"></a> 
## See Also

[mx_failures_fallback_to_a](/momentum/3/3-reference/3-reference-conf-ref-mx-failures-fallback-to-a)