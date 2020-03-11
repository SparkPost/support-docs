---
title: "29.2. Interface"
description: "The parameter trx is the type of mm 7 transaction defined in Section 29 1 Purpose The C implementation uses the following interface This hook is the same as the other C hooks The function name is not significant as long as it is registered during module initialization See Example..."
---

### <a name="idp1152304"></a> 29.2.1. Function Interface for Lua

`function mod:mm7_request_eval(trx)`

The parameter `trx` is the type of "mm7_transaction" defined in [Section 29.1, “Purpose”](MM7ServerReceivedMessageHook#MM7ServerReceivedMessageHook.purpose "29.1. Purpose").

### <a name="idp1155600"></a> 29.2.2. Function Interface for C

The C implementation uses the following interface:

`static int sample_mm7_request_eval_hook(void* gself, mm7_transaction* trx)`

This hook is the same as the other C hooks. The function name is not significant as long as it is registered during module initialization. See [Example 29.2, “MM7 Server Received Message Hook: C Example”](MM7ServerReceivedMessageHook.examples#MM7_Server_Received_Message_Hook.c "Example 29.2. MM7 Server Received Message Hook: C Example").