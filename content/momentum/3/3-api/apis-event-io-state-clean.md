---
lastUpdated: "03/26/2020"
title: "event_io_state_clean"
description: "event io state clean Release resources held in an event io state structure void event io state clean state event io state state Release resources held in an event io state structure state For a description of this data type see Section 68 50 event io state This function returns..."
---

<a name="apis.event_io_state_clean"></a> 
## Name

event_io_state_clean — Release resources held in an event_io_state structure

## Synopsis

`#include "event.h"`

| `void **event_io_state_clean** (` | <var class="pdparam">state</var>`)`; |   |

`event_io_state * <var class="pdparam">state</var>`;<a name="idp51673696"></a> 
## Description

Release resources held in an event_io_state structure.

**<a name="idp51674928"></a> Parameters**

<dl class="variablelist">

<dt>state</dt>

<dd>

For a description of this data type see [“event_io_state”](/momentum/3/3-api/structs-event-io-state)

</dd>

</dl>

**<a name="idp51678240"></a> Return Value**

This function returns void.

**<a name="idp51679152"></a> Threading**
### Warning

Only call this function from the `Scheduler` thread.

<a name="idp51681456"></a> 
## See Also

[*Event Functions*](/momentum/3/3-api/event)