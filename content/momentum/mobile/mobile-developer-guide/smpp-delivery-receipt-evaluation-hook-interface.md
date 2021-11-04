---
lastUpdated: "03/26/2020"
title: "Interface"
description: "This is the function interface for Lua This is the function interface for C SMPP CONTINUE SMPP DELIVERED..."
---

### <a name="idp384224"></a> Function Interface and Parameters

**<a name="idp385424"></a> 2.2.1.1. Function Interface for Lua**

This is the function interface for Lua:

`function mod:smpp_DR_pdu_eval (pdu)`**<a name="idp387664"></a> 2.2.1.2. Function Interface for C**

This is the function interface for C:

```
static int sample_deliver_receipt_eval
(generic_module_infrastructure *gself, SMPP_PDU *pdu)
```

### <a name="idp21296"></a> Return Values

*   SMPP_CONTINUE

*   SMPP_DELIVERED