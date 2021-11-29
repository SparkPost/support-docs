---
lastUpdated: "03/26/2020"
title: "io_wrapper_is_memory_based"
description: "io wrapper is memory based returns the memtype if an io object is an in memory io object int io wrapper is memory based io buf len io object io char buf size t len This reference page was automatically generated from functions found in the header files in the..."
---

<a name="apis.io_wrapper_is_memory_based"></a> 
## Name

io_wrapper_is_memory_based — returns the memtype if an io_object is an in-memory io_object

## Synopsis

`#include "io_wrapper.h"`

| `int **io_wrapper_is_memory_based** (` | <var class="pdparam">io</var>, |   |
|   | <var class="pdparam">buf</var>, |   |
|   | <var class="pdparam">len</var>`)`; |   |

`io_object * <var class="pdparam">io</var>`;
`char ** <var class="pdparam">buf</var>`;
`size_t * <var class="pdparam">len</var>`;<a name="idp53787088"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

returns the memtype if an io_object is an in-memory io_object.

**<a name="idp53789984"></a> Parameters**

<dl class="variablelist">

<dt>io</dt>

<dd>

the io object

</dd>

<dt>buf</dt>

<dd>

pointer to a variable to hold the buffer pointer (may be NULL)

</dd>

<dt>len</dt>

<dd>

pointer to a variable to hold the buffer length (may be NULL)

</dd>

</dl>

**<a name="idp53796432"></a> Return Values**

Returns 0 if the object doesn't represent a memory based object, otherwise returns the memory type for the memory. If buf is non-NULL, it will be updated to hold the pointer to the start of the memory blob. If len is non-NULL, it will be updated to hold the size of the memory blob.