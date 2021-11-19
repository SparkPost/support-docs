---
lastUpdated: "03/26/2020"
title: "SMPP Log Outband Bounce Hook"
description: "An SMS MO request from a remote SMSC is treated as out of band When such a message fails it is logged to the bounce log Currently this hook is triggered when a delivery receipt is received with the message state failed Another hook smpp log status logs the message..."
---


## <a name="SMPPLogOutbandBounceHook.purpose"></a> Purpose

An SMS MO request from a remote SMSC is treated as out of band. When such a message fails, it is logged to the bounce log. Currently, this hook is triggered when a delivery receipt is received with the message_state "failed". Another hook, `smpp_log_status`, logs the message_state and writes to the main log.