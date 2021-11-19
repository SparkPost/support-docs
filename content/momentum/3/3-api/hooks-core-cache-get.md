---
lastUpdated: "03/26/2020"
title: "cache_get"
description: "cache get int cache get closure name key klen value vlen void closure const char name const void key int klen void value int vlen int has core cache get hook void register core cache get hook first hook closure ec hook core cache get func t hook void closure..."
---

<a name="hooks.core.cache_get"></a> 
## Name

cache_get

## Synopsis

`#include "hooks/core/cache_get.h"`

| `int **cache_get** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">name</var>, |   |
|   | <var class="pdparam">key</var>, |   |
|   | <var class="pdparam">klen</var>, |   |
|   | <var class="pdparam">value</var>, |   |
|   | <var class="pdparam">vlen</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`const char * <var class="pdparam">name</var>`;
`const void * <var class="pdparam">key</var>`;
`int <var class="pdparam">klen</var>`;
`void ** <var class="pdparam">value</var>`;
`int * <var class="pdparam">vlen</var>`;

| `int **has_core_cache_get_hook** (` | `)`; |   |

| `void **register_core_cache_get_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_cache_get_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_cache_get_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_cache_get_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `int **call_core_cache_get_hook** (` | <var class="pdparam">name</var>, |   |
|   | <var class="pdparam">key</var>, |   |
|   | <var class="pdparam">klen</var>, |   |
|   | <var class="pdparam">value</var>, |   |
|   | <var class="pdparam">vlen</var>`)`; |   |

`const char * <var class="pdparam">name</var>`;
`const void * <var class="pdparam">key</var>`;
`int <var class="pdparam">klen</var>`;
`void ** <var class="pdparam">value</var>`;
`int * <var class="pdparam">vlen</var>`;<a name="idp40528992"></a> 
## Description

Momentum exposes the *`cache_get`* hook as a stub for generic, process-wide caching. *`cache_get`* will return zero (miss) or non-zero (hit) if the specficied *`key`* of length *`klen`* exists in the cache named *`name`*. If it is a cache hit, *`*value`* and *`*vlen`* will be set to reflect the value at that key.