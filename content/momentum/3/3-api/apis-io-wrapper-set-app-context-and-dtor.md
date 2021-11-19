---
lastUpdated: "03/26/2020"
title: "io_wrapper_set_app_context_and_dtor"
description: "io wrapper set app context and dtor Set an application specific context value and destructor void io wrapper set app context and dtor io context on destroy io object io void context void io object on destroy Set an application specific context value and destructor An io object can store..."
---

<a name="apis.io_wrapper_set_app_context_and_dtor"></a> 
## Name

io_wrapper_set_app_context_and_dtor — Set an application-specific context value and destructor

## Synopsis

`#include "io_wrapper.h"`

| `void **io_wrapper_set_app_context_and_dtor** (` | <var class="pdparam">io</var>, |   |
|   | <var class="pdparam">context</var>, |   |
|   | <var class="pdparam">on_destroy</var>`)`; |   |

`io_object * <var class="pdparam">io</var>`;
`void * <var class="pdparam">context</var>`;
`void(*)(io_object *) <var class="pdparam">on_destroy</var>`;<a name="idp53976720"></a> 
## Description

Set an application-specific context value and destructor.

An io_object can store one context value for "application use" (not an io wrapper implementation). The destructor will be called just prior to the final destruction of the IO object, allowing an application to take some action at that point.

**<a name="idp53978656"></a> Parameters**

<dl class="variablelist">

<dt>io</dt>

<dd>

The io object.

</dd>

<dt>context</dt>

<dd>

A context value.

</dd>

<dt>dtor</dt>

<dd>

The function to call on destruction.

</dd>

</dl>

**<a name="idp53985056"></a> Return Value**

This function returns void.

**<a name="idp53985968"></a> Threading**

It is legal to call this function in any thread.

<a name="idp53987072"></a> 
## See Also

[“io_object”](/momentum/3/3-api/structs-io-object)