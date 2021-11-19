---
lastUpdated: "03/26/2020"
title: "Interface"
description: "The C hook has to be registered as smpp log permfail in the following way register smpp log permfail hook first sample smpp log permfail Parameters are passed into this hook a reference to the smpp conn structure an ec message a string value of the error description NONE..."
---

### <a name="idp529904"></a> Function Interface for Lua

`function mod:smpp_log_permfail(conn, msg, error)`
### <a name="idp531696"></a> Function Interface for C

```
static void sample_smpp_log_permfail_hook (void  *closure, smpp_conn* conn, ec_message * m,
  const char* error)
```

The C hook has to be registered as smpp_log_permfail in the following way: `register_smpp_log_permfail_hook_first(sample_smpp_log_permfail, ...)`.

### <a name="idp508896"></a> Parameters

Parameters are passed into this hook:

1.  a reference to the smpp_conn structure

2.  an ec_message.

3.  a string value of the error description

### <a name="idp513824"></a> Return Values

NONE