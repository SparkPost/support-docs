---
lastUpdated: "03/26/2020"
title: "pcre_cache_ttl"
description: "pcre cache ttl set the maximum TTL for the ec pcre compile cache pcre cache size 300 pcre cache size and pcre cache ttl together set the maximum size and TTL of the ec pcre compile cache This cache is used by sieve sievelib the bounce classifier code and the..."
---

<a name="conf.ref.pcre_cache_ttl"></a> 
## Name

pcre_cache_ttl — set the maximum TTL for the ec_pcre_compile cache

## Synopsis

`pcre_cache_size = 300`

<a name="idp25753488"></a> 
## Description

pcre_cache_size and pcre_cache_ttl together set the maximum size and TTL of the ec_pcre_compile cache. This cache is used by sieve, sievelib, the bounce_classifier code and the vctx_filter module to cache compiled regular expressions. It should not normally be necessary to modify these values.

The default value is `300`.

<a name="idp25756512"></a> 
## Scope

pcre_cache_ttl is valid in the global scope.

<a name="idp25758352"></a> 
## See Also

[pcre_cache_size](/momentum/4/config/ref-pcre-cache-size)