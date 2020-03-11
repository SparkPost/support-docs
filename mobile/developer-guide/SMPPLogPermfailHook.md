---
title: "Chapter 8. SMPP Log Permfail Hook"
description: "This hook is used to log SMPP MT submissions which are permanently failed Permanent failure is determined by the remote response to the MT submission or by the hook return values A permanently failed message will not be requeued or retried it will be discarded and no further action taken..."
---

[navigation post_type="momentum_article" path="/momentum/mobile/developer-guide/SMPPLogPermfailHook"]

## <a name="SMPPLogPermfailHook.purpose"></a> 8.1. Purpose

This hook is used to log SMPP MT submissions which are permanently failed. Permanent failure is determined by the remote response to the MT submission or by the hook return values. A permanently failed message will not be requeued or retried; it will be discarded and no further action taken.