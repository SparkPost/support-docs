---
lastUpdated: "03/26/2020"
title: "ec_cache_find"
description: "ec cache find Find a cache item determined by a key ec cache elt ec cache find cache key keylen ec cache t cache const char key int keylen Find a cache item determined by a key If the element is found its reference count will be incremented and the..."
---

<a name="apis.ec_cache_find"></a> 
## Name

ec_cache_find — Find a cache item determined by a `key`

## Synopsis

`#include "ec_cache.h"`

| `ec_cache_elt * **ec_cache_find** (` | <var class="pdparam">cache</var>, |   |
|   | <var class="pdparam">key</var>, |   |
|   | <var class="pdparam">keylen</var>`)`; |   |

`ec_cache_t * <var class="pdparam">cache</var>`;
`const char * <var class="pdparam">key</var>`;
`int <var class="pdparam">keylen</var>`;<a name="idp50765712"></a> 
## Description

Find a cache item determined by a `key`. If the element is found, its reference count will be incremented and the element returned to you.

**<a name="idp50767472"></a> Parameters**

<dl class="variablelist">

<dt>cache</dt>

<dd>

The address of the cache. The following typedef applies to the `ec_cache_t` data type:

`typedef struct ec_cache_head ec_cache_t;`.

</dd>

<dt>key</dt>

<dd>

Identifies the entry in the cache. It will be copied into the [“ec_cache_elt”](/momentum/3/3-api/structs-ec-cache-elt) structure.

</dd>

<dt>keylen</dt>

<dd>

The length of the key, in bytes.

</dd>

</dl>

**<a name="idp50775904"></a> Return Values**

Returns the address of the [“ec_cache_elt”](/momentum/3/3-api/structs-ec-cache-elt) structure associated with the `key`. Returns `NULL` if no corresponding value to `key` is found.

### Note

You are responsible for calling [ec_cache_delref](/momentum/3/3-api/apis-ec-cache-delref) on this structure when you are finished using it. This is to ensure that the cache doesn't cause it to be deleted **and** to ensure that allocated memory is released.

**<a name="idp50781136"></a> Threading**

It is legal to call this function in any thread.

<a name="idp50782560"></a> 
## See Also

[ec_cache_create](/momentum/3/3-api/apis-ec-cache-create), [ec_cache_create2](/momentum/3/3-api/apis-ec-cache-create-2), [ec_cache_delete](/momentum/3/3-api/apis-ec-cache-delete), [ec_cache_delref](/momentum/3/3-api/apis-ec-cache-delref), [ec_cache_destroy](/momentum/3/3-api/apis-ec-cache-destroy), [ec_cache_insert](/momentum/3/3-api/apis-ec-cache-insert), [ec_cache_purge](/momentum/3/3-api/apis-ec-cache-purge), [“ec_cache_elt”](/momentum/3/3-api/structs-ec-cache-elt), and [“ec_cache_head”](/momentum/3/3-api/structs-ec-cache-head)