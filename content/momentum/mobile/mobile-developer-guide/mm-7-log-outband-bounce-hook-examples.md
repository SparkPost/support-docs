---
lastUpdated: "03/26/2020"
title: "Examples"
description: "Example 21 1 MM 7 Log Outband Bounce Hook Lua Example Example 21 2 MM 7 Log Outband Bounce Hook C Example..."
---

<a name="MM7_Log_Outband_Bounce_Hook.lua"></a> 


```
require("msys.core");

local mod = {};

function mod:mms_log_bounce_outband(msg)
  local status = msys.core.ec_message_context_get(msg, msys.core.ECMESS_CTX_MESS,
    "MM7_Response_Status");
  local local_msg_id = msys.core.ec_message_context_get(msg, msys.core.ECMESS_CTX_MESS,
    "MM7_Original_Message_ID");
  local remote_msg_id = msys.core.ec_message_context_get(msg, msys.core.ECMESS_CTX_MESS,
    "MM7_Reponse_Message_ID");
  print("sample_mm7_log_bounce_outband_hook status for message id " .. remote_msg_id .. "
    (ec_message_id: " .. local_msg_id .. ") is: " .. status);
end

msys.registerModule("mm7_hooks_test", mod);
```

<a name="MM7_Log_Outband_Bounce_Hook.c"></a> 


```
#include "module.h"
#include "modules/mobility/mms/hooks/mms_logging.h"
#include "modules/mobility/mms/mm7.h"

static void sample_mm7_log_bounce_outband_hook(void *closure, ec_message *m)
{
  const char* status = ec_message_context_get(m, ECMESS_CTX_MESS, "MM7_Response_Status);
  const char* local_msg_id = ec_message_context_get(m, ECMESS_CTX_MESS,
    "MM7_Original_Message_ID);
  const char* remote_msg_id = ec_message_context_get(m, ECMESS_CTX_MESS,
    "MM7_Response_Message_ID);
  printf("sample_mm7_log_bounce_outband_hook status for message id %s (
    ec_message_id: %s) is: %s\n", remote_msg_id, local_message_id, status);
}

static int init (generic_module_infrastructure *gself) {
  /* register the hook during module initialization */
  register_mms_log_bounce_outband_hook_first (sample_mm7_log_bounce_outband_hook, gself);
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