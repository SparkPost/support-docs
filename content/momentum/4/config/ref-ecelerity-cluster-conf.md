---
lastUpdated: "03/26/2020"
title: "ecelerity-cluster.conf File"
description: "The ecelerity cluster conf file is a cluster specific configuration file that configures cluster behavior This file is typically used to specify options common to all nodes e g the cluster topology It is included from within ecelerity conf The following is an example ecelerity cluster conf file Example 16..."
---

The `ecelerity-cluster.conf` file is a cluster-specific configuration file that configures cluster behavior. This file is typically used to specify options common to all nodes, e.g. the cluster topology. It is included from within `ecelerity.conf`.

The following is an example `ecelerity-cluster.conf` file:

<a name="conf.ref.ecelerity_cluster.conf.example"></a> 


```
# Security stanza
# Ensure that you have appropriate privileges
Security {
  user = "ecuser"
  group = "ecuser"
  Capabilities = "cap_net_admin+ep cap_net_bind_service+ep cap_net_raw+ep cap_sys_resource+ep"
}

# Aggregated cluster node logging
ec_logger "ec_logger_cluster" {
  mainlog = "cluster:///var/log/ecelerity/mainlog.cluster=>master"
  paniclog = "cluster:///var/log/ecelerity/paniclog.cluster=>master"
  rejectlog = "cluster:///var/log/ecelerity/rejectlog.cluster=>master"
  acctlog = "cluster:///var/log/ecelerity/acctlog.cluster=>master"
}

bounce_logger "bounce_logger_cluster" {
  bouncelog = "cluster:///var/log/ecelerity/bouncelog.cluster=>master"
}

# ECCluster_Listener stanza
ECCluster_Listener {
  Listen "*:4802" {}
}

# Cluster module
cluster {
  cluster_group = "ec_cluster"
  control_group = "ec_console"
  logs = [
    rejectlog = "/var/log/ecelerity/rejectlog.cluster"
    paniclog = "/var/log/ecelerity/paniclog.cluster"
    mainlog = "/var/log/ecelerity/mainlog.cluster"
    acctlog = "/var/log/ecelerity/acctlog.cluster"
    bouncelog = "/var/log/ecelerity/bouncelog.cluster"
  ]
  Replicate "inbound_cidr" {}
  Replicate "outbound_cidr" {}
  Replicate "outbound_domains" {}
  Replicate "outbound_binding_domains" {}
  Replicate "shared_named_throttles" {}

  # DuraVIP network topology hints
  Topology "10.1.1.0/24" {
    cidrmask = "32"
    interface = "eth1"
  }
}
```

### Note

IPv6 addresses are much more flexible than IPv4 addresses in terms of their formatting options. They also use a different delimiter character than IPv4 addresses (a colon instead of a period). This means that in certain contexts, an IPv6 address can create parsing ambiguities.

The accepted convention is to require that, in circumstances where a configuration parameter can also contain something other than an IP address, that an IPv6 address must be enclosed in square brackets. In practical terms, this means that things like the `Gateway`, `Routes` and `Listen` options must have IPv6 addresses enclosed in brackets. Others, such as `Peer`, `Relay_Hosts` and `Prohibited_Hosts` do not require the IPv6 address in brackets.

You **cannot** view the contents of the `ecelerity-cluster.conf` file using the console from the cluster manager. You can only view the contents of this file from a cluster node because it is included from the `ecelerity.conf` file.

For a discussion of scopes and fallbacks, see [“Configuration Scopes and Fallback”](/momentum/4/4-ecelerity-conf-fallback).

For a summary of all the non-module specific configuration options, refer to [*Configuration Options Summary*](/momentum/4/config-options-summary) .

Modules and their configuration options are discussed in the [*Modules Reference*](/momentum/4/modules/) .

The following sections provide an overview of the configuration commonly defined in the `ecelerity-cluster.conf` file.

<dl class="variablelist">

<dt>Security</dt>

<dd>

The definition of the `Security` stanza in the `ecelerity-cluster.conf` file applies to the cluster nodes only and usually differs from the configuration found in the `eccluster.conf` file.

For a discussion of the `Security` stanza options, see [security](/momentum/4/config/ref-security).

</dd>

<dt>ECCluster_Listener</dt>

<dd>

For a discussion of the `ECCluster_Listener` stanza, see [“ECCluster_Listener Configuration”](/momentum/4/cluster-listeners#eccluster_listener).

</dd>

<dt><a name="conf.ref.ecelerity_cluster.conf.logging"></a> Aggregated Cluster Node Logging</dt>

<dd>

For a discussion of using the ec_logger module in aggregated logging, see [“Configuration of Aggregated Cluster Node Logging”](/momentum/4/modules/ec-logger#modules.ec_logger.cluster).

For a discussion of using the bounce_logger module in aggregated logging, see [“Configuration of Aggregated Cluster Node Logging”](/momentum/4/modules/bounce-logger#modules.bounce_logger.cluster).

</dd>

<dt>cluster Module</dt>

<dd>

For details about the cluster module, see [“cluster – Cluster”](/momentum/4/modules/4-modules-cluster).

</dd>

</dl>