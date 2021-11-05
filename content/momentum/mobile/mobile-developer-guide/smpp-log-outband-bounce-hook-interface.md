---
lastUpdated: "03/26/2020"
title: "Interface"
description: "Lua implementations must use the function name mod smpp log bounce outband This hook is the same as the other C hooks The function name is not significant as long as it is registered as smpp log bounce outband for example register smpp log bounce outband hook first sample smpp..."
---

### <a name="idp437328"></a> Function Interface for Lua

`function mod:smpp_log_bounce_outband(conn, msg, error)`

Lua implementations must use the function name `mod:smpp_log_bounce_outband`.

### <a name="idp440096"></a> Function Interface for C

```
static void sample_mm7_log_bounce_outband_hook (void  *closure,
smpp_conn* conn, ec_message * m, const char* error)
```

This hook is the same as the other C hooks. The function name is not significant as long as it is registered as smpp_log_bounce_outband (for example, "`register_smpp_log_bounce_outband_hook_first(sample_smpp_log_bounce_outband_hook, ...)`" during module initialization as shown in [“SMPP Log Outband Bounce Hook: C Example”](/momentum/mobile/mobile-developer-guide/smpp-log-outband-bounce-hook-examples#SMPP_Log_Outband_Bounce_Hook.c).

### <a name="idp419728"></a> Parameters

1.  A reference to the smpp_conn structure

2.  An ec_message: the context variables #mess_xx have the same significance for this hook as for the smpp_log_status hook.

3.  A string value of the error description if there is one.

### <a name="idp424368"></a> Return Values

NONE