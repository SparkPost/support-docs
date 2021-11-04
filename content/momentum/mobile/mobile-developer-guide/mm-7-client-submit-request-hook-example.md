---
lastUpdated: "03/26/2020"
title: "Examples"
description: "The following Lua example enables Delivery Report and Read Reply and sets values for Reply Charging variables Example 18 1 MM 7 MT Submit Request Hook Lua Example The following C hook does the same as the Lua implementation above Example 18 2 MM 7 MT Submit Request Hook C..."
---

The following Lua example enables <DeliveryReport> and <ReadReply> and sets values for <ReplyCharging> variables.

<a name="MM7_MT_Submit_Request_Hook.lua"></a> 


```
local mod = {};
require("msys.core");

function mod:mm7_pre_submit(msg)
  msys.core.ec_message_context_set(msg, msys.core.ECMESS_CTX_MESS, "MM7_Reply_Charging", 1);
  msys.core.ec_message_context_set(msg, msys.core.ECMESS_CTX_MESS, "MM7_Reply_Charging_Size",
    1024);
  msys.core.ec_message_context_set(msg, msys.core.ECMESS_CTX_MESS, "MM7_Reply_Deadline",
    "2011-05-30T09:30:10-06:00");
  msys.core.ec_message_context_set(msg, msys.core.ECMESS_CTX_MESS, "MM7_Delivery_Report", 1);
  msys.core.ec_message_context_set(msg, msys.core.ECMESS_CTX_MESS, "MM7_Read_Reply", 1);
end

msys.registerModule("mm7_pre_submit_hook_test", mod);
```

The following C hook does the same as the Lua implementation above:

<a name="MM7_MT_Submit_Request_Hook.c"></a> 


```
#include "module.h"
#include "modules/mobility/mms/hooks/mm7_message_hooks.h"
#include "modules/mobility/mms/mm7.h"

static void sample_mm7_submit_req_hook (void  *gself, ec_message * m)
{
  ec_message_context_set(m, ECMESS_CTX_MESS, "MM7_Reply_Charging", "1");
  ec_message_context_set(m, ECMESS_CTX_MESS, "MM7_Reply_Charging_Size", "1024");
  ec_message_context_set(m, ECMESS_CTX_MESS, "MM7_Reply_Deadline",
    "2011-05-30T09:30:10-06:00");
  ec_message_context_set(m, ECMESS_CTX_MESS, "MM7_Delivery_Report", "1");
  ec_message_context_set(m, ECMESS_CTX_MESS, "MM7_Read_Reply", "1");
}

static int init (generic_module_infrastructure *gself) {
  /* register the hook during module initialization */
  register_mm7_pre_submit_hook_first (sample_mm7_submit_req_hook, gself);
  return 0;
}

EC_MODULE_EXPORT
generic_module_infrastructure mm7_hook_test = {
  {
    EC_MODULE_INIT(EC_MODULE_TYPE_GENERIC, 0),
    "mm7_hook_test.c",
    "Sample MM7 Hook",
    NULL,
    NULL,
    NULL,
    init,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL
  }
};
```