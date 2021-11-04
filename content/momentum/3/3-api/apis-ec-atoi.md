---
lastUpdated: "03/26/2020"
title: "ec_atoi"
description: "ec atoi Converts an ASCII string to a signed integer int ec atoi var value const char var int value Converts an ASCII string to a signed integer var The string to convert to a signed int This function assumes the string is an ASCII version of a hexadecimal octal..."
---

<a name="apis.ec_atoi"></a> 
## Name

ec_atoi — Converts an ASCII string to a signed integer

## Synopsis

`#include "util.h"`

| `int **ec_atoi** (` | <var class="pdparam">var</var>, |   |
|   | <var class="pdparam">value</var>`)`; |   |

`const char * <var class="pdparam">var</var>`;
`int * <var class="pdparam">value</var>`;<a name="idp49544816"></a> 
## Description

Converts an ASCII string to a signed integer.

**<a name="idp49546048"></a> Parameters**

<dl class="variablelist">

<dt>var</dt>

<dd>

The string to convert to a signed `int`. This function assumes the string is an ASCII version of a hexadecimal, octal, or decimal representation of an integer.

</dd>

<dt>value</dt>

<dd>

The address of a signed `int`. The converted value is stored in `*value`.

</dd>

</dl>

**<a name="idp49552112"></a> Return Values**

This function returns `1` on success, and `0` on failure.

**<a name="idp49553920"></a> Threading**

It is legal to call this function in any thread.

<a name="idp49555024"></a> 
## See Also

[ec_atoui](/momentum/3/3-api/apis-ec-atoui).