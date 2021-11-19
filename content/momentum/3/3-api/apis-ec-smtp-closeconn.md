---
lastUpdated: "03/26/2020"
title: "ec_smtp_closeconn"
description: "ec smtp closeconn Close an SMTP connection int ec smtp closeconn dc e conn connh domain binding slot am now file line delivery construct dc Event e connection conn connection handle connh domain record domain ec binding slot binding slot address metrics am struct timeval now const char file int..."
---

<a name="apis.ec_smtp_closeconn"></a> 
## Name

ec_smtp_closeconn — Close an SMTP connection

## Synopsis

`#include "smtp.h"`

| `int **ec_smtp_closeconn** (` | <var class="pdparam">dc</var>, |   |
|   | <var class="pdparam">e</var>, |   |
|   | <var class="pdparam">conn</var>, |   |
|   | <var class="pdparam">connh</var>, |   |
|   | <var class="pdparam">domain</var>, |   |
|   | <var class="pdparam">binding_slot</var>, |   |
|   | <var class="pdparam">am</var>, |   |
|   | <var class="pdparam">now</var>, |   |
|   | <var class="pdparam">file</var>, |   |
|   | <var class="pdparam">line</var>`)`; |   |

`delivery_construct * <var class="pdparam">dc</var>`;
`Event * <var class="pdparam">e</var>`;
`connection * <var class="pdparam">conn</var>`;
`connection_handle * <var class="pdparam">connh</var>`;
`domain_record * <var class="pdparam">domain</var>`;
`ec_binding_slot <var class="pdparam">binding_slot</var>`;
`address_metrics * <var class="pdparam">am</var>`;
`struct timeval * <var class="pdparam">now</var>`;
`const char * <var class="pdparam">file</var>`;
`int <var class="pdparam">line</var>`;<a name="idp49054656"></a> 
## Description

Close an SMTP connection.

### Note

You can use the following macro

```
#define CLOSECONN  return ec_smtp_closeconn(dc, e, conn, connh, domain, binding_slot, am,
  now, __FILE__, __LINE__);
```
**<a name="idp49057600"></a> Parameters**

<dl class="variablelist">

<dt>dc</dt>

<dd>

The address of a `delivery_construct` for the connection. For more information on this data structure see [“delivery_construct”](/momentum/3/3-api/structs-delivery-construct).

</dd>

<dt>e</dt>

<dd>

The address of an `event`. For more information on this data structure see [“Event”](/momentum/3/3-api/structs-event).

</dd>

<dt>conn</dt>

<dd>

The address of a `connection`. For more information on this data structure see [“connection”](/momentum/3/3-api/structs-connection).

</dd>

<dt>connh</dt>

<dd>

The address of a `connection_handle`. For more information on this data structure see [“connection_handle”](/momentum/3/3-api/structs-connection-handle).

</dd>

<dt>domain</dt>

<dd>

A pointer to a [“domain_record”](/momentum/3/3-api/structs-domain-record) struct.

</dd>

<dt>binding_slot</dt>

<dd>

The binding slot.

</dd>

<dt>am</dt>

<dd>

A pointer to a [“address_metrics”](/momentum/3/3-api/structs-address-metrics) struct.

</dd>

<dt>now</dt>

<dd>

A pointer to a timeval struct, which may be NULL.

**Configuration Change. ** Prior to version 3.0, NULL was not an allowed value.

</dd>

<dt>file</dt>

<dd>

The filename that invoked the call.

</dd>

<dt>line</dt>

<dd>

The line number of the file that invoked the call.

</dd>

</dl>

**<a name="idp49083984"></a> Return Values**

This function returns `0`.

**<a name="idp49085344"></a> Threading**

It is only legal to call this function in the `Scheduler` thread. thread.

<a name="idp49086896"></a> 
## See Also

[register_smtp_client_state](/momentum/3/3-api/apis-register-smtp-client-state), and [smtp_next_state](/momentum/3/3-api/apis-smtp-next-state).