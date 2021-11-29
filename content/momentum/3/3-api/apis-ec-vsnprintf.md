---
lastUpdated: "03/26/2020"
title: "ec_vsnprintf"
description: "ec vsnprintf Momentum vsnprintf function int ec vsnprintf str size fmt ap char str size t size const char fmt va list ap This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally available..."
---

<a name="apis.ec_vsnprintf"></a> 
## Name

ec_vsnprintf — Momentum vsnprintf function

## Synopsis

`#include "misc/ec_string.h"`

| `int **ec_vsnprintf** (` | <var class="pdparam">str</var>, |   |
|   | <var class="pdparam">size</var>, |   |
|   | <var class="pdparam">fmt</var>, |   |
|   | <var class="pdparam">ap</var>`)`; |   |

`char * <var class="pdparam">str</var>`;
`size_t <var class="pdparam">size</var>`;
`const char * <var class="pdparam">fmt</var>`;
`va_list <var class="pdparam">ap</var>`;<a name="idp62889920"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Momentum vsnprintf function.

Private version of vsnprintf() with consistent format string support and return value.

**<a name="idp62893328"></a> Parameters**

<dl class="variablelist">

<dt>str</dt>

<dd>

the string to be written to

</dd>

<dt>size</dt>

<dd>

the size of str (including the terminating NUL)

</dd>

<dt>fmt</dt>

<dd>

the format string

</dd>

<dt>ap</dt>

<dd>

list of arguments

</dd>

</dl>

**<a name="idp62901552"></a> Return Values**

Returns the number of characters it tried to write. If this value is >= size, truncation ocurred. Note that str is always NUL-terminated as long as size is > 0.