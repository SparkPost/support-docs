---
lastUpdated: "03/26/2020"
title: "io_wrapper_delref"
description: "io wrapper delref Decrements the refcount on the io object and closes and frees it if the refcount reaches 0 void io wrapper delref io io object io Decrement the refcount on the io object and close and free it if the refcount reaches 0 io The io object that..."
---

<a name="apis.io_wrapper_delref"></a> 
## Name

io_wrapper_delref — Decrements the refcount on the io_object, and closes and frees it if the refcount reaches 0

## Synopsis

`#include "io_wrapper.h"`

| `void **io_wrapper_delref** (` | <var class="pdparam">io</var>`)`; |   |

`io_object * <var class="pdparam">io</var>`;<a name="idp53617296"></a> 
## Description

Decrement the refcount on the io_object, and close and free it if the refcount reaches `0`.

**<a name="idp53619008"></a> Parameters**

<dl class="variablelist">

<dt>io</dt>

<dd>

The io_object that you wish to destroy.

</dd>

</dl>

**<a name="idp53621744"></a> Return Value**

This function returns void.

**<a name="idp53622656"></a> Threading**

It is legal to call this function in any thread.

<a name="idp53623760"></a> 
## See Also

[“io_object”](/momentum/3/3-api/structs-io-object)