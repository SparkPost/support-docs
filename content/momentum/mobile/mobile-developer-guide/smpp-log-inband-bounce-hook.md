---
lastUpdated: "03/26/2020"
title: "SMPP Log Inband Bounce Hook"
description: "An SMS MT message submitted by Mobile Momentum is treated as an inband message When such a submission is failed permanently it will be logged in the SMPP bounce log as well as the SMPP mainlog through default hook implementation of the SMPP log permfail hook smpp log permfail This..."
---


## <a name="SMPPLogInbandBounceHook.purpose"></a> Purpose

An SMS MT message submitted by Mobile Momentum is treated as an inband message. When such a submission is failed permanently, it will be logged in the SMPP bounce log, as well as the SMPP mainlog through default hook implementation of the SMPP log permfail hook (`smpp_log_permfail`). This hook is triggered in the same way as the SMPP log permfail hook. The command_status from a remote response or a hook return value indicates that an SMS MT submission submission has permanently failed. The differences between the inband bounce and the permanent failure hooks are:

*   log destination (one to mainlog, one to bounce log)

*   log format (defined by the configuration)