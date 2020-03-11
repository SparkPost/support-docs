---
title: "Chapter 16. SMPP Received Message Validation Hook"
description: "The SMPP Received Message Validation Hook utilizes Momentum's validate data spool each rcpt hook point to enable inspection of the incoming SMPP request and to do content validation such as running an anti virus scan This can be done for each recipient This hook is invoked once during ec message..."
---

[navigation post_type="momentum_article" path="/momentum/mobile/developer-guide/SMPPReceivedMessageValidationHook"]

## <a name="SMPPReceivedMessageValidationHook.purpose"></a> 16.1. Purpose

The SMPP Received Message Validation Hook utilizes Momentum's `validate_data_spool_each_rcpt` hook point to enable inspection of the incoming SMPP request and to do content validation such as running an anti-virus scan. This can be done for each recipient. This hook is invoked once during ec_message generation for each intended recipient. To implement this hook, implement the validate_data_spool_each_rcpt hook and put all the validation logic for an SMPP inbound message into a control block for SMPP protocol only as show in [Section 16.3, “Examples”](SMPPReceivedMessageValidationHook.examples "16.3. Examples"). Logic outside of the protocol check block will affect all the incoming requests in other protocols.