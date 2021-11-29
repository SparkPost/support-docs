---
lastUpdated: "03/26/2020"
title: "event_io_read"
description: "event io read Initiate or continue a read operation for a fixed length int event io read e buf buflen state Event e char buf int buflen event io state state Initiate or continue a read operation for a fixed length If you need a record based reader consider using..."
---

<a name="apis.event_io_read"></a> 
## Name

event_io_read — Initiate or continue a read operation for a fixed length

## Synopsis

`#include "event.h"`

| `int **event_io_read** (` | <var class="pdparam">e</var>, |   |
|   | <var class="pdparam">buf</var>, |   |
|   | <var class="pdparam">buflen</var>, |   |
|   | <var class="pdparam">state</var>`)`; |   |

`Event * <var class="pdparam">e</var>`;
`char * <var class="pdparam">buf</var>`;
`int <var class="pdparam">buflen</var>`;
`event_io_state * <var class="pdparam">state</var>`;<a name="idp51614960"></a> 
## Description

Initiate or continue a read operation for a fixed length. If you need a record based reader, consider using the tryread APIs.

Initiates a read that will populate `buf` and `buflen` with the data requested. This function will not return success until it has completely obtained the length requested. It may return `EVENT_IO_ERROR` if an error is encountered before that time.

This function is intended to be used with comparatively small buffers. If you anticipate moving large chunks of data (where large means larger than the `growbuf` size) over a transport, you should consider using the growbuf code instead.

If the read cannot be satisfied immediately, this function stores state information into the state parameter and returns `EVENT_IO_PENDING`. state->needmask will be set to the mask required for scheduling purposes. The caller should call [event_io_read](/momentum/3/3-api/apis-event-io-read) when the scheduler indicates that the underlying event is signalled with state->needmask.

If the read failed, this function returns `EVENT_IO_ERROR`.

If the read completes, returns `EVENT_IO_DONE`.

When `EVENT_IO_DONE` is returned, the caller provided buf and buflen will be populated with the requested data. If multiple event_io_read calls were required to completely satisfy the request, the buf and buflen passed to the most recent call are used; this function does not cache the caller provided buffer address, on the assumption that it might be a stack variable, and as such, will unwind between event_io_read calls.

`state` must not be `NULL`, and must either be zero'ed out or be a value state structure previously used by other event_io_XXX routines.

It is advantageous to reuse state structures, as they try to avoid allocating memory if they already have an appropriately sized buffer.

When a state structure is no longer required, you should free resources by calling [event_io_state_clean](/momentum/3/3-api/apis-event-io-state-clean).

Returns `EVENT_IO_EOF` when no more data can be read from the file descriptor. This constant is available starting from Momentum 3.0.11.

**<a name="idp51628496"></a> Parameters**

<dl class="variablelist">

<dt>e</dt>

<dd>

See [“Event”](/momentum/3/3-api/structs-event).

</dd>

<dt>buf</dt>

<dd>

The buffer for storage.

</dd>

<dt>buflen</dt>

<dd>

The length of `buf`.

</dd>

<dt>state</dt>

<dd>

This parameter must not be NULL, and must either be zero'ed out or be a value state structure previously used by other event_io_XXX routines. For a description of this data structure see [“event_io_state”](/momentum/3/3-api/structs-event-io-state).

</dd>

</dl>

**<a name="idp51638432"></a> Return Values**

For the return values see the description above.

**<a name="idp51639376"></a> Threading**
### Warning

Only call this function from the `Scheduler` thread.

<a name="idp51641360"></a> 
## See Also

[*Event Functions*](/momentum/3/3-api/event) and [tryread_until](/momentum/3/3-api/apis-tryread-until)