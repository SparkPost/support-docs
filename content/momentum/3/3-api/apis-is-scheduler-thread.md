---
lastUpdated: "03/26/2020"
title: "is_scheduler_thread"
description: "is scheduler thread Determines whether or not the thread that calls this function is a scheduler thread int is scheduler thread void Determines whether the thread that calls this function is a scheduler thread This is a Boolean function that returns 1 if this is a scheduler thread and 0..."
---

<a name="apis.is_scheduler_thread"></a> 
## Name

is_scheduler_thread — Determines whether or not the thread that calls this function is a scheduler thread

## Synopsis

`#include "scheduler.h"`

| `int **is_scheduler_thread** (` | `)`; |   |

`void`;<a name="idp58826672"></a> 
## Description

Determines whether the thread that calls this function is a scheduler thread.

**<a name="idp58827936"></a> Return Values**

This is a Boolean function that returns `1` if this is a scheduler thread, and `0` otherwise.

**<a name="idp58829792"></a> Threading**

It is legal to call this function in any thread.

<a name="idp58831216"></a> 
## See Also

[scheduler_recurrent_func_add](/momentum/3/3-api/apis-scheduler-recurrent-func-add), [get_scheduler_pid](/momentum/3/3-api/apis-get-scheduler-pid) and [ping_scheduler](/momentum/3/3-api/apis-ping-scheduler).