---
lastUpdated: "03/26/2020"
title: "clear_event_by_fd"
description: "clear event by fd Clear the event related to the file descriptor Event clear event by fd fd int fd Clear the event related to the file descriptor This function returns the event because it's a convenience function to both get an event and clear it fd The file descriptor..."
---

<a name="apis.clear_event_by_fd"></a> 
## Name

clear_event_by_fd — Clear the event related to the file descriptor

## Synopsis

`#include "scheduler.h"`

| `Event * **clear_event_by_fd** (` | <var class="pdparam">fd</var>`)`; |   |

`int <var class="pdparam">fd</var>`;<a name="idp51869264"></a> 
## Description

Clear the event related to the file descriptor. This function returns the event because it's a convenience function to both get an event and clear it.

**<a name="idp51870608"></a> Parameters**

<dl class="variablelist">

<dt>fd</dt>

<dd>

The file descriptor related to the Event that you wish to close.

</dd>

</dl>

**<a name="idp51873376"></a> Return Values**

On success this function returns the Event indicated by the file descriptor.

**<a name="idp51874352"></a> Threading**
### Warning

Only call this function from the `Scheduler` thread.

<a name="idp51876656"></a> 
## See Also

[“Event”](/momentum/3/3-api/structs-event) and [“The Event API”](/momentum/3/3-api/arch-primary-apis#arch.event)