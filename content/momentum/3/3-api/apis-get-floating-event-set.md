---
lastUpdated: "03/26/2020"
title: "get_floating_event_set"
description: "get floating event set Retrieve a floating event set void get floating event set set count Event set int count Retrieve a floating event set set The event set count The size of the event fetched This function returns void On success set points to the event set Only call..."
---

<a name="apis.get_floating_event_set"></a> 
## Name

get_floating_event_set — Retrieve a floating event set

## Synopsis

`#include "scheduler.h"`

| `void **get_floating_event_set** (` | <var class="pdparam">set</var>, |   |
|   | <var class="pdparam">count</var>`)`; |   |

`Event *** <var class="pdparam">set</var>`;
`int * <var class="pdparam">count</var>`;<a name="idp51849696"></a> 
## Description

Retrieve a floating event set.

**<a name="idp51850912"></a> Parameters**

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

**<a name="idp51855456"></a> Return Values**

This function returns void. On success, `set` points to the event set.

**<a name="idp51856848"></a> Threading**
### Warning

Only call this function from the `Scheduler` thread.

<a name="idp51859152"></a> 
## See Also

[“Event”](/momentum/3/3-api/structs-event)