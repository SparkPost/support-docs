---
lastUpdated: "03/26/2020"
title: "msys.registerControl"
description: "msys register Control Register a command with the control channel subsystem msys register Control prefix closure This function registers a command with the control channel subsystem see ec console A command prefixed with prefix will be dispatched to closure Because this function registers a control it is not associated with..."
---

<a name="lua.ref.msys.registerControl"></a> 
## Name

msys.registerControl — Register a command with the control channel subsystem

<a name="idp16239584"></a> 
## Synopsis

`msys.registerControl(prefix, closure);`

```
prefix: string
closure: string
```
<a name="idp16242576"></a> 
## Description

This function registers a command with the control channel subsystem (see [ec_console](/momentum/4/executable/ec-console)). A command prefixed with `prefix` will be dispatched to `closure`. Because this function registers a control. it is not associated with a particular phase or callout.

Enable this function with the statement `require('msys.core');`.

Find below an example of a command that forces email messages into the delayed queue.

<a name="lua.ref.msys.registerControl.example"></a> 


```
require("msys.core");

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

msys.registerControl("delay_domain", delay_domain);
```

### Warning

Be sure to check the number of parameters passed to the registered command. Referencing a non-existent element of the cc.argv array causes a segmentation fault.

This code creates the ec_console command: **delay_domain "*`domain`*"**             . Be sure to use quotation marks around the domain that you wish to delay. Registered control functions can return string responses back to ec_console by using Lua's print() function as shown in [“registerControl example”](/momentum/4/lua/ref-msys-register-control#lua.ref.msys.registerControl.example).

Because this function is in the `msys` namespace, an explicit `require` is not necessary.

<a name="lua.ref.msys.registerControl.control_construct"></a> 

**Command Construct Userdata**

The function that performs the registered action, in [“registerControl example”](/momentum/4/lua/ref-msys-register-control#lua.ref.msys.registerControl.example), delay_domain, accepts as a parameter command_construct userdata. `cc.argc` returns the number of arguments supplied by the console command, with the first argument being the command name, so this example will have two arguments. `cc.argv[0]` is the command name and `cc.argv[1]` is the name of the domain that you wish to add to the delayed queue. For more sophisticated argument parsing use `require("msys.getopt");`. For more information examine the `getopt.lua` file found in the `/opt/msys/ecelerity/libexec/scriptlets/msys` directory.

<a name="idp16260144"></a> 
## See Also

[msys.core.dns_get_domain](/momentum/4/lua/ref-msys-core-dns-get-domain) and [command_construct](/momentum/3/3-api/structs-command-construct)