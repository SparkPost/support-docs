---
lastUpdated: "03/26/2020"
title: "transfail_drain_rate"
description: "transfail drain rate the maximum number of messages to pop off the transient failure queue in a single scheduler iteration transfail drain rate 100 The maximum number of messages to pop off the transient failure queue in a single scheduler iteration mitigating the potential for watchdog timeout The default value..."
---

<a name="conf.ref.transfail_drain_rate"></a> 
## Name

transfail_drain_rate — the maximum number of messages to pop off the transient failure queue in a single scheduler iteration

## Synopsis

`transfail_drain_rate = 100`

<a name="idp12282448"></a> 
## Description

The maximum number of messages to pop off the transient failure queue in a single scheduler iteration, mitigating the potential for watchdog timeout.

The default value for this option is `100`.

<a name="idp12285072"></a> 
## Scope

transfail_drain_rate is valid in the global scope.

<a name="idp12286720"></a> 
## See Also

[inline_transfail_processing](/momentum/3/3-reference/3-reference-conf-ref-inline-transfail-processing) and [max_resident_transfails](/momentum/3/3-reference/3-reference-conf-ref-max-resident-transfails)