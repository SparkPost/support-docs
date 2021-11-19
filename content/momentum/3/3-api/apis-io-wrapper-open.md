---
lastUpdated: "03/26/2020"
title: "io_wrapper_open"
description: "io wrapper open Open a handle to a resource io object io wrapper open filename options mode const char filename int options int mode Open a handle to a resource This function may induce IO or otherwise block the caller Blocking in the scheduler thread will lead to degraded performance..."
---

<a name="apis.io_wrapper_open"></a> 
## Name

io_wrapper_open — Open a handle to a resource

## Synopsis

`#include "io_wrapper.h"`

| `io_object * **io_wrapper_open** (` | <var class="pdparam">filename</var>, |   |
|   | <var class="pdparam">options</var>, |   |
|   | <var class="pdparam">mode</var>`)`; |   |

`const char * <var class="pdparam">filename</var>`;
`int <var class="pdparam">options</var>`;
`int <var class="pdparam">mode</var>`;<a name="idp53858256"></a> 
## Description

Open a handle to a resource.

### Note

This function may induce IO or otherwise block the caller. Blocking in the scheduler thread will lead to degraded performance and should be avoided at all costs. If your code is running in the IO subsystem, the core will have already taken steps to ensure that blocking is acceptable. Otherwise, you should look at using the thread pool API to run a job in the IO pool.

You must use [io_wrapper_delref](/momentum/3/3-api/apis-io-wrapper-delref) to dispose of any object opened using this function. The object won't be destroyed until its last reference is dropped.

**<a name="idp53862096"></a> Parameters**

<dl class="variablelist">

<dt>filename</dt>

<dd>

The name of the resource.

</dd>

<dt>options</dt>

<dd>

Options can be any bitwise OR of the flags used with `open(3)`, for example `O_RDWR`, `O_CREAT` etc.

</dd>

<dt>mode</dt>

<dd>

The file mode in octal notation.

</dd>

</dl>

**<a name="idp53869920"></a> Return Values**

This function returns a handle to the resource.

**<a name="idp53870864"></a> Threading**

It is legal to call this function in any thread.

<a name="idp53871968"></a> 
## See Also

[“io_object”](/momentum/3/3-api/structs-io-object)