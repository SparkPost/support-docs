---
lastUpdated: "03/26/2020"
title: "ec_cache_get_stats_by_name"
description: "ec cache get stats by name get cache statistics for a named cache int ec cache get stats by name name stats const char name ec cache stats 2 stats This reference page was automatically generated from functions found in the header files in the development branch The function described..."
---

<a name="apis.ec_cache_get_stats_by_name"></a> 
## Name

ec_cache_get_stats_by_name — get cache statistics for a named cache

## Synopsis

`#include "ec_cache.h"`

| `int **ec_cache_get_stats_by_name** (` | <var class="pdparam">name</var>, |   |
|   | <var class="pdparam">stats</var>`)`; |   |

`const char * <var class="pdparam">name</var>`;
`ec_cache_stats2 * <var class="pdparam">stats</var>`;<a name="idp50822496"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

get cache statistics for a named cache

You must initialize stats so that stats->sizeof_stats = sizeof(*stats) prior to calling this method.