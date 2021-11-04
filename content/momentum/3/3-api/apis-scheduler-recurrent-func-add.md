---
lastUpdated: "03/26/2020"
title: "scheduler_recurrent_func_add"
description: "scheduler recurrent func add Registers a recurrent function and a closure for the master scheduler thread void scheduler recurrent func add func closure Recur Func func void closure Registers a recurrent function and a closure for the master scheduler thread func The recurrent function to register for the master scheduler..."
---

<a name="apis.scheduler_recurrent_func_add"></a> 
## Name

scheduler_recurrent_func_add — Registers a recurrent function and a closure for the **master scheduler**           thread

## Synopsis

`#include "scheduler.h"`

| `void **scheduler_recurrent_func_add** (` | <var class="pdparam">func</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`RecurFunc <var class="pdparam">func</var>`;
`void * <var class="pdparam">closure</var>`;<a name="idp58893632"></a> 
## Description

Registers a recurrent function and a closure for the **master scheduler**           thread.

**<a name="idp58895584"></a> Parameters**

<dl class="variablelist">

<dt>func</dt>

<dd>

The recurrent function to register for the **master scheduler**           thread.

The following typedef applies to this data type:

`typedef int (*RecurFunc) (void *closure, struct timeval * now);`

</dd>

<dt>closure</dt>

<dd>

The closure to register for the **master scheduler**           thread.

</dd>

</dl>

**<a name="idp58903104"></a> Return Values**

This function returns `void`.

**<a name="idp58904464"></a> Threading**

This function may only be called in the `Scheduler` thread.

### Warning

This function should *only* be called at startup.

<a name="idp58907376"></a> 
## See Also

[is_scheduler_thread](/momentum/3/3-api/apis-is-scheduler-thread), [get_scheduler_pid](/momentum/3/3-api/apis-get-scheduler-pid) and [ping_scheduler](/momentum/3/3-api/apis-ping-scheduler).