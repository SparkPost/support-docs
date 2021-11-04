---
lastUpdated: "03/26/2020"
title: "Examples"
description: "Example 16 1 SMPP Received Message Validation Hook Lua Example..."
---

<a name="SMPP_Received_Message_Validation_Hook.lua"></a> 


```
require('msys.core');
require('msys.extended.message');
require('msys.av');

local mod = {};
function mod:validate_data_spool_each_rcpt(msg, ac, vctx)
  -- for SMPP Messages only
  if msg.recv_method == msys.core.P_SMPP then
    local rc, result, eng = msys.av.scan('eicar', msg, vctx);
    print("av:", rc, result, eng);
  end
  return msys.core.VALIDATE_CONT;
end
msys.registerModule('validation', mod);
```