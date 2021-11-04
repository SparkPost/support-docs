---
lastUpdated: "03/26/2020"
title: "Examples"
description: "Example 23 1 MM 7 Log Conversion Hook Lua Example Example 23 2 MM 7 Log Conversion Hook C Example..."
---

<a name="MM7_Log_Conversion_Hook.lua"></a> 


```
require("msys.core");

local mod = {};

function mod:mms_log_conversion(msg)
  if msg.recv_method == msys.core.P_MM7 then
    print("sample_mm7_log_conversion_hook log conversion: convert MM7 message to ec_message");
  else
    print("sample_mm7_log_conversion_hook log conversion: message is originated from protocol: ",
        msys.core.protocol_string(msg.recv_method));
  end
end

msys.registerModule("mm7_hooks_test", mod);
```

<a name="MM7_Log_Conversion_Hook.c"></a> 


```
#include "module.h"
#include "modules/mobility/mms/hooks/mms_logging.h"
#include "modules/mobility/mms/mm7.h"

static void sample_mm7_log_conversion_hook(void *closure, ec_message *m)
{
  if (m->recv_method == P_MM7)
    printf("sample_mm7_log_conversion_hook log conversion: convert MM7 message to 
      ec_message\n");
  else
    printf("sample_mm7_log_conversion_hook log conversion: message is originated 
      from protocol: %s\n",
         protocol_string(m->recv_method));
}

static int init (generic_module_infrastructure *gself) {
  /* register the hook during module initialization */
  register_mms_log_conversion_hook_first (sample_mm7_log_conversion_hook, gself);
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