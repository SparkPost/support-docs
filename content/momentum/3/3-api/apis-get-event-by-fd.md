---
lastUpdated: "03/26/2020"
title: "get_event_by_fd"
description: "get event by fd Retrieve an event Event get event by fd fd int fd Retrieve an event using a file descriptor fd The file descriptor This function returns an Event Only call this function from the Scheduler thread Section 68 49 Event..."
---

<a name="apis.get_event_by_fd"></a> 
## Name

get_event_by_fd — Retrieve an event

## Synopsis

`#include "scheduler.h"`

| `Event * **get_event_by_fd** (` | <var class="pdparam">fd</var>`)`; |   |

`int <var class="pdparam">fd</var>`;<a name="idp51811472"></a> 
## Description

Retrieve an event using a file descriptor.

**<a name="idp51812688"></a> Parameters**

<dl class="variablelist">

<dt>fd</dt>

<dd>

The file descriptor.

</dd>

</dl>

**<a name="idp51815408"></a> Return Values**

This function returns an Event.

**<a name="idp51816336"></a> Threading**
### Warning

Only call this function from the `Scheduler` thread.

<a name="idp51818640"></a> 
## See Also

[“Event”](/momentum/3/3-api/structs-event)