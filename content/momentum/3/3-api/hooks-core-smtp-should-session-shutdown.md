---
lastUpdated: "03/26/2020"
title: "smtp_should_session_shutdown"
description: "smtp should session shutdown Determine whether an SMTP session should be shut down int core smtp should session shutdown closure dc void closure delivery construct dc The smtp should session shutdown hook allows modules to apply logic to determine whether an SMTP session should be shut down This hook is..."
---

<a name="hooks.core.smtp_should_session_shutdown"></a> 
## Name

smtp_should_session_shutdown — Determine whether an SMTP session should be shut down

## Synopsis

`#include "hooks/core/smtp_should_session_shutdown.h"`

| `int **core_smtp_should_session_shutdown** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">dc</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`delivery_construct * <var class="pdparam">dc</var>`;<a name="idp37076640"></a> 
## Description

The `smtp_should_session_shutdown` hook allows modules to apply logic to determine whether an SMTP session should be shut down. This hook is called after a successful SMTP delivery and provides an alternate mechanism for terminating the session (alternate to exceeding [max_deliveries_per_connection](/momentum/3/3-reference/3-reference-conf-ref-max-deliveries-per-connection)). This hook can also terminate a session after a failed SMTP delivery attempt.

**<a name="idp37079440"></a> Parameters**

<dl class="variablelist">

<dt>closure</dt>

<dd>

A pointer to the closure.

</dd>

<dt>dc</dt>

<dd>

The delivery_construct struct. See [“delivery_construct”](/momentum/3/3-api/structs-delivery-construct).

</dd>

</dl>

**<a name="idp37084528"></a> Return Values**

`EC_HOOK_RETVAL` is returned. For more information see [“Hooking API”](/momentum/3/3-api/arch-primary-apis#arch.hooking).

**<a name="idp37086400"></a> Threading**

This hook will be invoked in the `Scheduler` thread.

<a name="idp37088192"></a> 
## See Also

[“delivery_construct”](/momentum/3/3-api/structs-delivery-construct)