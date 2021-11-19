---
lastUpdated: "03/26/2020"
title: "ec_thread_pool_shutdown"
description: "ec thread pool shutdown Shut down the current thread pool void ec thread pool shutdown void Shut down the current thread pool This function returns void It is legal to call this function in the Scheduler thread ec thread pool create module..."
---

<a name="apis.ec_thread_pool_shutdown"></a> 
## Name

ec_thread_pool_shutdown — Shut down the current thread pool

## Synopsis

`#include "ec_thread_pool.h"`

| `void **ec_thread_pool_shutdown** (` | `)`; |   |

`void`;<a name="idp63420864"></a> 
## Description

Shut down the current thread pool.

**<a name="idp63422080"></a> Return Values**

This function returns void.

**<a name="idp63422992"></a> Threading**

It is legal to call this function in the `Scheduler` thread.

<a name="idp63424848"></a> 
## See Also

[ec_thread_pool_create_module](/momentum/3/3-api/apis-ec-thread-pool-create-module)