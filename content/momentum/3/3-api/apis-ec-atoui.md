---
lastUpdated: "03/26/2020"
title: "ec_atoui"
description: "ec atoui Converts an ASCII string to an unsigned integer int ec atoui var value const char var unsigned int value Converts an ASCII string to an unsigned integer var The string to convert to an unsigned int This function assumes the string is an ASCII version of a hexadecimal..."
---

<a name="apis.ec_atoui"></a> 
## Name

ec_atoui — Converts an ASCII string to an unsigned integer

## Synopsis

`#include "util.h"`

| `int **ec_atoui** (` | <var class="pdparam">var</var>, |   |
|   | <var class="pdparam">value</var>`)`; |   |

`const char * <var class="pdparam">var</var>`;
`unsigned int * <var class="pdparam">value</var>`;<a name="idp49565632"></a> 
## Description

Converts an ASCII string to an unsigned integer.

**<a name="idp49566864"></a> Parameters**

<dl class="variablelist">

<dt>var</dt>

<dd>

The string to convert to an `unsigned int`. This function assumes the string is an ASCII version of a hexadecimal, octal, or decimal representation of an integer.

</dd>

<dt>value</dt>

<dd>

The address of an `int`. The converted value is stored in `*value`.

</dd>

</dl>

**<a name="idp49572928"></a> Return Values**

This function returns `1` on success, and `0` on failure.

**<a name="idp49574736"></a> Threading**

It is legal to call this function in any thread.

<a name="idp49575840"></a> 
## See Also

[ec_atoi](/momentum/3/3-api/apis-ec-atoi).