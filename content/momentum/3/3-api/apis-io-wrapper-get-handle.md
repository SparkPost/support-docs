---
lastUpdated: "03/26/2020"
title: "io_wrapper_get_handle"
description: "io wrapper get handle Gets the internal handle for an io object void io wrapper get handle io io object io This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally available versions of..."
---

<a name="apis.io_wrapper_get_handle"></a> 
## Name

io_wrapper_get_handle — Gets the internal handle for an io object

## Synopsis

`#include "io_wrapper.h"`

| `void * **io_wrapper_get_handle** (` | <var class="pdparam">io</var>`)`; |   |

`io_object * <var class="pdparam">io</var>`;<a name="idp53712192"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Gets the internal handle for an io object.

**<a name="idp53715008"></a> Parameters**

<dl class="variablelist">

<dt>io</dt>

<dd>

the io object

</dd>

</dl>

**<a name="idp53717712"></a> Return Values**

Returns the internal wrapper specific handle for the object.