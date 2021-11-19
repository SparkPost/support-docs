---
lastUpdated: "03/26/2020"
title: "sieve_get_arg_as_string"
description: "sieve get arg as string Return the specified argument as a string int sieve get arg as string args n str len SIEVEARGS args int n char str int len Return the argument at the specified zero based index as a string args The argument list n Which argument to..."
---

<a name="apis.sieve_get_arg_as_string"></a> 
## Name

sieve_get_arg_as_string — Return the specified argument as a string

## Synopsis

`#include "sieve/ecsieve.h"`

| `int **sieve_get_arg_as_string** (` | <var class="pdparam">args</var>, |   |
|   | <var class="pdparam">n</var>, |   |
|   | <var class="pdparam">str</var>, |   |
|   | <var class="pdparam">len</var>`)`; |   |

`SIEVEARGS * <var class="pdparam">args</var>`;
`int <var class="pdparam">n</var>`;
`char ** <var class="pdparam">str</var>`;
`int * <var class="pdparam">len</var>`;<a name="idp60033536"></a> 
## Description

Return the argument at the specified zero-based index as a string.

**<a name="idp60034784"></a> Parameters**

<dl class="variablelist">

<dt>args</dt>

<dd>

The argument list.

</dd>

<dt>n</dt>

<dd>

Which argument to examine, indexed from 0.

</dd>

<dt>str</dt>

<dd>

The pointer to the returned string.

</dd>

<dt>len</dt>

<dd>

The length of the string.

</dd>

</dl>

**<a name="idp60043024"></a> Return Values**

On success this function returns `1`; on failure `0`.

**<a name="idp60044848"></a> Threading**

It is legal to call this function in any thread.

<a name="idp60046272"></a> 
## See Also

[Section 68.76, “SIEVEARGS (sieve_ast)”](structs.sieve_ast "68.76. SIEVEARGS (sieve_ast)")