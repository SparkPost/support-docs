---
lastUpdated: "03/26/2020"
title: "http_response_eval"
description: "Use this callout to process feedback from Google typically feedback related to token management An example follows Example 9 3 http response eval example You must use require msys httpclnt to enable this hook point and to access the sess userdata This callout accepts as a parameter userdata of the..."
---

Use this callout to process feedback from Google, typically feedback related to token management. An example follows.

<a name="push.http_response_eval.example"></a> 


```
require("msys.core")
require("msys.delivery")
require("msys.httpclnt")
require("msys.gcm")
require("json")
local mod = {}
function mod:http_response_eval(sess)
  -- get message associated with this response
  local msg = msys.delivery.ob_get_current_message(sess.connh)
  if msg == nil then
    print ("http_response_eval_hook: Associated message missing")
    return msys.delivery.DELIVERY_FAIL;
  end
  -- check response for registration id update info
  if sess.response.status_code.buffer == "200" then
    -- get json response
    local json_response, code, err = json.decode(sess.response.body)
    if (code ~= nil) then
      error(err)
    end
    if json_response.canonical_ids and json_response.canonical_ids > 0 then
      -- Add test entry to log for receipt of canonical response
      print ("canonical_ids = ", json_response.canonical_ids)
      if json_response.results[1].registration_id then
        -- The customer would want to use this updated Registration Feedback and would
        -- insert appropriate logic here.
        print("GCM: Found canonical registration id feedback:",
          json_response.results[1].registration_id)
      else
        print("GCM: Missing canonical registration id value")
      end
    else
      print("GCM: No canonical registration id feedback indicated")
    end
  end
  return msys.delivery.DELIVERY_CONTINUE;
end

msys.registerModule("gcm_hooks", mod);
```

You must use `require("msys.httpclnt")` to enable this hook point and to access the `sess` userdata. This callout accepts as a parameter userdata of the session context type. The [ob_get_current_message](/momentum/3/3-reference/3-reference-lua-ref-msys-delivery-ob-get-current-message) function uses this parameter to return a message. See also [json.decode](/momentum/3/3-reference/3-reference-lua-ref-json-decode) and [Lua Functions](/momentum/3/3-reference/3-reference-lua-summary-table) for more information about the functions used in [“http_response_eval example”](/momentum/3/3-push/push-http-response-eval#push.http_response_eval.example).