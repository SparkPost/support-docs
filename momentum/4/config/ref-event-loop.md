---
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

This option is used in a multiple event loop configuration. To configure threading for email reception, assign `event_loop` the name of your `eventloop` inside a listener scope. Note that the name must match what was defined in the EventLoop configuration. See [eventloop](config.ref.eventloop "eventloop").

The following is an example configuration clause:

```
ESMTP_Listener {
  # Multi-threading - use event loops in ESMTP listener
  event_loop = "event_loops"

  .
  .
  .
```

For an example multiple event loop configuration, see [Chapter 24, *Configuring Multiple Event Loops*](multi_event_loops "Chapter 24. Configuring Multiple Event Loops") .

### Note

If you change the value of `event_loop` at runtime, you must restart the ecelerity process using the executable command [ec_ctl](executable.ec_ctl "ec_ctl"). Note: issuing the ec_console command **config reload**        will not work.

There is no default value for this option.

<a name="idp24502416"></a> 
## Scope

`event_loop` is valid in the esmtp_listener, the ecstream_listener, the http_listener and the listen scopes within those scopes.

<a name="idp24504320"></a> 
## See Also

[eventloop](config.ref.eventloop "eventloop")