---
lastUpdated: "03/26/2020"
title: "msys.gauge_cache.dec"
description: "msys gauge cache dec Decrement the value associated with keystring in the named cache msys gauge cache dec cachename keystring Decrements the value associated with keystring in the named cache Enable this function with the statement require msys gauge cache msys gauge cache define Section 28 1 9 Shared Gauge..."
---

<a name="lua.ref.msys.gauge_cache.dec"></a> 
## Name

msys.gauge_cache.dec — Decrement the value associated with keystring in the named cache

<a name="idp18072688"></a> 
## Synopsis

`msys.gauge_cache.dec(cachename, keystring);`

```
cachename: string
keystring: string
```
<a name="idp18075648"></a> 
## Description

Decrements the value associated with keystring in the named cache.

Enable this function with the statement `require('msys.gauge_cache');`.

<a name="idp18078480"></a> 
## See Also

[msys.gauge_cache.define](/momentum/4/lua/ref-msys-gauge-cache-define), [“Shared Gauge Caches”](/momentum/4/4-cluster-config-replication#cluster.replication.gauge_cache)