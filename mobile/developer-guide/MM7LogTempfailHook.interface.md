---
title: "28.2. Interface"
description: "The C hook must be registered as mms log tempfail for example register mms log tempfail hook first sampel mm 7 log tempfail See Example 28 2 MM 7 Log Tempfail Hook C Example The parameter passed into this hook is ec message Most MM 7 related data are stored..."
---

### <a name="idp1103984"></a> 28.2.1. Function Interface for Lua

`function mod:mms_log_tempfail(msg)`
### <a name="idp1105760"></a> 28.2.2. Function Interface for C

```
static void sample_mm7_log_tempfail_hook (void  *closure,
ec_message * m)
```

The C hook must be registered as `mms_log_tempfail`, for example, `register_mms_log_tempfail_hook_first(sampel_mm7_log_tempfail, ...)`. See [Example 28.2, “MM7 Log Tempfail Hook: C Example”](MM7LogTempfailHook.examples#MM7_Log_Tempfail_Hook.c "Example 28.2. MM7 Log Tempfail Hook: C Example").

### <a name="idp1084176"></a> 28.2.3. Parameters

The parameter passed into this hook is:

*   ec_message – Most MM7-related data are stored in context variables as key/value pairs. All the data stored in ec_message are accessible from this hook and can be logged as needed.

### <a name="idp1087568"></a> 28.2.4. Return Values

NONE