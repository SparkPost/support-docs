---
lastUpdated: "03/26/2020"
title: "MM7 MT Submit Request Hook"
description: "The MM 7 MT Submit Request Hook enables custom applications to inspect and modify an ec message before it is converted to an MM 7 Submit Req sent out by Mobile Momentum This hook is invoked once for each outgoing ec message sent to a MM 7 domain The main..."
---


## <a name="MM7ClientSubmitRequestHook.purpose"></a> Purpose

The MM7 MT Submit Request Hook enables custom applications to inspect and modify an ec_message before it is converted to an MM7 SubmitReq sent out by Mobile Momentum. This hook is invoked once for each outgoing ec_message sent to a MM7 domain. The main purpose of this hook is to allow a custom script to request a delivery report, a read reply report and/or reply charging. Also use this hook to set a vender-specific ServiceCode and SenderAddress on the fly. The following context variables carried in the ec_message are significant to this hook process. These context variables can be assigned or modified in this hook so that the corresponding elements in an eventual MM7 SubmitReq can be assigned or modified:

<a name="MM7_MT_Submit_Request_Context_variables"></a> 


| Context Key Name | "#define" name | Description / Information Element in MM7 SubmitReq |
| --- | --- | --- |
| MM7_Reply_Charging | VCTX_KEY_MM7_REPLY_CHARGING | <ReplyCharging> |
| MM7_Reply_Charging_Size | VCTX_KEY_MM7_REPLY_CHARGING_SIZE | "replyChargingSize" attribute value in <ReplyCharging> |
| MM7_Reply_Deadline | VCTX_KEY_MM7_REPLY_DEADLINE | "replyDeadline" attribute value in <ReplyCharging> |
| MM7_Delivery_Report | VCTX_KEY_MM7_DELIVERY_REPORT | <DeliveryReport> |
| MM7_Read_Reply | VCTX_KEY_MM7_READ_REPLY | <ReadReply> |
| MM7_Service_Code | VCTX_KEY_MM7_SERVICE_CODE | <ServiceCode> |
| MM7_Sender_Address | VCTX_KEY_MM7_SENDER_ADDRESS | <SenderAddress> inside <SenderIdentification> |
| MM7_Source_Address | VCTX_KEY_MM7_SOURCE_ADDRESS | Used for logging purpose only. Defines the value for the source_address in the log.If not set, use the value of "MM7_Sender_Address". |
| MM7_Message_Class | VCTX_KEY_MM7_MESSAGE_CLASS | <MessageClass> |
| MM7_Request_IE_Extended | VCTX_KEY_MM7_REQUEST_IE_EXTENDED | XML tag and values for extra Information Elements |