---
lastUpdated: "03/26/2020"
title: "scheduler_register"
description: "scheduler register Registers a scheduler with the system void scheduler register ascheduler ec scheduler impl ascheduler This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally available versions of Momentum and may change in..."
---

<a name="apis.scheduler_register"></a> 
## Name

scheduler_register — Registers a scheduler with the system

## Synopsis

`#include "scheduler.h"`

| `void **scheduler_register** (` | <var class="pdparam">ascheduler</var>`)`; |   |

`ec_scheduler_impl * <var class="pdparam">ascheduler</var>`;<a name="idp58918640"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Registers a scheduler with the system.

If another scheduler with the same name is already registered, this function will replace the existing scheduler.

For ABI safety, the scheduler implementation structure should be initialized using the EC_SCHEDULER_INIT macro as follows:

```
ec_scheduler_impl my_sched = {
   EC_SCHEDULER_INIT("my_sched"),
   my_sched_init_func,
 ...
```

This function merely registers the scheduler implementation; it does not affect the Scheduler option, other than providing or replacing named scheduler implementations.