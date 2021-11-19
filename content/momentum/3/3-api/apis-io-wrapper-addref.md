---
lastUpdated: "03/26/2020"
title: "io_wrapper_addref"
description: "io wrapper addref Add a reference to the specified io object void io wrapper addref io io object io Add a reference to the specified io object The io object This function returns void It is legal to call this function in any thread Section 68 55 io object and..."
---

<a name="apis.io_wrapper_addref"></a> 
## Name

io_wrapper_addref — Add a reference to the specified io_object

## Synopsis

`#include "io_wrapper.h"`

| `void **io_wrapper_addref** (` | <var class="pdparam">io</var>`)`; |   |

`io_object * <var class="pdparam">io</var>`;<a name="idp53488624"></a> 
## Description

Add a reference to the specified io_object.

**<a name="idp53489840"></a> Parameters**

<dl class="variablelist">

<dd>

The io_object.

</dd>

</dl>

**<a name="idp53492384"></a> Return Value**

This function returns void.

**<a name="idp53493296"></a> Threading**

It is legal to call this function in any thread.

<a name="idp53494400"></a> 
## See Also

[“io_object”](/momentum/3/3-api/structs-io-object) and [io_wrapper_destroy](/momentum/3/3-api/apis-io-wrapper-destroy)