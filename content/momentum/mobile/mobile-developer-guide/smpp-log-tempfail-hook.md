---
lastUpdated: "03/26/2020"
title: "SMPP Log Tempfail Hook"
description: "This hook is used to log SMPP MT submissions which are temporarily failed based on the remote response to the MT submission a SUBMIT SM RESP or hook return values A temporarily failed message will be requeued and retried..."
---


## <a name="SMPPLogTempfailHook.purpose"></a> Purpose

This hook is used to log SMPP MT submissions which are temporarily failed based on the remote response to the MT submission, a SUBMIT_SM_RESP, or hook return values. A temporarily failed message will be requeued and retried.