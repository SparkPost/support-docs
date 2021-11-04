---
lastUpdated: "03/26/2020"
title: "msys.httpclnt.http_status_classifier"
description: "msys httpclnt http status classifier Determine the delivery status of the DLV Response Status variable msys httpclnt http status classifier status This function returns the delivery status of the DLV Response Status variable It classifies the DLV Response Status variable as one of the following msys delivery DELIVERY SUCCESS msys..."
---

<a name="lua.ref.msys.httpclnt.http_status_classifier"></a> 
## Name

msys.httpclnt.http_status_classifier — Determine the delivery status of the "DLV_Response_Status" variable

<a name="idp15293120"></a> 
## Synopsis

```
require('msys.httpclnt');
require('msys.delivery');
```

`msys.httpclnt.http_status_classifier(status);`

`status: numeric`<a name="idp15296864"></a> 
## Description

This function returns the delivery status of the "DLV_Response_Status" variable. It classifies the "DLV_Response_Status" variable as one of the following:

*   `msys.delivery.DELIVERY_SUCCESS`

*   `msys.delivery.DELIVERY_PERMFAILED`

Use this function in the `http_response_eval` callout.

<a name="idp15302896"></a> 
## See Also

[Momentum for Mobile Push Notifications](/momentum/3/3-push), [msys.gcm.gcm_classify_error](/momentum/4/lua/ref-msys-gcm-gcm-classify-error) and [msys.apn.apn_status_classifier](/momentum/4/lua/ref-msys-apn-apn-status-classifier).