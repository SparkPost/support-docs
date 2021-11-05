---
lastUpdated: "03/26/2020"
title: "Apple Status Codes"
description: "The DLV Response Status context variable returns codes specific to the protocol used except when no errors are encountered When a message is successful DLV Response Status does not exist Use msys apn apn status classifier to determine the error type The AP Ns codes are as follows Table B..."
---

## <a name="push.apple.error"></a> Apple Status Codes

<a name="idp201520"></a> 

The `DLV_Response_Status` context variable returns codes specific to the protocol used (except when no errors are encountered). When a message is successful, DLV_Response_Status does not exist. Use [msys.apn.apn_status_classifier](/momentum/3/3-reference/3-reference-lua-ref-msys-apn-apn-status-classifier) to determine the error type.

The APNs codes are as follows:

<a name="push.apple.error.table"></a> 


| APNs Code | Description | Type |
| --- | --- | --- |
| 0 | No Errors Encountered |   |
| 1 | Processing Error | Temporary Failure |
| 2 | Missing Device Token | Permanent Failure |
| 3 | Missing Topic | Permanent Failure |
| 4 | Missing Payload | Permanent Failure |
| 5 | Invalid Token Size | Permanent Failure |
| 6 | Invalid Topic Size | Permanent Failure |
| 7 | Invalid Payload Size | Permanent Failure |
| 8 | Invalid Token | Permanent Failure |
| 10 | Shutdown | Temporary Failure |
| 255 | None (unknown) | Temporary Failure |

The previous table shows Apple status codes at the time of writing. See [Provider Communication with Apple Push Notification Service](https://developer.apple.com/library/ios/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/Chapters/CommunicatingWIthAPS.html) to confirm these values.