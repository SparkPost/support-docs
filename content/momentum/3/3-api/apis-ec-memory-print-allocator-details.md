---
lastUpdated: "03/26/2020"
title: "ec_memory_print_allocator_details"
description: "ec memory print allocator details Render low level allocator information to a string buffer void ec memory print allocator details str flags string str int flags Configuration Change This feature is available starting from Momentum 3 0 18 Render low level allocator information to a string buffer The information available..."
---

<a name="apis.ec_memory_print_allocator_details"></a> 
## Name

ec_memory_print_allocator_details — Render low-level allocator information to a string buffer

## Synopsis

`#include "ec_malloc.h"`

| `void **ec_memory_print_allocator_details** (` | <var class="pdparam">str</var>, |   |
|   | <var class="pdparam">flags</var>`)`; |   |

`string * <var class="pdparam">str</var>`;
`int <var class="pdparam">flags</var>`;<a name="idp54811536"></a> 
## Description

**Configuration Change. ** This feature is available starting from Momentum 3.0.18.

Render low-level allocator information to a string buffer. The information available depends on the allocator that is in use.

This function is typically called from the [memory](/momentum/3/3-reference/3-reference-console-commands-memory) console command.

**<a name="idp54815824"></a> Parameters**

<dl class="variablelist">

<dt>str</dt>

<dd>

The string to hold memory information.

</dd>

<dt>flags</dt>

<dd>

Any combination of `EC_MALLOC_DETAILS_VERBOSE, EC_MALLOC_DETAILS_XML`.

</dd>

</dl>

**<a name="idp54820880"></a> Return Value**

This function returns void.

**<a name="idp54821792"></a> Threading**

You can call this function in any thread.

<a name="idp54822880"></a> 
## See Also

[*Memory Functions*](/momentum/3/3-api/3-api-memory)