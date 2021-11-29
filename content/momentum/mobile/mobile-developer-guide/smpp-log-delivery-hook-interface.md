---
lastUpdated: "03/26/2020"
title: "Interface"
description: "Parameters passed into this hook a reference to the smpp conn structure an ec message an integer value of the total number of SMPP segments associated with the MT ec message a list of string values of the remote message ids assigned by the remote SMSC to each segment SUBMIT..."
---

### <a name="idp503552"></a> Function Interface for Lua

```
function mod:smpp_log_delivery(conn, msg, segment_no,
message_ids)
```

### <a name="idp505280"></a> Function Interface for C

```
static void sample_smpp_log_delivery_hook (void  *closure, smpp_conn* conn, ec_message * m,
  int segment_no, char* const* message_ids)
```

### <a name="idp507216"></a> Parameters

Parameters passed into this hook:

1.  a reference to the smpp_conn structure

2.  an ec_message

3.  an integer value of the total number of SMPP segments associated with the MT/ec_message

4.  a list of string values of the remote message_ids assigned by the remote SMSC to each segment SUBMIT_SM

### <a name="idp471888"></a> Return Values

NONE