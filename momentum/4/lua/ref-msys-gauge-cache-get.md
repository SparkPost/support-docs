---
title: "msys.gauge_cache.get"
description: "msys gauge cache get Look up the value associated with keystring in the named cache msys gauge cache get cachename keystring Looks up the value associated with keystring in the named cache Enable this function with the statement require msys gauge cache msys gauge cache define msys gauge cache inc..."
---

<a name="lua.ref.msys.gauge_cache.get"></a> 
## Name

msys.gauge_cache.get — Look up the value associated with keystring in the named cache

<a name="idp18099440"></a> 
## Synopsis

`msys.gauge_cache.get(cachename, keystring);`

```
cachename: string
keystring: string
```
<a name="idp18102400"></a> 
## Description

Looks up the value associated with `keystring` in the named cache.

Enable this function with the statement `require('msys.gauge_cache');`.

<a name="idp18105648"></a> 
## See Also

[msys.gauge_cache.define](lua.ref.msys.gauge_cache.define "msys.gauge_cache.define"), [msys.gauge_cache.inc](lua.ref.msys.gauge_cache.inc "msys.gauge_cache.inc"), [msys.gauge_cache.dec](lua.ref.msys.gauge_cache.dec "msys.gauge_cache.dec"), [Section 28.1.9, “Shared Gauge Caches”](cluster.config.replication#cluster.replication.gauge_cache "28.1.9. Shared Gauge Caches")