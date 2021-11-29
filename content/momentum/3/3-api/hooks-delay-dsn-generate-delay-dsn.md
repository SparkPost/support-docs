---
lastUpdated: "03/26/2020"
title: "generate_delay_dsn"
description: "generate delay dsn Allows you to override a configured setting to generate a delay DSN for a given message int delay dsn generate delay dsn closure msg enabled void closure ec message msg int enabled The delay dsn module allows delivery status notifications DS Ns to be sent to the..."
---

<a name="hooks.delay_dsn.generate_delay_dsn"></a> 
## Name

generate_delay_dsn — Allows you to override a configured setting to generate a delay DSN for a given message

## Synopsis

`#include "hooks/delay_dsn/generate_delay_dsn.h"`

| `int **delay_dsn_generate_delay_dsn** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">msg</var>, |   |
|   | <var class="pdparam">enabled</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`ec_message * <var class="pdparam">msg</var>`;
`int * <var class="pdparam">enabled</var>`;<a name="idp36739616"></a> 
## Description

The `delay_dsn` module allows delivery status notifications (DSNs) to be sent to the sender of a message, when that message has not yet been delivered. By default, no delay DSNs are sent.

This hook allows you to override a configured setting to generate a delay DSN for a given message.

**<a name="idp36741968"></a> Parameters**

<dl class="variablelist">

<dt>closure</dt>

<dd>

A pointer to the closure.

</dd>

<dt>msg</dt>

<dd>

The ec_message. For a description of this data type see [ec_message](/momentum/3/3-api/structs-ec-message).

</dd>

<dt>enabled</dt>

<dd>

If `*enabled` equals `0`, then generating a delay DSN is disabled. If `*enabled` equals `1`, then generating a delay DSN is enabled.

</dd>

</dl>

**<a name="idp36750912"></a> Return Values**

If `GENERATE_DELAY_DSN_HOOK_CONT` is returned, processing will fallback to other modules and then to the configuration. If `GENERATE_DELAY_DSN_HOOK_OK` is returned, then processing will terminate and the value passed back via enabled will be used.

**<a name="idp36752912"></a> Threading**

This hook will be invoked in the `Scheduler` thread.

<a name="idp36754384"></a> 
## See Also

[next_delay_dsn](/momentum/3/3-api/hooks-delay-dsn-next-delay-dsn), [send_notification](/momentum/3/3-api/hooks-delay-dsn-send-notification), and the [delay_dsn Module](/momentum/3/3-reference/3-reference-modules-delay-dsn).