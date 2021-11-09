---
lastUpdated: "03/26/2020"
title: "io_wrapper_set_scheme"
description: "io wrapper set scheme Set the scheme associated with an io object void io wrapper set scheme io scheme io object io const char scheme This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in..."
---

<a name="apis.io_wrapper_set_scheme"></a> 
## Name

io_wrapper_set_scheme — Set the scheme associated with an io object

## Synopsis

`#include "io_wrapper.h"`

| `void **io_wrapper_set_scheme** (` | <var class="pdparam">io</var>, |   |
|   | <var class="pdparam">scheme</var>`)`; |   |

`io_object * <var class="pdparam">io</var>`;
`const char * <var class="pdparam">scheme</var>`;<a name="idp54051792"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Set the scheme associated with an io object.

The scheme is usually set by [io_wrapper_open](/momentum/3/3-api/apis-io-wrapper-open), but in some special cases it may be necessary to set it externally.

**<a name="idp54055728"></a> Parameters**

<dl class="variablelist">

<dt>io</dt>

<dd>

the io object

</dd>

<dt>scheme</dt>

<dd>

the scheme to set

</dd>

</dl>

The io object will take its own copy of the scheme string that will be freed when the object is destroyed.