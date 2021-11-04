---
lastUpdated: "03/26/2020"
title: "msg:get_delivery_method"
description: "msg get delivery method Return the delivery method for a message msg get delivery method Return the delivery method for a message for example gcm Example 15 43 msg get delivery method example Because this function is in the msys core namespace an explicit require msys core is not necessary..."
---

<a name="lua.ref.msg_get_delivery_method"></a> 
## Name

msg:get_delivery_method — Return the delivery method for a message

<a name="idp25458160"></a> 
## Synopsis

`msg:get_delivery_method();`

<a name="idp25460112"></a> 
## Description

Return the [delivery method](/momentum/3/3-reference/3-reference-conf-ref-delivery-method) for a message, for example "gcm".

<a name="lua.ref.msg_get_delivery_method.example"></a> 


```
require("msys.delivery");
require ("msys.httpclnt");

local mod = {};
function mod:http_request_eval(sess)
  -- get the message
  local msg = msys.delivery.ob_get_current_message(sess.connh)
  -- check protocol
  if( msg:get_delivery_method() == "gcm") then
    -- do something with a GCM message
  else 
    -- not our protocol get out
    return msys.delivery.DELIVERY_CONTINUE
  end
end

msys.registerModule("http_delivery", mod);
```

Because this function is in the `msys.core` namespace, an explicit `require('msys.core')` is not necessary.

<a name="idp25466016"></a> 
## See Also

[Momentum for Mobile Push Notifications](/momentum/3/3-push)