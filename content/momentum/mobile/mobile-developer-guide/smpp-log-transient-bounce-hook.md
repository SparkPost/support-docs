---
lastUpdated: "03/26/2020"
title: "SMPP Log Transient Bounce Hook"
description: "Because a temporarily failed SMPP MT submission is retried it is considered a transient or temporary failure Such a failure will be logged in the bounce log as well as logged into main log through the default hook implementation of the SMPP log tempfail hook smpp log tempfail This hook..."
---


## <a name="SMPPLogTransientBounceHook.purpose"></a> Purpose

Because a temporarily failed SMPP MT submission is retried, it is considered a transient or temporary failure. Such a failure will be logged in the bounce log, as well as logged into main log through the default hook implementation of the SMPP log tempfail hook (`smpp_log_tempfail`). This hook is triggered in the same way as the SMPP log tempfail hook. The command_status from a remote response or a hook return value indicates that an SMPP MT submission has temporarily failed. The differences between an SMPP log tempfail hook and an SMPP Log Transient Bounce Hook are as follows:

*   the log destination (one is logged to the main log, the other to the bounce log)

*   the log format (as defined by the configuration).