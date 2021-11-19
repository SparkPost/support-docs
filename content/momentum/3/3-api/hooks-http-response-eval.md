---
lastUpdated: "03/26/2020"
title: "response_eval"
description: "response eval The response phase in generic HTTP delivery int response eval closure sess void closure http session sess Configuration Change This hook point is available as of Momentum version 3 5 5 This hook is called at the response phase in generic HTTP delivery If an HTTP 200 response..."
---

<a name="hooks.http_response_eval"></a> 
## Name

response_eval — The response phase in generic HTTP delivery

## Synopsis

`#include "modules/delivery/http/httpclnt.h"`

| `int **response_eval** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">sess</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`http_session * <var class="pdparam">sess</var>`;<a name="idp29846688"></a> 
## Description

**Configuration Change. ** This hook point is available as of Momentum version 3.5.5.

This hook is called at the response phase in generic HTTP delivery. If an HTTP 200 response was received, then the HTTP response body contains a JSON object that holds the response.

### Note

This hook should not modify the response and would typically use it to process feedback concerning token management but this hook may also be used for other custom features.

**<a name="idp29850832"></a> Parameters**

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

**<a name="idp29855888"></a> Return Values**

This hook returns zero or 1\. If non-zero, no further hook providers are called.

**<a name="idp29856864"></a> Threading**

This hook will be called in the `Scheduler` thread.

<a name="idp29858384"></a> 
## See Also

[Momentum for Mobile Push Notifications](/momentum/3/3-push), [*Hooks in the gcm Scope*](/momentum/3/3-api/hooks-gcm) and [*Hooks in the apn Scope*](/momentum/3/3-api/hooks-apn)