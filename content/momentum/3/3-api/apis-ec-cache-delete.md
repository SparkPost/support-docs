---
lastUpdated: "03/26/2020"
title: "ec_cache_delete"
description: "ec cache delete Delete an item determined by key from a cache int ec cache delete cache key keylen ec cache t cache const char key int keylen Delete an item determined by key from a cache cache The address of the cache The following typedef applies to the ec..."
---

<a name="apis.ec_cache_delete"></a> 
## Name

ec_cache_delete — Delete an item determined by `key` from a cache

## Synopsis

`#include "ec_cache.h"`

| `int **ec_cache_delete** (` | <var class="pdparam">cache</var>, |   |
|   | <var class="pdparam">key</var>, |   |
|   | <var class="pdparam">keylen</var>`)`; |   |

`ec_cache_t * <var class="pdparam">cache</var>`;
`const char * <var class="pdparam">key</var>`;
`int <var class="pdparam">keylen</var>`;<a name="idp50685296"></a> 
## Description

Delete an item determined by `key` from a cache.

**<a name="idp50686944"></a> Parameters**

<dl class="variablelist">

<dt>cache</dt>

<dd>

The address of the cache. The following typedef applies to the `ec_cache_t` data type:

`typedef struct ec_cache_head ec_cache_t;`.

</dd>

<dt>key</dt>

<dd>

Identifies the entry in the cache.

</dd>

<dt>keylen</dt>

<dd>

The length of the key, in bytes.

</dd>

</dl>

**<a name="idp50694800"></a> Return Values**

Returns `1` if the item was deleted from the cache and `0` otherwise.

### Note

Implicitly calls [ec_cache_delref](/momentum/3/3-api/apis-ec-cache-delref) on the corresponding structure determined by `key`.

**<a name="idp50698576"></a> Threading**

It is legal to call this function in any thread.

<a name="idp50700000"></a> 
## See Also

[ec_cache_create](/momentum/3/3-api/apis-ec-cache-create), [ec_cache_create2](/momentum/3/3-api/apis-ec-cache-create-2), [ec_cache_delref](/momentum/3/3-api/apis-ec-cache-delref), [ec_cache_destroy](/momentum/3/3-api/apis-ec-cache-destroy), [ec_cache_find](/momentum/3/3-api/apis-ec-cache-find), [ec_cache_insert](/momentum/3/3-api/apis-ec-cache-insert), [“ec_cache_head”](/momentum/3/3-api/structs-ec-cache-head), and [“ec_cache_elt”](/momentum/3/3-api/structs-ec-cache-elt).