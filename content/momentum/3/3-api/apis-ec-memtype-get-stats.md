---
lastUpdated: "03/26/2020"
title: "ec_memtype_get_stats"
description: "ec memtype get stats Return usage statistics for a given memtype int ec memtype get stats object type usage int object type struct ec mem type usage usage Configuration Change This feature is available starting from Momentum 3 0 18 Return usage statistics for a given memtype object type The..."
---

<a name="apis.ec_memtype_get_stats"></a> 
## Name

ec_memtype_get_stats — Return usage statistics for a given memtype

## Synopsis

`#include "ec_malloc.h"`

| `int **ec_memtype_get_stats** (` | <var class="pdparam">object_type</var>, |   |
|   | <var class="pdparam">usage</var>`)`; |   |

`int <var class="pdparam">object_type</var>`;
`struct ec_mem_type_usage * <var class="pdparam">usage</var>`;<a name="idp54851952"></a> 
## Description

**Configuration Change. ** This feature is available starting from Momentum 3.0.18.

Return usage statistics for a given memtype.

**<a name="idp54854864"></a> Parameters**

<dl class="variablelist">

<dt>object_type</dt>

<dd>

The memory type for which stats are desired. For more information about memory types see [Memory Types](/momentum/3/3-api/arch-primary-apis#arch.memory.types).

</dd>

<dt>usage</dt>

<dd>

A structure to hold the stats. For more information about this data structure see [“ec_mem_type_usage”](/momentum/3/3-api/structs-ec-mem-type-usage).

</dd>

</dl>

**<a name="idp54860880"></a> Return Value**

This function returns the memory statistics for the desired type.

**<a name="idp54861840"></a> Threading**

You can call this function in any thread.

<a name="idp54862928"></a> 
## See Also

[*Memory Functions*](/momentum/3/3-api/3-api-memory) and [memory console command](/momentum/3/3-reference/3-reference-console-commands-memory)