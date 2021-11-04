---
lastUpdated: "03/26/2020"
title: "ec_memory_pretty_mem_amount"
description: "ec memory pretty mem amount A utility to render an amount with commas char ec memory pretty mem amount buf amount char buf uint 64 t amount A utility to render the amount of memory with appropriately placed commas buf A character array use dto hold the result amount The..."
---

<a name="apis.ec_memory_pretty_mem_amount"></a> 
## Name

ec_memory_pretty_mem_amount — A utility to render an amount with commas

## Synopsis

`#include "ec_malloc.h"`

| `char * **ec_memory_pretty_mem_amount** (` | <var class="pdparam">buf</var>, |   |
|   | <var class="pdparam">amount</var>`)`; |   |

`char * <var class="pdparam">buf</var>`;
`uint64_t <var class="pdparam">amount</var>`;<a name="idp54792048"></a> 
## Description

A utility to render the amount of memory with appropriately placed commas.

**<a name="idp54793312"></a> Parameters**

<dl class="variablelist">

<dt>buf</dt>

<dd>

A character array use dto hold the result.

</dd>

<dt>amount</dt>

<dd>

The amount to render.

</dd>

</dl>

**<a name="idp54797888"></a> Return Value**

This function returns `buf`, NUL terminated and containing a readable amount.

**<a name="idp54799296"></a> Threading**

You can call this function in any thread.

<a name="idp54800384"></a> 
## See Also

[*Memory Functions*](/momentum/3/3-api/3-api-memory)