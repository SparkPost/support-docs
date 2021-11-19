---
lastUpdated: "03/26/2020"
title: "large_message_threshold"
description: "large message threshold Consider a message large when its size exceeds this amount large message threshold 131072 For performance reasons Momentum prefers to keep message contents in memory From time to time messages that are much larger than average enter the system Such messages may either be transiently rejected because..."
---

<a name="conf.ref.large_message_threshold"></a> 
## Name

large_message_threshold — Consider a message large when its size exceeds this amount

## Synopsis

`large_message_threshold = 131072`

<a name="idp9923056"></a> 
## Description

For performance reasons, Momentum prefers to keep message contents in memory. From time to time, messages that are much larger than average enter the system. Such messages may either be transiently rejected (because they cannot fit in memory) or increase demands on memory and have an adverse affect on overall system performance.

In order to avoid this, Momentum can use alternative techniques for working with messages that are larger than the `large_message_threshold`. Large messages pass through the system a little more slowly (wallclock time) than their regular counterparts, mitigating their impact on the rest of the system.

If the majority of your messages are larger than the default threshold of 131072 bytes, then you should adjust the threshold upwards so that the system will run more efficiently.

The default for this option is 131072 bytes.

<a name="idp9927568"></a> 
## Scope

large_message_threshold is valid in the global scope.

<a name="idp9929216"></a> 
## See Also

[growbuf_size](/momentum/3/3-reference/3-reference-conf-ref-growbuf-size), [legacy_message_threshold](/momentum/3/3-reference/3-reference-conf-ref-legacy-message-threshold)