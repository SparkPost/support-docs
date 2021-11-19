---
lastUpdated: "03/26/2020"
title: "sieve_get_arg"
description: "sieve get arg Get the argument at the specified index SIEVEARGS sieve get arg args n SIEVEARGS args int n Get the argument at the specified zero based index You must call sieve arg delref when you are done using the item args The argument list n Which argument to..."
---

<a name="apis.sieve_get_arg"></a> 
## Name

sieve_get_arg — Get the argument at the specified index

## Synopsis

`#include "sieve/ecsieve.h"`

| `SIEVEARGS * **sieve_get_arg** (` | <var class="pdparam">args</var>, |   |
|   | <var class="pdparam">n</var>`)`; |   |

`SIEVEARGS * <var class="pdparam">args</var>`;
`int <var class="pdparam">n</var>`;<a name="idp59991568"></a> 
## Description

Get the argument at the specified zero-based index.

You must call [sieve_arg_delref](/momentum/3/3-api/apis-sieve-arg-delref) when you are done using the item.

**<a name="idp59994016"></a> Parameters**

<dl class="variablelist">

<dt>args</dt>

<dd>

The argument list.

</dd>

<dt>n</dt>

<dd>

Which argument to examine, indexed from 0.

</dd>

</dl>

**<a name="idp59998592"></a> Return Values**

The argument at the specified index is returned.

**<a name="idp59999536"></a> Threading**

It is legal to call this function in any thread.

<a name="idp60000960"></a> 
## See Also

[Section 68.76, “SIEVEARGS (sieve_ast)”](structs.sieve_ast "68.76. SIEVEARGS (sieve_ast)")