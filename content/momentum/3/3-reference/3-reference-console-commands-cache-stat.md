---
lastUpdated: "03/26/2020"
title: "cache stat"
description: "cache stat show detailed cache statistics for the specified cache cache stat cache name Configuration Change This feature is available starting from Momentum 3 0 26 This command shows statistics for the specified cache Use the cache list command to determine the available caches Find sample output below This command..."
---

<a name="console_commands.cache_stat"></a> 
## Name

cache stat — show detailed cache statistics for the specified cache

## Synopsis

`cache stat` { *`cache_name`* }

<a name="idp15550464"></a> 
## Description

**Configuration Change. ** This feature is available starting from Momentum 3.0.26.

This command shows statistics for the specified cache. Use the [cache list](/momentum/3/3-reference/3-reference-console-commands-cache-list) command to determine the available caches.

Find sample output below:

```
20:02:49 /tmp/2025> cache stat core:bounce_classify
Name          : core:bounce_classify
Capacity      : 16384
Entries       : 10238
Utilization   :  62.49%
Query Rate    : 1271 q/s
Loads         : 20476
  Hits        : 1527
  Misses      : 18949
  Pending     : 0
Stores        : 18949
Invalidations : 8711
  Forced      : 0
  Expired     : 0
  Capacity    : 8711
Hit Rate      :   7.46%
Workload (R/W):  51.94%
  Reads       : 20476
  Writes      : 18949
```

This command shows much more detail than the [cache stats](/momentum/3/3-reference/3-reference-console-commands-cache-stats) command.

<a name="idp15558352"></a> 
## See Also

[cache list](/momentum/3/3-reference/3-reference-console-commands-cache-list), [cache stats](/momentum/3/3-reference/3-reference-console-commands-cache-stats), [match_cache_life](/momentum/3/3-reference/3-reference-conf-ref-match-cache-life)