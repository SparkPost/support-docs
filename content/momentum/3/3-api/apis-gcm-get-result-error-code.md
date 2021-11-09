---
lastUpdated: "03/26/2020"
title: "gcm_get_result_error_code"
description: "gcm get result error code Get the error code from the response results error int gcm get result error code error const char error Configuration Change This function is available as of Momentum version 3 5 5 In the context of a Google push notification get the error code from..."
---

<a name="apis.gcm_get_result_error_code"></a> 
## Name

gcm_get_result_error_code — Get the error code from the response results error

## Synopsis

`#include "modules/mobility/gcm.h"`

| `int **gcm_get_result_error_code** (` | <var class="pdparam">error</var>`)`; |   |

`const char * <var class="pdparam">error</var>`;<a name="idp57595504"></a> 
## Description

**Configuration Change. ** This function is available as of Momentum version 3.5.5.

In the context of a Google push notification, get the error code from a response results error. If you need to determine the delivery method use [ec_message_get_delivery_method](/momentum/3/3-api/apis-ec-message-get-delivery-method).

**<a name="idp57599104"></a> Parameters**

<dl class="variablelist">

<dt>error</dt>

<dd>

A character pointer to the GCM response error.

</dd>

</dl>

**<a name="idp57601856"></a> Return Values**

This function returns one of the following values:

*   `GCM_NO_ERROR`

*   `GCM_UNAVAILABLE`

*   `GCM_MISSING_REGISTRATION`

*   `GCM_INVALID_REGISTRATION`

*   `GCM_MISMATCH_SENDER_ID`

*   `GCM_NOT_REGISTERED`

*   `GCM_MESSAGE_TOO_BIG`

*   `GCM_INVALID_DATA_KEY`

*   `GCM_INVALID_TTL`

*   `GCM_INTERNAL_SERVER_ERROR`

*   `GCM_INVALID_PACKAGE_NAME`

*   `GCM_UNKNOWN`

**<a name="idp57619440"></a> Threading**

It is legal to call this function in any thread.

<a name="idp57620544"></a> 
## See Also

[Momentum for Mobile Push Notifications](/momentum/3/3-push), [*Hooks in the gcm Scope*](/momentum/3/3-api/hooks-gcm) and [gcm_classify_error](/momentum/3/3-api/apis-gcm-classify-error)