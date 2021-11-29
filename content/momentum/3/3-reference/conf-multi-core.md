---
lastUpdated: "03/26/2020"
title: "Configuring for Multiple Event Loops in Momentum 3.6"
description: "Configuration Change This feature is available as of version 3 6 Prior to version 3 6 Momentum uses a single event scheduler thread With the ready availability of increasing numbers of CPU cores this single thread architecture can underutilized CPU capacity The aim of a multiple event loop configuration is..."
---

**Configuration Change. ** This feature is available as of version 3.6.

Prior to version 3.6, Momentum uses a single event-scheduler thread. With the ready availability of increasing numbers of CPU cores, this single thread architecture can underutilized CPU capacity. The aim of a multiple event loop configuration is to extend Momentum so that it scales with multi-core CPUs so that the overall performance of Momentum is not limited by the event scheduler thread. This is done by creating a pool of event scheduler instances that are running in separate threads. Tasks that are performed in the event scheduler thread will now be farmed out to this pool of scheduler instances. These tasks include, message reception, message delivery, mail queue maintenance, DNS lookup and event operations performed by modules.

**Supported Platforms**

The platforms that support multiple event loops are Red Hat Enterprise Linux 5 (x86_64) and Red Hat Enterprise Linux 6 (x86_64). Configuring Momentum for multiple cores requires an additional license ((the "Supercharger" license)). This license specifies a maximum number of event loops. When configuring an event loop, the `concurrency` option cannot exceed the licensed number of event loops. For a discussion of the Momentum license file see [“Installing the License File”](/momentum/3/3-reference/install-prepare#install.license). Currently, you cannot use the web UI to configure multiple event loops. See [“Best Practices for Manually Changing Configuration Files”](/momentum/3/3-reference/conf-manual-changes) for instructions on changing configuration files.

### Warning

You cannot use Sieve with multiple event loops. If you include the Sieve module in your configuration file, Momentum will not start up and a warning will be written to the panic log. If you are upgrading to a multiple event loop configuration of Momentum, be sure to remove the Sieve module from your configuration file.

If you have purchased the additional license and wish to take advantage of multiple event loops you must make configuration changes after upgrading to version 3.6\. Find below a typical configuration.

<a name="multi-core.example.receive"></a> 


```
threadpool accept {
  concurrency = 1
}

eventloop "pool" {
  concurrency = 10
}
# associate mail delivery and maintener_pool with eventloop
delivery_pool = "pool"
maintainer_pool = "pool"

esmtp_listener {
  # associate this listener with the eventloop 
  event_loop = "pool"
  ...

  listen ":25" {
    concurrency = 1
    pool_name = "accept"
  }
}
```

In the preceding code an event loop pool is defined and this pool is associated with an SMTP listener, SMTP delivery and a maintainer threadpool. The `delivery_pool` option handles threading for email delivery, the `event_loop` option inside the listener scope handles threading for email reception and the `maintainer_pool` option handles threading for other operations.

The new options introduced in version 3.6 to support multiple event loops configuration are:

*   [eventloop](/momentum/3/3-reference/conf-ref-eventloop)

*   [delivery_pool](/momentum/3/3-reference/conf-ref-delivery-pool)

*   [maintainer_pool](/momentum/3/3-reference/conf-ref-maintainer-pool)

*   [event_loop](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listeners.multi-core)

For more information follow the preceding links.