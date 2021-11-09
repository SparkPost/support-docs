---
lastUpdated: "03/26/2020"
title: "io_wrapper_writev"
description: "io wrapper writev Write a vector io wrapper writev io iov iovcnt io object io const struct iovec iov int iovcnt Write a vector This function behaves like the system function writev 2 io The resource options An iovec struct iovcnt The number of bytes to write On success this..."
---

<a name="apis.io_wrapper_writev"></a> 
## Name

io_wrapper_writev — Write a vector

## Synopsis

`#include "io_wrapper.h"`

| `**io_wrapper_writev** (` | <var class="pdparam">io</var>, |   |
|   | <var class="pdparam">iov</var>, |   |
|   | <var class="pdparam">iovcnt</var>`)`; |   |

`io_object * <var class="pdparam">io</var>`;
`const struct iovec * <var class="pdparam">iov</var>`;
`int <var class="pdparam">iovcnt</var>`;<a name="idp54105696"></a> 
## Description

Write a vector. This function behaves like the system function, `writev(2)`.

**<a name="idp54107392"></a> Parameters**

<dl class="variablelist">

<dt>io</dt>

<dd>

The resource.

</dd>

<dt>options</dt>

<dd>

An iovec struct.

</dd>

<dt>iovcnt</dt>

<dd>

The number of bytes to write.

</dd>

</dl>

**<a name="idp54113776"></a> Return Values**

On success, this function returns the number of bytes read and the file position is advanced by this number. On failure, it returns `-1` and sets `errno` appropriately to a system error defined by `writev(2)`.

**<a name="idp54116192"></a> Threading**

It is legal to call this function in any thread.

<a name="idp54117296"></a> 
## See Also

[“io_object”](/momentum/3/3-api/structs-io-object)