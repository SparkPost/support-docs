---
lastUpdated: "03/26/2020"
title: "Interface"
description: "This hook is the same as the other C hooks The function name is not significant as long as it is registered as mms log permfail during module initialization in the following way register mms log permfail hook first sampel mm 7 log permfail See Example 25 2 MM 7..."
---

### <a name="idp1072912"></a> Function Interface for Lua

`function mod:mms_log_permfail(msg)`
### <a name="idp1074688"></a> Function Interface for C

```
static void sample_mm7_log_permfail_hook (void  *closure,
ec_message * m)
```

This hook is the same as the other C hooks. The function name is not significant as long as it is registered as `mms_log_permfail` during module initialization in the following way `register_mms_log_permfail_hook_first(sampel_mm7_log_permfail, ...)`. See [“MM7 Log Permfail Hook: C Example”](/momentum/mobile/mobile-developer-guide/mm-7-log-permfail-hook-examples#MM7_Log_Permfail_Hook.c).

### <a name="idp1055472"></a> Parameters

The parameters passed into this hook:

*   ec_message – Most of MM7 related data is stored in context variables as key/value pairs. All the data stored in ec_message are accessible from this hook and can be logged as needed.

### <a name="idp1058864"></a> Return Values

NONE