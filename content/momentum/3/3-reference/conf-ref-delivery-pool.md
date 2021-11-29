---
lastUpdated: "03/26/2020"
title: "delivery_pool"
description: "delivery pool associate an eventloop with mail delivery delivery pool pool Configuration Change This option is available as of version 3 6 In order to use this option you must have a Supercharger license For more see Section 2 4 Configuring for Multiple Event Loops in Momentum 3 6 This..."
---

<a name="conf.ref.delivery_pool"></a> 
## Name

delivery_pool — associate an eventloop with mail delivery

## Synopsis

`delivery_pool = "pool"`

<a name="idp8880800"></a> 
## Description

**Configuration Change. ** This option is available as of version 3.6.

### Note

In order to use this option you must have a "Supercharger" license. For more see [“Configuring for Multiple Event Loops in Momentum 3.6”](/momentum/3/3-reference/conf-multi-core).

This option is used in a multiple event loop configuration. To perform delivery in the eventloop, assign `delivery_pool` the name of your `eventloop`. There is no default value for the `delivery_pool` option. A configuration example follows:

```
eventloop "pool" {
  concurrency = 10
}

delivery_pool = "pool"

esmtp_listener {
  event_loop = "pool"
  ...
}
```

Set `concurrency` in the eventloop scope to a number equal to or less than the number of computer cores.

### Note

Changing the value of `delivery_pool` at runtime requires restarting the ecelerity process—issuing the ec_console command **`config reload`**         will not suffice.

Note that the `event_loop` option within the listener scope ensures that *reception* is associated with the event loop pool.

<a name="idp8891728"></a> 
## Scope

`delivery_pool` is valid in the global scope.

<a name="idp8893376"></a> 
## See Also

[eventloop](/momentum/3/3-reference/conf-ref-eventloop) and [“Configuring for Multiple Event Loops in Momentum 3.6”](/momentum/3/3-reference/conf-multi-core)