---
lastUpdated: "03/26/2020"
title: "esmtp_message_factory"
description: "esmtp message factory This function is the ESMTP server state machine int esmtp message factory event eventtype vclosure now Event event int eventtype void vclosure struct timeval now This function is the ESMTP server state machine This function should only be used under direct guidance from Message Systems professional services..."
---

<a name="apis.esmtp_message_factory"></a> 
## Name

esmtp_message_factory — This function is the ESMTP server state machine

## Synopsis

`#include "esmtp_factory.h"`

| `int **esmtp_message_factory** (` | <var class="pdparam">event</var>, |   |
|   | <var class="pdparam">eventtype</var>, |   |
|   | <var class="pdparam">vclosure</var>, |   |
|   | <var class="pdparam">now</var>`)`; |   |

`Event * <var class="pdparam">event</var>`;
`int <var class="pdparam">eventtype</var>`;
`void * <var class="pdparam">vclosure</var>`;
`struct timeval * <var class="pdparam">now</var>`;<a name="idp61704864"></a> 
## Description

This function is the ESMTP server state machine.

### Warning

This function should only be used under direct guidance from Message Systems professional services.

**<a name="idp61707104"></a> Parameters**

<dl class="variablelist">

<dt>event</dt>

<dd>

The Event. For more information about this data type see [Event](/momentum/3/3-api/structs-event).

</dd>

<dt>eventtype</dt>

<dd>

Event types are defined in `event.h` as follows:

```
#define E_READ         0x00000001
#define E_WRITE        0x00000002
#define E_EXCEPTION    0x00000004
#define E_TIMEOUT      0x00000008
#define E_ASYNC        0x00000010
```

E_READ is defined to indicate that reading the descriptor will not block, E_WRITE to indicate that writing will not block and E_EXCEPTION to indicate certain error conditions. There are other possible mask values, but they are for internal use. `eventtype` can be set to one or more of these values bitwise OR'd together.

</dd>

<dt>closure</dt>

<dd>

A pointer to the closure function.

</dd>

<dt>now</dt>

<dd>

The current time.

</dd>

</dl>

**<a name="idp61718720"></a> Return Values**

On error, this function returns `0`.

**<a name="idp61720080"></a> Threading**

It is legal to call this function in the `Scheduler` thread.

<a name="idp61721936"></a> 
## See Also

[*SMTP-related Functions*](/momentum/3/3-api/smtp) and [“Event”](/momentum/3/3-api/structs-event)