---
title: "30.3. Examples"
description: "Example 30 1 MM 7 Server Received Message Validation Hook Lua Example..."
---

<a name="MM7_Server_Received_Message_Validation_Hook.lua"></a> 

**Example 30.1. MM7 Server Received Message Validation Hook: Lua Example**

```
require('msys.core');
require('msys.extended.message');
require('msys.av');

local mod = {};
function mod:validate_data_spool_each_rcpt(msg, ac, vctx)
  -- for MM7 Messages only
  if msg.recv_method == msys.core.P_MM7 then
    local rc, result, eng = msys.av.scan('eicar', msg, vctx);
    print("av:", rc, result, eng);
  end
  return msys.core.VALIDATE_CONT;
end
msys.registerModule('validation', mod);
```