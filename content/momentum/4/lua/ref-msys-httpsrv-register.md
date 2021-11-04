---
lastUpdated: "03/26/2020"
title: "msys.httpsrv.register"
description: "msys httpsrv register Register a Lua function as an HTTP endpoint msys httpsrv register method endpoint function name Use this function to register a Lua function as an HTTP endpoint You can register the same endpoint multiple times with different methods A Lua function registered in this way has access..."
---

<a name="lua.ref.msys.httpsrv.register"></a> 
## Name

msys.httpsrv.register — Register a Lua function as an HTTP endpoint

<a name="idp16109328"></a> 
## Synopsis

`require("msys.httpsrv");`

`msys.httpsrv.register(method, endpoint, function_name);`

```
method: string
endpoint: string
function_name: string
```
<a name="idp16113104"></a> 
## Description

Use this function to register a Lua function as an HTTP endpoint. You can register the same endpoint multiple times with different methods:

```
msys.httpsrv.register(“GET”, “/somepath”, my_endpoint)
msys.httpsrv.register(“POST”, “/somepath”, my_endpoint)
```

A Lua function registered in this way has access to the HTTP session object. For a description of the session object, see [ec_httpsrv_session](/momentum/3/3-api/structs-ec-httpsrv-session).

The `function_name` Lua function is called when a HTTP request is made matching the `method` HTTP method and `endpoint` base URI path.

Method can be nil, meaning “all methods”. Although, this setting is unlikely in practice.

Note that the trailing slash '/' character is optional on endpoint handlers.

<a name="lua.ref.msys.httpsrv.register.example"></a> 


```
require("msys.extended.httpsrv")
require("msys.core")

local mod = {}

-- HTTP endpoint
function mysimple_handler(session)
  local url_details = session:request_url_get()
  local response = url_details.url .. " says: Hello world!"
  session:response_status_set_std(200, response, "text/plain")
end

--Console command
local function delay_domain(cc)
  -- Check the number of parameters
  if cc.argc < 2 then
   print("You must pass a parameter to this command");
   return;
  end
  local domain = cc.argv[1];
  local dr = msys.core.dns_get_domain(domain);
  if dr ~= nil then
    msys.core.mail_queue_delay_domain(dr, "451 4.4.1 [internal] manually delayed domain]");
    print(domain, "added to the delayed queue.");
  end
end

function mod:rsrc_setup()
  msys.httpsrv.register("POST", "/somepath", mysimple_handler)
  msys.registerControl("some_command", delay_domain)
  return true
end

msys.registerModule("example", mod)
```

### Note

The `rsrc_setup` hook provides a safer way to register resources against new [config](/momentum/4/console-commands/config) actions. Note that this example shows how to register an ec_console command as well as a custom HTTP endpoint. In Momentum 4, use the code shown here rather than the code shown in the [msys.registerControl](/momentum/4/lua/ref-msys-register-control) example.

<a name="idp16127328"></a> 
## See Also

[session:request_url_get](/momentum/4/lua/ref-session-request-url-get) and [session:response_status_set_std](/momentum/4/lua/ref-session-response-status-set-std)