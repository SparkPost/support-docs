---
lastUpdated: "03/26/2020"
title: "sieve_return_value_string"
description: "sieve return value string Set the return value to a string void sieve return value string seng str len SENG seng const char str int len Set the return value to a string seng The Sieve engine state str The string return value len The length of the string This..."
---

<a name="apis.sieve_return_value_string"></a> 
## Name

sieve_return_value_string — Set the return value to a string

## Synopsis

`#include "sieve/ecsieve.h"`

| `void **sieve_return_value_string** (` | <var class="pdparam">seng</var>, |   |
|   | <var class="pdparam">str</var>, |   |
|   | <var class="pdparam">len</var>`)`; |   |

`SENG * <var class="pdparam">seng</var>`;
`const char * <var class="pdparam">str</var>`;
`int <var class="pdparam">len</var>`;<a name="idp60634208"></a> 
## Description

Set the return value to a string.

**<a name="idp60635424"></a> Parameters**

<dl class="variablelist">

<dt>seng</dt>

<dd>

The Sieve engine state.

</dd>

<dt>str</dt>

<dd>

The string return value.

</dd>

<dt>len</dt>

<dd>

The length of the string.

</dd>

</dl>

**<a name="idp60641808"></a> Return Values**

This function returns void.

**<a name="idp60642720"></a> Threading**

It is legal to call this function in any thread.

<a name="idp60644144"></a> 
## See Also

[Section 68.73, “SENG (sieve_engine)”](structs.seng "68.73. SENG (sieve_engine)")