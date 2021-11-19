---
lastUpdated: "03/26/2020"
title: "SMS Conversion Hook Points"
description: "Use SMS conversion hooks to override the default SMS email conversions There are four SMS conversion hooks two for MT messages and two for MO messages For each direction there is an SMS conversion hook invoked prior to the default conversion and one following default conversion Aside from context variable..."
---

Use SMS conversion hooks to override the default SMS-email conversions. There are four SMS conversion hooks: two for MT messages and two for MO messages. For each direction, there is an SMS conversion hook invoked prior to the default conversion and one following default conversion. Aside from context variable manipulation, the hooks indicate whether default processing should be suppressed (pre-conversion hooks only), allowed to continue, or if the message should be canceled. These hook points and their Lua function names are as follows:

### Note

In Mobile Momentum version 2.1 and higher, when using Lua code, `require("msys.smpp");` replaces `require("msys.mobility");`.

*   MO_pre_conversion – Inbound pre-conversion. The Lua function name is `smpp_MO_pre_conversion.`

*   MO_post_conversion – Inbound post-conversion. The Lua function name is `smpp_MO_post_conversion`.

*   MT_pre_conversion – Outbound pre-conversion. The Lua function name is `smpp_MT_pre_conversion`.

*   MT_post_conversion – Outboundpost-conversion. The Lua function name is `smpp_MT_post_conversion` .

The hook points return indicators to suppress or continue transcoding. These are:

*   SMPP_CONVERT_CONT – continue normal conversion

*   SMPP_CONVERT_SUPPRESS – suppress additional default conversion and keep processing. This value only makes sense from pre-conversion hook points.

*   SMPP_CONVERT_CANCEL – terminate processing

When returning SMPP_CONVERT_SUPPRESS, all of the respective context variable (MO or MT) should be set by the hook implementation.

### <a name="mobility.runtime.hook.examples"></a> SMPP Message Conversion Hook Examples

```
local mod = {};
require("msys.core");
require("msys.smpp"); -- use this require statement in version 2.1
-- prior to version 2.1 use require("msys.mobility");
-- prior to version 2.1 return values must also be msys.mobility.XXXX;

function mod:smpp_MT_pre_conversion (msg)
   print("**** Here We Are ---- Made it to the MT pre-convert hook.")
   return msys.smpp.SMPP_CONVERT_CONT;
end

function mod:smpp_MT_post_conversion (msg)
   print("**** ... And we also made it into the MT post-convert hook.")
   print("**** Oops, sorry, your message has been canceled.")
   return msys.smpp.SMPP_CONVERT_CANCEL;
end

function mod:smpp_MO_pre_conversion (msg)
   print("**** Here We Are ---- Made it to the MO pre-convert hook.")
   return msys.smpp.SMPP_CONVERT_CONT;
end

function mod:smpp_MO_post_conversion (msg)
   print("**** ... And we also made it into the MO post-convert hook.")
   print("**** Oops, sorry, your message has been canceled.")
   return msys.smpp.SMPP_CONVERT_CANCEL;
end

msys.registerModule("smpp_conversion_hook_tests", mod);
```

For a description of the `msys.registerModule` function see "[msys.registerModule](/momentum/3/3-reference/3-reference-lua-ref-msys-register-module)".