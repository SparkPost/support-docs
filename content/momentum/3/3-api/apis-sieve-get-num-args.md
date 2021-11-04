---
lastUpdated: "03/26/2020"
title: "sieve_get_num_args"
description: "sieve get num args Return the number of Sieve arguments int sieve get num args args SIEVEARGS args Return the number of Sieve arguments args The argument list This function returns the number of Sieve arguments It is legal to call this function in any thread Section 68 76 SIEVEARGS..."
---

<a name="apis.sieve_get_num_args"></a> 
## Name

sieve_get_num_args — Return the number of Sieve arguments

## Synopsis

`#include "sieve/ecsieve.h"`

| `int **sieve_get_num_args** (` | <var class="pdparam">args</var>`)`; |   |

`SIEVEARGS * <var class="pdparam">args</var>`;<a name="idp60176544"></a> 
## Description

Return the number of Sieve arguments.

**<a name="idp60177760"></a> Parameters**

<dl class="variablelist">

<dt>args</dt>

<dd>

The argument list.

</dd>

</dl>

**<a name="idp60180496"></a> Return Values**

This function returns the number of Sieve arguments.

**<a name="idp60181440"></a> Threading**

It is legal to call this function in any thread.

<a name="idp60182864"></a> 
## See Also

[Section 68.76, “SIEVEARGS (sieve_ast)”](structs.sieve_ast "68.76. SIEVEARGS (sieve_ast)") and [sieve_parse_args](/momentum/3/3-api/apis-sieve-parse-args)