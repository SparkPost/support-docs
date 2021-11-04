---
lastUpdated: "03/26/2020"
title: "msys.apn.apn_status_classifier"
description: "msys apn apn status classifier Determine whether the delivery status code represents a permanent or temporary failure msys apn apn status classifier status Determine the delivery status of the DLV Response Status variable in the context of an Apple push notification This function classifies the DLV Response Status variable and..."
---

<a name="lua.ref.msys.apn.apn_status_classifier"></a> 
## Name

msys.apn.apn_status_classifier — Determine whether the delivery status code represents a permanent or temporary failure

<a name="idp15138576"></a> 
## Synopsis

`require('msys.apn')`

`msys.apn.apn_status_classifier(status);`

`status: numeric`<a name="idp15142272"></a> 
## Description

Determine the delivery status of the "DLV_Response_Status" variable in the context of an Apple push notification. This function classifies the "DLV_Response_Status" variable and returns one of the following values:

*   `msys.delivery.DELIVERY_SUCCESS`

*   `msys.delivery.DELIVERY_TEMPFAILED`

*   `msys.delivery.DELIVERY_PERMFAILED`

The following code example converts a failed Apple push notification to an SMPP message.

<a name="lua.ref.msys.apn_classify_error.example"></a> 


```
require("strict")
require("msys.delivery")
require("msys.apn")
require("msys.extended.message")

local mod = {}

function mod:generic_delivery_msg_dispose(msg)
  local status = msg:context_get(msys.core.ECMESS_CTX_MESS, "DLV_Response_Status")
  if status == "" then
    return msys.delivery.DELIVERY_CONTINUE
    -- "DLV_Response_Status" varies depending upon protocol
    -- but a message is treated as ok or delivered if and
    -- only if the DLV_Response_Status does not exist.
  elseif (msys.apn.apn_status_classifier(tonumber(status))==msys.delivery.DELIVERY_PERMFAILED) or
      (msys.apn.apn_status_classifier(tonumber(status))==msys.delivery.DELIVERY_TEMPFAILED) then
    -- reset context variable for DLV_Response_Status
    msg:context_delete(msys.core.ECMESS_CTX_MESS, "DLV_Response_Status")
    msg:inject(msg:mailfrom(), "defaultNumber@deliverSMPP")
    return msys.delivery.DELIVERY_DONE
  else 
    print(status, " unknown disposition!\n")
  end
end

msys.registerModule("convert", mod);
```

<a name="idp15151936"></a> 
## See Also

[Momentum for Mobile Push Notifications](/momentum/3/3-push) and [msys.gcm.gcm_classify_error](/momentum/4/lua/ref-msys-gcm-gcm-classify-error)