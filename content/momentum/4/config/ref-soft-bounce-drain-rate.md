---
lastUpdated: "03/26/2020"
title: "soft_bounce_drain_rate"
description: "soft bounce drain rate how many soft bounces to place into the mail queues in a single scheduler iteration soft bounce drain rate 100 When async bounce rendering is enabled soft bounces are queued internally This option defines how many are pulled from the internal queue and placed into the..."
---

<a name="conf.ref.soft_bounce_drain_rate"></a> 
## Name

soft_bounce_drain_rate — how many soft bounces to place into the mail queues in a single scheduler iteration

## Synopsis

`soft_bounce_drain_rate = 100`

<a name="idp26603984"></a> 
## Description

When `async_bounce_rendering` is enabled, soft bounces are queued internally. This option defines how many are pulled from the internal queue and placed into the mail queues in a single scheduler iteration.

The default value is `100`.

<a name="idp26607328"></a> 
## Scope

`soft_bounce_drain_rate` is valid in the global scope.

<a name="idp26609584"></a> 
## See Also

[async_bounce_rendering](/momentum/4/config/ref-async-bounce-rendering)