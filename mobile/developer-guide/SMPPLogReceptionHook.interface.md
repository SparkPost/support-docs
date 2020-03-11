---
title: "9.2. Interface"
description: "Parameters passed into this hook a reference to the smpp conn structure an ec message a string value of the error message if failed to process the MO message For a successfully processed MO an empty string is passed in NONE..."
---

### <a name="idp555152"></a> 9.2.1. Function Interface for Lua

`function mod:smpp_log_reception(conn, msg, error)`
### <a name="idp556944"></a> 9.2.2. Function Interface for C

```
static void sample_smpp_log_reception_hook (void  *closure,
smpp_conn* conn, ec_message * m, const char* error)
```

### <a name="idp558848"></a> 9.2.3. Parameters

Parameters passed into this hook:

1.  a reference to the smpp_conn structure

2.  an ec_message

3.  a string value of the error message if failed to process the MO message. For a successfully processed MO, an empty string is passed in.

### <a name="idp491408"></a> 9.2.4. Return Values

NONE