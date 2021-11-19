---
lastUpdated: "03/26/2020"
title: "ec_malloc_size"
description: "ec malloc size Allocate a block of memory of arbitrary size void ec malloc size object type size int object type size t size Allocate a block of memory of arbitrary size The memory is uninitialized This function is only valid with VSIZE memory type not a fixed size type..."
---

<a name="apis.ec_malloc_size"></a> 
## Name

ec_malloc_size — Allocate a block of memory of arbitrary size

## Synopsis

`#include "ec_malloc.h"`

| `void * **ec_malloc_size** (` | <var class="pdparam">object_type</var>, |   |
|   | <var class="pdparam">size</var>`)`; |   |

`int <var class="pdparam">object_type</var>`;
`size_t <var class="pdparam">size</var>`;<a name="idp54698816"></a> 
## Description

Allocate a block of memory of arbitrary size. The memory is uninitialized.

### Note

This function is only valid with VSIZE memory type, not a fixed size type. For more information about memory types see [Memory Types](/momentum/3/3-api/arch-primary-apis#arch.memory.types).

Memory allocated using `ec_malloc_size` must be freed via [ec_free](/momentum/3/3-api/apis-ec-free).

The system will use the locally configured allocator to satisfy the allocation, but this choice will be overridden by the setting of the [malloc2mmap_threshold](/momentum/3/3-reference/3-reference-conf-ref-malloc-2-mmap-threshold) setting.

Since 3.0.25, the behavior of `malloc2mmap_threshold` is as follows: If malloc2mmap_threshold is set to "auto" in the configuration file (this is equivalent to -1), and the allocator is set to use the system allocator (malloc), then the threshold value is assumed to be `4092`. If the allocator is not malloc, then the threshold value is assumed to be "off" (0). If the option is configured with any other value, then that value is used as the threshold.

Any sized allocation where SIZE exceeds the effective threshold value will be satisfied using the `mmap` system call.

In versions prior to 3.0.25, the malloc2mmap_threshold is ignored unless the allocator is set to the system allocator. The default value is `4092`.

In all versions, if the effective threshold value is 0, then mmap() will not be used directly by `ec_malloc_size` allocations, although the underlying allocator may opt to use mmap itself.

Regardless of whether mmap() is used directly or indirectly by `ec_malloc_size`, the memory returned from this function must only be freed using [ec_free](/momentum/3/3-api/apis-ec-free).

**<a name="idp54711168"></a> Parameters**

<dl class="variablelist">

<dt>object_type</dt>

<dd>

This parameter is an integer indicating a memory type as defined in [the section called “Memory Types”](/momentum/3/3-api/apis-ec-malloc#apis.ec_malloc.types).

</dd>

<dt>size</dt>

<dd>

A `size_t` type unsigned integer.

</dd>

</dl>

**<a name="idp54716784"></a> Return Values**

This function returns a void pointer to the memory location.

**<a name="idp54717744"></a> Threading**

It is legal to call this function in any thread.

<a name="idp54718848"></a> 
## See Also

[ec_malloc](/momentum/3/3-api/apis-ec-malloc), [ec_free](/momentum/3/3-api/apis-ec-free), [ec_realloc](/momentum/3/3-api/apis-ec-realloc) [ec_mt_strndup](/momentum/3/3-api/apis-ec-mt-strndup) and [ec_mt_strdup](/momentum/3/3-api/apis-ec-mt-strdup).