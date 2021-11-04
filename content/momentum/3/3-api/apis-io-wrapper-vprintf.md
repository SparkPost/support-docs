---
lastUpdated: "03/26/2020"
title: "io_wrapper_vprintf"
description: "io wrapper vprintf vprintf like function that operates on an io object pointer ssize t io wrapper vprintf io format ap io object io const char format va list ap This reference page was automatically generated from functions found in the header files in the development branch The function described..."
---

<a name="apis.io_wrapper_vprintf"></a> 
## Name

io_wrapper_vprintf — vprintf-like function that operates on an io_object pointer

## Synopsis

`#include "io_wrapper.h"`

| `ssize_t **io_wrapper_vprintf** (` | <var class="pdparam">io</var>, |   |
|   | <var class="pdparam">format</var>, |   |
|   | <var class="pdparam">ap</var>`)`; |   |

`io_object * <var class="pdparam">io</var>`;
`const char * <var class="pdparam">format</var>`;
`va_list <var class="pdparam">ap</var>`;<a name="idp54085664"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

vprintf-like function that operates on an io_object pointer.

**<a name="idp54088560"></a> Parameters**

<dl class="variablelist">

<dt>io</dt>

<dd>

the io object

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

**<a name="idp54094928"></a> Return Values**

returns number of characters it attempted to write or -1 on error.