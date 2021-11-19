---
lastUpdated: "03/26/2020"
title: "get_fd_event_set"
description: "get fd event set Retrieve an event set void get fd event set set count Event set int count Retrieve an event set set The event set count The size of the event fetched This function returns void On success set points to the event set Only call this function..."
---

<a name="apis.get_fd_event_set"></a> 
## Name

get_fd_event_set — Retrieve an event set

## Synopsis

`#include "scheduler.h"`

| `void **get_fd_event_set** (` | <var class="pdparam">set</var>, |   |
|   | <var class="pdparam">count</var>`)`; |   |

`Event *** <var class="pdparam">set</var>`;
`int * <var class="pdparam">count</var>`;<a name="idp51829392"></a> 
## Description

Retrieve an event set.

**<a name="idp51830592"></a> Parameters**

<dl class="variablelist">

<dt>set</dt>

<dd>

The event set.

</dd>

<dt>count</dt>

<dd>

The size of the event fetched.

</dd>

</dl>

**<a name="idp51835136"></a> Return Values**

This function returns void. On success, `set` points to the event set.

**<a name="idp51836528"></a> Threading**
### Warning

Only call this function from the `Scheduler` thread.

<a name="idp51838832"></a> 
## See Also

[“Event”](/momentum/3/3-api/structs-event)