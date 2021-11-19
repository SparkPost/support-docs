---
lastUpdated: "03/26/2020"
title: "ec_httpsrv_session_resume"
description: "ec httpsrv session resume Arranges for a suspended http session to be resumed int ec httpsrv session resume sess ec httpsrv session sess This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally available..."
---

<a name="apis.ec_httpsrv_session_resume"></a> 
## Name

ec_httpsrv_session_resume — Arranges for a suspended http session to be resumed

## Synopsis

`#include "modules/listeners/httpsrv.h"`

| `int **ec_httpsrv_session_resume** (` | <var class="pdparam">sess</var>`)`; |   |

`ec_httpsrv_session * <var class="pdparam">sess</var>`;<a name="idp53276080"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Arranges for a suspended http session to be resumed.

**<a name="idp53278960"></a> Parameters**

<dl class="variablelist">

<dt>sess</dt>

<dd>

the session to resume

</dd>

<dt>finished</dt>

<dd>

indicates if the request has completed.

</dd>

</dl>

The session must previously have been marked as suspended by a handler returning EC_HTTPSRV_HANDLER_ASYNC.

Returns 0 on success, or an errno value indicating the reason for failure.

On successful invocation, if finished is 0, the associated handler function will be invoked on the scheduler thread and allowed to continue processing. If finished is non-zero, the session will be treated as though the handler had been invoked one final time and returned EC_HTTPSRV_HANDLER_DONE.

This function is safe to call from any thread.