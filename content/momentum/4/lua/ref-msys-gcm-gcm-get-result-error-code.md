---
lastUpdated: "03/26/2020"
title: "msys.gcm.gcm_get_result_error_code"
description: "msys gcm gcm get result error code Get the error code from the response results error msys gcm gcm get result error code error Get the error code from the response results error The error code should be one of the following msys gcm GCM NO ERROR msys gcm GCM..."
---

<a name="lua.ref.msys.gcm.gcm_get_result_error_code"></a> 
## Name

msys.gcm.gcm_get_result_error_code — Get the error code from the response results error

<a name="idp18163376"></a> 
## Synopsis

`require('msys.gcm');`

`msys.gcm.gcm_get_result_error_code(error);`

`error: string`<a name="idp18167536"></a> 
## Description

Get the error code from the response results error. The error code should be one of the following:

*   `msys.gcm.GCM_NO_ERROR`

*   `msys.gcm.GCM_UNAVAILABLE`

*   `msys.gcm.GCM_MISSING_REGISTRATION`

*   `msys.gcm.GCM_INVALID_REGISTRATION`

*   `msys.gcm.GCM_MISMATCH_SENDER_ID`

*   `msys.gcm.GCM_NOT_REGISTERED`

*   `msys.gcm.GCM_MESSAGE_TOO_BIG`

*   `msys.gcm.GCM_INVALID_DATA_KEY`

*   `msys.gcm.GCM_INVALID_TTL`

*   `msys.gcm.GCM_INTERNAL_SERVER_ERROR`

*   `msys.gcm.GCM_INVALID_PACKAGE_NAME`

*   `msys.gcm.GCM_UNKNOW`

<a name="idp18186160"></a> 
## See Also

[Momentum for Mobile Push Notifications](/momentum/3/3-push) and [msys.apn.apn_status_classifier](/momentum/4/lua/ref-msys-apn-apn-status-classifier).