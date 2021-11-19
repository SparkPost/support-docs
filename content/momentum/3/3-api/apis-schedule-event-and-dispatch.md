---
lastUpdated: "03/26/2020"
title: "schedule_event_and_dispatch"
description: "schedule event and dispatch Schedule an event from any thread and optionally dispatch the callback void schedule event and dispatch e dispatch mask Event e int dispatch mask Schedule an event from any thread and optionally dispatch the callback When called from the scheduler thread scheduling and dispatch can happen..."
---

<a name="apis.schedule_event_and_dispatch"></a> 
## Name

schedule_event_and_dispatch — Schedule an event from any thread, and optionally dispatch the callback

## Synopsis

`#include "sp_async.h"`

| `void **schedule_event_and_dispatch** (` | <var class="pdparam">e</var>, |   |
|   | <var class="pdparam">dispatch_mask</var>`)`; |   |

`Event * <var class="pdparam">e</var>`;
`int <var class="pdparam">dispatch_mask</var>`;<a name="idp51924944"></a> 
## Description

Schedule an event from any thread, and optionally dispatch the callback. When called from the scheduler thread, scheduling and dispatch can happen immediately.

When called from outside the scheduler thread, this adds the event scheduling and dispatch work to a queue in the scheduler. The scheduler will schedule and dispatch the event as soon as possible.

**<a name="idp51926944"></a> Parameters**

<dl class="variablelist">

<dt>e</dt>

<dd>

The event.

</dd>

<dt>dispatch_mask</dt>

<dd>

The event mask to pass to the event's callback. If non-zero, the callback is also dispatched. Otherwise, the event is just scheduled.

</dd>

</dl>

**<a name="idp51931616"></a> Return Value**

This function returns void.

**<a name="idp51932528"></a> Threading**

It is legal to call this function in any thread.

<a name="idp51933632"></a> 
## See Also

[“Event”](/momentum/3/3-api/structs-event)