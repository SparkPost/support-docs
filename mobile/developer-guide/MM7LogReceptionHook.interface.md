---
title: "26.2. Interface"
description: "The parameter passed into this hook is an ec message Most MM 7 related data are stored in context variables as a key value pairs All the data stored in ec message are accessible from this hook and can be logged as needed NONE..."
---

### <a name="idp1139984"></a> 26.2.1. Function Interface for Lua

`function mod:mms_log_reception(msg)`
### <a name="idp1141760"></a> 26.2.2. Function Interface for C

```
static void sample_mm7_log_reception_hook (void  *closure,
ec_message * m)
```

### <a name="idp1028032"></a> 26.2.3. Parameters

The parameter passed into this hook is:

*   an ec_message – Most MM7-related data are stored in context variables as a key/value pairs. All the data stored in ec_message are accessible from this hook and can be logged as needed.

### <a name="idp1031424"></a> 26.2.4. Return Values

NONE