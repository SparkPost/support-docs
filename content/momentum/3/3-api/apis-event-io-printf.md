---
lastUpdated: "03/26/2020"
title: "event_io_printf"
description: "event io printf Initiate a formatted write to an event int event io printf e state fmt Event e event io state state const char fmt Initiate a formatted write to an event Expands the printf style format string into an internal stack buffer that is 8192 bytes in size..."
---

<a name="apis.event_io_printf"></a> 
## Name

event_io_printf — Initiate a formatted write to an event

## Synopsis

`#include "event.h"`

| `int **event_io_printf** (` | <var class="pdparam">e</var>, |   |
|   | <var class="pdparam">state</var>, |   |
|   | <var class="pdparam">fmt</var>, |   |
|   | <var class="pdparam">...</var>`)`; |   |

`Event * <var class="pdparam">e</var>`;
`event_io_state * <var class="pdparam">state</var>`;
`const char * <var class="pdparam">fmt</var>`;
`<var class="pdparam">...</var>`;<a name="idp51581104"></a> 
## Description

Initiate a formatted write to an event.

Expands the printf style format string into an internal stack buffer that is 8192 bytes in size. If the expanded string would overflow the buffer, this function will return `EVENT_IO_ERROR`.

Once the format string has been expanded, this function passes the resultant data to [event_io_write](/momentum/3/3-api/apis-event-io-write).

Return values and semantics are otherwise identical to [event_io_write](/momentum/3/3-api/apis-event-io-write).

**<a name="idp51585536"></a> Parameters**

<dl class="variablelist">

<dt>e</dt>

<dd>

For a description of this data type see [“Event”](/momentum/3/3-api/structs-event).

</dd>

<dt>state</dt>

<dd>

For a description of this data type see [“event_io_state”](/momentum/3/3-api/structs-event-io-state)

</dd>

<dt>fmt</dt>

<dd>

The format specifier.

</dd>

<dt>...</dt>

<dd>

The variable argument.

</dd>

</dl>

**<a name="idp51594896"></a> Return Value**

This function returns one of the following values:

*   `EVENT_IO_DONE`

*   `EVENT_IO_ERROR`

*   `EVENT_IO_PENDING`

**<a name="idp51600320"></a> Threading**
### Warning

Only call this function from the `Scheduler` thread.

<a name="idp51602624"></a> 
## See Also

[*Event Functions*](/momentum/3/3-api/event)