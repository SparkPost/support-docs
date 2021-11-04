---
lastUpdated: "03/26/2020"
title: "sieve_return_value_hash"
description: "sieve return value hash Set the return value to a hash void sieve return value hash seng hash SENG seng SIEVEARGS hash Set the return value to a hash seng The Sieve engine state hash The hash return value This function returns void It is legal to call this function..."
---

<a name="apis.sieve_return_value_hash"></a> 
## Name

sieve_return_value_hash — Set the return value to a hash

## Synopsis

`#include "sieve/ecsieve.h"`

| `void **sieve_return_value_hash** (` | <var class="pdparam">seng</var>, |   |
|   | <var class="pdparam">hash</var>`)`; |   |

`SENG * <var class="pdparam">seng</var>`;
`SIEVEARGS * <var class="pdparam">hash</var>`;<a name="idp60595296"></a> 
## Description

Set the return value to a hash.

**<a name="idp60596512"></a> Parameters**

<dl class="variablelist">

<dt>seng</dt>

<dd>

The Sieve engine state.

</dd>

<dt>hash</dt>

<dd>

The hash return value.

</dd>

</dl>

**<a name="idp60601088"></a> Return Values**

This function returns void.

**<a name="idp60602000"></a> Threading**

It is legal to call this function in any thread.

<a name="idp60603424"></a> 
## See Also

[Section 68.73, “SENG (sieve_engine)”](structs.seng "68.73. SENG (sieve_engine)")