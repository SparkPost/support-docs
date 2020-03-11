---
title: "Chapter 25. MM7 Log Permfail Hook"
description: "This hook is similar to the mms log permfail hook and is used to log MM 7 MT submissions which are permanently failed based on the remote response to the MT submission or the hook return value from mm 7 handle submit Rsp A permanently failed message will not be..."
---

[navigation post_type="momentum_article" path="/momentum/mobile/developer-guide/MM7LogPermfailHook"]

## <a name="MM7LogPermfailHook.purpose"></a> 25.1. Purpose

This hook is similar to the mms_log_permfail hook and is used to log MM7 MT submissions which are permanently failed based on the remote response to the MT submission or the hook return value from `mm7_handle_submitRsp`. A permanently failed message will not be requeued or retried; it will be discarded and no further action will be taken.