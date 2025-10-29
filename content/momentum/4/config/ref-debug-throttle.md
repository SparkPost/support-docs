---
lastUpdated: "12/31/2025"
title: "Throttling Debug Messages"
description: "Configure throttling to tell Momentum how to suppress repeated debug messages. When using the default logging module the messages will appear in the paniclog. The throttle is a decimal number representing the maximum number of repeated debug messages to log within a specified time interval"
---

When using the default logging module, debug messages will appear in the [paniclog](/momentum/4/log-formats-paniclog)
depending on subsystem and level settings configured in [Debug_Flags](/momentum/4/config/ref-debug-flags). `Debug_Flags` is
usually empty, so very few events are written to the `paniclog`. However, under certain circumstances, you need to get more
information about some subsystem's behavior (e.g., SMTP), then by setting `Debug_Flags`, you can enable more verbose logging
into `paniclog`. On the other hand, depending on the chosen level, `paniclog` may get populated with several lines of the same
message, including some that might not be of your interest.

Momentum’s debug throttling configuration allows you to suppress repeated debug messages. The throttle suppresses the logging
of repeated messages beyond a specified limit during a time interval also specified. It is a global setting that applies to
messages of all subsystems.

> **NOTE:** Debug throttling global configuration **DOES NOT** apply to messages logged at the `CRITICAL`, `ERROR`, or
> `WARNING` levels of any subsystem, due to their relevance for operation and diagnosis.

It is important to note that debug throttling is applied not necessarily to *identical* messages, but to messages that are
considered the same after removing variable parts such as timestamps, IP addresses, or other dynamic content. In other words,
if the source of the message is something like this:

```
<timestamp> Message received from: <mailfrom>
```

then all messages that match this pattern will be considered the same for throttling purposes, regardless of the actual
values of `<timestamp>` and `<mailfrom>`. This ensures that the throttling mechanism effectively reduces log noise while still capturing relevant information.

<a name="conf.ref.debug_throttle"></a>
# Configuration options

Debug throttling is configured using the following options in the global scope of your `ecelerity.conf` file:
- **debug_throttle_max_num_same_message**
- **debug_throttle_period_secs**

<a name="conf.ref.debug_throttle_max_num_same_message"></a> 
## Maximum number of the same message

<a name="conf.ref.debug_throttle_max_num_same_message.name"></a> 
### Name

`debug_throttle_max_num_same_message`

<a name="conf.ref.debug_throttle_max_num_same_message.description"></a> 
### Description

Sets the maximum number of repeated debug messages to log within a specified time interval. The default is `0`, which means no
throttling is applied to the logging of repeated debug messages.

<a name="conf.ref.debug_throttle_period_secs.example"></a>
### Example

```
debug_throttle_max_num_same_message = 5
```

With this configuration, only five lines debug messages will be logged during the time interval specified by
`debug_throttle_period_secs`.

<a name="conf.ref.debug_throttle_period_secs"></a> 
## Time interval of throttling

<a name="conf.ref.debug_throttle_period_secs.name"></a> 
### Name
`debug_throttle_period_secs`

<a name="conf.ref.debug_throttle_period_secs.description"></a>
### Description

Sets the time interval in seconds during which repeated debug messages are counted for throttling purposes. The default is
`1` second, with a maximum of `60` seconds.

<a name="conf.ref.debug_throttle_period_secs.example"></a>
### Example
```
debug_throttle_period_secs = 30
```
With this configuration, the time interval for counting repeated debug messages is set to 30 seconds. Combined with the previous example, only five lines of the same debug message will be logged every 30 seconds.

<a name="conf.ref.debug_throttle.scope"></a> 
# Scope

debug_flags is valid in the global scope.
