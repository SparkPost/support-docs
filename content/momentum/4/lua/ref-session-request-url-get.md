---
lastUpdated: "03/26/2020"
title: "session:request_url_get"
description: "session request url get Get the request URL session request url get Use an ec httpsrv session object and this method to return an ec url details object For example code see Example 70 35 session request url get Example and Example 70 30 msys httpsrv register Example You can..."
---

<a name="lua.ref.session_request_url_get"></a> 
## Name

session:request_url_get — Get the request URL

<a name="idp16421760"></a> 
## Synopsis

`session:request_url_get();`

<a name="idp16423520"></a> 
## Description

Use an [ec_httpsrv_session](/momentum/3/3-api/structs-ec-httpsrv-session) object and this method to return an [ec_url_details](/momentum/3/3-api/structs-ec-url-details) object. For example code, see [“session:request_url_get Example”](/momentum/4/lua/ref-session-request-url-get#lua.ref.session_request_url_get.example) and [“msys.httpsrv.register Example”](/momentum/4/lua/ref-msys-httpsrv-register#lua.ref.msys.httpsrv.register.example).

You can access the following fields of the ec_url_details userdata object:

*   `url_details.url` – Request URL

*   `url_details.attrs` – Request URL attributes

<a name="lua.ref.session_request_url_get.example"></a> 


```
require("msys.extended.httpsrv")

local function params_handler(session)
  local url_details = session:request_url_get()
  local params = {}

  if url_details.attrs ~= nil then
    local iter = msys.core.dict_iter2(url_details.attrs)
    repeat
      local rc, k, v = msys.core.dict_next(url_details.attrs, iter)
      if rc != 0 then
        params[k] = v
      end
    until rc == 0
    msys.core.dict_iter2_free(url_details.attrs, iter)
  end

  if params.reply == nil or params.reply ~= "true" then
    -- If the reply parameter was missing, return the default HTTP response.
    print("reply not true in " .. url_details.url)
    return msys.httpsrv.DONE
  end

  -- Return all the parameters in a string.
  local sorted_params = {}
  local reply = ""

  for k, v in pairs(params) do
    table.insert(sorted_params, k)
  end
  table.sort(sorted_params)
  for i, k in ipairs(sorted_params) do
    reply = reply .. k .. "=" .. params[k] .. " "
  end
  session:response_status_set_std(200, reply, "text/plain")
end
```

Enable this function with the statement `require("msys.extended.httpsrv");`.

<a name="idp16435568"></a> 
## See Also

[msys.httpsrv.register](/momentum/4/lua/ref-msys-httpsrv-register) and [session:response_status_set_std](/momentum/4/lua/ref-session-response-status-set-std)