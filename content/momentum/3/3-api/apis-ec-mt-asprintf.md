---
lastUpdated: "03/26/2020"
title: "ec_mt_asprintf"
description: "ec mt asprintf Memory typed asprintf function int ec mt asprintf mt strp fmt int mt char strp const char fmt Memory typed asprintf function This is a version of asprintf that takes a Momentum memory type as an argument For a list of memory types see the section called..."
---

<a name="apis.ec_mt_asprintf"></a> 
## Name

ec_mt_asprintf — Memory-typed asprintf function

## Synopsis

`#include "misc/ec_string.h"`

| `int **ec_mt_asprintf** (` | <var class="pdparam">mt</var>, |   |
|   | <var class="pdparam">strp</var>, |   |
|   | <var class="pdparam">fmt</var>, |   |
|   | `)`; |   |

`int <var class="pdparam">mt</var>`;
`char ** <var class="pdparam">strp</var>`;
`const char * <var class="pdparam">fmt</var>`;
`...`;<a name="idp54937600"></a> 
## Description

Memory-typed asprintf function.

This is a version of asprintf() that takes a Momentum memory type as an argument. For a list of memory types see [the section called “Memory Types”](/momentum/3/3-api/apis-ec-malloc#apis.ec_malloc.types).

**<a name="idp54939936"></a> Parameters**

<dl class="variablelist">

<dt>mt</dt>

<dd>

The memory type to use for allocations.

</dd>

<dt>strp</dt>

<dd>

The newly allocated string.

</dd>

<dt>fmt</dt>

<dd>

The format string.

</dd>

</dl>

**<a name="idp54946336"></a> Return Values**

Returns the length of the resulting string or `-1` if the allocation fails.

**<a name="idp54947744"></a> Threading**

It is legal to call this function in any thread.

<a name="idp54948848"></a> 
## See Also

[ec_malloc](/momentum/3/3-api/apis-ec-malloc) and [*Memory Functions*](/momentum/3/3-api/3-api-memory)