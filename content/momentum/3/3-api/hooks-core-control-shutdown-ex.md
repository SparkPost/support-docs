---
lastUpdated: "03/26/2020"
title: "control_shutdown_ex"
description: "control shutdown ex Invoked when shutdown occurs void core control shutdown ex closure die ret file lineno void closure int die int ret const char file int lineno This hook is invoked when an instance shutdown occurs This typically occurs when a shutdown command is issued over ec console However..."
---

<a name="hooks.core.control_shutdown_ex"></a> 
## Name

control_shutdown_ex — Invoked when shutdown occurs

## Synopsis

`#include "hooks/core/control_shutdown_ex.h"`

| `void **core_control_shutdown_ex** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">die</var>, |   |
|   | <var class="pdparam">ret</var>, |   |
|   | <var class="pdparam">file</var>, |   |
|   | <var class="pdparam">lineno</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`int <var class="pdparam">die</var>`;
`int <var class="pdparam">ret</var>`;
`const char * <var class="pdparam">file</var>`;
`int <var class="pdparam">lineno</var>`;<a name="idp46585872"></a> 
## Description

This hook is invoked when an instance shutdown occurs. This typically occurs when a [shutdown](/momentum/3/3-reference/3-reference-console-commands-shutdown) command is issued over ec_console. However, this may also be called in the event of an unexpected crash.

The parameters provide information on why the instance is being shut down. If *`die`* is non-zero then it contains the signal that triggered the shut down. The *`ret`* contains the command status that will be returned to the operating system. *`file`* and *`lineno`* contain the call site that triggered the shut down.

**<a name="idp46590128"></a> Parameters**

<dl class="variablelist">

<dt>closure</dt>

<dd>

The closure.

</dd>

<dt>die</dt>

<dd>

When this parameter is non-zero then it contains the signal that triggered the shut down.

</dd>

<dt>ret</dt>

<dd>

The command status that will be returned to the operating system.

</dd>

<dt>lineno</dt>

<dd>

The call site that triggered the shut down.

</dd>

</dl>

**<a name="idp46598480"></a> Return Values**

This function returns void.

**<a name="idp46599392"></a> Threading**

This hook will be called in the `Scheduler` thread.

<a name="idp46600912"></a> 
## See Also

[control_pre_command](/momentum/3/3-api/hooks-core-control-pre-command)