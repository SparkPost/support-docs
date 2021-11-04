---
lastUpdated: "03/26/2020"
title: "sieve_return_value_append_string"
description: "sieve return value append string Append a string to the return value void sieve return value append string seng str len SENG seng const char str int len Append a string to the return value seng The Sieve engine state str The string value to append len The length of..."
---

<a name="apis.sieve_return_value_append_string"></a> 
## Name

sieve_return_value_append_string — Append a string to the return value

## Synopsis

`#include "sieve/ecsieve.h"`

| `void **sieve_return_value_append_string** (` | <var class="pdparam">seng</var>, |   |
|   | <var class="pdparam">str</var>, |   |
|   | <var class="pdparam">len</var>`)`; |   |

`SENG * <var class="pdparam">seng</var>`;
`const char * <var class="pdparam">str</var>`;
`int <var class="pdparam">len</var>`;<a name="idp60574464"></a> 
## Description

Append a string to the return value.

**<a name="idp60575680"></a> Parameters**

<dl class="variablelist">

<dt>seng</dt>

<dd>

The Sieve engine state.

</dd>

<dt>str</dt>

<dd>

The string value to append.

</dd>

<dt>len</dt>

<dd>

The length of the appended string value.

</dd>

</dl>

**<a name="idp60582080"></a> Return Values**

This function returns void.

**<a name="idp60582992"></a> Threading**

It is legal to call this function in any thread.

<a name="idp60584416"></a> 
## See Also

[Section 68.73, “SENG (sieve_engine)”](structs.seng "68.73. SENG (sieve_engine)")