---
lastUpdated: "03/26/2020"
title: "io_wrapper_copy_memory"
description: "io wrapper copy memory Creates a copy of a memory buffer and returns a handle to that buffer io object io wrapper copy memory blob len memtype const char blob size t len int memtype This reference page was automatically generated from functions found in the header files in the..."
---

<a name="apis.io_wrapper_copy_memory"></a> 
## Name

io_wrapper_copy_memory — Creates a copy of a memory buffer and returns a handle to that buffer

## Synopsis

`#include "io_wrapper.h"`

| `io_object * **io_wrapper_copy_memory** (` | <var class="pdparam">blob</var>, |   |
|   | <var class="pdparam">len</var>, |   |
|   | <var class="pdparam">memtype</var>`)`; |   |

`const char * <var class="pdparam">blob</var>`;
`size_t <var class="pdparam">len</var>`;
`int <var class="pdparam">memtype</var>`;<a name="idp53552656"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Creates a copy of a memory buffer and returns a handle to that buffer.

**<a name="idp53555520"></a> Parameters**

<dl class="variablelist">

<dt>blob</dt>

<dd>

start of the memory area

</dd>

<dt>len</dt>

<dd>

size of the area in bytes

</dd>

<dt>memtype</dt>

<dd>

type of memory to use for the copy

</dd>

</dl>

**Configuration Change. ** This feature is available starting from Momentum 3.0.18.