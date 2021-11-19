---
lastUpdated: "03/26/2020"
title: "msys.delivery.ob_get_current_message"
description: "msys delivery ob get current message Get the current message from the session context msys delivery ob get current message sess connh Get the current message from the session context Example 15 58 msys delivery ob get current message example Enable this function with the statement require msys delivery Momentum..."
---

<a name="lua.ref.msys.delivery.ob_get_current_message"></a> 
## Name

msys.delivery.ob_get_current_message — Get the current message from the session context

<a name="idp26565520"></a> 
## Synopsis

`msys.delivery.ob_get_current_message(sess.connh);`

`sess.connh: userdata, session context type`<a name="idp26567872"></a> 
## Description

Get the current message from the session context.

<a name="lua.ref.msys.delivery.ob_get_current_message.example"></a> 


```
require("msys.delivery");

local mod = {};
function mod:generic_delivery_http_response_eval(sess)
  -- get the message
  local msg = msys.delivery.ob_get_current_message(sess.connh)
  -- check protocol
  if(msg:get_delivery_method() == "gcm") then
    -- do something with a GCM message
    ...
  else 
    -- not our protocol get out
    return msys.delivery.DELIVERY_CONTINUE
  end  
end

msys.registerModule("http_delivery", mod);
```

Enable this function with the statement `require('msys.delivery');`.

<a name="idp26572464"></a> 
## See Also

[Momentum for Mobile Push Notifications](/momentum/3/3-push)