---
lastUpdated: "03/26/2020"
title: "ec_cache_insert"
description: "ec cache insert Insert a key value pair into a cache ec cache elt ec cache insert cache key keylen value ec cache t cache const char key int keylen void value Insert a key value pair into a cache cache The address of the cache The following typedef applies..."
---

<a name="apis.ec_cache_insert"></a> 
## Name

ec_cache_insert — Insert a key/value pair into a cache

## Synopsis

`#include "ec_cache.h"`

| `ec_cache_elt * **ec_cache_insert** (` | <var class="pdparam">cache</var>, |   |
|   | <var class="pdparam">key</var>, |   |
|   | <var class="pdparam">keylen</var>, |   |
|   | <var class="pdparam">value</var>`)`; |   |

`ec_cache_t * <var class="pdparam">cache</var>`;
`const char * <var class="pdparam">key</var>`;
`int <var class="pdparam">keylen</var>`;
`void * <var class="pdparam">value</var>`;<a name="idp50836416"></a> 
## Description

Insert a key/value pair into a cache.

**<a name="idp50837632"></a> Parameters**

<dl class="variablelist">

<dt>cache</dt>

<dd>

The address of the cache. The following typedef applies to the `ec_cache_t` data type:

`typedef struct ec_cache_head ec_cache_t;`.

</dd>

<dt>key</dt>

<dd>

Specifies a binary blob that is used to identify the entry in the cache. It will be copied into the [“ec_cache_elt”](/momentum/3/3-api/structs-ec-cache-elt) structure. This may also be a simple `NUL` terminated string. The cache will make a copy of this, so the memory that you supply may be a transient buffer on the stack.

</dd>

<dt>keylen</dt>

<dd>

The length of the key, in bytes. The caching infrastructure makes no assumption about the NUL terminated-ness of the key, which is why you must supply the correct length of the memory using this parameter.

</dd>

<dt>value</dt>

<dd>

The address of the value to insert into the cache. This is an arbitrary pointer to the data that you want to cache. If an existing value with the same key is present in the cache, its reference count will be decremented and the new value you are inserting will take its place.

</dd>

</dl>

**<a name="idp50849104"></a> Return Values**

Returns the address of the [“ec_cache_elt”](/momentum/3/3-api/structs-ec-cache-elt) structure associated with the value.

### Note

You are responsible for calling [ec_cache_delref](/momentum/3/3-api/apis-ec-cache-delref) on this structure when you are done using `value`. This is to ensure that the cache doesn't cause it to be deleted **and** to ensure that allocated memory is released.

<a name="apis.ec_cache_insert.closure.example"></a> 


```
#include "config.h"
#include "ec_cache.h"

...

  ec_cache_elt *elt;
  elt = ec_cache_insert(cache, "key", strlen("key"), value);

  /* you can use value here if you want */

  ec_cache_delref(cache, elt);
  /* after this point, you MUST NOT touch value if your destructor
   * frees its memory */

...
```

**<a name="idp50855760"></a> Threading**

It is legal to call this function in any thread.

<a name="idp50857184"></a> 
## See Also

[ec_cache_create](/momentum/3/3-api/apis-ec-cache-create), [ec_cache_create2](/momentum/3/3-api/apis-ec-cache-create-2), [ec_cache_delete](/momentum/3/3-api/apis-ec-cache-delete), [ec_cache_delref](/momentum/3/3-api/apis-ec-cache-delref), [ec_cache_destroy](/momentum/3/3-api/apis-ec-cache-destroy), [ec_cache_find](/momentum/3/3-api/apis-ec-cache-find), [“ec_cache_head”](/momentum/3/3-api/structs-ec-cache-head), and [“ec_cache_elt”](/momentum/3/3-api/structs-ec-cache-elt).