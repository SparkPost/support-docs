---
lastUpdated: "03/26/2020"
title: "Interface"
description: "The parameter trx is the type of mm 7 transaction defined in Section 29 1 Purpose The C implementation uses the following interface This hook is the same as the other C hooks The function name is not significant as long as it is registered during module initialization See Example..."
---

### <a name="idp1152304"></a> Function Interface for Lua

`function mod:mm7_request_eval(trx)`

The parameter `trx` is the type of "mm7_transaction" defined in [“Purpose”](/momentum/mobile/mobile-developer-guide/mm-7-server-received-message-hook#MM7ServerReceivedMessageHook.purpose).

### <a name="idp1155600"></a> Function Interface for C

The C implementation uses the following interface:

`static int sample_mm7_request_eval_hook(void* gself, mm7_transaction* trx)`

This hook is the same as the other C hooks. The function name is not significant as long as it is registered during module initialization. See [“MM7 Server Received Message Hook: C Example”](/momentum/mobile/mobile-developer-guide/mm-7-server-received-message-hook-examples#MM7_Server_Received_Message_Hook.c).