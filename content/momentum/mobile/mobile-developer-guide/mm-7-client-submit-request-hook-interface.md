---
lastUpdated: "03/26/2020"
title: "Interface"
description: "Lua implementations use the following interface The parameter msg is an ec message Lua implementations must use the function name mod mm 7 pre submit C implementations use the following interface Note that in C unlike Lua the function name is not significant since the function is registered during module..."
---

### <a name="idp863312"></a> Function Interface for Lua

Lua implementations use the following interface:

`function mod:mm7_pre_submit(msg)`

The parameter "msg" is an ec_message. Lua implementations must use the function name `mod:mm7_pre_submit`.

### <a name="idp866832"></a> Function Interface for C

C implementations use the following interface:

`static void sample_mm7_submit_req_hook (void *gself, ec_message * m)`

Note that in C, unlike Lua, the function name is not significant since the function is registered during module initialization See [“MM7 MT Submit Request Hook: C Example”](/momentum/mobile/mobile-developer-guide/mm-7-client-submit-request-hook-example#MM7_MT_Submit_Request_Hook.c).

### <a name="idp923568"></a> Return Values

This hook does not return any values.