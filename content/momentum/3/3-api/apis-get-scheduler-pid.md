---
lastUpdated: "03/26/2020"
title: "get_scheduler_pid"
description: "get scheduler pid Get the Process ID PID of the master scheduler thread pid t get scheduler pid void Get the PID of the master scheduler thread This function returns the PID of the master scheduler The following typedef applies to this return value typedef int pid t It is..."
---

<a name="apis.get_scheduler_pid"></a> 
## Name

get_scheduler_pid — Get the Process ID (PID) of the **master scheduler**           thread

## Synopsis

`#include "scheduler.h"`

| `pid_t **get_scheduler_pid** (` | `)`; |   |

`void`;<a name="idp64009184"></a> 
## Description

Get the PID of the **master scheduler**           thread.

**<a name="idp64011104"></a> Return Values**

This function returns the PID of the `master scheduler`. The following typedef applies to this return value:

`typedef int pid_t;`

**<a name="idp64013424"></a> Threading**

It is legal to call this function in any thread.

<a name="idp64014528"></a> 
## See Also

[is_scheduler_thread](/momentum/3/3-api/apis-is-scheduler-thread), [scheduler_recurrent_func_add](/momentum/3/3-api/apis-scheduler-recurrent-func-add), and [ping_scheduler](/momentum/3/3-api/apis-ping-scheduler).