---
lastUpdated: "03/26/2020"
title: "cache stat"
description: "cache stat show detailed cache statistics for the specified cache cache stat cache name This command shows statistics for the specified cache Use the cache list command to determine the available caches Find sample output below This command shows much more detail than the cache stats command cache list cache..."
---

<a name="console_commands.cache_stat"></a> 
## Name

cache stat — show detailed cache statistics for the specified cache

## Synopsis

`cache stat` { *`cache_name`* }

<a name="idp10702880"></a> 
## Description

This command shows statistics for the specified cache. Use the [cache list](/momentum/4/console-commands/cache-list) command to determine the available caches.

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

This command shows much more detail than the [cache stats](/momentum/4/console-commands/cache-stats) command.

<a name="idp10707536"></a> 
## See Also

[cache list](/momentum/4/console-commands/cache-list), [cache stats](/momentum/4/console-commands/cache-stats), [match_cache_life](/momentum/4/config/ref-match-cache-life)