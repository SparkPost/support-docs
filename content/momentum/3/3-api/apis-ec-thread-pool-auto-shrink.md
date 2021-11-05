---
lastUpdated: "03/26/2020"
title: "ec_thread_pool_auto_shrink"
description: "ec thread pool auto shrink set a thread pool to auto shrink void ec thread pool auto shrink jobclass int jobclass This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally available versions of..."
---

<a name="apis.ec_thread_pool_auto_shrink"></a> 
## Name

ec_thread_pool_auto_shrink — set a thread pool to auto shrink

## Synopsis

`#include "ec_thread_pool.h"`

| `void **ec_thread_pool_auto_shrink** (` | <var class="pdparam">jobclass</var>`)`; |   |

`int <var class="pdparam">jobclass</var>`;<a name="idp63313408"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

set a thread pool to auto shrink.

When a thread in such a pool has no more jobs available, it will exit, releasing resources.