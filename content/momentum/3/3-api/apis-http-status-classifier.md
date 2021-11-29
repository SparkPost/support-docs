---
lastUpdated: "03/26/2020"
title: "http_status_classifier"
description: "http status classifier Determine the meaning of the delivery status code int http status classifier status int status Configuration Change This function is available as of Momentum version 3 5 5 In the context of an HTTP delivery determine the meaning of the delivery status code If you need to..."
---

<a name="apis.http_status_classifier"></a> 
## Name

http_status_classifier — Determine the meaning of the delivery status code

## Synopsis

`#include "modules/delivery/htpp/httpclnt.h"`

| `int **http_status_classifier** (` | <var class="pdparam">status</var>`)`; |   |

`int <var class="pdparam">status</var>`;<a name="idp52635696"></a> 
## Description

**Configuration Change. ** This function is available as of Momentum version 3.5.5.

In the context of an HTTP delivery, determine the meaning of the delivery status code. If you need to determine the delivery method use [ec_message_get_delivery_method](/momentum/3/3-api/apis-ec-message-get-delivery-method).

**<a name="idp52639232"></a> Parameters**

<dl class="variablelist">

<dt>status</dt>

<dd>

The "DLV_Response_Status" context variable which contains the protocol-specific error code.

</dd>

</dl>

**<a name="idp52642048"></a> Return Values**

This function returns one of the following values:

*   `DELIVERY_SUCCESS`

*   `DELIVERY_PERMFAILED`

**<a name="idp52646560"></a> Threading**

It is legal to call this function in any thread.

<a name="idp52647664"></a> 
## See Also

[Momentum for Mobile Push Notifications](/momentum/3/3-push), [apn_status_classifier](/momentum/3/3-api/apis-apn-status-classifier) and [gcm_classify_error](/momentum/3/3-api/apis-gcm-classify-error)