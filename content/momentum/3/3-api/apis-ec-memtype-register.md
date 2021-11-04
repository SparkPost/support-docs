---
lastUpdated: "03/26/2020"
title: "ec_memtype_register"
description: "ec memtype register Register a new memtype with the system int ec memtype register def const mem type def def Register a new memtype with the system The build in memtypes are enumerated at the section called Memory Types Given a mem type def structure this function registers the memtype..."
---

<a name="apis.ec_memtype_register"></a> 
## Name

ec_memtype_register — Register a new memtype with the system

## Synopsis

`#include "ec_malloc.h"`

| `int **ec_memtype_register** (` | <var class="pdparam">def</var>`)`; |   |

`const mem_type_def * <var class="pdparam">def</var>`;<a name="idp54897392"></a> 
## Description

Register a new memtype with the system. The build-in memtypes are enumerated at [the section called “Memory Types”](/momentum/3/3-api/apis-ec-malloc#apis.ec_malloc.types).

Given a mem_type_def structure, this function registers the memtype with the allocator and returns the memtype id that can then be passed to calls to [ec_malloc](/momentum/3/3-api/apis-ec-malloc) and related functions to allocate memory against that type.

**<a name="idp54900432"></a> Parameters**

<dl class="variablelist">

<dt>def</dt>

<dd>

A constant pointer to a [“ec_mem_type_def”](/momentum/3/3-api/structs-ec-mem-type-def) struct.

</dd>

</dl>

**<a name="idp54903712"></a> Return Value**

The new memtype id, or `MEMTYPE_REGISTER_FAILED` (-1) if the new type could not be registered.

Note that the definition structure is effectively copied; after this call returns, the allocator does not use the provided mem_type_def pointer, however, the memtype_description field **must not**     be transient memory; its value is assumed to hold a valid value for the lifetime of the process.

**<a name="idp54906576"></a> Threading**

It is legal to call this function in the `Scheduler` thread.

<a name="idp54908112"></a> 
## See Also

[ec_malloc](/momentum/3/3-api/apis-ec-malloc), [ec_malloc_size](/momentum/3/3-api/apis-ec-malloc-size), [ec_realloc](/momentum/3/3-api/apis-ec-realloc), [ec_mt_strndup](/momentum/3/3-api/apis-ec-mt-strndup) and [ec_mt_strdup](/momentum/3/3-api/apis-ec-mt-strdup).