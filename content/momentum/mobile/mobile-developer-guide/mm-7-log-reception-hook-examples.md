---
lastUpdated: "03/26/2020"
title: "Examples"
description: "Example 26 1 MM 7 Log Reception Hook Lua Example Example 26 2 MM 7 Log Reception Hook C Example..."
---

<a name="MM7_Log_Reception_Hook.lua"></a> 


```
require("msys.core");

local mod = {};

function mod:mms_log_reception(msg)
  local mmsc_ip = msys.core.ec_message_context_get(msg, msys.core.ECMESS_CTX_MESS,»
    "MM7_MMSC_IP_Address");
  print("sample_mm7_log_reception_hook log message from: ", mmsc_id);
end

msys.registerModule("mm7_hooks_test", mod);
```

<a name="MM7_Log_Reception_Hook.c"></a> 


```
#include "module.h"
#include "modules/mobility/mms/hooks/mms_logging.h"
#include "modules/mobility/mms/mm7.h"

static void sample_mm7_log_reception_hook(void *closure, ec_message *m)
{
  const char* mmsc_ip = ec_message_context_get(m, ECMESS_CTX_MESS, VCTX_KEY_MM7_MMSC_IP_ADDRESS);
  printf("sample_mm7_log_reception_hook log message from: %s\n", mmsc_ip);
}

static int init (generic_module_infrastructure *gself) {
  /* register the hook during module initialization */
  register_mms_log_reception_hook_first (sample_mm7_log_reception_hook, gself->module_private_data);
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