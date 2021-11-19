---
lastUpdated: "03/26/2020"
title: "GCM and Lua"
description: "Support for GCM includes new Lua functionality and Lua callouts This chapter covers these topics GCM related changes to the C API and to C hook points are documented in Hooks in the gcm Scope In addition to the callouts documented here you can also use the callouts documented at..."
---


Support for GCM includes new Lua functionality and Lua callouts. This chapter covers these topics.

### Note

GCM-related changes to the C API and to C hook points are documented in [Hooks in the gcm Scope](/momentum/3/3-api/hooks-gcm).

In addition to the callouts documented here, you can also use the callouts documented at [*Callouts and Push Notifications*](/momentum/3/3-push/push-generic-delivery-lua) .

For a description of how to use Lua scripts see [The scriptlet Module](/momentum/3/3-reference/3-reference-modules-scriptlet) and [Implementing Policy Using Scriptlets](/momentum/3/3-reference/3-reference-implementing-policy-scriptlets).

## <a name="gcm.hooks.lua.callouts"></a> Lua Callouts

<a name="idp637408"></a> 

The basic Lua callouts are defined at [Implementing Policy Using Scriptlets](/momentum/3/3-reference/3-reference-implementing-policy-scriptlets). When scripting GCM push notifications you can also use the hook points described here.

### <a name="idp610560"></a> gcm_request_eval

The `gcm_request_eval(req, msg)` hook will be called immediately before sending to GCM. Use this hook to inspect or modify the request before delivery to Google. The request has been built from the MCMT by extracting the headers and JSON message payload from the MIME part and encoding them into a JSON string suitable for injection. At this hook point, feedback from Google GCM Servers can be handled, including maintenance related to the Registration ID. Feedback is provided for messages that were rejected as well as messages that were accepted. The callout parameters are userdata of the types, `gcm_request` and `ec_message`.

An example that shows the elements of a `gcm_request` and changes the Registration ID follows.

<a name="gcm.hooks.lua.callouts.gcm_request_eval"></a> 


```
require("msys.gcm")
require("json")

local mod = {}

function mod:gcm_request_eval(req, msg)
  print("registration id =", req.json.registration_ids[1])
  print("package = ", req.json.restricted_package_name)
  print("time to live = ", req.json.time_to_live)
  print("data = ", tostring(req.json.data))
  print("message = ", req.json.data.message)

  -- assign registration id
  req.json.registration_ids[1] = "APA91bHAUcDAJP-cQJuwQaHYGK6hGU4G4NTUPJT4zI6f2 »
  o4sl1S0-zOlPlqJUFTSvHBmudvhMLrkGR1sQMc5qYBVjcNIpzyXoC2CIEj_1FeFKmNBDYX2LBp_zG-rj2hVA2 »
  -t7Fm40tQY2DzyjAI8maYIogujSPtq-jSUG0WybCQ0mT1eGOZsgy0"
  -- modify message
  req.json.data.message = "We are changing the message to this!"
end

msys.registerModule("gcm_hooks", mod);
```

In order to reference a `gcm_request` you must include the line, `require("msys.gcm")`. For more information about the Lua functions used in [“gcm_request_eval example”](/momentum/3/3-push/push-gcm-lua#gcm.hooks.lua.callouts.gcm_request_eval) see [Lua Functions List](/momentum/3/3-reference/3-reference-lua-summary-table).

### <a name="idp517760"></a> gcm_response_eval

The `gcm_response_eval(resp, msg)` hook will be called when there is a response from GCM. It can be used to inspect this response before delivery to GCM. The request has been built from the MCMT by extracting the headers and JSON message payload from the MIME part and encoding into a JSON string suitable for injection.

### Note

This hook is only called if the HTTP status code is `200`. You should not modify the gcm_message_response at this hook point.

<a name="gcm.hooks.lua.callouts.gcm_response_eval"></a> 


```
require("msys.core")
require("msys.gcm")
require("json")
local mod = {}
function mod:gcm_response_eval(message_response, msg)
  -- get original message id
  local reg_id = msg:context_get(msys.core.ECMESS_CTX_MESS, "DLV_Dest_ID")
  if(reg_id != "") then
    print("Registration ID = ", reg_id)
  end
  -- check response for registration id update info
  if message_response.canonical_ids > 0 then
    -- Add test entry to log for receipt of canonical response
    print ("canonical_ids = ", message_response.canonical_ids)
    if message_response.results.registration_id then
      -- The customer would want to use this updated Registration Feedback and would
      -- insert appropriate logic here.
      print("GCM: Found canonical registration id feedback:", »
        message_response.results.registration_id)
    else
      print("GCM: Missing canonical registration id value")
    end
  else
    print("GCM: No canonical registration id feedback indicated")
  end
end
msys.registerModule("gcm_hooks", mod);
```

In order to reference a `gcm_request` you must include the line, `require("msys.gcm")`. For more information about the Lua functions used in [“gcm_response_eval example”](/momentum/3/3-push/push-gcm-lua#gcm.hooks.lua.callouts.gcm_response_eval) see [Lua Functions List](/momentum/3/3-reference/3-reference-lua-summary-table).