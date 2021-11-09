---
lastUpdated: "03/26/2020"
title: "Examples"
description: "Example 29 1 MM 7 Server Received Message Hook Lua Example Example 29 2 MM 7 Server Received Message Hook C Example..."
---

<a name="MM7_Server_Received_Message_Hook.lua"></a> 


```
require("msys.core");
require("msys.mms");

local mod = {};

function mod:mm7_request_eval(trx)
  print("***mm7_request_eval hook get called!!!");

  print ("****Transaction type: " .. trx.trx_type .. "\n");

  -- inspect the soap envelope in received request
  print ("****Soap envelope:\n" .. trx.soap_envelope .. "\n");

  -- inspect the soap attachment part in received request
  print ("****Soap attachment:\n" .. trx.soap_attachment .. "\n");

  -- inspect the ec_dict structure which contains the soap envelope parsed results,
  -- and put them into the <Details> in the response
  print ("****Tags:\n");
  msys.core.dict_stringprint (trx.status_details, trx.tags, 0, "     ");
  print ("\n" .. trx.status_details);

  -- modify the sender address
  msys.core.dict_key_delete (trx.tags, "RFC2822Address")
  msys.core.dict_add_key_value (trx.tags, "RFC2822Address", "fred@barney.com")

  -- print the recipients
  local recip = msys.cast(msys.core.ec_double_list_shift(trx.recipients),
    'msys.mms:mm7_recipient');
  print ("******Recipient: " .. recip.disposition .. ": " .. recip.address .. "
    " .. recip.type);

  -- set the <StatusCode> in response to 1100
  trx.status_code = 1100;

  -- set the <ServiceCode> in response
  msys.core.stringwrite (trx.service_code, "789-4560-321", 12);

  return MM7_CONTINUE;
end

msys.registerModule("mm7_request_eval_tests", mod);
```

<a name="MM7_Server_Received_Message_Hook.c"></a> 


```
#include "module.h"
#include "modules/mobility/mms/hooks/mm7_message_hooks.h"
#include "modules/mobility/mms/mm7.h"

static int sample_mm7s_request_eval_hook(void* gself, mm7_transaction* trx)
{
  ec_mod_debug(gself, DDEBUG, "***mm7_request_eval hook get called!!!");

  ec_mod_debug(gself, DDEBUG, "****Transaction type: %d\n", trx->trx_type);

  /* inspect the soap envelope in received request */
  ec_mod_debug(gself, DDEBUG, "****Soap envelope:\n%s\n", trx->soap_envelope.buffer);

  /* inspect the soap attachment part in received request */
  ec_mod_debug(gself, DDEBUG, "****Soap attachment:\n%s\n", trx->soap_attachment.buffer);

  /* inspect the ec_dict structure which contains the soap envelope parsed results,
    and put them into <Details> in response */
  ec_mod_debug(gself, DDEBUG, "****Tags:\n");
  dict_stringprint (&(trx->status_details), trx->tags, 0, "     ");
  ec_mod_debug(gself, DDEBUG, "\n%s\n", trx->status_details.buffer);

  /* modify the sender address */
  dict_key_delete (trx->tags, "RFC2822Address");
  dict_add_key_value (trx->tags, "RFC2822Address", "fred@barney.com");

  /* print the recipients */
  mm7_recipient* recip = (mm7_recipient*)ec_double_list_shift(&(trx->recipients));
  ec_mod_debug(gself, DDEBUG, "******Recipient: %d: %s %d\n", recip->disposition,
    recip->address.buffer, recip->type);

  /* set the <StatusCode> in response to 1100 */
  trx->status_code = 1100;

  /* set the <ServiceCode> in response */
  stringwrite(&trx->service_code, "789-4560-321", strlen("789-4560-321"));

  return MM7_CONTINUE;
}

static int init (generic_module_infrastructure *gself) {
  /* register the hook during module initialization */
  register_mm7_request_eval_hook_first (sample_mm7s_request_eval_hook, gself);
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