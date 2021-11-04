---
lastUpdated: "03/26/2020"
title: "Examples"
description: "Example 2 1 SMPP Delivery Receipt Evaluation Hook Lua Example Example 2 2 SMPP Delivery Receipt Evaluation Hook C Example..."
---

<a name="SMPP_Delivery_Receipt_Evaluation_Hook.lua"></a> 


```
require("msys.core");
require("msys.smpp");
local mod = {};

function mod:smpp_DR_pdu_eval (pdu)
   local dr = msys.smpp.smpp_get_deliver_mo_msg (pdu)
   print ("******Here is your delivery receipt: " .. dr)

   return msys.smpp.SMPP_CONTINUE
end

msys.registerModule("smpp_dr_eval_example", mod);
```

<a name="SMPP_Delivery_Receipt_Evaluation_Hook.c"></a> 


```
#include "module.h"
#include "modules/mobility/smpp/smpp.h"
#include "modules/mobility/smpp/smpp_pdu.h"
#include "modules/mobility/smpp/hooks/smpp_pdu_evaluation.h"

static int sample_deliver_receipt_eval (generic_module_infrastructure *gself, SMPP_PDU *pdu)
{
  string * text = smpp_get_deliver_mo_msg (pdu);
  printf ("Here is your deliver receipt: %s\n", text->buffer);
  return SMPP_CONTINUE;
}

static int init(generic_module_infrastructure *gself) {
  register_smpp_DR_pdu_eval_hook_first (sample_deliver_receipt_eval, gself);
  return 0;
}

EC_MODULE_EXPORT
generic_module_infrastructure smpp_dr_evaluation_sample = {
  {
    EC_MODULE_INIT(EC_MODULE_TYPE_GENERIC, 0),
    "smpp_dr_evaluation_sample.c",
    "Module demonstrating delivery receipt hook",
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