---
lastUpdated: "10/08/2026"
title: "dns_cache_negative_ttl"
description: "dns cache negative ttl how long the DNS response cache keeps a failed lookup dns cache negative ttl 300 How long in seconds the DNS response cache keeps a failed lookup whose answer has no records such as NXDOMAIN a server failure SERVFAIL or a timeout..."
---

<a name="conf.ref.dns_cache_negative_ttl"></a>
## Name

dns_cache_negative_ttl — how long the DNS response cache keeps a failed
lookup

## Synopsis

`dns_cache_negative_ttl = 300`

## Description

How long, in seconds, the DNS response cache keeps a failed lookup whose
answer has no records, such as NXDOMAIN, a server failure (SERVFAIL), or a
timeout. Lookups of that name and type get the cached failure until the next
purge after it expires (see
[dns_cache_purge_interval](/momentum/4/config/ref-dns-cache-purge-interval)).

A failed lookup is kept for `dns_cache_negative_ttl` or
[max_dns_ttl](/momentum/4/config/ref-max-dns-ttl) seconds, whichever is
lower. The value must not be negative.

The default value is `300` (seconds). RFC 2308 section 7.1 limits a cached
server failure to five minutes; a value above `300` keeps server failures
longer than that.

## Scope

`dns_cache_negative_ttl` is valid in the global scope.

## See Also

[max_dns_ttl](/momentum/4/config/ref-max-dns-ttl),
[dns_cache_purge_interval](/momentum/4/config/ref-dns-cache-purge-interval)
