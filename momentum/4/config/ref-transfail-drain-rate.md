---
title: "transfail_drain_rate"
description: "transfail drain rate the maximum number of messages to pop off the transient failure queue in a single scheduler iteration transfail drain rate 100 The maximum number of messages to pop off the transient failure queue in a single scheduler iteration mitigating the potential for watchdog timeout The default value..."
---

<a name="conf.ref.transfail_drain_rate"></a> 
## Name

transfail_drain_rate — the maximum number of messages to pop off the transient failure queue in a single scheduler iteration

## Synopsis

`transfail_drain_rate = 100`

<a name="idp27116112"></a> 
## Description

The maximum number of messages to pop off the transient failure queue in a single scheduler iteration, mitigating the potential for watchdog timeout.

The default value is `100`.

<a name="idp27118976"></a> 
## Scope

transfail_drain_rate is valid in the global scope.

<a name="idp27120816"></a> 
## See Also

[inline_transfail_processing](conf.ref.inline_transfail_processing "inline_transfail_processing") and [max_resident_transfails](conf.ref.max_resident_transfails "max_resident_transfails")