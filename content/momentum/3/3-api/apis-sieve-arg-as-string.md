---
lastUpdated: "03/26/2020"
title: "sieve_arg_as_string"
description: "sieve arg as string Get the specified argument as a string int sieve arg as string args str len SIEVEARGS args char str int len Get the specified argument as a string Note This returns a character array and not an ec string args The Sieve argument s For a..."
---

<a name="apis.sieve_arg_as_string"></a> 
## Name

sieve_arg_as_string — Get the specified argument as a string

## Synopsis

`#include "sieve/ecsieve.h"`

| `int **sieve_arg_as_string** (` | <var class="pdparam">args</var>, |   |
|   | <var class="pdparam">str</var>, |   |
|   | <var class="pdparam">len</var>`)`; |   |

`SIEVEARGS * <var class="pdparam">args</var>`;
`char ** <var class="pdparam">str</var>`;
`int * <var class="pdparam">len</var>`;<a name="idp59704176"></a> 
## Description

Get the specified argument as a 'string'. *Note*: This returns a character array and not an ec_string.

**<a name="idp59705888"></a> Parameters**

<dl class="variablelist">

<dt>args</dt>

<dd>

The Sieve argument(s). For a definiton of this data type see [structs.sieve_ast](/momentum/3/3-api/structs-sieve-ast).

</dd>

<dt>str</dt>

<dd>

The character array.

</dd>

<dt>len</dt>

<dd>

The length of the string.

</dd>

</dl>

**<a name="idp59713024"></a> Return Values**

This function returns `1` on success and `0` on failure.

**<a name="idp59714832"></a> Threading**

It is legal to call this function in any thread.