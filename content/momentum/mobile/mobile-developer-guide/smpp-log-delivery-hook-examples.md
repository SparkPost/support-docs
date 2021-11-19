---
lastUpdated: "03/26/2020"
title: "Examples"
description: "Example 7 1 SMPP Log Delivery Hook Lua Example Example 7 2 SMPP Log Delivery Hook C Example..."
---

<a name="SMPP_Log_Delivery_Hook.lua"></a> 


```
require("msys.core");

local mod = {};

function mod:smpp_log_delivery(conn, msg, segment_no, message_ids)
  print("sample_smpp_log_delivery_hook log message from domain: ", conn.domain_name);
  print("sample_smpp_log_delivery_hook log total segments: ", segment_no);
end

msys.registerModule("smpp_hooks_test", mod);
```

<a name="SMPP_Log_Delivery_Hook.c"></a> 


```
#include "module.h"
#include "modules/mobility/smpp/hooks/smpp_logging.h"
#include "modules/mobility/smpp/smpp.h"

static void sample_smpp_log_delivery_hook(void *closure, smpp_conn* conn, ec_message *m,
                                          int segment_no, char* const* message_ids)
{
  printf("sample_smpp_log_delivery_hook log message from domain: %s\n", conn->domain_name);
  printf("sample_smpp_log_delivery_hook log total segments: %d\n", segment_no);
}

static int init (generic_module_infrastructure *gself) {
  struct mbl_config *conf = gself->module_private_data;

  /* register the hook during module initialization */
  register_smpp_log_delivery_hook_first (sample_smpp_log_delivery_hook, conf);
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