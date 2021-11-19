---
lastUpdated: "03/26/2020"
title: "io_wrapper_get_app_context"
description: "io wrapper get app context Retrieve the application context value void io wrapper get app context io io object io Retrieve the application context value io The io object Retreive the application defined context value that was set via io wrapper set context and dtor It is legal to call..."
---

<a name="apis.io_wrapper_get_app_context"></a> 
## Name

io_wrapper_get_app_context — Retrieve the application context value

## Synopsis

`#include "io_wrapper.h"`

| `void * **io_wrapper_get_app_context** (` | <var class="pdparam">io</var>`)`; |   |

`io_object * <var class="pdparam">io</var>`;<a name="idp53679680"></a> 
## Description

Retrieve the application context value.

**<a name="idp53680896"></a> Parameters**

<dl class="variablelist">

<dt>io</dt>

<dd>

The io object.

</dd>

</dl>

**<a name="idp53683600"></a> Return Values**

Retreive the application defined context value that was set via [io_wrapper_set_context_and_dtor](/momentum/3/3-api/apis-io-wrapper-set-app-context-and-dtor).

**<a name="idp53685328"></a> Threading**

It is legal to call this function in any thread.

<a name="idp53686432"></a> 
## See Also

[“ec_spool_ctx”](/momentum/3/3-api/structs-ec-spool-ctx)