---
lastUpdated: "03/26/2020"
title: "ec_vasprintf"
description: "ec vasprintf Momentum vasprintf function int ec vasprintf strp fmt ap char strp const char fmt va list ap This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally available versions of Momentum and..."
---

<a name="apis.ec_vasprintf"></a> 
## Name

ec_vasprintf — Momentum vasprintf function

## Synopsis

`#include "misc/ec_string.h"`

| `int **ec_vasprintf** (` | <var class="pdparam">strp</var>, |   |
|   | <var class="pdparam">fmt</var>, |   |
|   | <var class="pdparam">ap</var>`)`; |   |

`char ** <var class="pdparam">strp</var>`;
`const char * <var class="pdparam">fmt</var>`;
`va_list <var class="pdparam">ap</var>`;<a name="idp62845840"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

vasprintf function.

Private version of vasprintf() with consistent format string support and return value.

**<a name="idp62849232"></a> Parameters**

<dl class="variablelist">

<dt>strp</dt>

<dd>

the newly allocated string

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

**<a name="idp62855616"></a> Return Values**

Returns the length of the resulting string or -1 if the allocation fails.