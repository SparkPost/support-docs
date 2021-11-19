---
lastUpdated: "03/26/2020"
title: "ec_thread_pool_create_module"
description: "ec thread pool create module Create a module thread pool int ec thread pool create module self type concurrency stack size max queue len generic module infrastructure self const char type int concurrency size t stack size size t max queue len Create a module thread pool self The module..."
---

<a name="apis.ec_thread_pool_create_module"></a> 
## Name

ec_thread_pool_create_module — Create a module thread pool

## Synopsis

`#include "ec_thread_pool.h"`

| `int **ec_thread_pool_create_module** (` | <var class="pdparam">self</var>, |   |
|   | <var class="pdparam">type</var>, |   |
|   | <var class="pdparam">concurrency</var>, |   |
|   | <var class="pdparam">stack_size</var>, |   |
|   | <var class="pdparam">max_queue_len</var>`)`; |   |

`generic_module_infrastructure * <var class="pdparam">self</var>`;
`const char * <var class="pdparam">type</var>`;
`int <var class="pdparam">concurrency</var>`;
`size_t <var class="pdparam">stack_size</var>`;
`size_t <var class="pdparam">max_queue_len</var>`;<a name="idp63339232"></a> 
## Description

Create a module thread pool.

**<a name="idp63340448"></a> Parameters**

<dl class="variablelist">

<dt>self</dt>

<dd>

The module reference. For a description of this data type see [generic_module_infrastructure](/momentum/3/3-api/structs-generic-module-infrastructure).

</dd>

<dt>type</dt>

<dd>

The thread pool type, `io`, for example. See also [threadpool](/momentum/3/3-reference/3-reference-conf-ref-threadpool).

</dd>

<dt>concurrency</dt>

<dd>

The concurrency of the thread pool.

</dd>

<dt>stack_size</dt>

<dd>

The stack size. If the stack size is `0`, then the system default will be used.

</dd>

<dt>max_queue_len</dt>

<dd>

If this parameter is non zero, then a semaphore will be employed to prevent the queue length exceeding this value.

</dd>

</dl>

**<a name="idp63354064"></a> Return Values**

On success this function returns the pool ID; on failure, `-1` is returned.

**<a name="idp63355456"></a> Threading**

It is legal to call this function in the `Scheduler` thread.

<a name="idp63357312"></a> 
## See Also

[ec_thread_pool_shutdown](/momentum/3/3-api/apis-ec-thread-pool-shutdown)