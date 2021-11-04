---
lastUpdated: "03/26/2020"
title: "ec_memory_is_low"
description: "ec memory is low Called when the core detects a memory shortage void ec memory is low void Configuration Change This feature is available starting from Momentum 3 0 18 Called when the core detects a memory shortage The purpose of this function is to try to flush or otherwise..."
---

<a name="apis.ec_memory_is_low"></a> 
## Name

ec_memory_is_low — Called when the core detects a memory shortage

## Synopsis

`#include "ec_malloc.h"`

| `void **ec_memory_is_low** (` | `)`; |   |

`void`;<a name="idp54775584"></a> 
## Description

**Configuration Change. ** This feature is available starting from Momentum 3.0.18.

Called when the core detects a memory shortage.

The purpose of this function is to try to flush or otherwise release resources back to the system, if possible.

**<a name="idp54779056"></a> Return Value**

This function returns void.

**<a name="idp54779968"></a> Threading**

You can call this function in any thread.

<a name="idp54781056"></a> 
## See Also

[*Memory Functions*](/momentum/3/3-api/3-api-memory)