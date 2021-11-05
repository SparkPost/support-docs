---
lastUpdated: "03/26/2020"
title: "sieve_string_list_append"
description: "sieve string list append Append a value to a string list void sieve string list append seng sl arg SENG seng SIEVEARGS sl SIEVEARGS arg Append a value to a string list seng The Sieve engine state sl The string list to append to arg The argument to append This..."
---

<a name="apis.sieve_string_list_append"></a> 
## Name

sieve_string_list_append — Append a value to a string list

## Synopsis

`#include "sieve/ecsieve.h"`

| `void **sieve_string_list_append** (` | <var class="pdparam">seng</var>, |   |
|   | <var class="pdparam">sl</var>, |   |
|   | <var class="pdparam">arg</var>`)`; |   |

`SENG * <var class="pdparam">seng</var>`;
`SIEVEARGS * <var class="pdparam">sl</var>`;
`SIEVEARGS * <var class="pdparam">arg</var>`;<a name="idp60908288"></a> 
## Description

Append a value to a string list.

**<a name="idp60909504"></a> Parameters**

<dl class="variablelist">

<dt>seng</dt>

<dd>

The Sieve engine state.

</dd>

<dt>sl</dt>

<dd>

The string list to append to.

</dd>

<dt>arg</dt>

<dd>

The argument to append.

</dd>

</dl>

**<a name="idp60915888"></a> Return Values**

This function returns void.

**<a name="idp60916800"></a> Threading**

It is legal to call this function in any thread.

<a name="idp60918224"></a> 
## See Also

[Section 68.73, “SENG (sieve_engine)”](structs.seng "68.73. SENG (sieve_engine)") and [Section 68.76, “SIEVEARGS (sieve_ast)”](structs.sieve_ast "68.76. SIEVEARGS (sieve_ast)")