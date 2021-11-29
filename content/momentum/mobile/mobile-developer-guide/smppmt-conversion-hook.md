---
lastUpdated: "03/26/2020"
title: "SMPP MT Conversion Hook"
description: "The SMPP MT Conversion Hook enables customization of the conversion of an ec message to an SMPP message The SMPP MT Conversion Hook exposes many of the information elements used to create SMPP messages such as message text and recipient addresses Applications may inspect and or modify information elements using..."
---


The SMPP MT Conversion Hook enables customization of the conversion of an ec_message to an SMPP message. The SMPP MT Conversion Hook exposes many of the information elements used to create SMPP messages, such as message text and recipient addresses. Applications may inspect and/or modify information elements using ec_message context variables.

## <a name="SMPPMTConversionHook.interface"></a> Interface

### <a name="idp731200"></a> Function Interface and Parameters

**<a name="idp732352"></a> 13.1.1.1. Function Interface for Lua**

Lua implementations use the following interface:

`function mod:smpp_MT_conversion (msg)`

The"msg" parameter is an ec_message. Lua implementations must use the function name "`mod:smpp_MT_conversion`".

**<a name="idp736016"></a> 13.1.1.2. Function Interface for C**

C implementations use the following interface:

```
static int sample_smpp_MT_conversion_hook (void  *gself,
ec_message * m)
```

Note that unlike Lua, the function name is not significant since the function is registered during module initialization as shown in [“SMPP MT Conversion Hook: C Example”](/momentum/mobile/mobile-developer-guide/smppmt-conversion-hook-examples#SMPP_MT_Conversion_Hook.c).

### <a name="idp703472"></a> Message Context Variables and Blobjects

The table below describes the message context variable and blobject keys significant to SMPP MT Conversion Hook processing. The first column is the context variable key name for getting and setting context variable values. The second column is the C "#define" name. The "#define" name may be used as an alternate specification for the key name not only in C programs, but also in Lua when properly scoped in the respective name space.

<a name="SMPP_MT_Conversion_ec_message_Context_Variables"></a> 


| Context Key Name | "#define" name | Description |
| --- | --- | --- |
| SMS_Destination_Flag | VCTX_KEY_SMS_DST_FLAG | SMS destination flag to indicate the address type of dst_addr.1 for SME address, 2 for Distribution List NameThis context variable is only significant when using submit_multi. |
| SMS_Destination_Address | VCTX_KEY_SMS_DST_ADDRESS | SMS destination address to set in SMPP message submission |
| SMS_Destination_NPI | VCTX_KEY_SMS_DST_NPI | SMS destination numbering plan indicator to set in SMPP message submission |
| SMS_Destination_TON | VCTX_KEY_SMS_DST_TON | SMS destination type of number to set in SMPP message submission |
| SMS_Source_Address | VCTX_KEY_SMS_SRC_ADDRESS | SMS source address to set in SMPP message submission |
| SMS_Source_NPI | VCTX_KEY_SMS_SRC_NPI | SMS source numbering plan indicator to set in SMPP message submission |
| SMS_Source_TON | VCTX_KEY_SMS_SRC_TON | SMS source type of number to set in SMPP message submission |
| SMS_Registered_Delivery | VCTX_KEY_SMS_REGISTERED_DELIVERY | registered delivery to set the type of delivery report on a per message basis |
| SMS_Data_Coding | VCTX_KEY_SMS_DATA_CODING | data coding of the SMS message text to set in SMPP message submission (not pre-populated) |
| SMS_Text | BLOB_KEY_SMS_TEXT | blob of the SMS message text to set in SMPP submission (not pre-populated) |

**<a name="idp752736"></a> 13.1.2.1. Usage Notes**

*   Hook implementations may specify the message text by setting the SMS_Text blobject. Those hooks **must**also ensure that encoding of the new text is also set in the `SMS_Data_Coding` message context variable.

*   The ec_message text may be inspected using the Momentum core `msg:text()` function.

### <a name="idp758416"></a> Return Values

*   SMPP_CONTINUE - continue normal message processing. Changes to context variables are in effect.

*   SMPP_DELIVERED - Terminate message processing and treat the message as "delivered".

*   SMPP_PERMFAILED - Process the message as permanent failure.

*   SMPP_TEMPFAILED - Process the message as a temporary failure. The message will be retried subject to configuration parameters for retry times and limits.