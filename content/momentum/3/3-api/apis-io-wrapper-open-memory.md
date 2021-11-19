---
lastUpdated: "03/26/2020"
title: "io_wrapper_open_memory"
description: "io wrapper open memory Open a read only handle on some memory io object io wrapper open memory blob len memtype const char blob size t len int memtype This reference page was automatically generated from functions found in the header files in the development branch The function described here..."
---

<a name="apis.io_wrapper_open_memory"></a> 
## Name

io_wrapper_open_memory — Open a read-only handle on some memory

## Synopsis

`#include "io_wrapper.h"`

| `io_object * **io_wrapper_open_memory** (` | <var class="pdparam">blob</var>, |   |
|   | <var class="pdparam">len</var>, |   |
|   | <var class="pdparam">memtype</var>`)`; |   |

`const char * <var class="pdparam">blob</var>`;
`size_t <var class="pdparam">len</var>`;
`int <var class="pdparam">memtype</var>`;<a name="idp53901344"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Open a read-only handle on some memory.

**<a name="idp53904208"></a> Parameters**

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

type of memory

</dd>

</dl>

If memtype is MEMTYPE_DONTCARE, then the memory will NOT be freed when the object is destroyed. If memtype is MEMTYPE_IS_MALLOC_3C, then the memory will be freed using free(3C). If memtype is MEMTYPE_IS_MMAP, then the memory will be released using the munmap() system call. The len parameter must match the length used to mmap() the memory. Otherwise, memtype is one of the MEMTYPE constants defined in memory.h