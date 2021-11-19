---
lastUpdated: "03/26/2020"
title: "ec_snprintf"
description: "ec snprintf Momentum snprintf function int ec snprintf str size fmt char str size t size const char fmt This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally available versions of Momentum and..."
---

<a name="apis.ec_snprintf"></a> 
## Name

ec_snprintf — Momentum snprintf function

## Synopsis

`#include "misc/ec_string.h"`

| `int **ec_snprintf** (` | <var class="pdparam">str</var>, |   |
|   | <var class="pdparam">size</var>, |   |
|   | <var class="pdparam">fmt</var>, |   |
|   | `)`; |   |

`char * <var class="pdparam">str</var>`;
`size_t <var class="pdparam">size</var>`;
`const char * <var class="pdparam">fmt</var>`;
`...`;<a name="idp62825152"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Momentum snprintf function.

Private version of snprintf() with consistent format string support and return value.

**<a name="idp62828528"></a> Parameters**

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

</dl>

**<a name="idp62834928"></a> Return Values**

Returns the number of characters it tried to write. If this value is >= size, truncation ocurred. Note that str is always NUL-terminated as long as size is > 0.