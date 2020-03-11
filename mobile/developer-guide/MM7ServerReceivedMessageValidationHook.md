---
title: "Chapter 30. MM7 Server Received Message Validation Hook"
description: "The MM 7 Server Received Message Validation Hook actually utilizes the Momentum's validate data spool each rcpt hook point to enable the user to inspect the incoming MM 7 request and perform context validation on a per recipient basis for example performing a anti virus check This hook is invoked..."
---

[navigation post_type="momentum_article" path="/momentum/mobile/developer-guide/MM7ServerReceivedMessageValidationHook"]

## <a name="MM7ServerReceivedMessageValidationHook.purpose"></a> 30.1. Purpose

The MM7 Server Received Message Validation Hook actually utilizes the Momentum's validate_data_spool_each_rcpt hook point to enable the user to inspect the incoming MM7 request and perform context validation on a per-recipient basis, for example, performing a anti-virus check. This hook is invoked once during ec_message generation for each intended recipient of the request. To implement this hook, the user must implement the validate_data_spool_each_rcpt hook and put all the validation logic for the MM7 request into a control block for MM7 protocol only. See the examples in [Section 30.3, “Examples”](MM7_Server_Received_Message_Validation_Hook.examples "30.3. Examples"). Logic outside of the protocol check block will affect all incoming requests in other protocols.