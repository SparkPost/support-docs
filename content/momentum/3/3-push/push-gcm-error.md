---
lastUpdated: "03/26/2020"
title: "GCM Status Codes"
description: "The DLV Response Status context variable returns codes specific to the protocol used except when no errors are encountered When a message is successful DLV Response Status does not exist Use msys gcm gcm classify error to determine the error type The GCM codes are as follows Table C 1..."
---

## <a name="push.gcm.error"></a> Status Codes

<a name="idp665792"></a> 

The `DLV_Response_Status` context variable returns codes specific to the protocol used except when no errors are encountered. When a message is successful, DLV_Response_Status does not exist. Use [msys.gcm.gcm_classify_error](/momentum/3/3-reference/3-reference-lua-ref-msys-gcm-gcm-classify-error) to determine the error type.

The GCM codes are as follows:

<a name="push.gcm.error.table"></a> 


| Value | GCM Code | Type |
| --- | --- | --- |
| 0 | GCM_NO_ERROR | N/A |
| 1 | GCM GCM_UNAVAILABLE | Temporary |
| 2 | GCM_MISSING_REGISTRATION | Permanent |
| 3 | GCM_INVALID_REGISTRATION | Permanent |
| 4 | GCM_MISMATCH_SENDER_ID | Permanent |
| 5 | GCM_NOT_REGISTERED | Permanent |
| 6 | GCM_MESSAGE_TOO_BIG | Permanent |
| 7 | GCM_INVALID_DATA_KEY | Permanent |
| 8 | GCM_INVALID_TTL | Permanent |
| 9 | GCM_INTERNAL_SERVER_ERROR | Temporary |
| 10 | GCM_INVALID_PACKAGE_NAME | Permanent |

The previous table shows GCM status codes at the time of writing. To confirm these values check the Google Android developer site.