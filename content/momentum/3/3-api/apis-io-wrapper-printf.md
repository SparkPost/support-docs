---
lastUpdated: "03/26/2020"
title: "io_wrapper_printf"
description: "io wrapper printf printf like function that operates on an io object pointer ssize t io wrapper printf io format io object io const char format This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist..."
---

<a name="apis.io_wrapper_printf"></a> 
## Name

io_wrapper_printf — printf-like function that operates on an io_object pointer

## Synopsis

`#include "io_wrapper.h"`

| `ssize_t **io_wrapper_printf** (` | <var class="pdparam">io</var>, |   |
|   | <var class="pdparam">format</var>, |   |
|   | `)`; |   |

`io_object * <var class="pdparam">io</var>`;
`const char * <var class="pdparam">format</var>`;
`...`;<a name="idp53932768"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

printf-like function that operates on an io_object pointer.

**<a name="idp53935648"></a> Parameters**

<dl class="variablelist">

<dt>io</dt>

<dd>

the io object

</dd>

<dt>format</dt>

<dd>

printf-style format string

</dd>

<dt>...</dt>

<dd>

variadic arguments

</dd>

</dl>

**<a name="idp53942016"></a> Return Values**

returns number of characters it attempted to write or -1 on error.