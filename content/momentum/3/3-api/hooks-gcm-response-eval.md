---
lastUpdated: "03/26/2020"
title: "response_eval"
description: "response eval Process feedback from Google Cloud Messaging int response eval closure response msg void closure gcm response response ec message msg Configuration Change This feature is available as of version 3 5 5 The primary purpose of this hook is to process Google GCM feedback concerning token management Use..."
---

<a name="hooks.gcm.response_eval"></a> 
## Name

response_eval — Process feedback from Google Cloud Messaging

## Synopsis

`#include "modules/mobility/gcm/gcm.h"`

| `int **response_eval** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">response</var>, |   |
|   | <var class="pdparam">msg</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`gcm_response * <var class="pdparam">response</var>`;
`ec_message * <var class="pdparam">msg</var>`;<a name="idp36822944"></a> 
## Description

**Configuration Change. ** This feature is available as of version 3.5.5.

The primary purpose of this hook is to process Google GCM feedback concerning token management. Use this hook instead of the generic [http_response_eval](/momentum/3/3-api/hooks-http-response-eval) hook when you don't care about the HTTP wrappers around the response and are only concerned with the details. If you need the full response, including the headers, then you should use the generic http_response_eval hook.

At this hook point, feedback from Google servers can be handled, including Registration ID related maintenance feedback. Feedback is provided for messages that have been rejected as well as messages that have been accepted.

### Note

You should not modify the response at this hook point.

**<a name="idp36828544"></a> Parameters**

<dl class="variablelist">

<dt>closure</dt>

<dd>

The closure function.

</dd>

<dt>response</dt>

<dd>

The GCM response. For a description of this data type see [“gcm_message_response”](/momentum/3/3-api/structs-gcm-message-response).

Inspect the response `GCM_ERROR` field of this struct to determine what action to take. The values for this field are as follows:

```
/* Google GCM errors - Reported on 200 HTTP Response */
 GCM_NO_ERROR = 0,
 GCM_UNAVAILABLE = 1,            /* 503 HTTP Response */
 GCM_MISSING_REGISTRATION = 2,
 GCM_INVALID_REGISTRATION = 3,
 GCM_MISMATCH_SENDER_ID = 4,
 GCM_NOT_REGISTERED = 5,
 GCM_MESSAGE_TOO_BIG = 6,
 GCM_INVALID_DATA_KEY = 7,
 GCM_INVALID_TTL = 8,
 GCM_INTERNAL_SERVER_ERROR = 9,  /* 500 HTTP Response */
 GCM_INVALID_PACKAGE_NAME = 10,
```
</dd>

</dl>

You can use the [gcm_get_result_error_code](/momentum/3/3-api/apis-gcm-get-result-error-code) API routine to return these error codes by passing the error field (char *) as a parameter.

**<a name="idp36836928"></a> Return Values**

This hook returns zero or 1\. If non-zero, no further hook providers are called.

**<a name="idp36837904"></a> Threading**

This hook will be called in the `Scheduler` thread.

<a name="idp36839424"></a> 
## See Also

[Momentum for Mobile Push Notifications](/momentum/3/3-push) and [*Hooks in the gcm Scope*](/momentum/3/3-api/hooks-gcm) .