---
lastUpdated: "03/26/2020"
title: "log_transient_failure_v1"
description: "log transient failure v 1 Register a function with this hook whenever a transient failure event should be logged void core log transient failure v 1 closure msg dr now note note len void closure ec message msg domain record dr struct timeval now const char note int note len..."
---

<a name="hooks.core.log_transient_failure_v1"></a> 
## Name

log_transient_failure_v1 — Register a function with this hook whenever a transient failure event should be logged.

## Synopsis

`#include "hooks/core/log_transient_failure_v1.h"`

| `void **core_log_transient_failure_v1** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">msg</var>, |   |
|   | <var class="pdparam">dr</var>, |   |
|   | <var class="pdparam">now</var>, |   |
|   | <var class="pdparam">note</var>, |   |
|   | <var class="pdparam">note_len</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`ec_message * <var class="pdparam">msg</var>`;
`domain_record * <var class="pdparam">dr</var>`;
`struct timeval * <var class="pdparam">now</var>`;
`const char * <var class="pdparam">note</var>`;
`int <var class="pdparam">note_len</var>`;<a name="idp40677264"></a> 
## Description

Register a function with this hook whenever a transient failure event should be logged. This hook has a signature that closely mirrors the signature defined for the `log_transient_failure` callback in a `logging_infrastructure_1` struct. For documentation of this data structure see [“logging_infrastructure_1”](/momentum/3/3-api/structs-logging-infrastructure-1).

**<a name="idp40680160"></a> Parameters**

<dl class="variablelist">

<dt>closure</dt>

<dd>

A pointer to the closure function.

</dd>

<dt>msg</dt>

<dd>

A pointer to an ec_message struct. For documentation of this data structure see [“ec_message”](/momentum/3/3-api/structs-ec-message)

</dd>

<dt>dr</dt>

<dd>

A pointer to a domain_record struct. For documentation of this data structure see [“domain_record”](/momentum/3/3-api/structs-domain-record)

</dd>

<dt>now</dt>

<dd>

A timeval struct.

</dd>

<dt>note</dt>

<dd>

Contains the Delivery Status Notification (DSN) from the remote server.

</dd>

<dt>note_len</dt>

<dd>

The length of the `note` string, in bytes.

</dd>

</dl>

**<a name="idp40693824"></a> Return Values**

This hook returns `void`.

**<a name="idp40695184"></a> Threading**

This hook will be called in any thread.

<a name="idp40696272"></a> 
## See Also

[log_attempt_v1](/momentum/3/3-api/hooks-core-log-attempt-v-1), [log_delivery_v1](/momentum/3/3-api/hooks-core-log-delivery-v-1), [log_permanent_failure_v1](/momentum/3/3-api/hooks-core-log-permanent-failure-v-1), [log_reception_v1](/momentum/3/3-api/hooks-core-log-reception-v-1), [log_rejection](/momentum/3/3-api/hooks-core-log-rejection), and [log_reopen](/momentum/3/3-api/hooks-core-log-reopen).