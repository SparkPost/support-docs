---
lastUpdated: "03/26/2020"
title: "event_read"
description: "event read Read an event int event read e buf buflen needmask Event e char buf int buflen int needmask Initiates a read that will populate buf and buflen with the data requested e See Section 68 49 Event buf The buffer for storage buflen The length of buf needmask..."
---

<a name="apis.event_read"></a> 
## Name

event_read — Read an event

## Synopsis

`#include "event.h"`

| `int **event_read** (` | <var class="pdparam">e</var>, |   |
|   | <var class="pdparam">buf</var>, |   |
|   | <var class="pdparam">buflen</var>, |   |
|   | <var class="pdparam">needmask</var>`)`; |   |

`Event * <var class="pdparam">e</var>`;
`char * <var class="pdparam">buf</var>`;
`int <var class="pdparam">buflen</var>`;
`int * <var class="pdparam">needmask</var>`;<a name="idp51767440"></a> 
## Description

Initiates a read that will populate `buf` and `buflen` with the data requested.

**<a name="idp51770096"></a> Parameters**

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

<dt>needmask</dt>

<dd>

The mask required for scheduling. It can be one of the following values:

```
#define E_READ         0x00000001
#define E_WRITE        0x00000002
#define E_EXCEPTION    0x00000004
#define E_TIMEOUT      0x00000008
#define E_ASYNC        0x00000010
```
</dd>

</dl>

**<a name="idp51780224"></a> Return Value**

This function returns the number of characters read.

**<a name="idp51781168"></a> Threading**
### Warning

Only call this function from the `Scheduler` thread.

<a name="idp51783152"></a> 
## See Also

[*Event Functions*](/momentum/3/3-api/event) and [tryread_until](/momentum/3/3-api/apis-tryread-until)