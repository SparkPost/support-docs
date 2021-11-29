---
lastUpdated: "03/26/2020"
title: "io_wrapper_lseek"
description: "io wrapper lseek Reposition read write resource offset int io wrapper lseek io offset whence io object io off t offset int whence Reposition read write resource offset This function behaves like the system function lseek 2 io The resource offset The offset relative to whence whence The value such..."
---

<a name="apis.io_wrapper_lseek"></a> 
## Name

io_wrapper_lseek — Reposition read/write resource offset

## Synopsis

`#include "io_wrapper.h"`

| `int **io_wrapper_lseek** (` | <var class="pdparam">io</var>, |   |
|   | <var class="pdparam">offset</var>, |   |
|   | <var class="pdparam">whence</var>`)`; |   |

`io_object * <var class="pdparam">io</var>`;
`off_t <var class="pdparam">offset</var>`;
`int <var class="pdparam">whence</var>`;<a name="idp53818512"></a> 
## Description

Reposition read/write resource offset. This function behaves like the system function `lseek(2)`.

**<a name="idp53820224"></a> Parameters**

<dl class="variablelist">

<dt>io</dt>

<dd>

The resource.

</dd>

<dt>offset</dt>

<dd>

The offset relative to `whence`.

</dd>

<dt>whence</dt>

<dd>

The value, such as `SEEK_SET`, from where the offset will be calculated.

</dd>

</dl>

**<a name="idp53827520"></a> Return Values**

On success, this function returns the offset position in bytes; on failure it returns `-1`.

**<a name="idp53828944"></a> Threading**

It is legal to call this function in any thread.

<a name="idp53830048"></a> 
## See Also

[“io_object”](/momentum/3/3-api/structs-io-object) and [io_wrapper_open](/momentum/3/3-api/apis-io-wrapper-open)