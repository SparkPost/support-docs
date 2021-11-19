---
lastUpdated: "04/08/2020"
title: "mx_failures_fallback_to_a"
description: "mx failures fallback to a configure the maximum number of times an MX lookup will be attempted mx failures fallback to a 3 The number of times an MX lookup will be attempted before attempting an A lookup The default value is 3 mx failures fallback to a is valid..."
---

<a name="conf.ref.mx_failures_fallback_to_a"></a> 
## Name

mx_failures_fallback_to_a — configure the maximum number of times an MX lookup will be attempted

## Synopsis

`mx_failures_fallback_to_a = 3`

<a name="idp10423280"></a> 
## Description

The number of times an MX lookup will be attempted before attempting an A lookup. The default value is "3".

If the value is set to -1, the first lookup will be an MX lookup, and any subsequent lookups will be with A records.

<a name="idp10425328"></a> 
## Scope

mx_failures_fallback_to_a is valid in the domain and global scopes.

<a name="idp10426992"></a> 
## See Also

[dns_failures_to_purge](/momentum/3/3-reference/3-reference-conf-ref-dns-failures-to-purge)
