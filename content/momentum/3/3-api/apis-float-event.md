---
lastUpdated: "03/26/2020"
title: "float_event"
description: "float event Float an event void float event event Event event Float an event event The Event This function returns void Only call this function from the Scheduler thread Section 68 49 Event and event free..."
---

<a name="apis.float_event"></a> 
## Name

float_event — Float an event

## Synopsis

`#include "scheduler.h"`

| `void **float_event** (` | <var class="pdparam">event</var>`)`; |   |

`Event * <var class="pdparam">event</var>`;<a name="idp51793696"></a> 
## Description

Float an event.

**<a name="idp51794896"></a> Parameters**

<dl class="variablelist">

<dt>event</dt>

<dd>

The Event.

</dd>

</dl>

**<a name="idp51797616"></a> Return Values**

This function returns void.

**<a name="idp51798528"></a> Threading**
### Warning

Only call this function from the `Scheduler` thread.

<a name="idp51800832"></a> 
## See Also

[“Event”](/momentum/3/3-api/structs-event) and [event_free](/momentum/3/3-api/apis-event-free)