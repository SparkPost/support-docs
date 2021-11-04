---
lastUpdated: "03/26/2020"
title: "bounce_cache_ttl"
description: "bounce cache ttl set the maximum TTL for the bounce classification cache bounce cache size 300 Configuration Change This feature is available as of version 3 6 9 bounce cache size and bounce cache ttl together set the maximum size and TTL of the bounce classify and bounce classify 2..."
---

<a name="conf.ref.bounce_cache_ttl"></a> 
## Name

bounce_cache_ttl — set the maximum TTL for the bounce classification cache

## Synopsis

`bounce_cache_size = 300`

<a name="idp8357456"></a> 
## Description

**Configuration Change. ** This feature is available as of version 3.6.9.

`bounce_cache_size` and `bounce_cache_ttl` together set the maximum size and TTL of the `bounce_classify` and `bounce_classify2` caches. These caches are used to cache bounce classifications. It should not normally be necessary to modify these values.

The default value for this option is `60`.

<a name="idp8363008"></a> 
## Scope

bounce_cache_ttl is valid in the global scope.

<a name="idp8364656"></a> 
## See Also

[bounce_cache_size](/momentum/3/3-reference/conf-ref-bounce-cache-size)