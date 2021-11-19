---
lastUpdated: "03/26/2020"
title: "sieve_get_arg_lineno"
description: "sieve get arg lineno Get the current line number sieve get arg lineno args n SIEVEARGS args int n Get the current line number typically used with sieve error args The argument list On success the line number is returned otherwise 0 is returned It is legal to call this..."
---

<a name="apis.sieve_get_arg_lineno"></a> 
## Name

sieve_get_arg_lineno — Get the current line number

## Synopsis

`#include "sieve/ecsieve.h"`

| `**sieve_get_arg_lineno** (` | <var class="pdparam">args</var>, |   |
|   | <var class="pdparam">n</var>`)`; |   |

`SIEVEARGS * <var class="pdparam">args</var>`;
`int <var class="pdparam">n</var>`;<a name="idp60057152"></a> 
## Description

Get the current line number; typically used with [sieve_error](/momentum/3/3-api/apis-sieve-error).

**<a name="idp60058944"></a> Parameters**

<dl class="variablelist">

<dt>args</dt>

<dd>

The argument list.

</dd>

</dl>

**<a name="idp60061680"></a> Return Values**

On success the line number is returned; otherwise `0` is returned.

**<a name="idp60063072"></a> Threading**

It is legal to call this function in any thread.

<a name="idp60064496"></a> 
## See Also

[Section 68.76, “SIEVEARGS (sieve_ast)”](structs.sieve_ast "68.76. SIEVEARGS (sieve_ast)")