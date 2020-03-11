---
title: "Chapter 19. MM7 MT Submit Response Hook"
description: "The MM 7 MT Submit Response Hook is invoked following the parsing of an MM 7 response to an MM 7 MT message and before regular processing of the response It enables inspection of message submission response status for the purposes of initiating requeue retry of failed message submissions and..."
---

[navigation post_type="momentum_article" path="/momentum/mobile/developer-guide/MM7ClientSubmitResponseHook"]

## <a name="MM7ClientSubmitResponseHook.purpose"></a> 19.1. Purpose

The MM7 MT Submit Response Hook is invoked following the parsing of an MM7 response to an MM7 MT message and before regular processing of the response. It enables inspection of message submission response status for the purposes of initiating requeue/retry of failed message submissions and other business logic if required. This hook has ec_message as input and therefore has full access to the context variables such as `MM7_Response_Message_ID`. The following context variables are assigned or modified by this hook in order to affect subsequent processes:

<a name="MM7_MT_Submit_Response_Context_Variables"></a> 

**Table 19.1. MM7 MT Submit Response Context Variables**

| Context Key Name | "#define" name | Description |
| --- | --- | --- |
| MM7_Response_Status | VCTX_KEY_MM7_RESPONSE_STATUS | value of MM7 <StatusCode> in the response |
| MM7_Response_Status_Detail | VCTX_KEY_MM7_RESPONSE_STATUS_DETAIL | value of MM7 status <Details> in the response.The significance of this value is for logging only |
| MM7_Response_Message_ID | VCTX_KEY_MM7_RESPONSE_MESSAGE_ID | the remote MM7 <MessageID> in the response.It will be logged and used to identify the linked request (e.g. DeliveryReport from remote MMSC) |