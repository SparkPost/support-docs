---
lastUpdated: "03/26/2020"
title: "eventloop"
description: "eventloop define a pool of event loops to enable multiple event loop configuration Configuration Change This option is available as of version 3 6 In order to use this option you must have a Supercharger license This license specifies a maximum number of event loops When configuring an event loop..."
---

<a name="conf.ref.eventloop"></a> 
## Name

eventloop — define a pool of event loops to enable multiple event loop configuration

<a name="idp9512720"></a> 
## Description

**Configuration Change. ** This option is available as of version 3.6.

### Note

In order to use this option you must have a "Supercharger" license. This license specifies a maximum number of event loops. When configuring an event loop, the `concurrency` option in the eventloop scope cannot exceed the licensed number of event loops. For more information see [“Configuring for Multiple Event Loops in Momentum 3.6”](/momentum/3/3-reference/conf-multi-core).

Use this scope to define a pool of event loops to create a multiple event loop configuration. This eventloop is then associated with specific tasks such as SMTP reception as shown in the following example:

```
threadpool "accept" {
  concurrency = 1
}

eventloop "pool" {
  concurrency = 10
}

delivery_pool = "pool"
maintainer_pool = "pool"

esmtp_listener {
  event_loop = "pool"

  listen ":25" {
    concurrency = 1
    pool_name = "accept"
  }
}
```

In general we recommend defining only one eventloop pool. The only option valid in the eventloop scope is `concurrency`. Set the `concurrency` option to a value equal to approximately 75% of the total number of CPUs in the system. If the value of the `concurrency` option exceeds the licensed number of event loops you will see an error message in the log file such as the following:

```
[Wed 19 Jun 2013 11:02:47] <0x29b7510> Event loop license violation
[Wed 19 Jun 2013 11:02:47] <0x29b7510> Invalid license [Event Loop
Concurrency]
[Wed 19 Jun 2013 11:02:47] <0x29b7510> License machine mismatch
```

In the preceding code an event loop pool is defined and this pool is associated with an SMTP listener, SMTP delivery and a maintainer threadpool. The `delivery_pool` option handles threading for email delivery, the `event_loop` option inside the listener scope handles threading for email reception and the `maintainer_pool` option handles threading for other operations.

### Note

An eventloop cannot be defined at runtime and its `concurrency` cannot be changed at runtime. Changing these options requires restarting the ecelerity process—issuing the ec_console command **config reload**        will not suffice.

<a name="idp9525328"></a> 
## Scope

`eventloop` is valid in the global scope.

<a name="idp9526976"></a> 
## See Also

[delivery_pool](/momentum/3/3-reference/conf-ref-delivery-pool) and [maintainer_pool](/momentum/3/3-reference/conf-ref-maintainer-pool)