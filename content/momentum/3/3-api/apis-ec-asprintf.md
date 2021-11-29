---
lastUpdated: "03/26/2020"
title: "ec_asprintf"
description: "ec asprintf Momentum asprintf function int ec asprintf strp fmt char strp const char fmt This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally available versions of Momentum and may change in behavior..."
---

<a name="apis.ec_asprintf"></a> 
## Name

ec_asprintf — Momentum asprintf function

## Synopsis

`#include "misc/ec_string.h"`

| `int **ec_asprintf** (` | <var class="pdparam">strp</var>, |   |
|   | <var class="pdparam">fmt</var>, |   |
|   | `)`; |   |

`char ** <var class="pdparam">strp</var>`;
`const char * <var class="pdparam">fmt</var>`;
`...`;<a name="idp62805952"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Momentum asprintf function.

Private version of asprintf() with consistent format string support and return value.

**<a name="idp62809328"></a> Parameters**

<dl class="variablelist">

<dt>strp</dt>

<dd>

the newly allocated string

</dd>

<dt>fmt</dt>

<dd>

the format string

</dd>

</dl>

**<a name="idp62813888"></a> Return Values**

Returns the length of the resulting string or -1 if the allocation fails.