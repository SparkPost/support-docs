---
lastUpdated: "03/26/2020"
title: "ping_scheduler"
description: "ping scheduler Pings the master scheduler thread void ping scheduler void Pings the master scheduler thread Runs the ping scheduler function registered with the master scheduler thread This function returns void It is legal to call this function in any thread is scheduler thread scheduler recurrent func add and get..."
---

<a name="apis.ping_scheduler"></a> 
## Name

ping_scheduler — Pings the **master scheduler**           thread

## Synopsis

`#include "scheduler.h"`

| `void **ping_scheduler** (` | `)`; |   |

`void`;<a name="idp58842832"></a> 
## Description

Pings the **master scheduler**           thread. Runs the `ping_scheduler` function registered with the master scheduler thread.

**<a name="idp58845248"></a> Return Values**

This function returns `void`.

**<a name="idp58846608"></a> Threading**

It is legal to call this function in any thread.

<a name="idp58847712"></a> 
## See Also

[is_scheduler_thread](/momentum/3/3-api/apis-is-scheduler-thread), [scheduler_recurrent_func_add](/momentum/3/3-api/apis-scheduler-recurrent-func-add), and [get_scheduler_pid](/momentum/3/3-api/apis-get-scheduler-pid).