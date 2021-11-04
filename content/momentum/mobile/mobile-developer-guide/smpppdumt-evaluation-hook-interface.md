---
lastUpdated: "03/26/2020"
title: "Interface"
description: "SMPP PDU SMPP CONTINUE continue normal processing SMPP DELIVERED drop the message Consider it delivered and do not process as a failure SMPP TEMPFAILED tempfail the message SMPP PERMFAILED permfail the message..."
---

### <a name="idp429696"></a> Function Interface and Parameters

**<a name="idp430848"></a> 15.2.1.1. Function Interface for Lua**`function mod:smpp_MT_pdu_eval (pdu)`**<a name="idp772464"></a> 15.2.1.2. Function Interface for C**
```
static int demo_MT_pdu_eval (generic_module_infrastructure
*gself, SMPP_PDU *pdu)
```

### <a name="idp774400"></a> Parameters

SMPP_PDU.

### <a name="idp776208"></a> Return Values

*   SMPP_CONTINUE - continue normal processing

*   SMPP_DELIVERED - drop the message. Consider it "delivered" and do not process as a failure.

*   SMPP_TEMPFAILED - tempfail the message.

*   SMPP_PERMFAILED - permfail the message.