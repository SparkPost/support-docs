---
lastUpdated: "03/26/2020"
title: "ec_cache_delref"
description: "ec cache delref Delete a reference from a cached item determined by elt in a cache void ec cache delref cache elt ec cache t cache ec cache elt elt Decrement a reference from a cached item determined by elt in a cache If the refcount falls to zero then..."
---

<a name="apis.ec_cache_delref"></a> 
## Name

ec_cache_delref — Delete a reference from a cached item determined by `elt` in a cache

## Synopsis

`#include "ec_cache.h"`

| `void **ec_cache_delref** (` | <var class="pdparam">cache</var>, |   |
|   | <var class="pdparam">elt</var>`)`; |   |

`ec_cache_t * <var class="pdparam">cache</var>`;
`ec_cache_elt * <var class="pdparam">elt</var>`;<a name="idp50715232"></a> 
## Description

Decrement a reference from a cached item determined by `elt` in a cache. If the refcount falls to zero, then the function registered in the call to [ec_cache_create2](/momentum/3/3-api/apis-ec-cache-create-2) will be invoked. The following typedef applies to this data type: `typedef void (*ec_cache_elt_dtor_func)(void *value);`

After calling `ec_cache_delref` the element and its contents must not be touched, as they may have been freed.

**<a name="idp50719088"></a> Parameters**

<dl class="variablelist">

<dt>cache</dt>

<dd>

The address of the cache. The following typedef applies to the `ec_cache_t` data type:

`typedef struct ec_cache_head ec_cache_t;`

</dd>

<dt>elt</dt>

<dd>

The address of the cache entry to delref. See the [“ec_cache_elt”](/momentum/3/3-api/structs-ec-cache-elt) structure.

</dd>

</dl>

**<a name="idp50725664"></a> Return Values**

This function returns void.

**<a name="idp50726576"></a> Threading**

It is legal to call this function in any thread.

<a name="idp50728000"></a> 
## See Also

[ec_cache_create](/momentum/3/3-api/apis-ec-cache-create), [ec_cache_create2](/momentum/3/3-api/apis-ec-cache-create-2), [ec_cache_destroy](/momentum/3/3-api/apis-ec-cache-destroy), [ec_cache_find](/momentum/3/3-api/apis-ec-cache-find), [ec_cache_insert](/momentum/3/3-api/apis-ec-cache-insert), [ec_cache_purge](/momentum/3/3-api/apis-ec-cache-purge), [“ec_cache_head”](/momentum/3/3-api/structs-ec-cache-head), and [“ec_cache_elt”](/momentum/3/3-api/structs-ec-cache-elt).