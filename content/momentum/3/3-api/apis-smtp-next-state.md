---
lastUpdated: "03/26/2020"
title: "smtp_next_state"
description: "smtp next state Change the SMTP state for the current connection to another state void smtp next state dc connh state now delivery construct dc connection handle connh smtp state state struct timeval now Change the SMTP state for the current connection to another state dc The address of a..."
---

<a name="apis.smtp_next_state"></a> 
## Name

smtp_next_state — Change the SMTP state for the current connection to another state

## Synopsis

`#include "smtp.h"`

| `void **smtp_next_state** (` | <var class="pdparam">dc</var>, |   |
|   | <var class="pdparam">connh</var>, |   |
|   | <var class="pdparam">state</var>, |   |
|   | <var class="pdparam">now</var>`)`; |   |

`delivery_construct * <var class="pdparam">dc</var>`;
`connection_handle * <var class="pdparam">connh</var>`;
`smtp_state * <var class="pdparam">state</var>`;
`struct timeval * <var class="pdparam">now</var>`;<a name="idp62057072"></a> 
## Description

Change the SMTP state for the current connection to another state.

**<a name="idp62058320"></a> Parameters**

<dl class="variablelist">

<dt>dc</dt>

<dd>

The address of a `delivery_construct` for the connection. For more information on this data structure see [“delivery_construct”](/momentum/3/3-api/structs-delivery-construct).

</dd>

<dt>connh</dt>

<dd>

The address of a `connection_handle`. For more information on this data structure see [“connection_handle”](/momentum/3/3-api/structs-connection-handle).

</dd>

<dt>state</dt>

<dd>

Move the connection state to this SMTP state. One typical usage is to use `smtp_get_state` as an argument. Another typical usage is to pass the `NULL` pointer. In this case, then move the connection state to the next (default) state. For more information on this data structure see [“smtp_state”](/momentum/3/3-api/structs-smtp-state).

</dd>

<dt>now</dt>

<dd>

A pointer to a timeval struct, which may be NULL.

**Configuration Change. ** Prior to version 3.0, NULL was not an allowed value.

</dd>

</dl>

**<a name="idp62072480"></a> Return Values**

This function returns `void`.

**<a name="idp62073840"></a> Threading**

It is *only* legal to call this function in the `Scheduler` thread.

<a name="idp62075824"></a> 
## See Also

[ec_smtp_closeconn](/momentum/3/3-api/apis-ec-smtp-closeconn) and [register_smtp_client_state](/momentum/3/3-api/apis-register-smtp-client-state)