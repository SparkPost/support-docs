---
lastUpdated: "03/26/2020"
title: "match_cache_life"
description: "match cache life set the maximum number of seconds that the match cache will be valid match cache life 0 match cache life determines the maximum validity for cache entries in the match cache With a default match cache life of 0 cache entries will be kept for as long..."
---

<a name="conf.ref.match_cache_life"></a> 
## Name

match_cache_life — set the maximum number of seconds that the match cache will be valid

## Synopsis

`match_cache_life = 0`

<a name="idp10095584"></a> 
## Description

`match_cache_life` determines the maximum validity for cache entries in the match cache. With a default match_cache_life of `0`, cache entries will be kept for as long as they are still usable and the cache size hasn't been exceeded. Normally it is not necessary to set this option to a value other than `0`.

<a name="idp10098704"></a> 
## Scope

`match_cache_life` is valid in the global scope.

<a name="idp10100736"></a> 
## See Also

[match_cache_size](/momentum/3/3-reference/3-reference-conf-ref-match-cache-size), [cache stats](/momentum/3/3-reference/3-reference-console-commands-cache-stats) and [domain](/momentum/3/3-reference/3-reference-conf-ref-domain)