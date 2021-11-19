---
lastUpdated: "03/26/2020"
title: "Interface"
description: "The C hook has to be registered as smpp log tempfail for example register smpp log tempfail hook first sampel smpp log tempfail Parameters are passed into this hook a reference to the smpp conn structure an ec message a string value of the error description if there is any..."
---

### <a name="idp594000"></a> Function Interface for Lua

`function mod:smpp_log_tempfail(conn, msg, error)`
### <a name="idp595792"></a> Function Interface for C

```
static void sample_smpp_log_tempfail_hook (void  *closure,
smpp_conn* conn, ec_message * m, const char* error)
```

The C hook has to be registered as smpp_log_tempfail for example, `register_smpp_log_tempfail_hook_first(sampel_smpp_log_tempfail, ...)`.

### <a name="idp598640"></a> Parameters

Parameters are passed into this hook:

1.  a reference to the smpp_conn structure

2.  an ec_message.

3.  a string value of the error description if there is any.

### <a name="idp603552"></a> Return Values

NONE