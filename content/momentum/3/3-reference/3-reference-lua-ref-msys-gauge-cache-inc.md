---
lastUpdated: "03/26/2020"
title: "msys.gauge_cache.inc"
description: "msys gauge cache inc Increment the value associated with keystring in the named cache msys gauge cache inc cachename keystring Increments the value associated with keystring in the named cache Enable this function with the statement require msys gauge cache msys gauge cache define msys gauge cache dec Section 7..."
---

<a name="lua.ref.msys.gauge_cache.inc"></a> 
## Name

msys.gauge_cache.inc — Increment the value associated with `keystring` in the named cache

<a name="idp26698128"></a> 
## Synopsis

`msys.gauge_cache.inc(cachename, keystring);`

```
cachename: string
keystring: string
```
<a name="idp26700848"></a> 
## Description

Increments the value associated with `keystring` in the named cache.

Enable this function with the statement `require('msys.gauge_cache');`.

<a name="idp26703872"></a> 
## See Also

[msys.gauge_cache.define](/momentum/3/3-reference/3-reference-lua-ref-msys-gauge-cache-define), [msys.gauge_cache.dec](/momentum/3/3-reference/3-reference-lua-ref-msys-gauge-cache-dec), [“Shared Gauge Caches”](/momentum/3/3-reference/3-reference-cluster-config-replication#cluster.replication.gauge_cache)