---
lastUpdated: "03/26/2020"
title: "apn_status_classifier"
description: "apn status classifier Determine the meaning of the delivery status code int apn status classifier status int status Configuration Change This function is available as of Momentum version 3 5 5 In the context of an Apple push notification determine the meaning of the delivery status code If you need..."
---

<a name="apis.apn_status_classifier"></a> 
## Name

apn_status_classifier — Determine the meaning of the delivery status code

## Synopsis

`#include "modules/mobility/apn.h"`

| `int **apn_status_classifier** (` | <var class="pdparam">status</var>`)`; |   |

`int <var class="pdparam">status</var>`;<a name="idp57380608"></a> 
## Description

**Configuration Change. ** This function is available as of Momentum version 3.5.5.

In the context of an Apple push notification, determine the meaning of the delivery status code. If you need to determine the delivery method use [ec_message_get_delivery_method](/momentum/3/3-api/apis-ec-message-get-delivery-method).

**<a name="idp57384208"></a> Parameters**

<dl class="variablelist">

<dt>status</dt>

<dd>

The "DLV_Response_Status" context variable which contains the protocol-specific error code.

</dd>

</dl>

**<a name="idp57387024"></a> Return Values**

This function returns one of the following values:

*   `DELIVERY_SUCCESS`

*   `DELIVERY_TEMPFAILED`

*   `DELIVERY_PERMFAILED`

**<a name="idp57392448"></a> Threading**

It is legal to call this function in any thread.

<a name="idp57393552"></a> 
## See Also

[Momentum for Mobile Push Notifications](/momentum/3/3-push) and [gcm_classify_error](/momentum/3/3-api/apis-gcm-classify-error)