---
lastUpdated: "03/26/2020"
title: "ec_thread_pool_defer_spawn"
description: "ec thread pool defer spawn set a thread pool to defer thread creation void ec thread pool defer spawn jobclass defer int jobclass int defer This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in..."
---

<a name="apis.ec_thread_pool_defer_spawn"></a> 
## Name

ec_thread_pool_defer_spawn — set a thread pool to defer thread creation

## Synopsis

`#include "ec_thread_pool.h"`

| `void **ec_thread_pool_defer_spawn** (` | <var class="pdparam">jobclass</var>, |   |
|   | <var class="pdparam">defer</var>`)`; |   |

`int <var class="pdparam">jobclass</var>`;
`int <var class="pdparam">defer</var>`;<a name="idp63368304"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

set a thread pool to defer thread creation.

This is useful for creating a pool to which you will post jobs to build up a queue, and which you wish to process only after you have finished building the queue.

**<a name="idp63371792"></a> Parameters**

<dl class="variablelist">

<dt>jobclass</dt>

<dd>

the thread pool id

</dd>

<dt>defer</dt>

<dd>

if 1, set to defer mode, else re-enables the pool.

</dd>

</dl>