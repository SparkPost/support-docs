---
lastUpdated: "03/26/2020"
title: "http_request_eval"
description: "This callout occurs prior to sending a generic HTTP request An example of updating the HTTP request follows You can use code such as this to set authorization keys on a per message basis Example 9 2 http request eval example You must use require msys httpclnt to enable this..."
---

This callout occurs prior to sending a generic HTTP request. An example of updating the HTTP request follows. You can use code such as this to set authorization keys on a per-message basis.

<a name="push.http_request_eval.example"></a> 


```
require("msys.core")
require("msys.delivery")
require("msys.httpclnt")
require("msys.gcm")
require("json")

function mod:http_request_eval(sess)
  -- get message associated with this request
  local msg = msys.delivery.ob_get_current_message(sess.connh)
  if msg == nil then
    print ("http_request_eval_hook: Associated message missing")
    return msys.delivery.DELIVERY_FAIL
  end

  -- print http request built by gcm
  print ("http request = ", sess.request.data)

  local reg_id = "APA91bHAUcDAJP-cQJuwQaHYGK6hGU4G4NTUPJT4zI6f2o4sl1S0-zOlPlq »
    JUFTSvHBmudvhMLrkGR1sQMc5qYBVjcNIpzyXoC2CIEj_1FeFKmNBDYX2LBp_zG-rj2hVA2-t7Fm40tQY2 »
    DzyjAI8maYIogujSPtq-jSUG0WybCQ0mT1eGOZsgy0"
  local request = "{ \"registration_ids\": [ \"" .. reg_id .. "\" ], \"dry_run\": true, »
    \"data\": { \"message\": \"Push message to send over GCM\" } }"
  local auth_key = "AIzaSyA09R1jflwVV4T79OIuLtTxQyXKFlOVQfs"

  -- print new json request to paniclog.ec for ref
  print ("new json request = ", request)

  sess:request_add_header("Accept", "text/plain", 1)
  sess:request_add_header("Accept", "application/json", 0)
  sess:request_add_header("Connection", "Keep-Alive", 1)
  sess:request_add_header("Authorization", "key=" .. auth_key, 1)
  sess:request_add_header("Content-Length", #request, 1)
  sess:request_set_body(request)

  -- have http client build (update) the request
  sess:request_finalize(1);
  -- print new request to paniclog.ec for ref
  print ("new http request = ", sess.request.data)

  -- update context variables
  msg:context_set(msys.core.ECMESS_CTX_MESS, "DLV_Dest_ID", reg_id)
  msg:context_set(msys.core.ECMESS_CTX_MESS, "DLV_Msg_Length", #sess.request.data)
  print ("new HTTP notification length = ", #sess.request.data)
  return msys.delivery.DELIVERY_CONTINUE;
end

msys.registerModule("gcm_hooks", mod);
```

You must use require `("msys.httpclnt")` to enable this hook point and to access the `sess` userdata. Like `http_response_eval`, this callout accepts as a parameter userdata of the session context type and this allows manipulation of the HTTP request using the following functions:

*   [sess:request_finalize](/momentum/3/3-reference/3-reference-lua-ref-sess-request-finalize)

*   [sess:request_set_body](/momentum/3/3-reference/3-reference-lua-ref-sess-request-set-body)

*   [sess:request_add_header](/momentum/3/3-reference/3-reference-lua-ref-sess-request-add-header)

After changing HTTP session data, be sure to use the `sess:request_finalize` function.

The [ob_get_current_message](/momentum/3/3-reference/3-reference-lua-ref-msys-delivery-ob-get-current-message) function uses this parameter to return a message. See also [Lua Functions](/momentum/3/3-reference/3-reference-lua-summary-table) for more information about the functions used in [“http_response_eval example”](/momentum/3/3-push/push-http-response-eval#push.http_response_eval.example).