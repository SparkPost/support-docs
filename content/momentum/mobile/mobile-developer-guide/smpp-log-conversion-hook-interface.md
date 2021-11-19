---
lastUpdated: "03/26/2020"
title: "Interface"
description: "This interface is the same as other C hooks The function name is not significant as long as it is registered as smpp log conversion as register smpp log conversion hook first sample smpp log conversion during module initialization See Section 6 3 Examples a reference to the smpp conn..."
---

### <a name="idp445424"></a> Function Interface for Lua

`function mod:smpp_log_conversion(conn, msg, event)`
### <a name="idp447216"></a> Function Interface for C

```
static void sample_smpp_log_conversion_hook (void  *closure,
smpp_conn* conn, ec_message * m, const char* event)
```

This interface is the same as other C hooks. The function name is not significant as long as it is registered as smpp_log_conversion as "register_smpp_log_conversion_hook_first(sample_smpp_log_conversion, ...)" during module initialization. See [“Examples”](/momentum/mobile/mobile-developer-guide/smpp-log-conversion-hook-examples).

### <a name="idp450416"></a> Parameters

1.  a reference to the smpp_conn structure

2.  an ec_message

3.  an event string: "smpp to ec_message" for MO, and "ec_message to smpp" for MT

### <a name="idp454976"></a> Return Values

NONE