---
lastUpdated: "03/26/2020"
title: "legacy_message_threshold"
description: "legacy message threshold The maximum size allowed for messages being passed to legacy modules legacy message threshold 1048576 For performance reasons Momentum prefers to keep message contents in memory From time to time messages that are much larger than the average for a given Momentum instance enter the system and..."
---

<a name="conf.ref.legacy_message_threshold"></a> 
## Name

legacy_message_threshold — The maximum size allowed for messages being passed to legacy modules

## Synopsis

`legacy_message_threshold = 1048576`

<a name="idp24990304"></a> 
## Description

For performance reasons, Momentum prefers to keep message contents in memory. From time to time, messages that are much larger than the average for a given Momentum instance enter the system, and may either be transiently rejected (because it cannot fit in memory) or otherwise increase memory pressure and have an adverse affect on the system performance.

In order to avoid this, Momentum can use alternative techniques for working with messages that are larger than the `large_message_threshold`. Large messages are transited through the system a little slower (wallclock time) than their regular counterparts, but don't have a significant impact on the rest of the system.

Large messages need to be pulled entirely into memory first, which increases the memory pressure and may harm the performance of your system. The `legacy_message_threshold` configuration option sets the maximum allowed size for messages being processed in this way, and defaults to 1MB. If a message is passed to a legacy module and its size exceeds this threshold value, the processing of that message is failed and the error pushed back to the caller. This typically results in a transient failure with the message "421 4.3.0 message is too large to process at this time."

Note that in previous Momentum releases, this option was effectively set to indicate that any message size could be passed, subject to the system having enough available memory.

The default is 1048576 bytes.

<a name="idp24996304"></a> 
## Scope

legacy_message_threshold is valid in the global scope.

<a name="idp24998144"></a> 
## See Also

[growbuf_size](/momentum/4/config/ref-growbuf-size), [large_message_threshold](/momentum/4/config/ref-large-message-threshold)