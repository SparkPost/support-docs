---
lastUpdated: "03/26/2020"
title: "event_loop"
description: "event loop associate a pool of event loops within a listener scope to use multiple threads event loop pool name To use this option you must have a Supercharger license This option is used in a multiple event loop configuration To configure threading for email reception assign event loop the..."
---

<a name="config.ref.event_loop"></a> 
## Name

event_loop — associate a pool of event loops within a listener scope to use multiple threads

## Synopsis

`event_loop = "pool_name"`

<a name="idp24492896"></a> 
## Description

### Note

To use this option, you must have a Supercharger license.

This option is used in a multiple event loop configuration. To configure threading for email reception, assign `event_loop` the name of your `eventloop` inside a listener scope. Note that the name must match what was defined in the EventLoop configuration. See [eventloop](/momentum/4/config/ref-eventloop).

The following is an example configuration clause:

```
ESMTP_Listener {
  # Multi-threading - use event loops in ESMTP listener
  event_loop = "event_loops"

  .
  .
  .
```

For an example multiple event loop configuration, see [*Configuring Multiple Event Loops*](/momentum/4/multi-event-loops) .

### Note

If you change the value of `event_loop` at runtime, you must restart the ecelerity process using the executable command [ec_ctl](/momentum/4/executable/ec-ctl). Note: issuing the ec_console command **config reload**        will not work.

There is no default value for this option.

<a name="idp24502416"></a> 
## Scope

`event_loop` is valid in the esmtp_listener, the ecstream_listener, the http_listener and the listen scopes within those scopes.

<a name="idp24504320"></a> 
## See Also

[eventloop](/momentum/4/config/ref-eventloop)