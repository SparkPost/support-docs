---
lastUpdated: "03/26/2020"
title: "Configuration Management"
description: "A Momentum cluster installation is configured using the ecelerity conf file just like a Momentum single node configuration However the ecelerity conf file in a cluster configuration also includes the ecelerity cluster conf file This file is typically used to specify options common to all nodes the cluster topology for..."
---

A Momentum cluster installation is configured using the `ecelerity.conf` file just like a Momentum single node configuration. However, the `ecelerity.conf` file in a cluster configuration also includes the `ecelerity-cluster.conf` file. This file is typically used to specify options common to all nodes—the cluster topology for example.

### Note

The `eccluster.conf` file configures the behavior of the Momentum Cluster *Manager*, **eccmgr** only, not cluster nodes. For more information about this file see [eccluster.conf](/momentum/3/3-reference/eccluster-conf-3).

There are numerous options that are cluster-specific. Some of these options such as `cluster_max_outbound_connections` are visible in various scopes but most options specific to cluster configuration are defined in the cluster module. The following table shows the options that are exclusive to a cluster configuration:

<a name="table-cluster-options"></a> 


| Option/Description | Type | Default | Scopes |
| --- | --- | --- | --- |
| **[cluster_group](/momentum/3/3-reference/ecelerity-cluster-conf#option.cluster_group)** – The DuraVIP™ system coordinates IP ownership responsibilities via the cluster_group extended virtual synchrony group | na |   | cluster |
| **[cluster_max_outbound_connections](/momentum/3/3-reference/3-reference-conf-ref-cluster-max-outbound-connections)**                                     – Set the maximum number of outbound connections for a domain | sending |   | binding, domain, global, host |
| **[cluster_outbound_throttle_connections](/momentum/3/3-reference/3-reference-conf-ref-cluster-outbound-throttle-connections)**                                          – Limit the rate at which connections are established | sending |   | binding_group, domain, global |
| **[cluster_outbound_throttle_messages](/momentum/3/3-reference/3-reference-conf-ref-cluster-outbound-throttle-messages)**                                       – Limit the rate at which messages are delivered | sending |   | binding_group, domain, global |
| **[cluster_server_max_outbound_connections](/momentum/3/3-reference/3-reference-conf-ref-cluster-server-max-outbound-connections)**                                            – Set the maximum number of outbound connections | sending |   | binding, binding_group, global |
| **[control_group](/momentum/3/3-reference/ecelerity-cluster-conf#option.control_group)** – The cluster console manager utilizes this group to issue cluster-wide configuration commands | na |   | cluster |
| **[“Module Overview”](/momentum/3/3-reference/modules-overview-implicit)**                                                                             – Set the module debug level (applicable to all modules) | na |   | cluster |
| **[duravip_balance_set_size](/momentum/3/3-reference/ecelerity-cluster-conf#option.duravip_balance_set_size)** – When balancing DuraVIP™s, how many to process as a batch in response to a balance request | na |   | cluster |
| **[“DuraVIP™: IP Fail over”](/momentum/3/3-reference/3-reference-cluster-config-duravip)**                                                                                      – Specify the binding a listener should follow | receiving |   | listen |
| **[“DuraVIP™: IP Fail over”](/momentum/3/3-reference/3-reference-cluster-config-duravip)**                                                                                      – Specify a DuraVIP™ preference | both |   | binding, listen |
| **[“DuraVIP™: IP Fail over”](/momentum/3/3-reference/3-reference-cluster-config-duravip)**                                                                                      – Whether to enable Durable MultiVIP© bindings | both |   | binding, listen |
| **[*Modules*](/momentum/3/3-reference/modules-overview)**                                                        – Whether or not the module is enabled | na |   | cluster |
| **[heartbeat_start_delay](/momentum/3/3-reference/ecelerity-cluster-conf#option.heartbeat_start_delay)** – Seconds to wait after startup before the cluster heartbeat is activated | na |   | cluster |
| **[heartbeats_per_sec](/momentum/3/3-reference/ecelerity-cluster-conf#option.heartbeats_per_sec)** – How often to send a heartbeat | na |   | cluster |
| **[if_check_interval](/momentum/3/3-reference/ecelerity-cluster-conf#option.if_check_interval)** – How often to run through a maintenance cycle | na |   | cluster |
| **[if_down_limit](/momentum/3/3-reference/ecelerity-cluster-conf#option.if_down_limit)** – How long to wait before deciding to bring an IP online | na |   | cluster |
| **[log_active_interval](/momentum/3/3-reference/ecelerity-cluster-conf#option.log_active_interval)** – Used to tune centralized logging | na |   | cluster |
| **[log_group](/momentum/3/3-reference/ecelerity-cluster-conf#option.log_group)** – Whether or not panic log messages are broadcast over spread | na |   | cluster |
| **[log_idle_interval](/momentum/3/3-reference/ecelerity-cluster-conf#option.log_idle_interval)** – The amount of time to sleep before looking for another segment | na |   | cluster |
| **[ecelerity-cluster.conf](/momentum/3/3-reference/ecelerity-cluster-conf)**                           – Define the location of the cluster manager logs | na |   | cluster |
| **[ecelerity-cluster.conf](/momentum/3/3-reference/ecelerity-cluster-conf)**                           – The port that the messaging bus listens on | na |   | cluster |
| **[nodeaddr](/momentum/3/3-reference/ecelerity-cluster-conf#option.nodeaddr)** – The canonical cluster address for the node | na |   | cluster |
| **[nodename](/momentum/3/3-reference/ecelerity-cluster-conf#option.nodename)** – Override the node name that is used to canonically identify this cluster node | na |   | cluster |
| **[ecelerity-cluster.conf](/momentum/3/3-reference/ecelerity-cluster-conf)**                           – Define the cluster replication framework | na |   | cluster |
| **[mbus.conf](/momentum/3/3-reference/mbus-conf)**              – The name of the subcluster | na |   | cluster |
| **[“DuraVIP™: IP Fail over”](/momentum/3/3-reference/3-reference-cluster-config-duravip)**                                                                                      – Define the cluster network topology | na |   | cluster |
| **[unconditional_rebind](/momentum/3/3-reference/ecelerity-cluster-conf#option.unconditional_rebind)** – Whether the full set_binding logic is invoked or not | na |   | cluster |
| **[view_balance_interval](/momentum/3/3-reference/ecelerity-cluster-conf#option.view_balance_interval)** – How often DuraVIP™ views are subject to balancing | na |   | cluster |
| **[view_broadcast_interval](/momentum/3/3-reference/ecelerity-cluster-conf#option.view_broadcast_interval)** – How often to speculatively broadcast a view announcement to the cluster | na |   | cluster |
| **[view_mature_time](/momentum/3/3-reference/ecelerity-cluster-conf#option.view_mature_time)** – How long a DuraVIP™ view needs to remain unchanged before considering it "mature" | na |   | cluster |

### <a name="cluster.configmgmt.conflict"></a> Synchronization Conflicts

Momentum configuration files are maintained in a version control repository and exported to your cluster network via the ecconfigd service running on the cluster manager. For a detailed description of this service see [ecconfigd](/momentum/3/3-reference/executable-ecconfigd).

In some situations it is possible to put the configuration replication into a conflicted state. This is usually happens when conflicting changes are made to the configuration for a subcluster on both sides of a network partition. In other words, in a two node cluster, if one of the nodes is unplugged from the network and configuration changes are made and committed on both nodes, when the network cable is re-connected, the configuration will attempt to sync but will notice that conflicting changes have been made.

If such a conflict occurs, you will need to resolve it by manually changing configuration files. For a description of this process see [“Best Practices for Manually Changing Configuration Files”](/momentum/3/3-reference/conf-manual-changes).

While ecconfigd is in a conflicted state, no configuration changes will be able to be committed.

### <a name="cluster.configmgmt.wc"></a> Working Copy of the Repository

On the client side of the configuration management, each node has a working copy checkout of the repository for its subcluster. This checkout is found at `/opt/msys/ecelerity/etc/conf`.

The tools that operate on the `conf` directory try very hard to avoid leaving it in a broken state. Every minute, each node will attempt to update its `conf` directory to match the repository. The update process will only modify the `conf` directory if the complete revision was able to be pulled—in other words, if the update could not complete, it will never leave a `conf` directory with a half-applied update.

If you have made local changes to the `conf` directory, the update will attempt to merge updates from the repository with your changes and will only update the `conf` directory if there were no conflicting changes.

If conflicting changes were found, ecconfigd will warn you and provide you with instructions on how to resolve the conflict.

### <a name="cluster.configmgmt.layout"></a> Working Copy Layout

In addition to managing the configuration of subclusters, ecconfigd will also manage a special `global` subcluster. This is mapped in as a sub-directory of the `conf` directory (`/opt/msys/ecelerity/etc/conf/global`), a directory that every node has access to. This is the recommended location for sharing cluster-wide configuration information between nodes.

The `conf` directory is created with the sub-directory, `/opt/msys/ecelerity/etc/conf/default`. This represents the default configuration for nodes in that subcluster. We recommend that you place your default configuration files within this directory.

### <a name="cluster.configmgmt.node.specific"></a> Node-specific Configuration

If you need to configure a node differently from other nodes, the recommended approach is to create a separate `ecelerity.conf` file as described in [“Copy node configuration”](/momentum/3/3-reference/web-3-administration#figure_copy_config). Doing this creates a copy of the `ecelerity.conf` file in a sub-directory below `/opt/msys/ecelerity/conf` that bears the name of the node. The name of this copy is `ecelerity.conf`.

If you wish, you can also manually create this file by creating a directory below the `/opt/msys/ecelerity/etc/conf` and copying the `ecelerity.conf` file from the `default` directory. You must do this on the cluster manager and use [eccfg](/momentum/3/3-reference/executable-eccfg) to commit your changes to the repository.

### Note

When you create a node-specific configuration file, a directory bearing the node name and a node-specific `ecelerity.conf` file are created on *all* nodes in the cluster.

When manually changing configuration files be sure to follow the best practices described in [“Best Practices for Manually Changing Configuration Files”](/momentum/3/3-reference/conf-manual-changes).

After creating node-specific configurations you must stop and restart the ecelerity process. To do this see [ec_ctl](/momentum/3/3-reference/executable-ec-ctl). **config reload**        will **not** load configuration changes.

When nodes use common values for a number of options, if you wish you can put these options in a configuration file stored in the `global` directory rather than repeating them in each /opt/msys/ecelerity/etc/conf/*`nodename`*/ecelerity.conf file. However, you must add include statements to the /opt/msys/ecelerity/etc/conf/*`nodename`*/ecelerity.conf file on each node.

### <a name="cluster.configmgmt.node.local.include"></a> Node-local Include Files

If you have any configurations specific to a particular node, fallback values for configuration options in that node-local configuration file *cannot* be included via the `/opt/msys/ecelerity/etc/conf/ecelerity.conf` file. For an included file, the parent file's path is added to the search path, so if a file is included from `/opt/msys/ecelerity/etc/conf/default/ecelerity.conf`, the search path becomes:

/opt/msys/ecelerity/etc/conf/default:/opt/msys/ecelerity/etc:/opt/msys/ecelerity/etc/conf/global:»
  /opt/msys/ecelerity/etc/conf/*`nodename`*:/opt/msys/ecelerity/etc/conf/default

If there are minor differences between nodes, you can include a local node configuration file in the following way. If, for example, you want `OPTION = "FOO"` on one node but `OPTION = "BAR"` on another, be sure that the option is left "undefined" in the `ecelerity.conf` file and `OPTION` is set in a `node-local.conf` file in all the `/opt/msys/ecelerity/etc/conf/{NODENAME}` directories. Be sure to also add an "include node-local.conf" statement to `/opt/msys/ecelerity/etc/default/ecelerity.conf`.

If there are major differences between node configurations, it is probably simpler to create a separate configuration file for each node as described in [“Node-specific Configuration”](/momentum/3/3-reference/cluster-config-management#cluster.configmgmt.node.specific).