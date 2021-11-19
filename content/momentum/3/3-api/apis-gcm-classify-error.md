---
lastUpdated: "03/26/2020"
title: "gcm_classify_error"
description: "gcm classify error Determine the meaning of the delivery status code int gcm classify error status int status Configuration Change This function is available as of Momentum version 3 5 5 In the context of a Google push notification determine the meaning of the delivery status code If you need..."
---

<a name="apis.gcm_classify_error"></a> 
## Name

gcm_classify_error — Determine the meaning of the delivery status code

## Synopsis

`#include "modules/mobility/gcm.h"`

| `int **gcm_classify_error** (` | <var class="pdparam">status</var>`)`; |   |

`int <var class="pdparam">status</var>`;<a name="idp57570992"></a> 
## Description

**Configuration Change. ** This function is available as of Momentum version 3.5.5.

In the context of a Google push notification, determine the meaning of the delivery status code. If you need to determine the delivery method use [ec_message_get_delivery_method](/momentum/3/3-api/apis-ec-message-get-delivery-method).

**<a name="idp57574592"></a> Parameters**

<dl class="variablelist">

<dt>status</dt>

<dd>

The "DLV_Response_Status" context variable which contains the protocol-specific error code.

</dd>

</dl>

**<a name="idp57577408"></a> Return Values**

This function returns one of the following values:

*   `DELIVERY_SUCCESS`

*   `DELIVERY_TEMPFAILED`

*   `DELIVERY_PERMFAILED`

**<a name="idp57582832"></a> Threading**

It is legal to call this function in any thread.

<a name="idp57583936"></a> 
## See Also

[Momentum for Mobile Push Notifications](/momentum/3/3-push), [*Hooks in the gcm Scope*](/momentum/3/3-api/hooks-gcm) and [gcm_get_result_error_code](/momentum/3/3-api/apis-gcm-get-result-error-code)