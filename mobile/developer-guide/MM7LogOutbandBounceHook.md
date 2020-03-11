---
title: "Chapter 21. MM7 Log Outband Bounce Hook"
description: "An MM 7 MO request from a remote MMSC is treated as out of band A failure is logged to the bounce log This hook is triggered when a Delivery Report Req is received with an MM Status value of Expired Rejected Unrecognised or Delivery Condition Not Met..."
---

[navigation post_type="momentum_article" path="/momentum/mobile/developer-guide/MM7LogOutbandBounceHook"]

## <a name="MM7LogOutbandBounceHook.purpose"></a> 21.1. Purpose

An MM7 MO request from a remote MMSC is treated as out-of-band. A failure is logged to the bounce log. This hook is triggered when a DeliveryReportReq is received with an <MMStatus> value of "Expired", "Rejected", "Unrecognised" or "DeliveryConditionNotMet".