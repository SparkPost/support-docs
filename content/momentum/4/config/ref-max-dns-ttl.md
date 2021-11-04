---
lastUpdated: "03/26/2020"
title: "max_dns_ttl"
description: "max dns ttl set the maximum DNS TTL max dns ttl 4294967295 max dns ttl and min dns ttl are optional overrides to the TTL values returned from DNS only as far as resolving SMTP destinations is concerned the DNS cache used by other parts of the system such as..."
---

<a name="conf.ref.max_dns_ttl"></a> 
## Name

max_dns_ttl — set the maximum DNS TTL

## Synopsis

`max_dns_ttl = 4294967295`

<a name="idp25206016"></a> 
## Description

`max_dns_ttl` and `min_dns_ttl` are optional overrides to the TTL values returned from DNS (only as far as resolving SMTP destinations is concerned; the DNS cache used by other parts of the system such as DKIM is not affected by these parameters). Setting a `min_dns_ttl` can be used to prevent excessive DNS lookups in the event that an SMTP destination you are delivering mail to has unreasonably short TTL values for its DNS records. Conversely, `max_dns_ttl` can be used to force lookups to happen more often if a destination domain has excessively long TTL values in its DNS records. Setting this option should only be necessary in exceptional circumstances.

Default value is `4294967295`.

<a name="idp25211152"></a> 
## Scope

max_dns_ttl is valid in the global scope.

<a name="idp25212976"></a> 
## See Also

[min_dns_ttl](/momentum/4/config/ref-min-dns-ttl)