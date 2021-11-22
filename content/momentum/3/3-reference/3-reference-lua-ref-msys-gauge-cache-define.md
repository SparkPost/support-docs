---
lastUpdated: "03/26/2020"
title: "msys.gauge_cache.define"
description: "msys gauge cache define Create a cache that can be used to maintain a set of counters msys gauge cache define name maxelems ttl replicated Creates a cache that can be used to maintain a set of counters based on a string key The ttl parameter is the number of..."
---

<a name="lua.ref.msys.gauge_cache.define"></a> 
## Name

msys.gauge_cache.define — Create a cache that can be used to maintain a set of counters

<a name="idp26671408"></a> 
## Synopsis

`msys.gauge_cache.define(name, maxelems, ttl, replicated);`

```
name: string
maxelems: number
ttl: number
replicated: boolean, optional
```
<a name="idp26674192"></a> 
## Description

Creates a cache that can be used to maintain a set of counters based on a string key. The `ttl` parameter is the number of seconds that a given entry will be maintained after it was last modified, and `maxelems` is the maximum number of named entries that will be stored in the cache. If a new entry is added, the oldest entry in the cache will be dropped to make room for the new entry. If replicated is set to `true`, (the default is `false`), then increments and decrements will be broadcast across the cluster.

Enable this function with the statement `require(' msys.gauge_cache ');`.

<a name="idp26678928"></a> 
## See Also

[msys.gauge_cache.inc](/momentum/3/3-reference/3-reference-lua-ref-msys-gauge-cache-inc), [msys.gauge_cache.dec](/momentum/3/3-reference/3-reference-lua-ref-msys-gauge-cache-dec), [“Shared Gauge Caches”](/momentum/3/3-reference/3-reference-cluster-config-replication#cluster.replication.gauge_cache)