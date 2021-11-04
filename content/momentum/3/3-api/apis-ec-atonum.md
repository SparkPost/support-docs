---
lastUpdated: "03/26/2020"
title: "_ec_atonum"
description: "ec atonum Convert e string str to a signed integral value and store the result in nptr int ec atonum str nptr width endptr const char str void nptr int width char endptr This reference page was automatically generated from functions found in the header files in the development branch..."
---

<a name="apis._ec_atonum"></a> 
## Name

_ec_atonum — Convert e string "str" to a signed integral value and store the result in "*nptr"

## Synopsis

`#include "util.h"`

| `int **_ec_atonum** (` | <var class="pdparam">str</var>, |   |
|   | <var class="pdparam">nptr</var>, |   |
|   | <var class="pdparam">width</var>, |   |
|   | <var class="pdparam">endptr</var>`)`; |   |

`const char * <var class="pdparam">str</var>`;
`void * <var class="pdparam">nptr</var>`;
`int <var class="pdparam">width</var>`;
`char ** <var class="pdparam">endptr</var>`;<a name="idp49443168"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Convert e string "str" to a signed integral value and store the result in "*nptr".

Recognises decimal, hex and octal values.

**<a name="idp49446560"></a> Parameters**

<dl class="variablelist">

<dt>str</dt>

<dd>

the source string

</dd>

<dt>nptr</dt>

<dd>

the destination pointer the number is stored in

</dd>

<dt>width</dt>

<dd>

the size in bytes of the integer type to be used

</dd>

<dt>endptr</dt>

<dd>

if non-NULL, holds the address of the first non-digit found

</dd>

</dl>

**<a name="idp49454880"></a> Return Values**

0 if "str" was not a valid integer, 1 if it was