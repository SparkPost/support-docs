---
lastUpdated: "03/26/2020"
title: "log_reopen"
description: "log reopen This is invoked when reopen logs is issued though ec console void core log reopen closure void closure This is invoked when reopen logs is issued though ec console It is used to tell the module that the log files need to be reopened it may or may..."
---

<a name="hooks.core.log_reopen"></a> 
## Name

log_reopen — This is invoked when "reopen logs" is issued though ec_console.

## Synopsis

`#include "hooks/core/log_reopen.h"`

| `void **core_log_reopen** (` | <var class="pdparam">closure</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;<a name="idp39901552"></a> 
## Description

This is invoked when "reopen logs" is issued though ec_console. It is used to tell the module that the log files need to be reopened - it may or may not apply to a database-style logging facility. Note that this hook is also called when ec_rotate runs to rotate log files since that invokes "reopen logs".

**<a name="idp39903056"></a> Parameters**

<dl class="variablelist">

<dt>closure</dt>

<dd>

A pointer to the closure function.

</dd>

</dl>

**<a name="idp39905808"></a> Return Values**

This hook returns `void`.

**<a name="idp39907168"></a> Threading**

This hook will be called in `any` thread.

<a name="idp39908688"></a> 
## See Also

[log_attempt_v1](/momentum/3/3-api/hooks-core-log-attempt-v-1), [log_delivery_v1](/momentum/3/3-api/hooks-core-log-delivery-v-1), [log_permanent_failure_v1](/momentum/3/3-api/hooks-core-log-permanent-failure-v-1), [log_reception_v1](/momentum/3/3-api/hooks-core-log-reception-v-1), and [log_rejection](/momentum/3/3-api/hooks-core-log-rejection), and [log_transient_failure_v1](/momentum/3/3-api/hooks-core-log-transient-failure-v-1).