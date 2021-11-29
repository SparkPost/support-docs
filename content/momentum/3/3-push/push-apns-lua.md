---
lastUpdated: "03/26/2020"
title: "APNs and Lua"
description: "Support for AP Ns includes new Lua functionality and Lua callouts This chapter covers those topics AP Ns related changes to the C API and to C hook points are documented in Hooks in the apn Scope For a description of how to use Lua scripts see The scriptlet Module..."
---


Support for APNs includes new Lua functionality and Lua callouts. This chapter covers those topics.

### Note

APNs-related changes to the C API and to C hook points are documented in [Hooks in the apn Scope](/momentum/3/3-api/hooks-apn).

For a description of how to use Lua scripts see [The scriptlet Module](/momentum/3/3-reference/3-reference-modules-scriptlet) and [Implementing Policy Using Scriptlets](/momentum/3/3-reference/3-reference-implementing-policy-scriptlets).

In addition to the callouts documented here, you can also use the [“generic_delivery_msg_dispose”](/momentum/3/3-push/push-generic-delivery-lua#push.generic_delivery_lua.msg_dispose) callout.

## <a name="apns.hooks.lua.callouts"></a> Lua Callouts

<a name="idp169152"></a> 

Basic Lua callouts are defined at [Implementing Policy Using Scriptlets](/momentum/3/3-reference/3-reference-implementing-policy-scriptlets). When scripting Apple push notifications you can also use the hook points documented in this section.

### <a name="idp171792"></a> apn_request_eval

The `apn_request_eval(req, msg)` hook will be called before sending to APNs. Use this hook to inspect or modify the request before delivery. The request has been built from the MCMT by extracting the headers and JSON message payload from the MIME part and encoding them into a JSON string. The callout parameters are userdata of the types, `apn_request` and `ec_message`.

An example that shows the elements of an `apn_request` follows.

<a name="apns.hooks.lua.callouts.apn_request_eval"></a> 


```
require("msys.apn")
require("json")

local mod = {}

function mod:apn_request_eval(req, msg)
  print("REQ command: ", req.command)
  print("REQ id: ", req.id)
  print("REQ expiry: ", req.expiry)
  print("REQ token: ", req.token)
  print("REQ payload: ", tostring(req.json))
  print("Alert was: ", req.json.aps.alert)
  req.json.aps.alert = "Message Changed!"
end

msys.registerModule("apn_hooks", mod);
```

In order to reference an `apn_request` you must include the line, `require("msys.apn")`.

### <a name="idp452496"></a> apn_response_eval

The `apn_response_eval(resp)` hook will be called when there is a response from APNs. It can be used to inspect this response. The callout parameter is userdata of the type, `apn_error_response`.

An example that shows the elements of an `apn_response` follows.

<a name="apns.hooks.lua.callouts.apn_response_eval"></a> 


```
require("msys.apn")

local mod = {}

function mod:apn_response_eval(resp)
  print("RESP command: ", resp.command)
  print("RESP status: ", resp.status)
  print("RESP id: ", resp.id)
  resp.status = msys.apn.APNS_PROCESSING_ERROR
  return 0
end

msys.registerModule("apn_hooks", mod);
```

Possible values for the `status` field are:

*   `msys.apn.APNS_NO_ERROR`

*   `msys.apn.APNS_PROCESSING_ERROR`

*   `msys.apn.APNS_MISSING_DEVICE_TOKEN`

*   `msys.apn.APNS_MISSING_TOPIC`

*   `msys.apn.APNS_MISSING_PAYLOAD`

*   `msys.apn.APNS_INVALID_TOKEN_SIZE`

*   `msys.apn.APNS_INVALID_TOPIC_SIZE`

*   `msys.apn.APNS_INVALID_PAYLOAD_SIZE`

*   `msys.apn.APNS_INVALID_TOKEN`

*   `msys.apn.APNS_SHUTDOWN`

In order to reference an `apn_request` you must include the line, `require("msys.apn")`.