---
lastUpdated: "03/26/2020"
title: "Interface"
description: "SMPP PDU structure A non negative return value is the response command status code Any non zero return value causes processing to cease for the current PDU The special return value of 1 means that SMPP ESME OK 0 will be used for the command status code in the SMPP..."
---

### <a name="idp668720"></a> Function Interface and Parameters

**<a name="idp669872"></a> 14.2.1.1. Function Interface for Lua**`function mod:smpp_MO_pdu_eval (pdu)`**<a name="idp671696"></a> 14.2.1.2. Function Interface for C**
```
static int sample_MO_pdu_eval (generic_module_infrastructure
  *gself, SMPP_PDU *pdu)
```
**<a name="idp673472"></a> 14.2.1.3. Parameters**

SMPP_PDU structure.

### <a name="idp675440"></a> Return Values

A non-negative return value is the response command status code. Any non-zero return value causes processing to cease for the current PDU. The special return value of `-1` means that SMPP_ESME_OK(0) will be used for the command status code in the SMPP response but also causes processing to cease for the current PDU.

<a name="SMPP_PDU_MO_Evaluation_Return_Values"></a> 


| Return Value | Response Command Status Code | PDU Disposition |
| --- | --- | --- |
| 0 | 0 | continue |
| >0 | return value | drop |
| -1 | 0 | drop |