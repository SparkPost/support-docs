---
lastUpdated: "03/26/2020"
title: "Callouts and Push Notifications"
description: "In addition to the AP Ns and GCM callouts there are callouts directly related to push notifications These callouts are all applicable to managing Google Push notifications and MM 7 message types The generic delivery msg dispose callout can also be used with AP Ns Documentation of the C API..."
---


In addition to the APNs and GCM callouts, there are callouts directly related to push notifications. These callouts are all applicable to managing Google Push notifications (and MM7 message types). The `generic_delivery_msg_dispose` callout can also be used with APNs.

### Note

Documentation of the C API and C hook points relevant to push notifications are found in [Hooks in the generic_delivery and httpclnt Scope](/momentum/3/3-api/hooks-generic-delivery).

## <a name="push.generic_delivery_lua.msg_dispose"></a> generic_delivery_msg_dispose

This callout occurs immediately prior to disposing of an ec_message. If you wished to convert a failed push notification to an SMPP message use this callout in the following way:

<a name="push.generic_delivery_lua.msg_dispose.example"></a> 


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

**Message Conversion**

You can use the `generic_delivery_msg_dispose` callout for Google or Apple push notifications and for MM7 message types. Note that the value of "DLV_Response_Status" depends upon the protocol used. Inspect the context variable `DLV_Response_Status` using the [msg:context_get](/momentum/3/3-reference/3-reference-lua-ref-msg-context-get) function. In the context of a GCM notification, this variable gives you the value of the GCM error status. If it is an empty string, then no error occurred. You can use [msys.gcm.gcm_classify_error](/momentum/3/3-reference/3-reference-lua-ref-msys-gcm-gcm-classify-error) to determine the classification of "DLV_Response_Status". This function translates the protocol-specific error code to either a permanent or a temporary failure. For a list of Google error codes see [*GCM Status Codes*](/momentum/3/3-push/push-gcm-error) . See [*Apple Status Codes*](/momentum/3/3-push/push-apple-error) for APNs error codes.

If you need to determine the type of notification before taking action, call the [msg:get_delivery_method](/momentum/3/3-reference/3-reference-lua-ref-msg-get-delivery-method) function. This function returns the value of the [delivery_method](/momentum/3/3-reference/3-reference-conf-ref-delivery-method) option. For more information about all Lua functions see [Lua Functions](/momentum/3/3-reference/3-reference-lua-summary-table).

The code shown in [“generic_delivery_msg_dispose example”](/momentum/3/3-push/push-generic-delivery-lua#push.generic_delivery_lua.msg_dispose.example) converts a push notification to an SMPP message. For more information about sending SMPP messages using Momentum see [Mobile Momentum Reference Manual](/momentum/mobile/mobile-reference). You can also use this hook point to convert to other message channels.

[“generic_delivery_msg_dispose example”](/momentum/3/3-push/push-generic-delivery-lua#push.generic_delivery_lua.msg_dispose.example) uses the constants `msys.delivery.DELIVERY_CONTINUE`, `msys.delivery.DELIVERY_PERMFAILED` and `msys.delivery.DELIVERY_TEMPFAILED`. The other delivery constants are:

*   `msys.delivery.DELIVERY_SUCCESS`

*   `msys.delivery.DELIVERY_DONE`

The `DLV_Response_Status` variable is referenced in [“generic_delivery_msg_dispose example”](/momentum/3/3-push/push-generic-delivery-lua#push.generic_delivery_lua.msg_dispose.example). Note that *an empty `DLV_Response_Status` variable indicates a successful message delivery.*                                                                               All the context variables related to push notifications are as follows:

*   `DLV_Source_ID` – The ID, this is protocol-specific.

*   `DLV_Dest_Addr` – The "to" address.

*   `DLV_Dest_ID` – This variable is protocol-specific. For GCM it is the registration ID and for APNs it is the device token.

*   `DLV_Transaction_ID` – This is protocol-specific and applies only to the APNs identifier.

*   `DLV_Response_Status` – The response status code.

*   `DLV_Response_Status_Detail` – The response description.

*   `DLV_Msg_Length` – The total number of bytes in the message.

*   `DLV_Remote_IP_Address` – The IP address of connected remote entity.