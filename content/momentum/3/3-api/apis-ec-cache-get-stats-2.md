---
lastUpdated: "03/26/2020"
title: "ec_cache_get_stats2"
description: "ec cache get stats 2 get cache statistics void ec cache get stats 2 cache stats ec cache t cache ec cache stats 2 stats This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in..."
---

<a name="apis.ec_cache_get_stats2"></a> 
## Name

ec_cache_get_stats2 — get cache statistics

## Synopsis

`#include "ec_cache.h"`

| `void **ec_cache_get_stats2** (` | <var class="pdparam">cache</var>, |   |
|   | <var class="pdparam">stats</var>`)`; |   |

`ec_cache_t * <var class="pdparam">cache</var>`;
`ec_cache_stats2 * <var class="pdparam">stats</var>`;<a name="idp50809872"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

get cache statistics

You must initialize stats so that stats->sizeof_stats = sizeof(*stats) prior to calling this method.