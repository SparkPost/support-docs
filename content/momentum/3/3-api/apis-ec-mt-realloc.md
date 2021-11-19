---
lastUpdated: "03/26/2020"
title: "ec_mt_realloc"
description: "ec mt realloc Reallocate memory against a given memtype void ec mt realloc def old oldsize size struct ec mem type def def void old size t oldsize size t size Configuration Change This feature is available starting from Momentum 3 0 18 Reallocate memory against a given memtype This..."
---

<a name="apis.ec_mt_realloc"></a> 
## Name

ec_mt_realloc — Reallocate memory against a given memtype

## Synopsis

`#include "ec_malloc.h"`

| `void * **ec_mt_realloc** (` | <var class="pdparam">def</var>, |   |
|   | <var class="pdparam">old</var>, |   |
|   | <var class="pdparam">oldsize</var>, |   |
|   | <var class="pdparam">size</var>`)`; |   |

`struct ec_mem_type_def * <var class="pdparam">def</var>`;
`void * <var class="pdparam">old</var>`;
`size_t <var class="pdparam">oldsize</var>`;
`size_t <var class="pdparam">size</var>`;<a name="idp54983280"></a> 
## Description

**Configuration Change. ** This feature is available starting from Momentum 3.0.18.

Reallocate memory against a given memtype.

### Note

This performs a raw reallocation from the allocator backend. *Do not call this function directly, [ec_realloc](/momentum/3/3-api/apis-ec-realloc) will call it at the appropriate time.* 

Fixed sized allocations are never resized.

<dl class="variablelist">

<dt>def</dt>

<dd>

The memory type. For more information about memory types see [Memory Types](/momentum/3/3-api/arch-primary-apis#arch.memory.types).

</dd>

<dt>old</dt>

<dd>

A void pointer to the old memory location.

</dd>

<dt>oldsize</dt>

<dd>

The old memory size..

</dd>

<dt>size</dt>

<dd>

The new memory size.

</dd>

</dl>

<a name="idp54997392"></a> 
## See Also

[*Memory Functions*](/momentum/3/3-api/3-api-memory)