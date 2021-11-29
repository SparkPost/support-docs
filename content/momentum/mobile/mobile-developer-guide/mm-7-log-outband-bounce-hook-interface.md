---
lastUpdated: "03/26/2020"
title: "Interface"
description: "Lua implementations must use the function name mod mms log bounce outband This hook is the same as the other C hooks The function name is not significant as long as it is registered as mms log bounce outband in the following way register mms log bounce outband hook first..."
---

### <a name="idp954992"></a> Function Interface for Lua

`function mod:mms_log_bounce_outband(msg)`

Lua implementations must use the function name `mod:mms_log_bounce_outband`.

### <a name="idp957664"></a> Function Interface for C

```
static void sample_mm7_log_bounce_outband_hook (void  *closure,
ec_message * m)
```

This hook is the same as the other C hooks. The function name is not significant as long as it is registered as mms_log_bounce_outband in the following way `register_mms_log_bounce_outband_hook_first(sampel_mm7_log_bounce_outband_hook, ...)` during module initialization. See [“MM7 Log Outband Bounce Hook: C Example”](/momentum/mobile/mobile-developer-guide/mm-7-log-outband-bounce-hook-examples#MM7_Log_Outband_Bounce_Hook.c).

### <a name="idp961200"></a> Parameters

*   ec_message

### <a name="idp970016"></a> Return Values

NONE