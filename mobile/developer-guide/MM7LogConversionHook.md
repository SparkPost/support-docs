---
title: "Chapter 23. MM7 Log Conversion Hook"
description: "This hook logs message conversion from or to an MM 7 SOAP message The default logger implementation will either log the event as mm 7 to ec message or ec message to mm 7 based on the value of recv method in the ec message If the ec message originates..."
---

[navigation post_type="momentum_article" path="/momentum/mobile/developer-guide/MM7LogConversionHook"]

## <a name="MM7LogConversionHook.purpose"></a> 23.1. Purpose

This hook logs message conversion from or to an MM7 SOAP message. The default logger implementation will either log the event as "mm7 to ec_message" or "ec_message to mm7", based on the value of `recv_method` in the ec_message. If the ec_message originates from a MM7 endpoint—the `recv_method` equals `P_MM7`—"mm7 to ec_message" is logged. Otherwise, "ec_message to mm7" is logged. Overwrite this hook if you want to log message conversion differently.