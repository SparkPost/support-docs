---
lastUpdated: "03/26/2020"
title: "request_eval"
description: "request eval Called prior to sending a generic HTTP request int request eval closure sess void closure http session sess Configuration Change This hook point is available as of Momentum version 3 5 5 Called prior to sending a generic HTTP request This hook point is similar to the gcm..."
---

<a name="hooks.http_request_eval"></a> 
## Name

request_eval — Called prior to sending a generic HTTP request

## Synopsis

`#include "modules/delivery/http/httpclnt.h"`

| `int **request_eval** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">sess</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`http_session * <var class="pdparam">sess</var>`;<a name="idp29823664"></a> 
## Description

**Configuration Change. ** This hook point is available as of Momentum version 3.5.5.

Called prior to sending a generic HTTP request.

### Note

This hook point is similar to the [gcm_request_eval](/momentum/3/3-api/hooks-gcm-request-eval) hook but in this case the hook is passed a pointer to the http_session data which contains the http_request. If you change anything at this hook point you must update the HTTP headers.

**<a name="idp29828368"></a> Parameters**

<dl class="variablelist">

<dt>closure</dt>

<dd>

The closure function.

</dd>

<dt>sess</dt>

<dd>

The http_session. For more information about this struct see [“http_session”](/momentum/3/3-api/structs-http-session).

</dd>

</dl>

**<a name="idp29833472"></a> Return Values**

This hook returns zero or 1\. If non-zero, no further hook providers are called.

**<a name="idp29834448"></a> Threading**

This hook will be called in any thread.

<a name="idp29835472"></a> 
## See Also

[Momentum for Mobile Push Notifications](/momentum/3/3-push), [*Hooks in the gcm Scope*](/momentum/3/3-api/hooks-gcm) and [*Hooks in the apn Scope*](/momentum/3/3-api/hooks-apn)