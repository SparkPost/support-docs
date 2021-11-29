---
lastUpdated: "03/26/2020"
title: "event_io_retry"
description: "event io retry Continue a pending IO operation int event io retry e state Event e event io state state Continue a pending IO operation e For a description of this data type see Section 68 49 Event state For a description of this data type see Section 68 50..."
---

<a name="apis.event_io_retry"></a> 
## Name

event_io_retry — Continue a pending IO operation

## Synopsis

`#include "event.h"`

| `int **event_io_retry** (` | <var class="pdparam">e</var>, |   |
|   | <var class="pdparam">state</var>`)`; |   |

`Event * <var class="pdparam">e</var>`;
`event_io_state * <var class="pdparam">state</var>`;<a name="idp51652752"></a> 
## Description

Continue a pending IO operation.

**<a name="idp51653968"></a> Parameters**

<dl class="variablelist">

<dt>e</dt>

<dd>

For a description of this data type see [“Event”](/momentum/3/3-api/structs-event).

</dd>

<dt>state</dt>

<dd>

For a description of this data type see [“event_io_state”](/momentum/3/3-api/structs-event-io-state)

</dd>

</dl>

**<a name="idp51659680"></a> Return Value**

This function returns EVENT_IO_DONE, EVENT_IO_PENDING or EVENT_IO_ERROR as per [event_io_write](/momentum/3/3-api/apis-event-io-write).

**<a name="idp51661216"></a> Threading**
### Warning

Only call this function from the `Scheduler` thread.

<a name="idp51663520"></a> 
## See Also

[*Event Functions*](/momentum/3/3-api/event)