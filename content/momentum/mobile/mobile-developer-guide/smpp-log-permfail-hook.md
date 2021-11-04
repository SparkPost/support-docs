---
lastUpdated: "03/26/2020"
title: "SMPP Log Permfail Hook"
description: "This hook is used to log SMPP MT submissions which are permanently failed Permanent failure is determined by the remote response to the MT submission or by the hook return values A permanently failed message will not be requeued or retried it will be discarded and no further action taken..."
---


## <a name="SMPPLogPermfailHook.purpose"></a> Purpose

This hook is used to log SMPP MT submissions which are permanently failed. Permanent failure is determined by the remote response to the MT submission or by the hook return values. A permanently failed message will not be requeued or retried; it will be discarded and no further action taken.