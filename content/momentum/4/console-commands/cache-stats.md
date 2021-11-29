---
lastUpdated: "03/26/2020"
title: "cache stats"
description: "cache stats show cache statistics cache stats cache name This command shows statistics for all caches if no parameter is passed in Otherwise it shows the statistics for the specified cache or caches For example cache stats ds core ecdb will produce metrics such as For each cache this command..."
---

<a name="console_commands.cache_stats"></a> 
## Name

cache stats — show cache statistics

## Synopsis

`cache stats` [ *`cache_name`* ...]

<a name="idp14041776"></a> 
## Description

This command shows statistics for all caches if no parameter is passed in. Otherwise it shows the statistics for the specified cache or caches. For example, **cache stats *`ds_core:ecdb`***                        will produce metrics such as:

```
cache name                      lookups %                  deletions %
                       elts  hit miss pend  total  inserts man ttl lru  total
---------------------- ----- -------------------- -------- ------------------

ds_core:ecdb              2  52  48   0       83        2   0   0   0        0
```

For each cache, this command prints statistics including the number of elements in the cache (elts), hit rate, number of cache hits and misses during lookups, number of inserts, and number of deletions. The deletions are broken down into entries explicitly (manually) deleted, those deleted due to time-to-live (ttl) expiration as configured via the `match_cache_life` option, and least-recently-used (lru) items deleted due to the cache_size being reached.

<a name="idp14047104"></a> 
## See Also

[match_cache_life](/momentum/4/config/ref-match-cache-life)