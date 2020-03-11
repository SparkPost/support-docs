---
title: "msys.gauge_cache.remove_item"
description: "msys gauge cache remove item Remove the value associated with keystring from the named cache msys gauge cache remove item cachename keystring Removes the value associated with keystring from the named cache Enable this function with the statement require msys gauge cache msys gauge cache inc msys gauge cache dec..."
---

<a name="lua.ref.msys.gauge_cache.remove_item"></a> 
## Name

msys.gauge_cache.remove_item — Remove the value associated with `keystring` from the named cache

<a name="idp18126688"></a> 
## Synopsis

`msys.gauge_cache.remove_item(cachename, keystring);`

```
cachename: string
keystring: string
```
<a name="idp18129712"></a> 
## Description

Removes the value associated with `keystring` from the named cache.

Enable this function with the statement `require('msys.gauge_cache');`.

<a name="idp18132960"></a> 
## See Also

[msys.gauge_cache.inc](lua.ref.msys.gauge_cache.inc "msys.gauge_cache.inc"), [msys.gauge_cache.dec](lua.ref.msys.gauge_cache.dec "msys.gauge_cache.dec"), [Section 28.1.9, “Shared Gauge Caches”](cluster.config.replication#cluster.replication.gauge_cache "28.1.9. Shared Gauge Caches")