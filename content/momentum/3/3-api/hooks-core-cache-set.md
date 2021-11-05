---
lastUpdated: "03/26/2020"
title: "cache_set"
description: "cache set void cache set closure name key klen value vlen whence void closure const char name const void key int klen void value int vlen u int 32 t whence int has core cache set hook void register core cache set hook first hook closure ec hook core cache..."
---

<a name="hooks.core.cache_set"></a> 
## Name

cache_set

## Synopsis

`#include "hooks/core/cache_set.h"`

| `void **cache_set** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">name</var>, |   |
|   | <var class="pdparam">key</var>, |   |
|   | <var class="pdparam">klen</var>, |   |
|   | <var class="pdparam">value</var>, |   |
|   | <var class="pdparam">vlen</var>, |   |
|   | <var class="pdparam">whence</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`const char * <var class="pdparam">name</var>`;
`const void * <var class="pdparam">key</var>`;
`int <var class="pdparam">klen</var>`;
`void * <var class="pdparam">value</var>`;
`int <var class="pdparam">vlen</var>`;
`u_int32_t <var class="pdparam">whence</var>`;

| `int **has_core_cache_set_hook** (` | `)`; |   |

| `void **register_core_cache_set_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_cache_set_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_cache_set_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_cache_set_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **call_core_cache_set_hook** (` | <var class="pdparam">name</var>, |   |
|   | <var class="pdparam">key</var>, |   |
|   | <var class="pdparam">klen</var>, |   |
|   | <var class="pdparam">value</var>, |   |
|   | <var class="pdparam">vlen</var>, |   |
|   | <var class="pdparam">whence</var>`)`; |   |

`const char * <var class="pdparam">name</var>`;
`const void * <var class="pdparam">key</var>`;
`int <var class="pdparam">klen</var>`;
`void * <var class="pdparam">value</var>`;
`int <var class="pdparam">vlen</var>`;
`u_int32_t <var class="pdparam">whence</var>`;<a name="idp40340304"></a> 
## Description

Momentum exposes the *`cache_set`* hook as a stub for generic, process-wide caching. *`cache_set`* should place the key and value specified in *`key/klen`* and *`value/vlen`*, respectively in the cache named *`name`*.