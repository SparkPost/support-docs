---
lastUpdated: "03/26/2020"
title: "event_io_write"
description: "event io write initiate a write to an event int event io write e buf buflen state Event e const char buf int buflen event io state state This reference page was automatically generated from functions found in the header files in the development branch The function described here may..."
---

<a name="apis.event_io_write"></a> 
## Name

event_io_write — initiate a write to an event

## Synopsis

`#include "event.h"`

| `int **event_io_write** (` | <var class="pdparam">e</var>, |   |
|   | <var class="pdparam">buf</var>, |   |
|   | <var class="pdparam">buflen</var>, |   |
|   | <var class="pdparam">state</var>`)`; |   |

`Event * <var class="pdparam">e</var>`;
`const char * <var class="pdparam">buf</var>`;
`int <var class="pdparam">buflen</var>`;
`event_io_state * <var class="pdparam">state</var>`;<a name="idp51693760"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

initiate a write to an event.

Writes a buffer to an event. If the write cannot be satisfied immediately, this function stores state information into the state parameter and returns EVENT_IO_PENDING. state->needmask will be set to the mask required for scheduling purposes. The caller should call [event_io_retry](/momentum/3/3-api/apis-event-io-retry) when the scheduler indicates that the underlying event is signalled with state->needmask.

If the write failed, this function returns EVENT_IO_ERROR.

If the write completes immediately, return EVENT_IO_DONE.

state must not be NULL, and must either be zero'ed out or be a value state structure previously used by other event_io_XXX routines.

It is advantageous to reuse state structures, as they try to avoid allocating memory if they already have an appropriately sized buffer.

When a state structure is no longer required, you should free resources by calling [event_io_state_clean](/momentum/3/3-api/apis-event-io-state-clean).