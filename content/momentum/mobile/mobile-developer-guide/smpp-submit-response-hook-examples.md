---
lastUpdated: "03/26/2020"
title: "Examples"
description: "Example 17 1 SMPP Submit Response Hook Lua Example Example 17 2 SMPP Submit Response Hook C Example..."
---

<a name="SMPP_Submit_Response_Hook.lua"></a> 


```
require("msys.core");
require("msys.smpp");
local mod = {};

function mod:smpp_submit_response (msg, pdu)
   local id = msys.smpp.smpp_get_message_id_from_pdu (pdu)
   print ("Here is your message id: "
	  ..id..
	  ", you can put it in your database for delivery receipt reference")
   return msys.smpp.SMPP_CONTINUE
end

msys.registerModule("sample_smpp_submit_response_demo", mod);
```

<a name="SMPP_Submit_Response_Hook.c"></a> 


```
#include "module.h"
#include "modules/mobility/smpp/hooks/smpp_pdu_evaluation.h"
#include "modules/mobility/smpp/smpp_pdu.h"
#include "modules/mobility/smpp/smpp.h"

static int test_hook_submit_response (generic_module_infrastructure *gself,
  ec_message* msg, SMPP_PDU *pdu)
{
  string * id = smpp_get_message_id_from_pdu (pdu);
  printf ("Here is your message id: %s ,"
        "you can put it in your database for delivery receipt reference. \n",
        id->buffer);
 return SMPP_CONTINUE;
}

static int init(generic_module_infrastructure *gself) {
  register_smpp_submit_response_hook_first (test_hook_submit_response, gself);
  return 0;
}

EC_MODULE_EXPORT
generic_module_infrastructure sample_submit_response = {
  {
    EC_MODULE_INIT(EC_MODULE_TYPE_GENERIC, 0),
    "sample_smpp_submit_response.c",
    "Sample Submit Response Hook",
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