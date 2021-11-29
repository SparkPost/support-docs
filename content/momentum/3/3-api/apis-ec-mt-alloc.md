---
lastUpdated: "03/26/2020"
title: "ec_mt_alloc"
description: "ec mt alloc Makes an allocation against a given memtype void ec mt alloc def size struct ec mem type def def size t size Configuration Change This feature is available starting from Momentum 3 0 18 Makes an allocation against a given memtype For a list of memory types..."
---

<a name="apis.ec_mt_alloc"></a> 
## Name

ec_mt_alloc — Makes an allocation against a given memtype

## Synopsis

`#include "ec_malloc.h"`

| `void * **ec_mt_alloc** (` | <var class="pdparam">def</var>, |   |
|   | <var class="pdparam">size</var>`)`; |   |

`struct ec_mem_type_def * <var class="pdparam">def</var>`;
`size_t <var class="pdparam">size</var>`;<a name="idp54921248"></a> 
## Description

**Configuration Change. ** This feature is available starting from Momentum 3.0.18.

Makes an allocation against a given memtype. For a list of memory types see [the section called “Memory Types”](/momentum/3/3-api/apis-ec-malloc#apis.ec_malloc.types).

### Note

This performs a raw allocation from the allocator backend. *Do not call this function directly, [ec_malloc](/momentum/3/3-api/apis-ec-malloc) will call it at the appropriate time.* 

Size will be the size to use for the allocation.