---
lastUpdated: "03/26/2020"
title: "recip_response"
description: "recip response void recip response closure msg sess resp req void closure ec message msg ec httpsrv session sess struct json object resp struct json object req int has restinj recip response hook void register restinj recip response hook first hook closure ec hook restinj recip response func t hook..."
---

<a name="hooks.restinj.recip_response"></a> 
## Name

recip_response

## Synopsis

`#include "modules/rest/injector.h"`

| `void **recip_response** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">msg</var>, |   |
|   | <var class="pdparam">sess</var>, |   |
|   | <var class="pdparam">resp</var>, |   |
|   | <var class="pdparam">req</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`ec_message * <var class="pdparam">msg</var>`;
`ec_httpsrv_session * <var class="pdparam">sess</var>`;
`struct json_object * <var class="pdparam">resp</var>`;
`struct json_object * <var class="pdparam">req</var>`;

| `int **has_restinj_recip_response_hook** (` | `)`; |   |

| `void **register_restinj_recip_response_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_restinj_recip_response_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_restinj_recip_response_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_restinj_recip_response_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **call_restinj_recip_response_hook** (` | <var class="pdparam">msg</var>, |   |
|   | <var class="pdparam">sess</var>, |   |
|   | <var class="pdparam">resp</var>, |   |
|   | <var class="pdparam">req</var>`)`; |   |

`ec_message * <var class="pdparam">msg</var>`;
`ec_httpsrv_session * <var class="pdparam">sess</var>`;
`struct json_object * <var class="pdparam">resp</var>`;
`struct json_object * <var class="pdparam">req</var>`;<a name="idp45032304"></a> 
## Description

**Configuration Change. ** This hook is available as of version 3.1.2.

Called after populating a per-recipient response object in the JSON response for the session, regardless of whether that recipient was successfully generated or not. MSG is the associated ec_message, which may be NULL. SESS is the HTTP session handle. RESP is the JSON object encapsulating the recipient specific JSON response. REQ is the JSON object encapsulating the entire JSON request.

Implementors of this hook have the opportunity to take some action on the JSON RESP structure, by populating a key named "site". Hook implementors may inspect other keys in RESP, but SHOULD limit their actions to modifying the contents of the "site" key so that they do not collide with future expansions to the injection API.

REQ may contain a key named "site" that can be used to convey additional data to this hook.