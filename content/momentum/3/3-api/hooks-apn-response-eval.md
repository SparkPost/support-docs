---
lastUpdated: "03/26/2020"
title: "response_eval"
description: "response eval Called when there is a response from AP Ns int response eval closure response void closure apn response response Configuration Change This feature is available as of version 3 5 5 This hook is called when there is a response from AP Ns closure The closure function response..."
---

<a name="hooks.apn.response_eval"></a> 
## Name

response_eval — Called when there is a response from APNs

## Synopsis

`#include "modules/mobility/apn/apn.h"`

| `int **response_eval** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">response</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`apn_response * <var class="pdparam">response</var>`;<a name="idp42871568"></a> 
## Description

**Configuration Change. ** This feature is available as of version 3.5.5.

This hook is called when there is a response from APNs.

**<a name="idp42868336"></a> Parameters**

<dl class="variablelist">

<dt>closure</dt>

<dd>

The closure function.

</dd>

<dt>response</dt>

<dd>

The APN response. For a description of this data type see [“apn_error_response”](/momentum/3/3-api/structs-apn-error-response).

</dd>

</dl>

**<a name="idp42864336"></a> Return Values**

This hook returns zero or 1\. If non-zero, no further hook providers are called. Examine the `status` field of the response to determine appropriate action. Values for this field are:

*   `APNS_NO_ERROR`

*   `APNS_PROCESSING_ERROR`

*   `APNS_MISSING_DEVICE_TOKEN`

*   `APNS_MISSING_TOPIC`

*   `APNS_MISSING_PAYLOAD`

*   `APNS_INVALID_TOKEN_SIZE`

*   `APNS_INVALID_TOPIC_SIZE`

*   `APNS_INVALID_PAYLOAD_SIZE`

*   `APNS_INVALID_TOKEN`

*   `APNS_SHUTDOWN`

**<a name="idp45450928"></a> Threading**

This hook will be called in the `Scheduler` thread.

<a name="idp43687328"></a> 
## See Also

[Momentum for Mobile Push Notifications](/momentum/3/3-push) and [*Hooks in the apn Scope*](/momentum/3/3-api/hooks-apn)