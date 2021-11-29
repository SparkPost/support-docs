---
lastUpdated: "03/26/2020"
title: "event_post_dup"
description: "event post dup Duplicate an event void event post dup dst src Event dst Event src Duplicate an event Use event free to release a duplicated event dst The duplicated Event src The original Event This function returns void Only call this function from the Scheduler thread Section 68 49..."
---

<a name="apis.event_post_dup"></a> 
## Name

event_post_dup — Duplicate an event

## Synopsis

`#include "event.h"`

| `void **event_post_dup** (` | <var class="pdparam">dst</var>, |   |
|   | <var class="pdparam">src</var>`)`; |   |

`Event * <var class="pdparam">dst</var>`;
`Event * <var class="pdparam">src</var>`;<a name="idp51745440"></a> 
## Description

Duplicate an event. Use [event_free](/momentum/3/3-api/apis-event-free) to release a duplicated event.

**<a name="idp51747392"></a> Parameters**

<dl class="variablelist">

<dt>dst</dt>

<dd>

The duplicated Event.

</dd>

<dt>src</dt>

<dd>

The original Event.

</dd>

</dl>

**<a name="idp51751936"></a> Return Values**

This function returns void.

**<a name="idp51752848"></a> Threading**
### Warning

Only call this function from the `Scheduler` thread.

<a name="idp51755152"></a> 
## See Also

[“Event”](/momentum/3/3-api/structs-event)