---
lastUpdated: "03/26/2020"
title: "ecelerity.conf File"
description: "The ecelerity conf file is the master configuration file for the Momentum application server It contains general configuration for Momentum along with other configuration files included from within ecelerity conf The default search path for the configuration file is Configuration options defined at the top level of the ecelerity conf..."
---

The `ecelerity.conf` file is the master configuration file for the Momentum application server. It contains general configuration for Momentum, along with other configuration files included from within `ecelerity.conf`.

The default search path for the configuration file is:

```
/opt/msys/ecelerity/etc/conf/global:/opt/msys/ecelerity/etc/conf/{NODENAME}:»
  /opt/msys/ecelerity/etc/conf/default
```

Configuration options defined at the top level of the `ecelerity.conf` file are defined in a global scope. Many of these options can be defined in other scopes for a more fine-grained configuration. For example, the `max_outbound_connections` option can be set globally to apply to all outbound connections or within a domain scope to apply to a specific domain only. You can also set it in both scopes if you wish.

For a discussion of scopes and fallbacks, see [“Configuration Scopes and Fallback”](/momentum/4/4-ecelerity-conf-fallback).

For a summary of all the non-module specific configuration options, refer to [*Configuration Options Summary*](/momentum/4/config-options-summary) .

Modules and their configuration options are discussed in the [*Modules Reference*](/momentum/4/modules/) .

The following sections provide an overview of the configuration commonly defined in the `ecelerity.conf` file.

<dl class="variablelist">

<dt>Control Listener</dt>

<dd>

Momentum's control listener is configured in the `ecelerity.conf` file. For details, see [*Configuring Momentum's System Console*](/momentum/4/control-listener) .

</dd>

<dt>Inbound Mail Service Listeners</dt>

<dd>

Momentum's inbound mail service for SMTP or ECStream is configured in the `ecelerity.conf` file; while inbound mail service for HTTP is configured in the `msg_gen.conf` file included from within `ecelerity.conf`. Follow each link for details:

*   SMTP - Simple Mail Transfer Protocol (see [*Configuring Inbound Mail Service Using SMTP*](/momentum/4/esmtp-listener) .)

*   HTTP - Hypertext Transfer Protocol (see [*Configuring Inbound Mail Service Using HTTP*](/momentum/4/http-listener) .)

*   ECStream - Custom, bare-bones, high performance injection mechanism (see [*Configuring Inbound Mail Service Using ECStream*](/momentum/4/ecstream-listener) .)

</dd>

<dt>Cluster Listener</dt>

<dd>

The ECCluster_Listener configures direct, point-to-point communication between cluster nodes and is configured in the `ecelerity-cluster.conf` file that is included from within `ecelerity.conf`. For details, see [“ECCluster_Listener Configuration”](/momentum/4/cluster-listeners#eccluster_listener).

</dd>

<dt>Module Configuration</dt>

<dd>

Momentum's functionality is extended through its module API. Modules can be explicitly loaded and their configuration options set in the `ecelerity.conf` file. For details, see [“Modules”](/momentum/4/4-module-config).

</dd>

<dt>Outbound Mail Delivery Configuration</dt>

<dd>

Momentum provides a variety of options that allows you to control its outbound mail delivery. For details, see [*Configuring Outbound Mail Delivery*](/momentum/4/outbound-mail) .

</dd>

</dl>