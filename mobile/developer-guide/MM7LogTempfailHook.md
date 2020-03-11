---
title: "Chapter 28. MM7 Log Tempfail Hook"
description: "This hook is used to log MM 7 MT submissions which are temporarily failed Failure is determined by the remote response to the MT submission or by the hook return value from mm 7 handle submit Rsp A temporarily failed message will be requeued and retried..."
---

[navigation post_type="momentum_article" path="/momentum/mobile/developer-guide/MM7LogTempfailHook"]

## <a name="MM7LogTempfailHook.purpose"></a> 28.1. Purpose

This hook is used to log MM7 MT submissions which are temporarily failed. Failure is determined by the remote response to the MT submission or by the hook return value from `mm7_handle_submitRsp`. A temporarily failed message will be requeued and retried.