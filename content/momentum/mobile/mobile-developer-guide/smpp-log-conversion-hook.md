---
lastUpdated: "03/26/2020"
title: "SMPP Log Conversion Hook"
description: "This hook logs a message conversion event either from SMPP to SMS or the reverse The default logger implementation either log the event as smpp to ec message or ec message to smpp For MO an smpp to ec message event is logged for MT an ec message to smpp..."
---


## <a name="SMPPLogConversionHook.purpose"></a> Purpose

This hook logs a message conversion event, either from SMPP to SMS or the reverse. The default logger implementation either log the event as "smpp to ec_message" or "ec_message to smpp". For MO, an "smpp to ec_message" event is logged; for MT, an "ec_message to smpp" event is logged. Overwrite this hook if you want to log message conversion differently.