---
lastUpdated: "03/26/2020"
title: "ec_memtype_range_by_module"
description: "ec memtype range by module Returns the range of memtypes associated with a given module int ec memtype range by module module lower upper const char module int lower int upper This function determines whether a specific range of memtypes is associated with a given module For more information about..."
---

<a name="apis.ec_memtype_range_by_module"></a> 
## Name

ec_memtype_range_by_module — Returns the range of memtypes associated with a given module

## Synopsis

`#include "ec_malloc.h"`

| `int **ec_memtype_range_by_module** (` | <var class="pdparam">module</var>, |   |
|   | <var class="pdparam">lower</var>, |   |
|   | <var class="pdparam">upper</var>`)`; |   |

`const char * <var class="pdparam">module</var>`;
`int * <var class="pdparam">lower</var>`;
`int * <var class="pdparam">upper</var>`;<a name="idp54875472"></a> 
## Description

This function determines whether a specific range of memtypes is associated with a given module. For more information about memory types see [Memory Types](/momentum/3/3-api/arch-primary-apis#arch.memory.types).

**<a name="idp54877520"></a> Parameters**

<dl class="variablelist">

<dt>module</dt>

<dd>

The module prefix.

</dd>

<dt>lower</dt>

<dd>

The lower end of the range.

</dd>

<dt>upper</dt>

<dd>

The upper end of the range.

</dd>

</dl>

**<a name="idp54883936"></a> Return Value**

This function returns `0` if no memtypes matched, `1` otherwise.

**<a name="idp54885760"></a> Threading**

You can call this function from any thread.

<a name="idp54886848"></a> 
## See Also

[*Memory Functions*](/momentum/3/3-api/3-api-memory) and [ec_memtype_by_name](/momentum/3/3-api/apis-ec-memtype-by-name)