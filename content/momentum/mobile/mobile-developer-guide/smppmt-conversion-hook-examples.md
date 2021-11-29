---
lastUpdated: "03/26/2020"
title: "Examples"
description: "Example 13 1 SMPP MT Conversion Hook Lua Example Example 13 2 SMPP MT Conversion Hook C Example..."
---

<a name="SMPP_MT_Conversion_Hook.lua"></a> 


```
require("msys.core");
require("msys.smpp");
local mod = {};

function mod:smpp_MT_pdu_eval (pdu)
   if (pdu.type == 4) -- submit_sm is a 4
   then
      local advert = "* SMS courtesy of textfree.example.com *"
      msys.core.stringwrite (pdu.u.submit_sm.short_message,
           advert,
           #advert);
      pdu.u.submit_sm.sm_length = pdu.u.submit_sm.sm_length + #advert;
   end
   return msys.smpp.SMPP_CONTINUE
end

msys.registerModule("smpp_MT_eval_example", mod);
```

<a name="SMPP_MT_Conversion_Hook.c"></a> 


```
#include "module.h"
#include "modules/mobility/smpp/hooks/smpp_pdu_evaluation.h"
#include "modules/mobility/smpp/smpp_pdu.h"
#include "modules/mobility/smpp/smpp.h"

static int demo_MT_pdu_eval (generic_module_infrastructure *gself,
             SMPP_PDU *pdu)
{
  // Append advertisement to each SM
  char * advert = "* This message brought to you by textfree.example.com *";
  if (pdu->type == submit_sm)
    {
      stringwrite (pdu->u.submit_sm.short_message,
       advert,
                   strlen(advert));
      pdu->u.submit_sm.sm_length += strlen(advert);
    }
  return 0;
}

static int init(generic_module_infrastructure *gself) {

  register_smpp_MT_pdu_eval_hook_first (demo_MT_pdu_eval,
          gself);
  return 0;
}

EC_MODULE_EXPORT
generic_module_infrastructure samp_MT_pdu_eval = {
  {
    EC_MODULE_INIT(EC_MODULE_TYPE_GENERIC, 0),
    "doc_smpp_mt_eval.c",
    "Example MT PDU eval hook",
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