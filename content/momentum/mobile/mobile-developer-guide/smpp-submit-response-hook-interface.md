---
lastUpdated: "03/26/2020"
title: "Interface"
description: "ec message SMPP PDU SMPP CONTINUE SMPP DELIVERED SMPP PERMFAILED SMPP TEMPFAILED..."
---

### <a name="idp827824"></a> Function Interface and Parameters

**<a name="idp828976"></a> 17.2.1.1. Function Interface for Lua**`function mod:smpp_submit_response(msg, pdu)`**<a name="idp795904"></a> 17.2.1.2. Function Interface for C**
```
static void sample_smpp_submit_response_hook (void  *closure,
ec_message *msg, SMPP_PDU *pdu)
```

### <a name="idp797952"></a> Parameters

*   ec_message

*   SMPP_PDU

### <a name="idp801568"></a> Return Values

*   SMPP_CONTINUE

*   SMPP_DELIVERED

*   SMPP_PERMFAILED

*   SMPP_TEMPFAILED