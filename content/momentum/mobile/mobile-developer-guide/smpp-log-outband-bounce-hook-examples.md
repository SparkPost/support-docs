---
lastUpdated: "03/26/2020"
title: "Examples"
description: "Example 4 1 SMPP Log Outband Bounce Hook Lua Example Example 4 2 SMPP Log Outband Bounce Hook C Example..."
---

<a name="SMPP_Log_Outband_Bounce_Hook.lua"></a> 


```
require("msys.core");

local mod = {};

function mod:smpp_log_bounce_outband(smpp_conn, msg, error)
  print("sample_smpp_log_bounce_outband_hook log outband failure due to: ", error);
end

msys.registerModule("smpp_hooks_test", mod);
```

<a name="SMPP_Log_Outband_Bounce_Hook.c"></a> 


```
#include "module.h"
#include "modules/mobility/smpp/hooks/smpp_logging.h"
#include "modules/mobility/smpp/smpp.h"

static void sample_smpp_log_bounce_outband_hook(void *closure, smpp_conn* conn, ec_message *m,
  const char* error)
{
  printf("sample_smpp_log_bounce_outband_hook log outband failure due to: %s\n", error);
}

static int init (generic_module_infrastructure *gself) {
  /* register the hook during module initialization */
  register_smpp_log_bounce_outband_hook_first (sample_smpp_log_bounce_outband_hook, gself);
  return 0;
}

EC_MODULE_EXPORT
generic_module_infrastructure smpp_hook_test = {
  {
    EC_MODULE_INIT(EC_MODULE_TYPE_GENERIC, 0),
    "smpp_hook_test.c",
    "Sample SMPP Hook",
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