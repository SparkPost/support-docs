---
lastUpdated: "03/26/2020"
title: "Examples"
description: "The following Lua example temp fails all the MM 7 response with Status Code not equal to 1000 and re route the message submission Example 19 1 MT Submit Response Hook Lua Example The following C hook does the same as the Lua implementation above Example 19 2 MT Submit..."
---

The following Lua example temp fails all the MM7 response with StatusCode not equal to 1000, and re-route the message submission:

<a name="MT_Submit_Response_Hook.lua"></a> 


```
local mod = {};
require("msys.core");
require("msys.extended.message_routing");
require("msys.mms");  -- required module defines return value of msys.mms.MM7_TEMP_FAIL

function mod:mm7_handle_submitRsp(msg)
  local statusCode = msys.core.ec_message_context_get(msg, msys.core.ECMESS_CTX_MESS,
    "MM7_Response_Status");
  print ("MM7 Response status is ", statusCode);
  if (statusCode != 2000) then
    print("rerouting message to example.org");
    msys.core.ec_message_context_set(msg, msys.core.ECMESS_CTX_MESS,
      "MM7_Response_Status_Detail", "Hook force tempfail to re-route the message");
    msg:routing_domain("example.org");              -- reroute to destinate domain example.org
    msg:rcptto("julie@example.org");                -- reroute to recipient julie@example.org
    return msys.mms.MM7_TEMP_FAIL;
  else
    return msys.mms.MM7_CONTINUE;
  end
end

msys.registerModule("mm7_response_hooks_tests", mod);
```

The following C hook does the same as the Lua implementation above:

<a name="MT_Submit_Response_Hook.c"></a> 


```
#include "module.h"
#include "modules/mobility/mms/hooks/mm7_message_hooks.h"
#include "modules/mobility/mms/mm7.h"

static int sample_mm7_handle_submitRsp_hook(void *gself, ec_message* m)
{
  const char* status = ec_message_context_get(m, ECMESS_CTX_MESS, VCTX_KEY_MM7_RESPONSE_STATUS);
  if (strcmp(status, "1000")) {
    ec_mod_debug(gself, DDEBUG, "MM7 HOOK TEST: received response status code %s.
      Reroute the message!\n", status);
    ec_message_context_set(m, ECMESS_CTX_MESS, VCTX_KEY_MM7_RESPONSE_STATUS_DETAIL,
      "Hook force tempfail to re-route the message");
    ec_message_assign_domain_by_name(m, "example.org");
    ec_message_set_rcptto(m, "julie@example.org", sizeof("julie@example.org"), 0);
    return MM7_TEMP_FAIL;
  } else
    return MM7_CONTINUE;
}

static int init (generic_module_infrastructure *gself) {
  /* register the hook during module initialization */
  register_mm7_handle_submitRsp_hook_first (sample_mm7_handle_submitRsp_hook, gself);
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