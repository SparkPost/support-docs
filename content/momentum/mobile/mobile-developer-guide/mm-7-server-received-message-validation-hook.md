---
lastUpdated: "03/26/2020"
title: "MM7 Server Received Message Validation Hook"
description: "The MM 7 Server Received Message Validation Hook actually utilizes the Momentum's validate data spool each rcpt hook point to enable the user to inspect the incoming MM 7 request and perform context validation on a per recipient basis for example performing a anti virus check This hook is invoked..."
---


## <a name="MM7ServerReceivedMessageValidationHook.purpose"></a> Purpose

The MM7 Server Received Message Validation Hook actually utilizes the Momentum's validate_data_spool_each_rcpt hook point to enable the user to inspect the incoming MM7 request and perform context validation on a per-recipient basis, for example, performing a anti-virus check. This hook is invoked once during ec_message generation for each intended recipient of the request. To implement this hook, the user must implement the validate_data_spool_each_rcpt hook and put all the validation logic for the MM7 request into a control block for MM7 protocol only. See the examples in [“Examples”](/momentum/mobile/mobile-developer-guide/mm-7-server-received-message-validation-hook-examples). Logic outside of the protocol check block will affect all incoming requests in other protocols.