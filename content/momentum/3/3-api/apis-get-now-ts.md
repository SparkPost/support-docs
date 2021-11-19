---
lastUpdated: "03/26/2020"
title: "get_now_ts"
description: "get now ts Get the current time get now ts void void This function can be called from any thread If it is called from a scheduler thread it will return the time from the current Section 68 41 ec scheduler inst structure If it is called from a non..."
---

<a name="apis.get_now_ts"></a> 
## Name

get_now_ts — Get the current time

## Synopsis

`#include "scheduler.h"`

| `**get_now_ts** (` | <var class="pdparam">void</var>`)`; |   |

`<var class="pdparam">void</var>`;<a name="idp63994160"></a> 
## Description

This function can be called from any thread. If it is called from a scheduler_thread, it will return the time from the current [“ec_scheduler_inst”](/momentum/3/3-api/structs-ec-scheduler-inst) structure. If it is called from a non-scheduler thread, it will return the value returned by `time()`.

**<a name="idp63996592"></a> Return Values**

The value returned is the epoch time in UTC measured in seconds.

**<a name="idp63997552"></a> Threading**

It is legal to call this function from any thread.

<a name="idp63998656"></a> 
## See Also

[get_now](/momentum/3/3-api/apis-get-now)