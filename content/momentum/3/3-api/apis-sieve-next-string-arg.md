---
lastUpdated: "03/26/2020"
title: "sieve_next_string_arg"
description: "sieve next string arg Return the next string argument int sieve next string arg arg iter str len SIEVEARGS arg sieve string arg iterator iter char str int len Return the next string argument arg The argument list iter The iterator The data type of this parameter is defined as..."
---

<a name="apis.sieve_next_string_arg"></a> 
## Name

sieve_next_string_arg — Return the next string argument

## Synopsis

`#include "sieve/ecsieve.h"`

| `int **sieve_next_string_arg** (` | <var class="pdparam">arg</var>, |   |
|   | <var class="pdparam">iter</var>, |   |
|   | <var class="pdparam">str</var>, |   |
|   | <var class="pdparam">len</var>`)`; |   |

`SIEVEARGS * <var class="pdparam">arg</var>`;
`sieve_string_arg_iterator * <var class="pdparam">iter</var>`;
`char ** <var class="pdparam">str</var>`;
`int * <var class="pdparam">len</var>`;<a name="idp60342912"></a> 
## Description

Return the next string argument.

**<a name="idp60344128"></a> Parameters**

<dl class="variablelist">

<dt>arg</dt>

<dd>

The argument list.

</dd>

<dt>iter</dt>

<dd>

The iterator. The data type of this parameter is defined as follows: `typedef int sieve_string_arg_iterator;`

</dd>

<dt>str</dt>

<dd>

The pointer that will point to the next string argument.

</dd>

<dt>len</dt>

<dd>

The length of the returned string.

</dd>

</dl>

**<a name="idp60352896"></a> Return Values**

On success this function returns `1`; on failure, `0`.

**<a name="idp60354720"></a> Threading**

It is legal to call this function in the thread.

<a name="idp60356416"></a> 
## See Also

[sieve_parse_args](/momentum/3/3-api/apis-sieve-parse-args)