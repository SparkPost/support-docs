---
lastUpdated: "03/26/2020"
title: "pcre_cache_ttl"
description: "pcre cache ttl set the maximum TTL for the ec pcre compile cache pcre cache size 300 Pcre Cache Size and Pcre Cache Ttl together set the maximum size and TTL of the ec pcre compile cache This cache is used by sieve sievelib the bounce classifier code and the..."
---

<a name="conf.ref.pcre_cache_ttl"></a> 
## Name

pcre_cache_ttl — set the maximum TTL for the ec_pcre_compile cache

## Synopsis

`pcre_cache_size = 300`

<a name="idp10984832"></a> 
## Description

Pcre_Cache_Size and Pcre_Cache_Ttl together set the maximum size and TTL of the ec_pcre_compile cache. This cache is used by sieve, sievelib, the bounce_classifier code and the vctx_filter module to cache compiled regular expressions. It should not normally be necessary to modify these values.

The default value for this option is `300`.

<a name="idp10987616"></a> 
## Scope

pcre_cache_ttl is valid in the global scope.

<a name="idp10989264"></a> 
## See Also

[pcre_cache_size](/momentum/3/3-reference/3-reference-conf-ref-pcre-cache-size)