---
lastUpdated: "03/26/2020"
title: "io_wrapper_set_path"
description: "io wrapper set path Set the path associated with an io object void io wrapper set path io path io object io const char path Set the path associated with an io object io The io object path The path to the io object This function returns void It is..."
---

<a name="apis.io_wrapper_set_path"></a> 
## Name

io_wrapper_set_path — Set the path associated with an io object

## Synopsis

`#include "io_wrapper.h"`

| `void **io_wrapper_set_path** (` | <var class="pdparam">io</var>, |   |
|   | <var class="pdparam">path</var>`)`; |   |

`io_object * <var class="pdparam">io</var>`;
`const char * <var class="pdparam">path</var>`;<a name="idp54032448"></a> 
## Description

Set the path associated with an io object.

**<a name="idp54033664"></a> Parameters**

<dl class="variablelist">

<dt>io</dt>

<dd>

The io object.

</dd>

<dt>path</dt>

<dd>

The path to the io object.

</dd>

</dl>

**<a name="idp54038208"></a> Return Values**

This function returns void.

**<a name="idp54039120"></a> Threading**

It is legal to call this function in any thread.

<a name="idp54040224"></a> 
## See Also

[“io_object”](/momentum/3/3-api/structs-io-object) and [io_wrapper_get_path](/momentum/3/3-api/apis-io-wrapper-get-path)