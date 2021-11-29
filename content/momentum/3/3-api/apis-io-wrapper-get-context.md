---
lastUpdated: "03/26/2020"
title: "io_wrapper_get_context"
description: "io wrapper get context Retrieves the context for an io object EC Dict io wrapper get context io io object io This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally available versions of..."
---

<a name="apis.io_wrapper_get_context"></a> 
## Name

io_wrapper_get_context — Retrieves the context for an io object

## Synopsis

`#include "io_wrapper.h"`

| `ECDict **io_wrapper_get_context** (` | <var class="pdparam">io</var>`)`; |   |

`io_object * <var class="pdparam">io</var>`;<a name="idp53696624"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Retrieves the context for an io object.

**<a name="idp53699488"></a> Parameters**

<dl class="variablelist">

<dt>io</dt>

<dd>

the io object

</dd>

</dl>

Note that this has nothing to do with io_wrapper_set_context_and_dtor(), which is for application level magic.

**<a name="idp53702752"></a> Return Values**

Returns an ECDict, which may be NULL.