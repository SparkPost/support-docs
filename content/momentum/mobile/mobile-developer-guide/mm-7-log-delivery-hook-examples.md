---
lastUpdated: "03/26/2020"
title: "Examples"
description: "Example 24 1 MM 7 Log Delivery Hook Lua Example Example 24 2 MM 7 Log Delivery Hook C Example..."
---

<a name="MM7_Log_Delivery_Hook.lua"></a> 


```
require("msys.core");

local mod = {};

function mod:mms_log_delivery(msg)
  local statusCode = msys.core.ec_message_context_get(msg, msys.core.ECMESS_CTX_MESS, "MM7_Response_Status");
  print("sample_mm7_log_delivery_hook log response status: ", statusCode);
end

msys.registerModule("mm7_hooks_test", mod);
```

<a name="MM7_Log_Delivery_Hook.c"></a> 


```
#include "module.h"
#include "modules/mobility/mms/hooks/mms_logging.h"
#include "modules/mobility/mms/mm7.h"

static void sample_mm7_log_delivery_hook(void *closure, ec_message *m)
{
  char* statusCode = ec_message_context_get(m, ECMESS_CTX_MESS, VCTX_KEY_MM7_RESPONSE_STATUS);
  printf("sample_mm7_log_delievery_hook log response status: %s\n", statusCode);
}

static int init (generic_module_infrastructure *gself) {
  struct mbl_config *conf = self->module_private_data;

  /* register the hook during module initialization */
  register_mms_log_delivery_hook_first (sample_mm7_log_delivery_hook, conf);
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