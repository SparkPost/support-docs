---
lastUpdated: "03/26/2020"
title: "sieve_arg_as_number"
description: "sieve arg as number Get the specified argument s as a number int sieve arg as number args number SIEVEARGS args u int 32 t number Get the specified argument s as a number args The sieve argument For a definiton of this data type see structs sieve ast number..."
---

<a name="apis.sieve_arg_as_number"></a> 
## Name

sieve_arg_as_number — Get the specified argument(s) as a number

## Synopsis

`#include "sieve/ecsieve.h"`

| `int **sieve_arg_as_number** (` | <var class="pdparam">args</var>, |   |
|   | <var class="pdparam">number</var>`)`; |   |

`SIEVEARGS * <var class="pdparam">args</var>`;
`u_int32_t * <var class="pdparam">number</var>`;<a name="idp59662432"></a> 
## Description

Get the specified argument(s) as a number.

**<a name="idp59663648"></a> Parameters**

<dl class="variablelist">

<dt>args</dt>

<dd>

The sieve argument. For a definiton of this data type see [structs.sieve_ast](/momentum/3/3-api/structs-sieve-ast).

</dd>

<dt>number</dt>

<dd>

The number (signed 32-bit).

</dd>

</dl>

**<a name="idp59668976"></a> Return Values**

This function returns `1` on success and `0` on failure.

**<a name="idp59670784"></a> Threading**

It is legal to call this function in any thread.

<a name="idp59671888"></a> 
## See Also

[sieve_parse_args](/momentum/3/3-api/apis-sieve-parse-args)