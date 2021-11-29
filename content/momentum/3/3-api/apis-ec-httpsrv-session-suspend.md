---
lastUpdated: "03/26/2020"
title: "ec_httpsrv_session_suspend"
description: "ec httpsrv session suspend Arranges for an http session to be suspended int ec httpsrv session suspend sess ec httpsrv session sess Arranges for an http session to be suspended You must call this before returning EC HTTPSRV HANDLER ASYNC from a handler sess The session to suspend A pointer..."
---

<a name="apis.ec_httpsrv_session_suspend"></a> 
## Name

ec_httpsrv_session_suspend — Arranges for an http session to be suspended

## Synopsis

`#include "modules/listeners/httpsrv.h"`

| `int **ec_httpsrv_session_suspend** (` | <var class="pdparam">sess</var>`)`; |   |

`ec_httpsrv_session * <var class="pdparam">sess</var>`;<a name="idp53293984"></a> 
## Description

Arranges for an http session to be suspended.

### Note

You must call this before returning EC_HTTPSRV_HANDLER_ASYNC from a handler.

**<a name="idp53296192"></a> Parameters**

<dl class="variablelist">

<dt>sess</dt>

<dd>

The session to suspend. A pointer to an `ec_httpsrv_session` struct. For documentation of this data structure see [“ec_httpsrv_session”](/momentum/3/3-api/structs-ec-httpsrv-session).

</dd>

</dl>

**<a name="idp53300032"></a> Return Values**

Returns 0 on success, or an errno value (`EBADF`) if the session has already been suspended.

**<a name="idp53301440"></a> Threading**

This function must be called from the event loop handling the HTTP session.

<a name="idp53302576"></a> 
## See Also

[ec_httpsrv_session_resume](/momentum/3/3-api/apis-ec-httpsrv-session-resume).