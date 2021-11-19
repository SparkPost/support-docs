---
lastUpdated: "03/26/2020"
title: "io_wrapper_read"
description: "io wrapper read Read the specified number of bytes int io wrapper read io buf nbytes io object io void buf int nbytes Read the specified number of bytes into the buffer This function behaves like the system function read 2 io The resource buf The buffer to read into..."
---

<a name="apis.io_wrapper_read"></a> 
## Name

io_wrapper_read — Read the specified number of bytes

## Synopsis

`#include "io_wrapper.h"`

| `int **io_wrapper_read** (` | <var class="pdparam">io</var>, |   |
|   | <var class="pdparam">buf</var>, |   |
|   | <var class="pdparam">nbytes</var>`)`; |   |

`io_object * <var class="pdparam">io</var>`;
`void * <var class="pdparam">buf</var>`;
`int <var class="pdparam">nbytes</var>`;<a name="idp53952800"></a> 
## Description

Read the specified number of bytes into the buffer. This function behaves like the system function `read(2)`.

**<a name="idp53954528"></a> Parameters**

<dl class="variablelist">

<dt>io</dt>

<dd>

The resource.

</dd>

<dt>buf</dt>

<dd>

The buffer to read into.

</dd>

<dt>nbytes</dt>

<dd>

The number of bytes to read.

</dd>

</dl>

**<a name="idp53960896"></a> Return Values**

On success, this function returns the number of bytes read and the file position is advanced by this number. On failure, it returns `-1` and sets `errno` appropriately to a system error defined by `read(2)`.

**<a name="idp53963312"></a> Threading**

It is legal to call this function in any thread.

<a name="idp53964416"></a> 
## See Also

[“io_object”](/momentum/3/3-api/structs-io-object) and [io_wrapper_open](/momentum/3/3-api/apis-io-wrapper-open)