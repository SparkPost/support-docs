---
lastUpdated: "03/26/2020"
title: "msys.gcm.gcm_classify_error"
description: "msys gcm gcm classify error Determine the delivery status of the DLV Response Status variable msys gcm gcm classify error status Configuration Change This function is available as of Momentum version 3 5 5 This function returns the delivery status of the DLV Response Status variable It classifies the DLV..."
---

<a name="lua.ref.msys.gcm.gcm_classify_error"></a> 
## Name

msys.gcm.gcm_classify_error — Determine the delivery status of the "DLV_Response_Status" variable

<a name="idp26723040"></a> 
## Synopsis

`msys.gcm.gcm_classify_error(status);`

`status: numeric`<a name="idp26725728"></a> 
## Description

**Configuration Change. ** This function is available as of Momentum version 3.5.5.

This function returns the delivery status of the "DLV_Response_Status" variable. It classifies the "DLV_Response_Status" variable as one of the following:

*   `msys.delivery.DELIVERY_SUCCESS`

*   `msys.delivery.DELIVERY_TEMPFAILED`

*   `msys.delivery.DELIVERY_PERMFAILED`

<a name="lua.ref.msys.gcm.gcm_classify_error.example"></a> 


```
require("strict")
require("msys.delivery")
require("msys.gcm")
require("msys.extended.message")

local mod = {}

function mod:generic_delivery_msg_dispose(msg)
  local status = msg:context_get(msys.core.ECMESS_CTX_MESS, "DLV_Response_Status")
  if status == "" then
    return msys.delivery.DELIVERY_CONTINUE
  -- "DLV_Response_Status" varies depending upon protocol
  -- but a message is treated as ok or delivered if and
  -- only if the DLV_Response_Status does not exist.
  elseif (msys.gcm.gcm_classify_error(tonumber(status))==msys.delivery.DELIVERY_PERMFAILED) or
      (msys.gcm.gcm_classify_error(tonumber(status))==msys.delivery.DELIVERY_TEMPFAILED) then
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

### Note

When a message fails, you can use the generic_delivery_msg_dispose callout and reroute the message to another channel. Use the [msg:get_delivery_method](/momentum/3/3-reference/3-reference-lua-ref-msg-get-delivery-method) function to determine the protocol of the message.

Enable this function with the statement `require('msys.gcm');`.

<a name="idp26738432"></a> 
## See Also

[Momentum for Mobile Push Notifications](/momentum/3/3-push) and [msys.apn.apn_status_classifier](/momentum/3/3-reference/3-reference-lua-ref-msys-apn-apn-status-classifier)