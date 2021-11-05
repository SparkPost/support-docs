---
lastUpdated: "03/26/2020"
title: "ec_cache_destroy"
description: "ec cache destroy Purge all entries from the cache and free all memory allocated to it void ec cache destroy cache ec cache t cache Purge all entries from the cache and free all memory allocated to it cache The address of the cache The following typedef applies to the..."
---

<a name="apis.ec_cache_destroy"></a> 
## Name

ec_cache_destroy — Purge all entries from the cache and free all memory allocated to it

## Synopsis

`#include "ec_cache.h"`

| `void **ec_cache_destroy** (` | <var class="pdparam">cache</var>`)`; |   |

`ec_cache_t * <var class="pdparam">cache</var>`;<a name="idp50742048"></a> 
## Description

Purge all entries from the cache and free all memory allocated to it.

**<a name="idp50743296"></a> Parameters**

<dl class="variablelist">

<dt>cache</dt>

<dd>

The address of the cache. The following typedef applies to the `ec_cache_t` data type:

`typedef struct ec_cache_head ec_cache_t;`

</dd>

</dl>

**<a name="idp50747456"></a> Return Values**

This function returns void.

**<a name="idp50748368"></a> Threading**

While it is legal to call this function in any thread, it **should only be called in the Scheduler thread.** 

<a name="idp50750544"></a> 
## See Also

[ec_cache_create](/momentum/3/3-api/apis-ec-cache-create), [ec_cache_create2](/momentum/3/3-api/apis-ec-cache-create-2), [ec_cache_delref](/momentum/3/3-api/apis-ec-cache-delref), [ec_cache_find](/momentum/3/3-api/apis-ec-cache-find), [ec_cache_insert](/momentum/3/3-api/apis-ec-cache-insert), [“ec_cache_head”](/momentum/3/3-api/structs-ec-cache-head), and [“ec_cache_elt”](/momentum/3/3-api/structs-ec-cache-elt).