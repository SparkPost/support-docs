---
lastUpdated: "03/26/2020"
title: "delivery_pool"
description: "delivery pool associate a pool of event loops with email delivery to use multiple threads delivery pool pool name To use this option you must have a Supercharger license This option is used in a multiple event loop configuration To configure threading for email delivery assign delivery pool the name..."
---

<a name="config.ref.delivery_pool"></a> 
## Name

delivery_pool — associate a pool of event loops with email delivery to use multiple threads

## Synopsis

`delivery_pool = "pool_name"`

<a name="idp24212000"></a> 
## Description

### Note

To use this option, you must have a Supercharger license.

This option is used in a multiple event loop configuration. To configure threading for email delivery, assign `delivery_pool` the name of your `eventloop`. Note that the name must match what was defined in the EventLoop configuration. See [eventloop](/momentum/4/config/ref-eventloop).

For an example multiple event loop configuration, see [*Configuring Multiple Event Loops*](/momentum/4/multi-event-loops) .

### Note

If you change the value of `delivery_pool` at runtime, you must restart the ecelerity process using the executable command [ec_ctl](/momentum/4/executable/ec-ctl). Note: issuing the ec_console command **config reload**        will not work.

There is no default value for this option.

<a name="idp24220448"></a> 
## Scope

`delivery_pool` is valid in the global scope.

<a name="idp24222256"></a> 
## See Also

[eventloop](/momentum/4/config/ref-eventloop)