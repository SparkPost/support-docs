---
lastUpdated: "03/26/2020"
title: "ec_cache_purge"
description: "ec cache purge Explicitly remove elements from the cache int ec cache purge cache now purge all ec cache t cache time t now int purge all Allows you to explicitly remove elements from the cache If the the cache was configured with a time to live for the elements..."
---

<a name="apis.ec_cache_purge"></a> 
## Name

ec_cache_purge — Explicitly remove elements from the cache

## Synopsis

`#include "ec_cache.h"`

| `int **ec_cache_purge** (` | <var class="pdparam">cache</var>, |   |
|   | <var class="pdparam">now</var>, |   |
|   | <var class="pdparam">purge_all</var>`)`; |   |

`ec_cache_t * <var class="pdparam">cache</var>`;
`time_t * <var class="pdparam">now</var>`;
`int <var class="pdparam">purge_all</var>`;<a name="idp50872576"></a> 
## Description

Allows you to explicitly remove elements from the cache. If the the cache was configured with a time-to-live for the elements, then the *`now`* will be interpreted as the effective current time and elements older than *`now`*-`ttl` will be purged from the cache. If the *`purge_all`* is non-zero, then all elements will be purged from the cache.

**<a name="idp50875856"></a> Parameters**

<dl class="variablelist">

<dt>cache</dt>

<dd>

The address of the cache. The following typedef applies to the `ec_cache_t` data type:

`typedef struct ec_cache_head ec_cache_t;`

</dd>

<dt>now</dt>

<dd>

Will be interpreted as the effective current time.

</dd>

<dt>purge_all</dt>

<dd>

If this parameter is non-zero, then all elements will be purged from the cache.

</dd>

</dl>

**<a name="idp50883776"></a> Return Values**

This function returns the number of purged entries.

**<a name="idp50884720"></a> Threading**

While it is legal to call this function in any thread, it **should only be called in the Scheduler thread.** 

<a name="idp50886896"></a> 
## See Also

[ec_cache_create](/momentum/3/3-api/apis-ec-cache-create), [ec_cache_create2](/momentum/3/3-api/apis-ec-cache-create-2), [ec_cache_delref](/momentum/3/3-api/apis-ec-cache-delref), [ec_cache_destroy](/momentum/3/3-api/apis-ec-cache-destroy), [ec_cache_find](/momentum/3/3-api/apis-ec-cache-find), [ec_cache_insert](/momentum/3/3-api/apis-ec-cache-insert), [“ec_cache_head”](/momentum/3/3-api/structs-ec-cache-head), and [“ec_cache_elt”](/momentum/3/3-api/structs-ec-cache-elt).