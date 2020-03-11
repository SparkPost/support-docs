---
title: "Chapter 11. SMPP Log Tempfail Hook"
description: "This hook is used to log SMPP MT submissions which are temporarily failed based on the remote response to the MT submission a SUBMIT SM RESP or hook return values A temporarily failed message will be requeued and retried..."
---

[navigation post_type="momentum_article" path="/momentum/mobile/developer-guide/SMPPLogTempfailHook"]

## <a name="SMPPLogTempfailHook.purpose"></a> 11.1. Purpose

This hook is used to log SMPP MT submissions which are temporarily failed based on the remote response to the MT submission, a SUBMIT_SM_RESP, or hook return values. A temporarily failed message will be requeued and retried.