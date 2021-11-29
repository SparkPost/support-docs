---
lastUpdated: "03/26/2020"
title: "ec_vprintf"
description: "ec vprintf vprintf like function that takes an output parameter and a write function int ec vprintf out writefunc format ap void out ssize t writefunc const char format va list ap This reference page was automatically generated from functions found in the header files in the development branch The..."
---

<a name="apis.ec_vprintf"></a> 
## Name

ec_vprintf — vprintf-like function that takes an output parameter and a write function

## Synopsis

`#include "util.h"`

| `int **ec_vprintf** (` | <var class="pdparam">out</var>, |   |
|   | <var class="pdparam">writefunc</var>, |   |
|   | <var class="pdparam">format</var>, |   |
|   | <var class="pdparam">ap</var>`)`; |   |

`void * <var class="pdparam">out</var>`;
`ssize_t(*)() <var class="pdparam">writefunc</var>`;
`const char * <var class="pdparam">format</var>`;
`va_list <var class="pdparam">ap</var>`;<a name="idp62867200"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

vprintf-like function that takes an output parameter and a write function.

**<a name="idp62870112"></a> Parameters**

<dl class="variablelist">

<dt>out</dt>

<dd>

output object, passed as the first argument to writefunc

</dd>

<dt>writefunc</dt>

<dd>

function used to write to the output object

</dd>

<dt>format</dt>

<dd>

printf-style format string

</dd>

<dt>ap</dt>

<dd>

variadic argument pointer

</dd>

</dl>

**<a name="idp62878384"></a> Return Values**

returns number of characters it attempted to write or -1 on error.