---
title: "24.2. Interface"
description: "The parameter passed into this hook is an ec message Most MM 7 related data is stored in context variables as a key value pairs NONE..."
---

### <a name="idp1049488"></a> 24.2.1. Function Interface for Lua

`function mod:mms_log_delivery(msg)`
### <a name="idp1051264"></a> 24.2.2. Function Interface for C

```
static void sample_mm7_log_delivery_hook (void  *closure,
ec_message * m)
```

### <a name="idp1053040"></a> 24.2.3. Parameters

The parameter passed into this hook is:

*   an ec_message. Most MM7 related data is stored in context variables as a key/value pairs

### <a name="idp1012784"></a> 24.2.4. Return Values

NONE