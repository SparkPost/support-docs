---
lastUpdated: "03/26/2020"
title: "ec_mt_free"
description: "ec mt free Reclaim allocated memory void ec mt free def ptr size struct ec mem type def def void ptr size t size Configuration Change This feature is available starting from Momentum 3 0 18 Reclaim allocated memory This performs a raw free against the allocator backend Do not..."
---

<a name="apis.ec_mt_free"></a> 
## Name

ec_mt_free — Reclaim allocated memory

## Synopsis

`#include "ec_malloc.h"`

| `void **ec_mt_free** (` | <var class="pdparam">def</var>, |   |
|   | <var class="pdparam">ptr</var>, |   |
|   | <var class="pdparam">size</var>`)`; |   |

`struct ec_mem_type_def * <var class="pdparam">def</var>`;
`void * <var class="pdparam">ptr</var>`;
`size_t <var class="pdparam">size</var>`;<a name="idp54961024"></a> 
## Description

**Configuration Change. ** This feature is available starting from Momentum 3.0.18.

Reclaim allocated memory.

### Note

This performs a raw free against the allocator backend. *Do not call this function directly, [ec_free](/momentum/3/3-api/apis-ec-free) will call it at the appropriate time.* 

<dl class="variablelist">

<dt>def</dt>

<dd>

The memory type. For more information about memory types see [Memory Types](/momentum/3/3-api/arch-primary-apis#arch.memory.types).

</dd>

<dt>ptr</dt>

<dd>

A void pointer to the memory location.

</dd>

<dt>size</dt>

<dd>

The amount of memory to allocate.

</dd>

</dl>