---
lastUpdated: "03/26/2020"
title: "json_request"
description: "json request int json request closure sess req void closure ec httpsrv session sess struct json object req int has restinj json request hook void register restinj json request hook first hook closure ec hook restinj json request func t hook void closure void register restinj json request hook last..."
---

<a name="hooks.restinj.json_request"></a> 
## Name

json_request

## Synopsis

`#include "modules/rest/injector.h"`

| `int **json_request** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">sess</var>, |   |
|   | <var class="pdparam">req</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`ec_httpsrv_session * <var class="pdparam">sess</var>`;
`struct json_object * <var class="pdparam">req</var>`;

| `int **has_restinj_json_request_hook** (` | `)`; |   |

| `void **register_restinj_json_request_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_restinj_json_request_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_restinj_json_request_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_restinj_json_request_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `int **call_restinj_json_request_hook** (` | <var class="pdparam">sess</var>, |   |
|   | <var class="pdparam">req</var>`)`; |   |

`ec_httpsrv_session * <var class="pdparam">sess</var>`;
`struct json_object * <var class="pdparam">req</var>`;<a name="idp44975440"></a> 
## Description

**Configuration Change. ** This hook is available as of version 3.1.2.

Called very early during the REST injector processing, before assessing the recipient list. SESS is the incoming HTTP session. REQ is the JSON object encapsulating the injection request.

Implementors of this hook have the opportunity to take some action on the JSON request structure, potentially applying additional transformation or validation of the JSON structure.

REQ may contain a key named "site" that can be used to convey additional data to this hook.

The return value of the hook MUST be one of EC_RESTINJ_SESS_OK or EC_RESTINJ_SESS_ERR, depending on the outcome of executing the hook. If an error condition is indicated, it is the responsibility of the hook implementor to construct a JSON response that is compliant with the published REST injection protocol, or to otherwise ensure that the SESS object is primed to output a response that is meaningful to the clients of the API.