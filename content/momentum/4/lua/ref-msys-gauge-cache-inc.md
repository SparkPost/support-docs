---
lastUpdated: "03/26/2020"
title: "msys.gauge_cache.inc"
description: "msys gauge cache inc Increment the value associated with keystring in the named cache msys gauge cache inc cachename keystring Increments the value associated with keystring in the named cache Enable this function with the statement require msys gauge cache msys gauge cache define msys gauge cache dec Section 28..."
---

<a name="lua.ref.msys.gauge_cache.inc"></a> 
## Name

msys.gauge_cache.inc — Increment the value associated with `keystring` in the named cache

<a name="idp18113312"></a> 
## Synopsis

`msys.gauge_cache.inc(cachename, keystring);`

```
cachename: string
keystring: string
```
<a name="idp18116320"></a> 
## Description

Increments the value associated with `keystring` in the named cache.

Enable this function with the statement `require('msys.gauge_cache');`.

<a name="idp18119568"></a> 
## See Also

[msys.gauge_cache.define](/momentum/4/lua/ref-msys-gauge-cache-define), [msys.gauge_cache.dec](/momentum/4/lua/ref-msys-gauge-cache-dec), [“Shared Gauge Caches”](/momentum/4/4-cluster-config-replication#cluster.replication.gauge_cache)