---
lastUpdated: "03/26/2020"
title: "sieve_return_value_number"
description: "sieve return value number Set the return value to a number void sieve return value number seng number SENG seng u int 32 t number Set the return value to a number seng The Sieve engine state number The number return value This function returns void It is legal to..."
---

<a name="apis.sieve_return_value_number"></a> 
## Name

sieve_return_value_number — Set the return value to a number

## Synopsis

`#include "sieve/ecsieve.h"`

| `void **sieve_return_value_number** (` | <var class="pdparam">seng</var>, |   |
|   | <var class="pdparam">number</var>`)`; |   |

`SENG * <var class="pdparam">seng</var>`;
`u_int32_t <var class="pdparam">number</var>`;<a name="idp60614384"></a> 
## Description

Set the return value to a number.

**<a name="idp60615600"></a> Parameters**

<dl class="variablelist">

<dt>seng</dt>

<dd>

The Sieve engine state.

</dd>

<dt>number</dt>

<dd>

The number return value.

</dd>

</dl>

**<a name="idp60620176"></a> Return Values**

This function returns void.

**<a name="idp60621088"></a> Threading**

It is legal to call this function in any thread.

<a name="idp60622512"></a> 
## See Also

[Section 68.73, “SENG (sieve_engine)”](structs.seng "68.73. SENG (sieve_engine)")