---
lastUpdated: "03/26/2020"
title: "clear_timed_event"
description: "clear timed event Clear the specified timed event void clear timed event evt Event evt Clear the specified timed event You cancel timed events using this function which will implicitly free the event if it was found in the system Otherwise it will return 0 and the caller is responsible..."
---

<a name="apis.clear_timed_event"></a> 
## Name

clear_timed_event — Clear the specified timed event

## Synopsis

`#include "scheduler.h"`

| `void **clear_timed_event** (` | <var class="pdparam">evt</var>`)`; |   |

`Event * <var class="pdparam">evt</var>`;<a name="idp51887312"></a> 
## Description

Clear the specified timed event.

### Note

You cancel timed events using this function, which will implicitly free the event if it was found in the system. Otherwise it will return `0` and the caller is responsible for freeing the event.

**<a name="idp51890064"></a> Parameters**

<dl class="variablelist">

<dt>e</dt>

<dd>

The Event that you wish to close.

</dd>

</dl>

**<a name="idp51892800"></a> Return Values**

On success this function returns `1`. When `0` is returned, the caller is responsible for freeing the event.

**<a name="idp51894688"></a> Threading**
### Warning

Only call this function from the `Scheduler` thread.

<a name="idp51896992"></a> 
## See Also

[“Event”](/momentum/3/3-api/structs-event) and [“The Event API”](/momentum/3/3-api/arch-primary-apis#arch.event)