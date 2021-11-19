---
lastUpdated: "03/26/2020"
title: "Interface"
description: "Parameters passed into this hook a reference to the smpp conn structure an ec message an error description carried in the deliver receipt if there is one The ec message context variables carry the following extra information from the delivery receipt Table 10 1 SMPP Logger Status ec message Context..."
---

### <a name="idp563776"></a> Function Interface for Lua

`function mod:smpp_log_status(conn, msg, error)`
### <a name="idp565568"></a> Function Interface for C

```
static void sample_smpp_log_status_hook (void  *closure,
smpp_conn* conn, ec_message * m, const char* error)
```

### <a name="idp567472"></a> Parameters

Parameters passed into this hook:

1.  a reference to the smpp_conn structure

2.  an ec_message

3.  an error description carried in the deliver receipt if there is one

The ec_message context variables carry the following extra information from the delivery receipt:

<a name="SMPP_Logger_Status_ec_message_Context_Variables"></a> 


| Context Key Name | Description |
| --- | --- |
| #mess_stat | string description of the message_state in delivery receipt, e.g. "Scheduled", "Delivered", "Expired", etc |
| #mess_id | remote message id allocated to the message by the SMSC when originally submitted |
| #mess_type | string description of the esm_class in delivery receipt |

### <a name="idp580592"></a> Return Values

NONE