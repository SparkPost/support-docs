---
lastUpdated: "03/26/2020"
title: "log_client_connection_success"
description: "log client connection success Register a function with this hook that will be invoked whenever an outbound connection attempt succeeds void core log client connection failure closure addr dr binding slot now void closure struct sockaddr addr domain record dr int binding slot struct timeval now Register a function with..."
---

<a name="hooks.core.log_client_connection_success"></a> 
## Name

log_client_connection_success — Register a function with this hook that will be invoked whenever an outbound connection attempt succeeds

## Synopsis

`#include "hooks/core/log_client_connection_success.h"`

| `void **core_log_client_connection_failure** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">addr</var>, |   |
|   | <var class="pdparam">dr</var>, |   |
|   | <var class="pdparam">binding_slot</var>, |   |
|   | <var class="pdparam">now</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`struct sockaddr * <var class="pdparam">addr</var>`;
`domain_record * <var class="pdparam">dr</var>`;
`int <var class="pdparam">binding_slot</var>`;
`struct timeval * <var class="pdparam">now</var>`;<a name="idp41044320"></a> 
## Description

Register a function with this hook that will be invoked whenever an outbound connection attempt succeeds. The address of the peer as well as domain/binding information are passed to the hook.

**<a name="idp41045696"></a> Parameters**

<dl class="variablelist">

<dt>closure</dt>

<dd>

A pointer to the closure function.

</dd>

<dt>addr</dt>

<dd>

A pointer to a `sockaddr` struct.

</dd>

<dt>dr</dt>

<dd>

A pointer to a domain_record struct. For documentation of this data structure see [“domain_record”](/momentum/3/3-api/structs-domain-record)

</dd>

<dt>binding_slot</dt>

<dd>

The binding slot.

</dd>

<dt>now</dt>

<dd>

A pointer to a timeval struct, which may be NULL.

**Configuration Change. ** Prior to version 3.0, NULL was not an allowed value.

</dd>

</dl>

**<a name="idp41058480"></a> Return Values**

This hook returns `void`.

**<a name="idp41059840"></a> Threading**

This hook will be called in `any` thread.

<a name="idp41061360"></a> 
## See Also

[log_client_connection_failure](/momentum/3/3-api/hooks-core-log-client-connection-failure).