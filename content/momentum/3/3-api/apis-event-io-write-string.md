---
lastUpdated: "03/26/2020"
title: "event_io_write_string"
description: "event io write string Initiate a write of the contents of a string to an event int event io write string e str state Event e string str event io state state Initiate a write of the contents of a string to an event Writes a string buffer to an..."
---

<a name="apis.event_io_write_string"></a> 
## Name

event_io_write_string — Initiate a write of the contents of a string to an event

## Synopsis

`#include "event.h"`

| `int **event_io_write_string** (` | <var class="pdparam">e</var>, |   |
|   | <var class="pdparam">str</var>, |   |
|   | <var class="pdparam">state</var>`)`; |   |

`Event * <var class="pdparam">e</var>`;
`string * <var class="pdparam">str</var>`;
`event_io_state * <var class="pdparam">state</var>`;<a name="idp51711152"></a> 
## Description

Initiate a write of the contents of a string to an event.

Writes a string buffer to an event. If the string is disk-backed, this routine will advance to the next chunk when the in-memory portion is exhausted, until the entire string has been sent.

If the write cannot be satisfied immediately, this function stores state information into the state parameter and returns `EVENT_IO_PENDING`. state->needmask will be set to the mask required for scheduling purposes. The caller should call [event_io_write_string](/momentum/3/3-api/apis-event-io-write-string) when the scheduler indicates that the underlying event is signalled with state->needmask.

If the write failed, this function returns `EVENT_IO_ERROR`.

If the write completes immediately, return `EVENT_IO_DONE`.

`state` must not be NULL, and must either be zero'ed out or be a value state structure previously used by other event_io_XXX routines.

It is advantageous to reuse state structures, as they try to avoid allocating memory if they already have an appropriately sized buffer.

When a state structure is no longer required, you should free resources by calling [event_io_state_clean](/momentum/3/3-api/apis-event-io-state-clean).

**<a name="idp51719424"></a> Parameters**

<dl class="variablelist">

<dt>e</dt>

<dd>

See [“Event”](/momentum/3/3-api/structs-event).

</dd>

<dt>str</dt>

<dd>

The ec_string that you wish to write.

</dd>

<dt>state</dt>

<dd>

For a description of this data type see [“event_io_state”](/momentum/3/3-api/structs-event-io-state)

</dd>

</dl>

**<a name="idp51726928"></a> Return Value**

This function returns one of the following values:

*   `EVENT_IO_DONE`

*   `EVENT_IO_ERROR`

*   `EVENT_IO_PENDING`

**<a name="idp51732352"></a> Threading**
### Warning

Only call this function from the `Scheduler` thread.

<a name="idp51734656"></a> 
## See Also

[*Event Functions*](/momentum/3/3-api/event)