---
lastUpdated: "03/26/2020"
title: "Configuration Options"
description: "Momentum provides a rich set of configuration options Some options are simple configuration options while other configuration options are more complex such as defining data structures These configuration options can be defined in the following scopes global domain host binding binding group security pathway pathway group listener listen peer threadpool..."
---

Momentum provides a rich set of configuration options. Some options are simple configuration options, while other configuration options are more complex, such as defining data structures.

These configuration options can be defined in the following scopes: global, domain, host, binding, binding_group, security, pathway, pathway_group, listener, listen, peer, threadpool, debug_flags, and cluster, as well as in listener-specific scopes. The various modules that extend the functionality of Momentum are also valid scopes.

### Note

All configuration options are case insensitive. For example, you can define an SMTP listener as `ESMTP_Listener` or `esmtp_listener`.

The default configuration files provide default values such that there should be very few changes required to start sending mail through the Momentum server. However, there are a few parameters you will almost certainly need to change:

*   [relay_host](/momentum/4/outbound-mail-relay-hosts)

*   [relay_domains](/momentum/4/esmtp-listener-relay-domains)

*   [Authentication](/momentum/4/inbound-smtp)

Many other configuration options can be modified, as discussed throughout this manual.

For a summary of all the non-module specific configuration options, refer to [*Configuration Options Summary*](/momentum/4/config-options-summary) .

Modules and their configuration options are discussed in the [*Modules Reference*](/momentum/4/modules/) .

Modify the configuration options in the specific configuration file or use the **config** command for online configuration tuning. For details about this command, see [config](/momentum/4/console-commands/config).