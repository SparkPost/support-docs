---
lastUpdated: "03/26/2020"
title: "bounce_cache_size"
description: "bounce cache size set the maximum size of the bounce classification cache bounce cache size 0 Configuration Change This feature is available as of version 3 6 9 bounce cache size and bounce cache ttl together set the maximum size and TTL of the bounce classify and bounce classify 2..."
---

<a name="conf.ref.bounce_cache_size"></a> 
## Name

bounce_cache_size — set the maximum size of the bounce classification cache

## Synopsis

`bounce_cache_size = 0`

<a name="idp8341472"></a> 
## Description

**Configuration Change. ** This feature is available as of version 3.6.9.

`bounce_cache_size` and `bounce_cache_ttl` together set the maximum size and TTL of the `bounce_classify` and `bounce_classify2` caches. These caches are used to cache bounce classifications. It should not normally be necessary to modify these values.

The default value for this option is `16384`.

<a name="idp8347056"></a> 
## Scope

bounce_cache_size is valid in the global scope.

<a name="idp8348704"></a> 
## See Also

[bounce_cache_ttl](/momentum/3/3-reference/conf-ref-bounce-cache-ttl)