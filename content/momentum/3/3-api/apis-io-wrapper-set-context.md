---
lastUpdated: "03/26/2020"
title: "io_wrapper_set_context"
description: "io wrapper set context Sets the context for an io object void io wrapper set context io ctx io object io EC Dict ctx This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally..."
---

<a name="apis.io_wrapper_set_context"></a> 
## Name

io_wrapper_set_context — Sets the context for an io object

## Synopsis

`#include "io_wrapper.h"`

| `void **io_wrapper_set_context** (` | <var class="pdparam">io</var>, |   |
|   | <var class="pdparam">ctx</var>`)`; |   |

`io_object * <var class="pdparam">io</var>`;
`ECDict <var class="pdparam">ctx</var>`;<a name="idp53997936"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Sets the context for an io object.

**<a name="idp54000800"></a> Parameters**

<dl class="variablelist">

<dt>io</dt>

<dd>

the io object

</dd>

<dt>ctx</dt>

<dd>

the dictionary to use for the context

</dd>

</dl>

The io_object takes a reference on the dictionary.

Note that this has nothing to do with io_wrapper_set_context_and_dtor(), which is for application level magic.