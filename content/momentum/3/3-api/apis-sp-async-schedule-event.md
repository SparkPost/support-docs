---
lastUpdated: "03/26/2020"
title: "sp_async_schedule_event"
description: "sp async schedule event Schedule an asynchronous event from any thread and optionally dispatch the callback void sp async schedule event e dispatch mask Event e int dispatch mask Schedule an event from any thread and optionally dispatch the callback This adds the event scheduling and dispatch work to a..."
---

<a name="apis.sp_async_schedule_event"></a> 
## Name

sp_async_schedule_event — Schedule an asynchronous event from any thread, and optionally dispatch the callback

## Synopsis

`#include "sp_async.h"`

| `void **sp_async_schedule_event** (` | <var class="pdparam">e</var>, |   |
|   | <var class="pdparam">dispatch_mask</var>`)`; |   |

`Event * <var class="pdparam">e</var>`;
`int <var class="pdparam">dispatch_mask</var>`;<a name="idp51980240"></a> 
## Description

Schedule an event from any thread, and optionally dispatch the callback.

This adds the event scheduling and dispatch work to a queue in the Scheduler. The Scheduler will schedule and dispatch the event as soon as possible.

**<a name="idp51982112"></a> Parameters**

<dl class="variablelist">

<dt>e</dt>

<dd>

The event.

</dd>

<dt>dispatch_mask</dt>

<dd>

The event mask to pass to the event's callback. If non-zero, the callback is also dispatched, otherwise, the event is just scheduled.

</dd>

</dl>

**<a name="idp51986784"></a> Return Value**

This function returns void.

**<a name="idp51987696"></a> Threading**

It is legal to call this function in any thread.

<a name="idp51988800"></a> 
## See Also

[“Event”](/momentum/3/3-api/structs-event)