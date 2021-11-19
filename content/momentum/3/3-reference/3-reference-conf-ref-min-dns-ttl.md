---
lastUpdated: "03/26/2020"
title: "min_dns_ttl"
description: "min dns ttl override DNS TT Ls smaller than this value min dns ttl 0 Any DNS response with a TTL of less than the value of Min DNS TTL will be increased to the value of Min DNS TTL The default value for this option is 0 min dns..."
---

<a name="conf.ref.min_dns_ttl"></a> 
## Name

min_dns_ttl — override DNS TTLs smaller than this value

## Synopsis

`min_dns_ttl = 0`

<a name="idp10408384"></a> 
## Description

Any DNS response with a TTL of less than the value of `Min_DNS_TTL` will be increased to the value of `Min_DNS_TTL`. The default value for this option is `0`.

<a name="idp10411408"></a> 
## Scope

min_dns_ttl is valid in the global scope.

<a name="idp10413040"></a> 
## See Also

[max_dns_ttl](/momentum/3/3-reference/3-reference-conf-ref-max-dns-ttl)