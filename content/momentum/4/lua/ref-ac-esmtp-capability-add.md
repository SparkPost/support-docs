---
lastUpdated: "03/26/2020"
title: "ac:esmtp_capability_add"
description: "ac esmtp capability add Add a capability to the EHLO response ac esmtp capability add name This function is equivalent to the Sieve advertize esmtp capability action It adds a capability string to the EHLO response It is most useful in the connect phase and raises an error if the..."
---

<a name="lua.ref.ac_esmtp_capability_add"></a> 
## Name

ac:esmtp_capability_add — Add a capability to the EHLO response

<a name="idp14824832"></a> 
## Synopsis

`require('msys.extended.ac')`

`ac:esmtp_capability_add(name);`

`name: string`<a name="idp14828224"></a> 
## Description

This function is equivalent to the Sieve `advertize_esmtp_capability` action. It adds a capability string to the EHLO response. It is most useful in the connect phase and raises an error if the session is not attached to an SMTP listener. Find an example below:

<a name="lua.ref.ac_esmtp_capability_add.example"></a> 


```
require("msys.core");
require("msys.extended.message");
require("msys.extended.ac");

local mod = {};
function mod:validate_connect(ac, vctx)
  ac:esmtp_capability_add("8BITMIME");
  return msys.core.VALIDATE_CONT;
end

msys.registerModule("validate_connect", mod);
```

The `ac` variable is an accept construct userdata data type. For a description of the C struct see [accept_construct](/momentum/3/3-api/structs-accept-construct).

<a name="idp14879936"></a> 
## See Also

[ac:esmtp_capability_remove](/momentum/4/lua/ref-ac-esmtp-capability-remove)