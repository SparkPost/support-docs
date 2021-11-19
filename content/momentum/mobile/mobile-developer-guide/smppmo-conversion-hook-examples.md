---
lastUpdated: "03/26/2020"
title: "Examples"
description: "The following examples print out all the context variables in the ec message and modify the converted email content using UTF 8 data coding Example 12 1 SMPP MO Conversion Hook Lua Examples As of Momentum version 3 2 3 do not invoke msys core ec blobject delref This object..."
---

The following examples print out all the context variables in the ec_message, and modify the converted email content using UTF-8 data coding.

<a name="SMPP_MO_Conversion_Hook.lua"></a> 


```
require("msys.core");
require("msys.smpp");
require("msys.extended.message");
require("msys.dumper");

local function update_blob(msg, key, txt)
   msys.core.ec_message_context_set(msg, msys.core.ECMESS_CTX_MESS, "MO_Email_Data_Coding", »
    "UTF-8")
   msys.smpp.smpp_write_msg_text_blob(msg, txt, string.len(txt), key)
   end

local function dump_msg_context(msg)
    print ("**** BEGIN LOOPING ON MSG CONTEXT");
    ctxkey = msys.core.ec_message_context_firstkey (msg, msys.core.ECMESS_CTX_MESS);
    while ctxkey != nil do
      ctxval = msys.core.ec_message_context_get(msg, msys.core.ECMESS_CTX_MESS, ctxkey);
      print ("CTX: " .. ctxkey .. ": " .. ctxval);
      prevkey = ctxkey;
      ctxkey = msys.core.ec_message_context_nextkey (msg, msys.core.ECMESS_CTX_MESS, prevkey);
    end
    print ("**** END LOOPING ON MSG CONTEXT");
  local email_blob = msys.core.ec_message_blobject_get (msg, msys.smpp.BLOB_KEY_MO_EMAIL_TEXT);
  local email_str = tostring(msys.cast(email_blob.self, 'msys.core:_ec_string'));
  print ("**** BLOB (EMAIL): " .. email_str);
  -- do not use the following function after Momentum 3.2.2
  **msys.core.ec_blobject_delref(email_blob);**
end

function mod:smpp_MO_conversion (msg)
  print("**** Here We Are ---- Made it to the MO convert hook !!!!!");
  dump_msg_context (msg)
  update_blob(msg, msys.smpp.BLOB_KEY_MO_EMAIL_TEXT, "MODIFIED BY HOOK MT_convert.");
  return msys.smpp.SMPP_CONTINUE;
end

msys.registerModule("smpp_hooks", mod);
```

### Warning

As of Momentum version 3.2.3, do **not** invoke `msys.core.ec_blobject_delref`. This object reference is now removed by Lua garbage collection.

In addition to the `msys.smpp.smpp_write_msg_text_blob` function there is also a `msys.smpp.smpp_read_msg_text_blob(msg, key)` function. This function retrieves a text blob context variable from an ec_message. The `msg` parameter is an ec_message and valid keys are: `BLOB_KEY_SMS_TEXT` and `BLOB_KEY_MO_EMAIL_TEXT`.

### Note

As of Momentum version 3.5.4 `smpp_read_msg_text_blob` returns `nil` when the key does not exist in the message. Previously it returned a zero length string. This also applies to `msys.smpp.smpp_read_msg_text_blob`.

<a name="SMPP_MO_Conversion_Hook.c"></a> 


```
#include "module.h"
#include "modules/mobility/smpp/hooks/smpp_message_conversion.h"
#include "modules/mobility/smpp/smpp.h"
#include "modules/mobility/smpp/smpp_util.h"

/* local utility to modify SMPP blob object, e.g. BLOB_KEY_MO_EMAIL_TEXT */
static void test_smpp_update_blob(ec_message* msg, const char* key, const char* txt)
{
  ec_message_context_set(msg, ECMESS_CTX_MESS, "MO_Email_Data_Coding", "UTF-8");
  smpp_write_msg_text_blob(msg, txt, strlen(txt), key);
}

/* local utility to dump context variables in an ec_message */
static void test_smpp_dump_msg_context(ec_message* msg)
{
  printf("**** BEGIN LOOPING ON MSG CONTEXT\n");
  const char* ctxkey = ec_message_context_firstkey (msg, ECMESS_CTX_MESS);
  while (ctxkey) {
    const char* ctxval = ec_message_context_get(msg, ECMESS_CTX_MESS, ctxkey);
    printf("CTX: %s: %s\n", ctxkey, ctxval);
    ctxkey = ec_message_context_nextkey (msg, ECMESS_CTX_MESS, ctxkey);
  }
  printf("**** END LOOPING ON MSG CONTEXT\n");
  string* email_blob = smpp_read_msg_text_blob(msg, BLOB_KEY_MO_EMAIL_TEXT);
  printf("**** BLOB (EMAIL): %s\n", email_blob->buffer);
}

static int test_hook_smpp_MO_conversion (generic_module_infrastructure *gself, ec_message* msg)
{
  printf("**** Here We Are ---- Made it to the MO convert hook !!!!!");
  test_smpp_dump_msg_context (msg);
  test_smpp_update_blob(msg, BLOB_KEY_MO_EMAIL_TEXT, "MODIFIED BY HOOK MT_convert.");
  printf("++++ After modification ++++\n");
  test_smpp_dump_msg_context (msg);
  return SMPP_CONTINUE;
}

static int init (generic_module_infrastructure *gself) {
  /* register the hook during module initialization */
  register_smpp_MO_conversion_hook_first (test_hook_smpp_MO_conversion, gself);
  return 0;
}

EC_MODULE_EXPORT
generic_module_infrastructure smpp_message_conversion_test = {
  {
    EC_MODULE_INIT(EC_MODULE_TYPE_GENERIC, 0),
    "sample_smpp_conversion_hook.c",
    "Sample SMPP message conversion hook",
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