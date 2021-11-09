---
lastUpdated: "03/26/2020"
title: "ec_mt_vasprintf"
description: "ec mt vasprintf Memory typed vasprintf function int ec mt vasprintf mt strp fmt ap int mt char strp const char fmt va list ap Memory typed vasprintf function Version of vasprintf that takes an Momentum memory type as an argument mt The memory type to use for allocations For..."
---

<a name="apis.ec_mt_vasprintf"></a> 
## Name

ec_mt_vasprintf — Memory-typed vasprintf function

## Synopsis

`#include "misc/ec_string.h"`

| `int **ec_mt_vasprintf** (` | <var class="pdparam">mt</var>, |   |
|   | <var class="pdparam">strp</var>, |   |
|   | <var class="pdparam">fmt</var>, |   |
|   | <var class="pdparam">ap</var>`)`; |   |

`int <var class="pdparam">mt</var>`;
`char ** <var class="pdparam">strp</var>`;
`const char * <var class="pdparam">fmt</var>`;
`va_list <var class="pdparam">ap</var>`;<a name="idp55084224"></a> 
## Description

Memory-typed vasprintf function.

Version of vasprintf() that takes an Momentum memory type as an argument.

**<a name="idp55085968"></a> Parameters**

<dl class="variablelist">

<dt>mt</dt>

<dd>

The memory type to use for allocations. For more information about memory types see [Memory Types](/momentum/3/3-api/arch-primary-apis#arch.memory.types).

</dd>

<dt>strp</dt>

<dd>

The newly allocated string.

</dd>

<dt>fmt</dt>

<dd>

The format string.

</dd>

<dt>ap</dt>

<dd>

The list of arguments.

</dd>

</dl>

**<a name="idp55094976"></a> Return Value**

This function returns the length of the resulting string or `-1` if the allocation fails.

**<a name="idp55096400"></a> Threading**

It is legal to call this function in any thread.

<a name="idp55097504"></a> 
## See Also

[*Memory Functions*](/momentum/3/3-api/3-api-memory)