---
lastUpdated: "03/26/2020"
title: "Developing Applications for the MM7 VASP"
description: "Chapter 29 MM 7 Server Received Message Hook Chapter 30 MM 7 Server Received Message Validation Hook Chapter 18 MM 7 MT Submit Request Hook Chapter 19 MM 7 MT Submit Response Hook As with other Momentum modules such as SMTP and SMPP the following logger hooks are available for..."
---

### <a name="DC.MM7HookPoints"></a> MM7 Hook Points

*   [*MM7 Server Received Message Hook*](/momentum/mobile/mobile-developer-guide/mm-7-server-received-message-hook) 

*   [*MM7 Server Received Message Validation Hook*](/momentum/mobile/mobile-developer-guide/mm-7-server-received-message-validation-hook) 

*   [*MM7 MT Submit Request Hook*](/momentum/mobile/mobile-developer-guide/mm-7-client-submit-request-hook) 

*   [*MM7 MT Submit Response Hook*](/momentum/mobile/mobile-developer-guide/mm-7-client-submit-response-hook) 

### <a name="idp299696"></a> MM7 Logging Hook Points

As with other Momentum modules such as SMTP and SMPP, the following logger hooks are available for logging MM7 messages at different phases:

*   [*MM7 Log Delivery Hook*](/momentum/mobile/mobile-developer-guide/mm-7-log-delivery-hook) 

*   [*MM7 Log Reception Hook*](/momentum/mobile/mobile-developer-guide/mm-7-log-reception-hook) 

*   [*MM7 Logger Status Hook*](/momentum/mobile/mobile-developer-guide/mm-7-log-status-hook) 

*   [*MM7 Log Tempfail Hook*](/momentum/mobile/mobile-developer-guide/mm-7-log-tempfail-hook) 

*   [*MM7 Log Permfail Hook*](/momentum/mobile/mobile-developer-guide/mm-7-log-permfail-hook) 

*   [*MM7 Log Conversion Hook*](/momentum/mobile/mobile-developer-guide/mm-7-log-conversion-hook) 

*   [*MM7 Log Inband Bounce Hook*](/momentum/mobile/mobile-developer-guide/mm-7-log-inband-bounce-hook) 

*   [*MM7 Log Outband Bounce Hook*](/momentum/mobile/mobile-developer-guide/mm-7-log-outband-bounce-hook) 

*   [*MM7 Log Transient Bounce Hook*](/momentum/mobile/mobile-developer-guide/mm-7-log-transient-bounce-hook) 

All MM7 logger hooks have a reference to an ec_message as input. For logging purposes, hooks can access any data structures and context variables stored in this ec_message.

### <a name="DC.MM7relatedec_messagecontextvariablesacce"></a> MM7-related ec_message Context Variables Accessible Through MM7 Hooks

The following ec_message context variables are available to hooks with ec_message input:

<a name="MM7-related_ec_message_Context_Variables"></a> 


| Context Key Name | "#define" name | Description / Default usage |
| --- | --- | --- |
| MM7_Source_Address | VCTX_KEY_MM7_SOURCE_ADDRESS | MM7 MT submission's sender address. Used for logging. If not set, use the value of "MM7_Sender_Address". |
| MM7_Transaction_ID | VCTX_KEY_MM7_TRANS_ID | MM7 SOAP <TransactionID>. Used for logging |
| MM7_Reply_Charging | VCTX_KEY_MM7_REPLY_CHARGING | Used in mm7_pre_submit hook to set value of <ReplyCharging> in MM7 MT message |
| MM7_Reply_Charging_Size | VCTX_KEY_MM7_REPLY_CHARGING_SIZE | "replyChargingSize" attribute value in <ReplyCharging> |
| MM7_Reply_Deadline | VCTX_KEY_MM7_REPLY_DEADLINE | "replyDeadline" attribute value in <ReplyCharging> |
| MM7_Delivery_Report | VCTX_KEY_MM7_DELIVERY_REPORT | Used in mm7_pre_submit hook to set value of <DeliveryReport> in MM7 MT message |
| MM7_Read_Reply | VCTX_KEY_MM7_READ_REPLY | Used in mm7_pre_submit hook to set value of <ReadReply> in MM7 MT message |
| MM7_Service_Code | VCTX_KEY_MM7_SERVICE_CODE | Used in mm7_pre_submit hook to set value of <ServiceCode> in MM7 MT message |
| MM7_Sender_Address | VCTX_KEY_MM7_SENDER_ADDRESS | Used in mm7_pre_submit hook to set value of <SenderAddress> elements in a MM7 MT message |
| MM7_Number_Prefix | VCTX_KEY_MM7_NUMBER_PREFIX | Used in mm7_pre_submit hook to be prepended to the MM7 MT recipient address in number format |
| MM7_Response_Status | VCTX_KEY_MM7_RESPONSE_STATUS | 1\. Value of MM7 <StatusCode> in the response to a MT submission (e.g. SubmitRsp).Used in mm7_log_delivery and mm7_handle_submitRsp hook 2. Value of MM7 <MMStatus> in DeliveryReportReq. Used in mm7_log_status and mm7_request_eval hook |
| MM7_Response_Status_Detail | VCTX_KEY_MM7_RESPONSE_STATUS_DETAIL | 1\. Value of MM7 status <Details> in the response to a MT submission (e.g. SubmitRsp).The significance of this value is for logging only, e.g. assign value in mm7_handle_submitRsp, retrieve and log it in mm7_log_delivery. 2\. Value of MM7 <StatusText> in DeliveryReportReq. Used in mm7_log_status and mm7_request_eval hooks |
| MM7_Response_Message_ID | VCTX_KEY_MM7_RESPONSE_MESSAGE_ID | MM7 <MessageID>. It is assigned by the remote MMSC in a response to an MT submission,and present in subsequent DeliverReq or DeliveryReportReq to link to the original MT submission. Used for logging. |
| MM7_MIME_Length | VCTX_KEY_MM7_MIME_LENGTH | the MIME length of the MM7 MT message. Used for logging |
| MM7_MMSC_IP_Address | VCTX_KEY_MM7_MMSC_IP_ADDRESS | the remote MMSC IP address. Used for logging reception |
| #mms_dr_latency |   | delivery report latency string. Used for logging purpose only |
| MM7_Original_Message_ID |   | The ec_message ID of a MM7 SubmitReq MT message. Used by the mms_log_bounce_outband hook for logging purpose. |