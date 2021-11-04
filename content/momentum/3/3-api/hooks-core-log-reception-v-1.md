---
lastUpdated: "03/26/2020"
title: "log_reception_v1"
description: "log reception v 1 Register a function with this hook whenever a reception event should be logged void log reception v 1 closure ac msg now note note len void closure accept construct ac ec message msg struct timeval now const char note int note len Register a function with..."
---

<a name="hooks.core.log_reception_v1"></a> 
## Name

log_reception_v1 — Register a function with this hook whenever a reception event should be logged.

## Synopsis

`#include "hooks/core/log_reception_v1.h"`

| `void **log_reception_v1** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">ac</var>, |   |
|   | <var class="pdparam">msg</var>, |   |
|   | <var class="pdparam">now</var>, |   |
|   | <var class="pdparam">note</var>, |   |
|   | <var class="pdparam">note_len</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`accept_construct * <var class="pdparam">ac</var>`;
`ec_message * <var class="pdparam">msg</var>`;
`struct timeval * <var class="pdparam">now</var>`;
`const char * <var class="pdparam">note</var>`;
`int <var class="pdparam">note_len</var>`;<a name="idp41848464"></a> 
## Description

Register a function with this hook whenever a reception event should be logged. This hook has a signature that closely mirrors the signature defined for the `log_reception` callback in a `logging_infrastructure_1` struct. For documentation of this data structure see [“logging_infrastructure_1”](/momentum/3/3-api/structs-logging-infrastructure-1).

**<a name="idp41851296"></a> Parameters**

<dl class="variablelist">

<dt>closure</dt>

<dd>

A pointer to the closure function.

</dd>

<dt>ac</dt>

<dd>

The `accept_construct` struct. For documentation of this data structure see [“accept_construct”](/momentum/3/3-api/structs-accept-construct)

</dd>

<dt>msg</dt>

<dd>

A pointer to an ec_message struct. For documentation of this data structure see [“ec_message”](/momentum/3/3-api/structs-ec-message)

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

**<a name="idp41865392"></a> Return Values**

This hook returns `void`.

**<a name="idp41866752"></a> Threading**

This hook will be called in any thread.

<a name="idp41867840"></a> 
## See Also

[log_attempt_v1](/momentum/3/3-api/hooks-core-log-attempt-v-1), [log_delivery_v1](/momentum/3/3-api/hooks-core-log-delivery-v-1), [log_permanent_failure_v1](/momentum/3/3-api/hooks-core-log-permanent-failure-v-1), [log_rejection](/momentum/3/3-api/hooks-core-log-rejection), [log_reopen](/momentum/3/3-api/hooks-core-log-reopen), and [log_transient_failure_v1](/momentum/3/3-api/hooks-core-log-transient-failure-v-1).