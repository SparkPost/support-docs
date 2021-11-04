---
lastUpdated: "03/26/2020"
title: "sieve_return_value_string_list"
description: "sieve return value string list Set the return value to a string list void sieve return value string list seng SENG seng Declare that the return value will be a string list seng The Sieve engine state This function returns void It is legal to call this function in any..."
---

<a name="apis.sieve_return_value_string_list"></a> 
## Name

sieve_return_value_string_list — Set the return value to a string list

## Synopsis

`#include "sieve/ecsieve.h"`

| `void **sieve_return_value_string_list** (` | <var class="pdparam">seng</var>`)`; |   |

`SENG * <var class="pdparam">seng</var>`;<a name="idp60654304"></a> 
## Description

Declare that the return value will be a string list.

**<a name="idp60655536"></a> Parameters**

<dl class="variablelist">

<dt>seng</dt>

<dd>

The Sieve engine state.

</dd>

</dl>

**<a name="idp60658272"></a> Return Values**

This function returns void.

**<a name="idp60659184"></a> Threading**

It is legal to call this function in any thread.

<a name="idp60660608"></a> 
## See Also

[Section 68.73, “SENG (sieve_engine)”](structs.seng "68.73. SENG (sieve_engine)")