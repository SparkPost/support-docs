---
lastUpdated: "03/26/2020"
title: "Interface"
description: "As with the other C hooks the function name is not significant as long as it is registered as mms log conversion as follows register mms log conversion hook first sampel mm 7 log conversion during module initialization See Example 23 2 MM 7 Log Conversion Hook C Example an..."
---

### <a name="idp992352"></a> Function Interface for Lua

`function mod:mms_log_conversion(msg)`
### <a name="idp994128"></a> Function Interface for C

```
static void sample_mm7_log_conversion_hook (void  *closure,
ec_message * m)
```

As with the other C hooks, the function name is not significant as long as it is registered as `mms_log_conversion` as follows `register_mms_log_conversion_hook_first(sampel_mm7_log_conversion, ...)` during module initialization. See [“MM7 Log Conversion Hook: C Example”](/momentum/mobile/mobile-developer-guide/mm-7-log-conversion-hook-examples#MM7_Log_Conversion_Hook.c)..

### <a name="idp997936"></a> Parameters

*   an ec_message.

### <a name="idp1000640"></a> Return Values

NONE