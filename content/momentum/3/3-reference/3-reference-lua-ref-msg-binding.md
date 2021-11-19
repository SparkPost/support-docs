---
lastUpdated: "03/26/2020"
title: "msg:binding"
description: "msg binding Set or get the message binding msg binding Set the binding to the specified parameter When you set a binding the binding name is also the return value of this function This function returns nil if the binding parameter is invalid The binding you set must exist in..."
---

<a name="lua.ref.msg_binding"></a> 
## Name

msg:binding — Set or get the message binding

<a name="idp25329024"></a> 
## Synopsis

`msg:binding(...);`

`...: mixed, optional`<a name="idp25331696"></a> 
## Description

Set the binding to the specified parameter. When you set a binding, the binding name is also the return value of this function. This function returns `nil` if the binding parameter is invalid. The binding you set must exist in your `ecelerity.conf` file. When no parameter is passed, this function returns the binding name or `nil` if the message is not associated with a binding. *This will only take a single string binding name* .

You can use this function to set the binding to the `default` binding. For more information see [the section called “The "default" Binding”](/momentum/3/3-reference/3-reference-conf-ref-binding#conf.ref.binding.default).

### Warning

Only use this function in the `validate_set_binding` callout. Its behavior in other callouts is undefined.

<a name="lua.ref.msg_binding.example"></a> 


```
require('msys.core');
require('msys.extended.message');

local mod = {};

function mod:validate_set_binding(msg)
  local localpart_str = msys.core.string_new();
  local domain_str = msys.core.string_new();
  msg:get_envelope2(msys.core.EC_MSG_ENV_FROM, localpart_str, domain_str);
  local domain = tostring(domain_str);
  localpart_str = nil;
  if msys.pcre.match(domain, "mydomain.com") then
    msg:binding("mydomain");
  end
  return msys.core.VALIDATE_CONT;
end

msys.registerModule("validate_set_binding", mod);
```

Enable this function with the statement `require('msys.extended.message');`.

<a name="idp25341584"></a> 
## See Also

[msg:binding_group](/momentum/3/3-reference/3-reference-lua-ref-msg-binding-group)