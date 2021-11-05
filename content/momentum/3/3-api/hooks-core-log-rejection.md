---
lastUpdated: "03/26/2020"
title: "log_rejection"
description: "log rejection Register a function with this hook that will be called whenever a logging event due to message rejection occurs void core log rejection closure now ac ctx phase format args void closure struct timeval now accept construct ac validate context ctx int phase const char format va list..."
---

<a name="hooks.core.log_rejection"></a> 
## Name

log_rejection — Register a function with this hook that will be called whenever a logging event due to message rejection occurs

## Synopsis

`#include "hooks/core/log_rejection.h"`

| `void **core_log_rejection** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">now</var>, |   |
|   | <var class="pdparam">ac</var>, |   |
|   | <var class="pdparam">ctx</var>, |   |
|   | <var class="pdparam">phase</var>, |   |
|   | <var class="pdparam">format</var>, |   |
|   | <var class="pdparam">args</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`struct timeval * <var class="pdparam">now</var>`;
`accept_construct * <var class="pdparam">ac</var>`;
`validate_context * <var class="pdparam">ctx</var>`;
`int <var class="pdparam">phase</var>`;
`const char * <var class="pdparam">format</var>`;
`va_list <var class="pdparam">args</var>`;<a name="idp39866864"></a> 
## Description

Register a function with this hook that will be called whenever a logging event due to message rejection occurs. This hook has a signature that closely mirrors the signature defined for the `log_rejection` callback in a `logging_infrastructure_1` struct. For documentation of this data structure see [“logging_infrastructure_1”](/momentum/3/3-api/structs-logging-infrastructure-1).

**<a name="idp39869728"></a> Parameters**

<dl class="variablelist">

<dt>closure</dt>

<dd>

A pointer to the closure function.

</dd>

<dt>now</dt>

<dd>

A timeval struct.

</dd>

<dt>ac</dt>

<dd>

The `accept_construct` struct. For documentation of this data structure see [“accept_construct”](/momentum/3/3-api/structs-accept-construct)

</dd>

<dt>ctx</dt>

<dd>

The `validate_context` struct. For documentation of this data structure see [“validate_context”](/momentum/3/3-api/structs-validate-context)

</dd>

<dt>phase</dt>

<dd>

The phase in which the rejection occurred. Values will be one of:

```
MC_STATE_START, MC_STATE_START_RESPONSE, MC_STATE_EHLO, MC_STATE_EHLO_RESPONSE, 
MC_STATE_MAILFROM, MC_STATE_MAILFROM_RESPONSE, MC_STATE_RCPTTO, MC_STATE_RCPTTO_RESPONSE,
MC_STATE_DATA, MC_STATE_BODY, MC_STATE_BODY_RESPONSE, MC_STATE_ASYNC_BODY_RESPONSE, 
MC_STATE_OK, MC_STATE_RELAYING_DENIED, MC_STATE_EXTENSION_1, MC_STATE_EXTENSION_2,
MC_STATE_EXTENSION_3, MC_STATE_EXTENSION_4, MC_STATE_CONCURRENCY_LIMIT, 
MC_STATE_RCPTTO_LIST_RESPONSE, MC_STATE_RCPTTO_LIST_FINAL_RESPONSE, MC_STATE_SETUP,
MC_STATE_MCMT_FIXUP, MC_STATE_COUNT
```
</dd>

<dt>format</dt>

<dd>

The format for the rejection string that will be returned to the client.

</dd>

<dt>args</dt>

<dd>

The arguments for the format string.

</dd>

</dl>

**<a name="idp39886944"></a> Return Values**

This hook returns `void`.

**<a name="idp39888304"></a> Threading**

This hook will be called in any thread.

<a name="idp39889392"></a> 
## See Also

[log_attempt_v1](/momentum/3/3-api/hooks-core-log-attempt-v-1), [log_delivery_v1](/momentum/3/3-api/hooks-core-log-delivery-v-1), [log_permanent_failure_v1](/momentum/3/3-api/hooks-core-log-permanent-failure-v-1), [log_reopen](/momentum/3/3-api/hooks-core-log-reopen), and [log_transient_failure_v1](/momentum/3/3-api/hooks-core-log-transient-failure-v-1).