---
lastUpdated: "03/26/2020"
title: "build_fd_event"
description: "build fd event Create an event event relating to an open file descriptor Event build fd event fd mask aggressive callback closure int fd int mask int aggressive Event Func callback void closure Create a file descriptor event The Event structure encapsulates a file descriptor and an action that should..."
---

<a name="apis.build_fd_event"></a> 
## Name

build_fd_event — Create an event event relating to an open file descriptor

## Synopsis

`#include "event.h"`

| `Event * **build_fd_event** (` | <var class="pdparam">fd</var>, |   |
|   | <var class="pdparam">mask</var>, |   |
|   | <var class="pdparam">aggressive</var>, |   |
|   | <var class="pdparam">callback</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`int <var class="pdparam">fd</var>`;
`int <var class="pdparam">mask</var>`;
`int <var class="pdparam">aggressive</var>`;
`EventFunc <var class="pdparam">callback</var>`;
`void *<var class="pdparam">closure</var>`;<a name="idp51509616"></a> 
## Description

Create a file descriptor event. The Event structure encapsulates a file descriptor and an action that should be triggered when IO is signalled on that descriptor.

**<a name="idp51510976"></a> Parameters**

<dl class="variablelist">

<dt>fd</dt>

<dd>

The file descriptor.

</dd>

<dt>mask</dt>

<dd>

The event or events that you are waiting for, for example, `E_READ|E_EXCEPTION`. See [“Event”](/momentum/3/3-api/structs-event) for a complete list of the constants applicable to this parameter.

</dd>

<dt>aggressive</dt>

<dd>

With this parameter set to `E_AGGRESSIVE_NONE` the event callout is invoked once per scheduler iteration. With it set to E_AGGRESSIVE_HIGH it is called in a tight loop until there is no pending IO. **This higher setting should only be used if you know what you are doing.**                                                                    See [“Event”](/momentum/3/3-api/structs-event) for a complete list of the constants applicable to this parameter.

</dd>

<dt>callback</dt>

<dd>

The callback function. The requirements for this function are described at [“The Event API”](/momentum/3/3-api/arch-primary-apis#arch.event).

</dd>

<dt>closure</dt>

<dd>

The closure, the contextual data needed for the event callback to perform its task.

</dd>

</dl>

**<a name="idp51524912"></a> Return Values**

This function returns an Event.

**<a name="idp51525840"></a> Threading**
### Warning

Only call this function from the `Scheduler` thread.

<a name="idp51528144"></a> 
## See Also

[“Event”](/momentum/3/3-api/structs-event), [build_event](/momentum/3/3-api/apis-build-event) and [“The Event API”](/momentum/3/3-api/arch-primary-apis#arch.event)