---
lastUpdated: "03/26/2020"
title: "send_notification"
description: "send notification Allows you to override the MDN generation process that is determined by the DSN module int delay dsn send notification closure msg void closure ec message msg This hook allows you to override the MDN generation process that is determined by the DSN module This hook is an..."
---

<a name="hooks.delay_dsn.send_notification"></a> 
## Name

send_notification — Allows you to override the MDN generation process that is determined by the DSN module.

## Synopsis

`#include "hooks/delay_dsn/send_notification.h"`

| `int **delay_dsn_send_notification** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">msg</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`ec_message * <var class="pdparam">msg</var>`;<a name="idp36795072"></a> 
## Description

This hook allows you to override the MDN generation process that is determined by the DSN module. This hook is an ideal place to generate completely custom DSNs in policy.

**<a name="idp36796432"></a> Parameters**

<dl class="variablelist">

<dt>closure</dt>

<dd>

A pointer to the closure.

</dd>

<dt>msg</dt>

<dd>

The ec_message. For a description of this data type see [ec_message](/momentum/3/3-api/structs-ec-message).

</dd>

</dl>

**<a name="idp36801680"></a> Return Values**

If your registered hook returns `DELAY_DSN_SEND_NOTIFICATION_OK` then the internal default MDN generation will be bypassed.

**<a name="idp36803056"></a> Threading**

This hook will be invoked in the `Scheduler` thread.

<a name="idp36804528"></a> 
## See Also

[generate_delay_dsn](/momentum/3/3-api/hooks-delay-dsn-generate-delay-dsn), [next_delay_dsn](/momentum/3/3-api/hooks-delay-dsn-next-delay-dsn), and the [delay_dsn Module](/momentum/3/3-reference/3-reference-modules-delay-dsn).