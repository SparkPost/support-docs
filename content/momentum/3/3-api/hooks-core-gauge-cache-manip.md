---
lastUpdated: "03/26/2020"
title: "gauge_cache_manip"
description: "gauge cache manip void gauge cache manip closure cache key keylen addend expiry time maxitems replicated void closure const char cache const char key int keylen int addend uint 64 t expiry time int maxitems int replicated int has core gauge cache manip hook void register core gauge cache manip..."
---

<a name="hooks.core.gauge_cache_manip"></a> 
## Name

gauge_cache_manip

## Synopsis

`#include "hooks/core/gauge_cache.h"`

| `void **gauge_cache_manip** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">cache</var>, |   |
|   | <var class="pdparam">key</var>, |   |
|   | <var class="pdparam">keylen</var>, |   |
|   | <var class="pdparam">addend</var>, |   |
|   | <var class="pdparam">expiry_time</var>, |   |
|   | <var class="pdparam">maxitems</var>, |   |
|   | <var class="pdparam">replicated</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`const char * <var class="pdparam">cache</var>`;
`const char * <var class="pdparam">key</var>`;
`int <var class="pdparam">keylen</var>`;
`int <var class="pdparam">addend</var>`;
`uint64_t <var class="pdparam">expiry_time</var>`;
`int <var class="pdparam">maxitems</var>`;
`int <var class="pdparam">replicated</var>`;

| `int **has_core_gauge_cache_manip_hook** (` | `)`; |   |

| `void **register_core_gauge_cache_manip_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_gauge_cache_manip_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_gauge_cache_manip_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_gauge_cache_manip_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **call_core_gauge_cache_manip_hook** (` | <var class="pdparam">cache</var>, |   |
|   | <var class="pdparam">key</var>, |   |
|   | <var class="pdparam">keylen</var>, |   |
|   | <var class="pdparam">addend</var>, |   |
|   | <var class="pdparam">expiry_time</var>, |   |
|   | <var class="pdparam">maxitems</var>, |   |
|   | <var class="pdparam">replicated</var>`)`; |   |

`const char * <var class="pdparam">cache</var>`;
`const char * <var class="pdparam">key</var>`;
`int <var class="pdparam">keylen</var>`;
`int <var class="pdparam">addend</var>`;
`uint64_t <var class="pdparam">expiry_time</var>`;
`int <var class="pdparam">maxitems</var>`;
`int <var class="pdparam">replicated</var>`;<a name="idp27617488"></a> 
## Description

This hook is called when the sieve command "ec_gauge_cache_inc" or "ec_gauge_cache_dec" is invoked. The arguments are the cache name and the key name, the addend (1 for an increment or -1 for a decrement), and an expiry time. The expiry time specifies the unix time when the element expires. The maxitems is the max number of elements in the cache.