---
lastUpdated: "03/26/2020"
title: "ec_free"
description: "ec free Free memory allocated void ec free object type ptr int object type void ptr Returns memory allocated by ec malloc ec malloc size or ec realloc to the allocator layer ready for reuse Other functions which allocate memory and must use ec free are and ec mt strdup..."
---

<a name="apis.ec_free"></a> 
## Name

ec_free — Free memory allocated

## Synopsis

`#include "ec_malloc.h"`

| `void **ec_free** (` | <var class="pdparam">object_type</var>, |   |
|   | <var class="pdparam">ptr</var>`)`; |   |

`int <var class="pdparam">object_type</var>`;
`void * <var class="pdparam">ptr</var>`;<a name="idp54643712"></a> 
## Description

Returns memory allocated by `ec_malloc`, `ec_malloc_size` or `ec_realloc` to the allocator layer, ready for reuse.

Other functions which allocate memory and must use `ec_free` are and `ec_mt_strdup` `ec_mt_strndup`. *Note*: `ec_strdup` and `ec_strndup` are macros that invoke the preceding functions so memory allocated by these functions must also use `ec_free`.

**<a name="idp54650016"></a> Parameters**

<dl class="variablelist">

<dt>object_type</dt>

<dd>

One of the memory types enumerated at [the section called “Memory Types”](/momentum/3/3-api/apis-ec-malloc#apis.ec_malloc.types).

</dd>

<dt>ptr</dt>

<dd>

A pointer to the memory location.

</dd>

</dl>

**<a name="idp54655168"></a> Return Values**

This function returns void.

**<a name="idp54656080"></a> Threading**

It is legal to call this function in any thread.

<a name="idp54657184"></a> 
## See Also

[ec_malloc](/momentum/3/3-api/apis-ec-malloc), [ec_malloc_size](/momentum/3/3-api/apis-ec-malloc-size), [ec_realloc](/momentum/3/3-api/apis-ec-realloc), [ec_mt_strndup](/momentum/3/3-api/apis-ec-mt-strndup) and [ec_mt_strdup](/momentum/3/3-api/apis-ec-mt-strdup).