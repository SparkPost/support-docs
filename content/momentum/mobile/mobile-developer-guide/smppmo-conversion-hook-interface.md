---
lastUpdated: "03/26/2020"
title: "Interface"
description: "ec message Table 12 1 SMPP MO Conversion ec message Context Variables Context Key Name C define name Description MO Email From Address email from address to use when converting MO sms to email MO Email To Address email to address to use when converting MO sms to email MO..."
---

### <a name="idp723072"></a> Function Interface and Parameters

**<a name="idp724224"></a> 12.2.1.1. Function Interface for Lua**`function mod:smpp_MO_conversion (msg)`**<a name="idp726048"></a> 12.2.1.2. Function Interface for C**
```
static int sample_smpp_MO_conversion_hook (void  *gself,
ec_message * m)
```

### <a name="idp727984"></a> Parameters

*   ec_message

### <a name="idp615920"></a> Message Context Variables

<a name="SMPP_MO_Conversion_ec_message_Context_Variables"></a> 


| Context Key Name | C "#define" name | Description |
| --- | --- | --- |
| MO_Email_From_Address |   | email from address to use when converting MO sms to email |
| MO_Email_To_Address |   | email to address to use when converting MO sms to email |
| MO_Email_Subject |   | email subject to use when converting MO sms to email |
| MO_Email_Text |   | blob email text to use when converting MO sms to email |
| MO_Email_Data_Coding |   | email data coding to use when converting MO sms to email |

### <a name="idp631280"></a> Return Values

*   SMPP_CONTINUE

*   SMPP_DELIVERED

*   SMPP_PERMFAILED