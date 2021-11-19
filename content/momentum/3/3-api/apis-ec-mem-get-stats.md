---
lastUpdated: "03/26/2020"
title: "ec_mem_get_stats"
description: "ec mem get stats Return usage statistics for all memtypes int ec mem get stats sysstats usage by type nelems struct ec mem stats sysstats struct ec mem type usage usage by type unsigned int nelems Configuration Change This feature is available starting from Momentum 3 0 18 Return usage..."
---

<a name="apis.ec_mem_get_stats"></a> 
## Name

ec_mem_get_stats — Return usage statistics for all memtypes

## Synopsis

`#include "ec_malloc.h"`

| `int **ec_mem_get_stats** (` | <var class="pdparam">sysstats</var>, |   |
|   | <var class="pdparam">usage_by_type</var>, |   |
|   | <var class="pdparam">nelems</var>`)`; |   |

`struct ec_mem_stats * <var class="pdparam">sysstats</var>`;
`struct ec_mem_type_usage * <var class="pdparam">usage_by_type</var>`;
`unsigned int <var class="pdparam">nelems</var>`;<a name="idp54732720"></a> 
## Description

**Configuration Change. ** This feature is available starting from Momentum 3.0.18.

Return usage statistics for all memtypes. For more information about memory types see [Memory Types](/momentum/3/3-api/arch-primary-apis#arch.memory.types). It fills out the ec_mem_stats structures with a snapshot of the memory utilization.

It is possible, even likely, that the individual numbers are not 100% consistent with each other, as the allocator layer deliberately avoids a global lock across memory types. Since allocations are being made asynchronously, it is possible that the numbers will change before this routine completes.

The caller is responsible for providing a big enough array of ec_mem_type_usage structures. If the provided array is too small, this function will stop short of overflowing it, and will return the number of registered memtypes. The constant `MEMTYPE_MAX` defines the maximum number of memtypes supported by the allocator; it is easiest to declare a stack variable with `MEMTYPE_MAX` elements and pass that to this function.

**<a name="idp54738976"></a> Parameters**

<dl class="variablelist">

<dt>sysstats</dt>

<dd>

A buffer to hold system level information. For a description of this data type see [“ec_mem_stats”](/momentum/3/3-api/structs-ec-mem-stats).

</dd>

<dt>usage_by_type</dt>

<dd>

An array to hold per-memtype information.

</dd>

<dt>nelems</dt>

<dd>

The number of elements that can be written to in `usage_by_type`.

</dd>

</dl>

**<a name="idp54746528"></a> Return Value**

This function returns the number of defined memtypes.

**<a name="idp54747472"></a> Threading**

It is legal to call this function in any thread.

<a name="idp54748576"></a> 
## See Also

[*Memory Functions*](/momentum/3/3-api/3-api-memory)