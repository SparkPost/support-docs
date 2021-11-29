---
lastUpdated: "03/26/2020"
title: "min_dns_ttl"
description: "min dns ttl override DNS TT Ls smaller than this value min dns ttl 0 Any DNS response with a TTL of less than the value of min dns ttl will be increased to the value of min dns ttl The default value is 0 min dns ttl is valid..."
---

<a name="conf.ref.min_dns_ttl"></a> 
## Name

min_dns_ttl — override DNS TTLs smaller than this value

## Synopsis

`min_dns_ttl = 0`

<a name="idp25482048"></a> 
## Description

Any DNS response with a TTL of less than the value of `min_dns_ttl` will be increased to the value of `min_dns_ttl`. The default value is `0`.

<a name="idp25485280"></a> 
## Scope

min_dns_ttl is valid in the global scope.

<a name="idp25487104"></a> 
## See Also

[max_dns_ttl](/momentum/4/config/ref-max-dns-ttl)