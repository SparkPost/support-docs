---
lastUpdated: "03/26/2020"
title: "sieve_arg_as_numeric"
description: "sieve arg as numeric Obtain a numeric Sieve argument from either a string or a number representation int sieve arg as numeric args number SIEVEARGS args int 64 t number Obtain a numeric Sieve argument from either a string or a number representation args The Sieve argument For a definiton..."
---

<a name="apis.sieve_arg_as_numeric"></a> 
## Name

sieve_arg_as_numeric — Obtain a numeric Sieve argument from either a string or a number representation

## Synopsis

`#include "sieve/ecsieve.h"`

| `int **sieve_arg_as_numeric** (` | <var class="pdparam">args</var>, |   |
|   | <var class="pdparam">number</var>`)`; |   |

`SIEVEARGS * <var class="pdparam">args</var>`;
`int64_t * <var class="pdparam">number</var>`;<a name="idp59682608"></a> 
## Description

Obtain a numeric Sieve argument from either a string or a number representation.

**<a name="idp59683872"></a> Parameters**

<dl class="variablelist">

<dt>args</dt>

<dd>

The Sieve argument. For a definiton of this data type see [structs.sieve_ast](/momentum/3/3-api/structs-sieve-ast).

</dd>

<dt>number</dt>

<dd>

The resulting number (signed 64-bit).

</dd>

</dl>

**<a name="idp59689216"></a> Return Values**

This function returns `1` on success and `0` on failure.

**<a name="idp59691024"></a> Threading**

It is legal to call this function in any thread.

<a name="idp59692128"></a> 
## See Also

[sieve_arg_as_number](/momentum/3/3-api/apis-sieve-arg-as-number) and [sieve_parse_args](/momentum/3/3-api/apis-sieve-parse-args)