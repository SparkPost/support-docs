---
lastUpdated: "03/26/2020"
title: "body_assignment"
description: "body assignment int body assignment closure msg json req json recip templ void closure ec message msg struct json object json req struct json object json recip const char templ int has restinj body assignment hook void register restinj body assignment hook first hook closure ec hook restinj body assignment..."
---

<a name="hooks.restinj.body_assignment"></a> 
## Name

body_assignment

## Synopsis

`#include "modules/rest/injector.h"`

| `int **body_assignment** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">msg</var>, |   |
|   | <var class="pdparam">json_req</var>, |   |
|   | <var class="pdparam">json_recip</var>, |   |
|   | <var class="pdparam">templ</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`ec_message * <var class="pdparam">msg</var>`;
`struct json_object * <var class="pdparam">json_req</var>`;
`struct json_object * <var class="pdparam">json_recip</var>`;
`const char * <var class="pdparam">templ</var>`;

| `int **has_restinj_body_assignment_hook** (` | `)`; |   |

| `void **register_restinj_body_assignment_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_restinj_body_assignment_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_restinj_body_assignment_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_restinj_body_assignment_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `int **call_restinj_body_assignment_hook** (` | <var class="pdparam">msg</var>, |   |
|   | <var class="pdparam">json_req</var>, |   |
|   | <var class="pdparam">json_recip</var>, |   |
|   | <var class="pdparam">templ</var>`)`; |   |

`ec_message * <var class="pdparam">msg</var>`;
`struct json_object * <var class="pdparam">json_req</var>`;
`struct json_object * <var class="pdparam">json_recip</var>`;
`const char * <var class="pdparam">templ</var>`;<a name="idp44949936"></a> 
## Description

**Configuration Change. ** This hook is available as of version 3.1.2.

Called immediately prior to the injector running template expansion logic. The MSG parameter is the ec_message which is to be populated. JSON_REQ is the complete JSON request object, containing all recipients and template information. JSON_RECIP is the JSON object representing the data for the current recipient. TEMPL is the template text that will be used by the system as the basis for the template expansion.

Implementors of this hook have the opportunity to take some action on the message, perhaps by setting some context keys via ec_message_context_set, or optionally to circumvent the default template expansion.

Both JSON_REQ and JSON_RECIP may contain a key named "site" that can be used to convey additional data to this hook.

The return value of the hook MUST be one of EC_RESTINJ_BODY_ERROR, EC_RESTINJ_BODY_REPLACED, or EC_RESTINJ_BODY_UNTOUCHED, depending on the outcome of executing the hook.