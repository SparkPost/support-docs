---
lastUpdated: "03/26/2020"
title: "ec_httpsrv_request_event_get_scheduler_inst"
description: "ec httpsrv request event get scheduler inst Returns the scheduler for an Event from the current session ec scheduler inst ec httpsrv request event get scheduler inst sess ec httpsrv session sess Returns the scheduler for an Event from the current session sess The current session to interrogate For documentation..."
---

<a name="apis.ec_httpsrv_request_event_get_scheduler_inst"></a> 
## Name

ec_httpsrv_request_event_get_scheduler_inst — Returns the scheduler for an Event from the current session

## Synopsis

`#include "modules/listeners/httpsrv.h"`

| `ec_scheduler_inst * **ec_httpsrv_request_event_get_scheduler_inst** (` | <var class="pdparam">sess</var>`)`; |   |

`ec_httpsrv_session * <var class="pdparam">sess</var>`;<a name="idp52861920"></a> 
## Description

Returns the scheduler for an Event from the current session.

**<a name="idp52863168"></a> Parameters**

<dl class="variablelist">

<dt>sess</dt>

<dd>

The current session to interrogate. For documentation of this data structure see [“ec_httpsrv_session”](/momentum/3/3-api/structs-ec-httpsrv-session).

</dd>

</dl>

**<a name="idp52866544"></a> Return Values**

Returns the scheduler instance. For documentation of this data structure see [“ec_scheduler_inst”](/momentum/3/3-api/structs-ec-scheduler-inst). The scheduler instance will be valid for the lifetime of the inbound session.

**<a name="idp52868176"></a> Threading**

It is legal to call this function in the any thread.

<a name="idp52869280"></a> 
## See Also

[ec_httpsrv_request_event_get](/momentum/3/3-api/apis-ec-httpsrv-request-event-get)