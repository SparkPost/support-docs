---
lastUpdated: "03/26/2020"
title: "ec_memtype_by_name"
description: "ec memtype by name Returns the memtype id for a given memtype name int ec memtype by name name const char name Returns the memtype id for a given memtype name This walks the list of memtypes each time it is invoked it is recommended that this function be called..."
---

<a name="apis.ec_memtype_by_name"></a> 
## Name

ec_memtype_by_name — Returns the memtype id for a given memtype name

## Synopsis

`#include "ec_malloc.h"`

| `int **ec_memtype_by_name** (` | <var class="pdparam">name</var>`)`; |   |

`const char * <var class="pdparam">name</var>`;<a name="idp54833024"></a> 
## Description

Returns the memtype id for a given memtype name.

This walks the list of memtypes each time it is invoked; it is recommended that this function be called once and the result cached.

**<a name="idp54834848"></a> Parameters**

<dl class="variablelist">

<dt>name</dt>

<dd>

The memtype name. For more information about memory names and types see [Memory Types](/momentum/3/3-api/arch-primary-apis#arch.memory.types).

</dd>

</dl>

**<a name="idp54838368"></a> Return Value**

This function returns the memtype ID. If the name does not exist, it returns `MEMTYPE_REGISTER_FAILED` (-1).

**<a name="idp54839792"></a> Threading**

You can call this function in any thread.

<a name="idp54840880"></a> 
## See Also

[*Memory Functions*](/momentum/3/3-api/3-api-memory)