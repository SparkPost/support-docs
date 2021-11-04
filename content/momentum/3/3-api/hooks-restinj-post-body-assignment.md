---
lastUpdated: "03/26/2020"
title: "post_body_assignment"
description: "post body assignment int post body assignment closure msg json req json recip templ void closure ec message msg struct json object json req struct json object json recip const char templ int has restinj post body assignment hook void register restinj post body assignment hook first hook closure ec..."
---

<a name="hooks.restinj.post_body_assignment"></a> 
## Name

post_body_assignment

## Synopsis

`#include "modules/rest/injector.h"`

| `int **post_body_assignment** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">msg</var>, |   |
|   | <var class="pdparam">json_req</var>, |   |
|   | <var class="pdparam">json_recip</var>, |   |
|   | <var class="pdparam">templ</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`ec_message * <var class="pdparam">msg</var>`;
`struct json_object * <var class="pdparam">json_req</var>`;
`struct json_object * <var class="pdparam">json_recip</var>`;
`const char * <var class="pdparam">templ</var>`;

| `int **has_restinj_post_body_assignment_hook** (` | `)`; |   |

| `void **register_restinj_post_body_assignment_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_restinj_post_body_assignment_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_restinj_post_body_assignment_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_restinj_post_body_assignment_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `int **call_restinj_post_body_assignment_hook** (` | <var class="pdparam">msg</var>, |   |
|   | <var class="pdparam">json_req</var>, |   |
|   | <var class="pdparam">json_recip</var>, |   |
|   | <var class="pdparam">templ</var>`)`; |   |

`ec_message * <var class="pdparam">msg</var>`;
`struct json_object * <var class="pdparam">json_req</var>`;
`struct json_object * <var class="pdparam">json_recip</var>`;
`const char * <var class="pdparam">templ</var>`;<a name="idp45003712"></a> 
## Description

**Configuration Change. ** This hook is available as of version 3.1.2.

Called immediately after the message body has been assigned, regardless of whether the body assignment was handled by the system or by an implementor of the restinj_body_assignment hook. The MSG parameter is the ec_message which is to be populated. JSON_REQ is the complete JSON request object, containing all recipients and template information. JSON_RECIP is the JSON object representing the data for the current recipient. TEMPL is the template text that was specified in the JSON_REQ and is what the system would use if it was responsible for assigning the content.

Implementors of this hook have the opportunity to take some action on the message, perhaps by setting some context keys via ec_message_context_set, or even to perform some additional content expansion or modification.

Both JSON_REQ and JSON_RECIP may contain a key named "site" that can be used to convey additional data to this hook.

The return value of the hook MUST be one of EC_RESTINJ_BODY_ERROR, EC_RESTINJ_BODY_REPLACED, or EC_RESTINJ_BODY_UNTOUCHED, depending on the outcome of executing the hook.