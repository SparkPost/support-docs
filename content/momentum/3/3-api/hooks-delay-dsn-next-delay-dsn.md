---
lastUpdated: "03/26/2020"
title: "next_delay_dsn"
description: "next delay dsn Override sending of DSN notifications int delay dsn next delay dsn closure mess now when void closure ec message mess struct timeval now time t when The delay dsn module allows delivery status notifications DS Ns to be sent to the sender of a message when that..."
---

<a name="hooks.delay_dsn.next_delay_dsn"></a> 
## Name

next_delay_dsn — Override sending of DSN notifications.

## Synopsis

`#include "hooks/delay_dsn/next_delay_dsn.h"`

| `int **delay_dsn_next_delay_dsn** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">mess</var>, |   |
|   | <var class="pdparam">now</var>, |   |
|   | <var class="pdparam">when</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`ec_message * <var class="pdparam">mess</var>`;
`struct timeval * <var class="pdparam">now</var>`;
`time_t * <var class="pdparam">when</var>`;<a name="idp36767232"></a> 
## Description

The delay_dsn module allows delivery status notifications (DSNs) to be sent to the sender of a message, when that message has not yet been delivered. By default, no delay DSNs are sent.

Use this hook to override when the next delay notification for a message will be sent by the `delay_dsn` module. `now` is the current epoch time. `when` is the epoch time when the next notification should be sent.

**<a name="idp36770576"></a> Parameters**

<dl class="variablelist">

<dt>closure</dt>

<dd>

A pointer to the closure.

</dd>

<dt>mess</dt>

<dd>

The ec_message. For a description of this data type see [ec_message](/momentum/3/3-api/structs-ec-message).

</dd>

<dt>now</dt>

<dd>

The current epoch time.

</dd>

<dt>when</dt>

<dd>

The epoch time when the next notification should be sent.

</dd>

</dl>

**<a name="idp36779472"></a> Return Values**

If `GENERATE_DELAY_DSN_HOOK_CONT` is returned, processing will fallback to other modules and then to the configuration. If `GENERATE_DELAY_DSN_HOOK_OK` is returned, then processing will terminate and the value passed back via `when` will be used.

**<a name="idp36781888"></a> Threading**

This hook will be invoked in the `Scheduler` thread.

<a name="idp36783360"></a> 
## See Also

[generate_delay_dsn](/momentum/3/3-api/hooks-delay-dsn-generate-delay-dsn), [send_notification](/momentum/3/3-api/hooks-delay-dsn-send-notification), and the [delay_dsn Module](/momentum/3/3-reference/3-reference-modules-delay-dsn).