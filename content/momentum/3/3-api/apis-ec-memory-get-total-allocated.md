---
lastUpdated: "03/26/2020"
title: "ec_memory_get_total_allocated"
description: "ec memory get total allocated Return the total memory allocated via ec malloc and related functions uint 64 t ec memory get total allocated void Configuration Change This feature is available starting from Momentum 3 0 18 Return the total memory allocated via ec mallocec malloc and related functions In..."
---

<a name="apis.ec_memory_get_total_allocated"></a> 
## Name

ec_memory_get_total_allocated — Return the total memory allocated via ec_malloc and related functions

## Synopsis

`#include "ec_malloc.h"`

| `uint64_t **ec_memory_get_total_allocated** (` | `)`; |   |

`void`;<a name="idp54758496"></a> 
## Description

**Configuration Change. ** This feature is available starting from Momentum 3.0.18.

Return the total memory allocated via [ec_malloc](/momentum/3/3-api/apis-ec-malloc)ec_malloc and related functions.

In earlier releases, this function was known as get_rss(), which was a misleading name, as the value returned from this function includes only the memory allocated via ec_malloc, [ec_malloc_size](/momentum/3/3-api/apis-ec-malloc-size) and [ec_realloc](/momentum/3/3-api/apis-ec-realloc).

**<a name="idp54763728"></a> Return Value**

This function returns void.

**<a name="idp54764640"></a> Threading**

You can call this function in any thread.

<a name="idp54765728"></a> 
## See Also

[*Memory Functions*](/momentum/3/3-api/3-api-memory)