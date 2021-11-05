---
lastUpdated: "03/26/2020"
title: "sieve_get_arg_as_numeric"
description: "sieve get arg as numeric obtain a numeric sieve argument from either a string or a number representation int sieve get arg as numeric args n number SIEVEARGS args int n int 64 t number This reference page was automatically generated from functions found in the header files in the..."
---

<a name="apis.sieve_get_arg_as_numeric"></a> 
## Name

sieve_get_arg_as_numeric — obtain a numeric sieve argument from either a string or a number representation

## Synopsis

`#include "sieve/ecsieve.h"`

| `int **sieve_get_arg_as_numeric** (` | <var class="pdparam">args</var>, |   |
|   | <var class="pdparam">n</var>, |   |
|   | <var class="pdparam">number</var>`)`; |   |

`SIEVEARGS * <var class="pdparam">args</var>`;
`int <var class="pdparam">n</var>`;
`int64_t * <var class="pdparam">number</var>`;<a name="idp60012704"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

obtain a numeric sieve argument from either a string or a number representation

**<a name="idp60015616"></a> Parameters**

<dl class="variablelist">

<dt>args</dt>

<dd>

the sieve args

</dd>

<dt>n</dt>

<dd>

arg index

</dd>

<dt>number</dt>

<dd>

the resulting number (signed 64-bit)

</dd>

</dl>

**<a name="idp60022000"></a> Return Values**

1 on success, 0 on failure