---
lastUpdated: "03/26/2020"
title: "Examples"
description: "Example 14 1 SMPP PDU MO Receiver Evaluation Hook Lua Example Example 14 2 SMPP PDU MO Receiver Evaluation Hook C Example..."
---

<a name="SMPP_PDU_MO_Evaluation_Hook.lua"></a> 


```
require("msys.core");
require("msys.smpp");
local mod = {};

function mod:smpp_MO_pdu_eval (pdu)
  if string.find(pdu.u.deliver_sm.short_message.buffer, "viagra") then
    print("$$$$$ Rejecting spam...");
    return 0x66; --SMPP_ESME_RX_R_APPN
  end
end

msys.registerModule("smpp_MO_eval_demo", mod);
```

<a name="SMPP_PDU_MO_Evaluation_Hook.c"></a> 


```
#include "module.h"
#include "modules/mobility/smpp/hooks/smpp_pdu_evaluation.h"
#include "modules/mobility/smpp/smpp_pdu.h"
#include "modules/mobility/smpp/smpp.h"

static int sample_MO_pdu_eval (generic_module_infrastructure *gself,
             SMPP_PDU *pdu)
{
  if (pdu->type == deliver_sm) {
    if (strstr(pdu->u.deliver_sm.short_message->buffer,
         "viagra")) {
      printf ("Rejecting Spam SMS\n");
      return SMPP_ESME_RX_R_APPN;
    }
  }
  return 0;
}

static int init(generic_module_infrastructure *gself) {
  register_smpp_MO_pdu_eval_hook_first (sample_MO_pdu_eval,gself);
  return 0;
}

EC_MODULE_EXPORT
generic_module_infrastructure samp_MO_pdu_eval = {
  {
    EC_MODULE_INIT(EC_MODULE_TYPE_GENERIC, 0),
    "doc_smpp_mo_eval.c",
    "Demo MO PDU eval hook",
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