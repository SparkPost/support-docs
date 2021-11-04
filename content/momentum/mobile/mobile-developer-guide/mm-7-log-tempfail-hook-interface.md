---
lastUpdated: "03/26/2020"
title: "Interface"
description: "The C hook must be registered as mms log tempfail for example register mms log tempfail hook first sampel mm 7 log tempfail See Example 28 2 MM 7 Log Tempfail Hook C Example The parameter passed into this hook is ec message Most MM 7 related data are stored..."
---

### <a name="idp1103984"></a> Function Interface for Lua

`function mod:mms_log_tempfail(msg)`
### <a name="idp1105760"></a> Function Interface for C

```
static void sample_mm7_log_tempfail_hook (void  *closure,
ec_message * m)
```

The C hook must be registered as `mms_log_tempfail`, for example, `register_mms_log_tempfail_hook_first(sampel_mm7_log_tempfail, ...)`. See [“MM7 Log Tempfail Hook: C Example”](/momentum/mobile/mobile-developer-guide/mm-7-log-tempfail-hook-examples#MM7_Log_Tempfail_Hook.c).

### <a name="idp1084176"></a> Parameters

The parameter passed into this hook is:

*   ec_message – Most MM7-related data are stored in context variables as key/value pairs. All the data stored in ec_message are accessible from this hook and can be logged as needed.

### <a name="idp1087568"></a> Return Values

NONE