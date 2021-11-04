---
lastUpdated: "03/26/2020"
title: "Creating Custom Console Commands"
description: "In addition to the built in console commands you can create your own commands using the Lua function msys register Control If for example you have domains that are heavily throttled and discard messages that are over the limit you can create a console command to push emails for these..."
---

In addition to the built-in console commands, you can create your own commands using the Lua function [msys.registerControl](/momentum/4/lua/ref-msys-register-control). If, for example, you have domains that are heavily throttled and discard messages that are over the limit, you can create a console command to push emails for these domains into the delayed queue:

<a name="operations.console.lua.registerControl"></a> 


```
require("msys.core");

local function delay_domain(cc)
  local domain = cc.argv[1];
  local dr = msys.core.dns_get_domain(domain);

  if dr ~= nil then
    print ("Domain delayed as requested");
    msys.core.mail_queue_delay_domain(dr, "451 4.4.1 [internal] manually delayed domain");
  end
end

msys.registerControl("delay_domain", delay_domain);
```

This code creates the ec_console command: **delay_domain *`domain`***           .