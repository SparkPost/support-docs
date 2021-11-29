---
lastUpdated: "03/26/2020"
title: "ec_cache_create"
description: "ec cache create Create a cache with max elts ec cache t ec cache create max elts max lifetime dtor unsigned int max elts unsigned int max lifetime ec cache elt dtor func dtor Create a cache with max elts This is equivalent to calling ec cache create 2 with..."
---

<a name="apis.ec_cache_create"></a> 
## Name

ec_cache_create — Create a cache with `max_elts`

## Synopsis

`#include "ec_cache.h"`

| `ec_cache_t * **ec_cache_create** (` | <var class="pdparam">max_elts</var>, |   |
|   | <var class="pdparam">max_lifetime</var>, |   |
|   | <var class="pdparam">dtor</var>`)`; |   |

`unsigned int <var class="pdparam">max_elts</var>`;
`unsigned int <var class="pdparam">max_lifetime</var>`;
`ec_cache_elt_dtor_func <var class="pdparam">dtor</var>`;<a name="idp50616368"></a> 
## Description

Create a cache with `max_elts`.

### Note

This is equivalent to calling `ec_cache_create2` with a NULL `name` parameter.

**<a name="idp50619840"></a> Parameters**

<dl class="variablelist">

<dt>max_elts</dt>

<dd>

The maximum number of elements that can be kept in the cache. If that number is exceeded, then the least recently used (LRU) element will be removed from the cache.

</dd>

<dt>max_lifetime</dt>

<dd>

Specifies a time-to-live (TTL) in seconds for the cache element. If `max_lifetime` is **not** given the value `EC_CACHE_LIFETIME_INFINITE`, then it specifies a time-to-live in seconds after which the entry will be removed from the cache. If using the cache in per-item-ttl mode, then `max_lifetime` is actually a number of *additional seconds beyond*                the ttl for which an element will not be removed.

</dd>

<dt>dtor</dt>

<dd>

Specifies a function that will be called when the refcount of an item becomes zero. The following typedef applies to this data type:

`typedef void (*ec_cache_elt_dtor_func)(void *value);` .

</dd>

</dl>

**<a name="idp50630336"></a> Return Values**

Returns the address of an `ec_cache_t` type. The following typedef applies to this data type:

`typedef struct ec_cache_head ec_cache_t;`.

**<a name="idp50632672"></a> Threading**

While it is legal to call this function in any thread, it **should only be called in the Scheduler thread.** 

<a name="idp50634848"></a> 
## See Also

[ec_cache_create2](/momentum/3/3-api/apis-ec-cache-create-2), [ec_cache_delref](/momentum/3/3-api/apis-ec-cache-delref), [ec_cache_delete](/momentum/3/3-api/apis-ec-cache-delete), [ec_cache_destroy](/momentum/3/3-api/apis-ec-cache-destroy), [ec_cache_find](/momentum/3/3-api/apis-ec-cache-find), [ec_cache_insert](/momentum/3/3-api/apis-ec-cache-insert), and [“ec_cache_head”](/momentum/3/3-api/structs-ec-cache-head).