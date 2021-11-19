---
lastUpdated: "03/26/2020"
title: "ec_realloc"
description: "ec realloc Re allocate a block of memory changing its size void ec realloc object type old size int object type void old size t size Re allocate a block of memory changing its size This function returns NULL if the size could not be altered the original pointer is..."
---

<a name="apis.ec_realloc"></a> 
## Name

ec_realloc — Re-allocate a block of memory, changing its size

## Synopsis

`#include "ec_malloc.h"`

| `void * **ec_realloc** (` | <var class="pdparam">object_type</var>, |   |
|   | <var class="pdparam">old</var>, |   |
|   | <var class="pdparam">size</var>`)`; |   |

`int <var class="pdparam">object_type</var>`;
`void * <var class="pdparam">old</var>`;
`size_t <var class="pdparam">size</var>`;<a name="idp55109088"></a> 
## Description

Re-allocate a block of memory, changing its size. This function returns NULL if the size could not be altered; the original pointer is left untouched in this case.

### Note

This function is only valid with VSIZE memory type, not a fixed size type. For more information about memory types see [Memory Types](/momentum/3/3-api/arch-primary-apis#arch.memory.types).

The "old" pointer **must** have been allocated against the same object_type as is being requested here, otherwise undefined behavior will result.

The commentary about mmap in the [ec_malloc_size](/momentum/3/3-api/apis-ec-malloc-size) documentation also applies to ec_realloc.

It is illegal to attempt to realloc a fixed size allocation using this function. Undefined, and most certainly unwanted behavior, will result if this is attempted.

Memory returned from this function must be freed via [ec_free](/momentum/3/3-api/apis-ec-free).

**<a name="idp55116256"></a> Parameters**

<dl class="variablelist">

<dt>object_type</dt>

<dd>

This parameter is an integer indicating a memory type as defined in [the section called “Memory Types”](/momentum/3/3-api/apis-ec-malloc#apis.ec_malloc.types).

</dd>

<dt>old</dt>

<dd>

A pointer to the original memory location.

</dd>

<dt>size</dt>

<dd>

A `size_t` type unsigned integer.

</dd>

</dl>

**<a name="idp55123712"></a> Return Values**

This function returns the address of the newly sized memory block; it may be the same as the original pointer.

**<a name="idp55124720"></a> Threading**

It is legal to call this function in any thread.

<a name="idp55125824"></a> 
## See Also

[ec_malloc](/momentum/3/3-api/apis-ec-malloc), [ec_malloc_size](/momentum/3/3-api/apis-ec-malloc-size), [ec_free](/momentum/3/3-api/apis-ec-free) and [ec_mt_strndup](/momentum/3/3-api/apis-ec-mt-strndup) and [ec_mt_strdup](/momentum/3/3-api/apis-ec-mt-strdup).