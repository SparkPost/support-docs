---
lastUpdated: "03/26/2020"
title: "msys.gauge_cache.get"
description: "msys gauge cache get Look up the value associated with keystring in the named cache msys gauge cache get cachename keystring Looks up the value associated with keystring in the named cache Enable this function with the statement require msys gauge cache msys gauge cache define msys gauge cache inc..."
---

<a name="lua.ref.msys.gauge_cache.get"></a> 
## Name

msys.gauge_cache.get — Look up the value associated with keystring in the named cache

<a name="idp26685200"></a> 
## Synopsis

`msys.gauge_cache.get(cachename, keystring);`

```
cachename: string
keystring: string
```
<a name="idp26687872"></a> 
## Description

Looks up the value associated with `keystring` in the named cache.

Enable this function with the statement `require('msys.gauge_cache');`.

<a name="idp26690896"></a> 
## See Also

[msys.gauge_cache.define](/momentum/3/3-reference/3-reference-lua-ref-msys-gauge-cache-define), [msys.gauge_cache.inc](/momentum/3/3-reference/3-reference-lua-ref-msys-gauge-cache-inc), [msys.gauge_cache.dec](/momentum/3/3-reference/3-reference-lua-ref-msys-gauge-cache-dec), [“Shared Gauge Caches”](/momentum/3/3-reference/3-reference-cluster-config-replication#cluster.replication.gauge_cache)