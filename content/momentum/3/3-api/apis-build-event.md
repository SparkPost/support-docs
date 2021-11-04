---
lastUpdated: "03/26/2020"
title: "build_event"
description: "build event Create an event Event build event when whence fd callback closure struct timeval when int whence int fd Event Func callback void closure Create an event The Event structure encapsulates a file descriptor and an action that should be triggered when IO is signalled on that descriptor The..."
---

<a name="apis.build_event"></a> 
## Name

build_event — Create an event

## Synopsis

`#include "event.h"`

| `Event * **build_event** (` | <var class="pdparam">when</var>, |   |
|   | <var class="pdparam">whence</var>, |   |
|   | <var class="pdparam">fd</var>, |   |
|   | <var class="pdparam">callback</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`struct timeval <var class="pdparam">when</var>`;
`int <var class="pdparam">whence</var>`;
`int <var class="pdparam">fd</var>`;
`EventFunc <var class="pdparam">callback</var>`;
`void *<var class="pdparam">closure</var>`;<a name="idp51439536"></a> 
## Description

Create an event. The Event structure encapsulates a file descriptor and an action that should be triggered when IO is signalled on that descriptor. The event system keys events by file descriptor; you can only have one instance of an Event structure scheduled for a given descriptor. You may have multiple event structures that reference the same descriptor, but only one of those can be active in the Scheduler at a given time.

**Defines of this Function**

The `build_event_from_epoch` and the `build_event_from_now` functions are defined in the following way:

```
#define build_event_from_epoch(a,b,c,d) build_event((a), \
                                        E_FROM_EPOCH, (b), (c), (d))
#define build_event_from_now(a,b,c,d) build_event((a), \
                                        E_FROM_NOW, (b), (c), (d))
```
**<a name="idp51444448"></a> Parameters**

<dl class="variablelist">

<dt>when</dt>

<dd>

When the event should begin.

</dd>

<dt>whence</dt>

<dd>

Use the contants `E_FROM_EPOCH` or `E_FROM_NOW` for this parameter.

</dd>

<dt>fd</dt>

<dd>

The file descriptor.

</dd>

<dt>callback</dt>

<dd>

The callback function.

</dd>

<dt>closure</dt>

<dd>

The closure function.

</dd>

</dl>

**<a name="idp51455424"></a> Return Values**

This function returns an Event.

**<a name="idp51456352"></a> Threading**
### Warning

Only call this function from the `Scheduler` thread.

<a name="idp51458656"></a> 
## See Also

[“Event”](/momentum/3/3-api/structs-event) and [“The Event API”](/momentum/3/3-api/arch-primary-apis#arch.event)