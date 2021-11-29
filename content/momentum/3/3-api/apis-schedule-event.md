---
lastUpdated: "03/26/2020"
title: "schedule_event"
description: "schedule event Schedule an event from any thread void schedule event e Event e Schedule an event from any thread e The event This function returns void It is legal to call this function from the Scheduler thread Section 68 49 Event..."
---

<a name="apis.schedule_event"></a> 
## Name

schedule_event — Schedule an event from any thread

## Synopsis

`#include "schedule.h"`

| `void **schedule_event** (` | <var class="pdparam">e</var>`)`; |   |

`Event * <var class="pdparam">e</var>`;<a name="idp51907616"></a> 
## Description

Schedule an event from any thread.

**<a name="idp51908832"></a> Parameters**

<dl class="variablelist">

<dt>e</dt>

<dd>

The event.

</dd>

</dl>

**<a name="idp51911536"></a> Return Value**

This function returns void.

**<a name="idp51912448"></a> Threading**

It is legal to call this function from the `Scheduler` thread.

<a name="idp51914000"></a> 
## See Also

[“Event”](/momentum/3/3-api/structs-event)