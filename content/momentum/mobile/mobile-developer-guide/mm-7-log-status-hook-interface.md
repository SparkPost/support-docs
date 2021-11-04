---
lastUpdated: "03/26/2020"
title: "Interface"
description: "This hook is the same as other Lua hooks The Lua implementations must use the function name mod mms log status This hook is the same as the other C hooks The function name is not significant as long as it is registered during module initialization as mms log status..."
---

### <a name="idp1186064"></a> Function Interface for Lua

`function mod:mms_log_status(msg)`

This hook is the same as other Lua hooks. The Lua implementations must use the function name `mod:mms_log_status`.

### <a name="idp1188832"></a> Function Interface for C

```
static void sample_mm7_log_status_hook (void  *closure,
ec_message * m)
```

This hook is the same as the other C hooks. The function name is not significant as long as it is registered during module initialization as `mms_log_status`, for example, `register_mms_log_status_hook_first(sampel_mm7_log_status, ...)`. See [“MM7 Logger Status Hook: C Example”](/momentum/mobile/mobile-developer-guide/mm-7-log-status-hook-examples#MM7_Logger_Status_Hook.c).

### <a name="idp1120560"></a> Parameters

Parameters passed into this hook:

*   ec_message – Note that this ec_message is the one converted from the DeliveryReportReq, not the original MT message submitted by Mobile Momentum. Most of the MM7-related data are stored in context variables as a key/value pairs. All the data stored in ec_message are accessible from this hook and can be logged as needed.

### <a name="idp1124112"></a> Return Values

NONE