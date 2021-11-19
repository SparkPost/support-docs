---
lastUpdated: "03/26/2020"
title: "log_client_connection_failure"
description: "log client connection failure Register a function with this hook that will be invoked whenever an outbound connection attempt fails void core log client connection failure closure addr err dr binding slot now void closure struct sockaddr addr int err domain record dr int binding slot struct timeval now Register..."
---

<a name="hooks.core.log_client_connection_failure"></a> 
## Name

log_client_connection_failure — Register a function with this hook that will be invoked whenever an outbound connection attempt fails

## Synopsis

`#include "hooks/core/log_client_connection_failure.h"`

| `void **core_log_client_connection_failure** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">addr</var>, |   |
|   | <var class="pdparam">err</var>, |   |
|   | <var class="pdparam">dr</var>, |   |
|   | <var class="pdparam">binding_slot</var>, |   |
|   | <var class="pdparam">now</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`struct sockaddr * <var class="pdparam">addr</var>`;
`int <var class="pdparam">err</var>`;
`domain_record * <var class="pdparam">dr</var>`;
`int <var class="pdparam">binding_slot</var>`;
`struct timeval * <var class="pdparam">now</var>`;<a name="idp41920560"></a> 
## Description

Register a function with this hook that will be invoked whenever an outbound connection attempt fails. The address of the peer as well as domain/binding information are passed to the hook.

**<a name="idp41921936"></a> Parameters**

<dl class="variablelist">

<dt>closure</dt>

<dd>

A pointer to the closure function.

</dd>

<dt>addr</dt>

<dd>

A pointer to a `sockaddr` struct.

</dd>

<dt>err</dt>

<dd>

A bitmask constructed from the following bitmasks:

```
CONN_ACTION_REQUEUE1, CONN_ACTION_PURGE_DOMAIN, CONN_ERROR_MX_LOOKUP_FAILED, CONN_ERROR_MX_LOOKUP_PENDING, CONN_ERROR_SMTP_NULL_MX,
CONN_ERROR_NO_MXS_REACHABLE, CONN_ERROR_PROHIBITED_IP, CONN_ERROR_HOST_MAX_REACHED, CONN_ERROR_SOCKET, CONN_ERROR_IOCTL,
CONN_ERROR_BIND, CONN_ERROR_CONNECT, CONN_ERROR_CONNECT_NETWORK, and CONN_ERROR_CONNECT_TIMEOUT.
```
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

**<a name="idp41937376"></a> Return Values**

This hook returns `void`.

**<a name="idp41030048"></a> Threading**

This hook will be called in `any` thread.

<a name="idp41031568"></a> 
## See Also

[log_client_connection_success](/momentum/3/3-api/hooks-core-log-client-connection-success).