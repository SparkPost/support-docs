---
lastUpdated: "03/26/2020"
title: "ec_httpsrv_request_event_get"
description: "ec httpsrv request event get Returns the Event from the current session Event ec httpsrv request event get sess ec httpsrv session sess This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally available..."
---

<a name="apis.ec_httpsrv_request_event_get"></a> 
## Name

ec_httpsrv_request_event_get — Returns the Event from the current session

## Synopsis

`#include "modules/listeners/httpsrv.h"`

| `Event * **ec_httpsrv_request_event_get** (` | <var class="pdparam">sess</var>`)`; |   |

`ec_httpsrv_session * <var class="pdparam">sess</var>`;<a name="idp52846640"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Returns the Event from the current session.

**<a name="idp52849504"></a> Parameters**

<dl class="variablelist">

<dt>sess</dt>

<dd>

the session to interrogate

</dd>

</dl>

**<a name="idp52852240"></a> Return Values**

the event

The event will be valid until the call stack unwinds. This function may return an event that is not currently scheduled, depending on the calling thread and its status.