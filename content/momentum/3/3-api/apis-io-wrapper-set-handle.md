---
lastUpdated: "03/26/2020"
title: "io_wrapper_set_handle"
description: "io wrapper set handle Sets the internal handle for an io object void io wrapper set handle io handle io object io void handle This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally..."
---

<a name="apis.io_wrapper_set_handle"></a> 
## Name

io_wrapper_set_handle — Sets the internal handle for an io object

## Synopsis

`#include "io_wrapper.h"`

| `void **io_wrapper_set_handle** (` | <var class="pdparam">io</var>, |   |
|   | <var class="pdparam">handle</var>`)`; |   |

`io_object * <var class="pdparam">io</var>`;
`void * <var class="pdparam">handle</var>`;<a name="idp54015584"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Sets the internal handle for an io object.

**<a name="idp54018400"></a> Parameters**

<dl class="variablelist">

<dt>io</dt>

<dd>

the io object

</dd>

<dt>handle</dt>

<dd>

the handle to set

</dd>

</dl>

Used by a wrapper implementation to store its per-object state.