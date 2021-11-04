---
lastUpdated: "03/26/2020"
title: "io_wrapper_flush"
description: "io wrapper flush Flush a resource int io wrapper flush io io object io Flush a resource prior to destroying it io The resource On success this function returns 0 on failure it returns 1 and errno is set appropriately It is legal to call this function in any thread..."
---

<a name="apis.io_wrapper_flush"></a> 
## Name

io_wrapper_flush — Flush a resource

## Synopsis

`#include "io_wrapper.h"`

| `int **io_wrapper_flush** (` | <var class="pdparam">io</var>`)`; |   |

`io_object * <var class="pdparam">io</var>`;<a name="idp53661584"></a> 
## Description

Flush a resource prior to destroying it.

**<a name="idp53662800"></a> Parameters**

<dl class="variablelist">

<dt>io</dt>

<dd>

The resource.

</dd>

</dl>

**<a name="idp53665504"></a> Return Values**

On success, this function returns `0`; on failure it returns `-1` and `errno` is set appropriately.

**<a name="idp53667808"></a> Threading**

It is legal to call this function in any thread.

<a name="idp53668912"></a> 
## See Also

[“io_object”](/momentum/3/3-api/structs-io-object) and [io_wrapper_delref](/momentum/3/3-api/apis-io-wrapper-delref)