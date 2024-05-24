---
lastUpdated: "05/21/2024"
title: "Cluster-specific Configuration"
description: "Clustering is based on the concept of having a cluster of machines that communicate using a group communication messaging bus A cluster is comprised of at least one Manager node and one or more MTA nodes"
---


Clustering is based on the concept of having a cluster of machines that communicate using a group communication messaging bus. A cluster is comprised of at least one Manager node and one or more MTA nodes. The Manager in the cluster will be your central point of management for the cluster. Ideally, a cluster will have a dedicated gigabit network for transmission of replicated data and internal message moves.

The clustering capabilities of Momentum enable the following features:

*   Log aggregation pulling log files from MTA nodes to centralized location(s) on the network

*   Replication of a variety of real-time metrics to allow cluster-wide coordination for inbound and outbound traffic shaping

*   DuraVIP™ (Momentum's IP Failover mechanism)

Momentum assumes that the cluster network is a trusted network, meaning that it leaves host based authentication to be implemented by the network administrator at an appropriate firewall on the network.

### Note

Momentum's installer does not support setting up subclusters during installation. Consult professional services if subclusters is a requirement.

## <a name="cluster.config_files"></a> Cluster-specific Configuration Files

A Momentum cluster installation is configured using the [`ecelerity.conf`](/momentum/4/config/ref-ecelerity-conf) file similar to a Momentum single node configuration. However, additional configuration files are needed:

*   [`eccluster.conf`](/momentum/4/config/ref-eccluster-conf) - Momentum Cluster Manager configuration file

*   [`ecelerity_cluster.conf`](/momentum/4/config/ref-ecelerity-cluster-conf) - Cluster-specific configuration file included from within `ecelerity.conf`

*   [`msgc_server.conf`](/momentum/4/config/ref-msgc-server-conf) - Cluster messaging bus configuration file included from within the `eccluster.conf` file on the cluster manager and from the `ecelerity-cluster.conf` file on nodes

The default cluster-enabled configuration is located in the `/opt/msys/ecelerity/etc/conf/default` subdirectory. Simple deployments will not typically need to edit the cluster portions of this configuration. If you intend to use DuraVIP™ or to more tightly control the scope of replicate data, you will need to edit the configuration in the cluster stanza of the `ecelerity-cluster.conf` file.

There are numerous configuration options that are cluster-specific. Some of these options such as `cluster_max_outbound_connections` are visible in various scopes, but most options specific to cluster configuration are defined in the [cluster](/momentum/4/modules/4-modules-cluster) module.

The non-module specific configuration options are listed in [*Configuration Options Summary*](/momentum/4/config-options-summary) .

Modules and their configuration options are discussed in the [*Modules Reference*](/momentum/4/modules/) .

For general information about Momentum's configuration files, see [“Configuration Files”](/momentum/4/conf-overview#conf.files).

For additional details about editing your configuration files, see [“Changing Configuration Files”](/momentum/4/conf-overview#conf.manual.changes).

### <a name="cluster.config_files.local.include"></a> Using Node-local `include` Files

If you have any configurations specific to a particular node, fallback values for configuration options in that node-local configuration file *cannot* be included via the `/opt/msys/ecelerity/etc/conf/ecelerity.conf` file. For an included file, the parent file's path is added to the search path, so if a file is included from `/opt/msys/ecelerity/etc/conf/default/ecelerity.conf`, the search path becomes:

/opt/msys/ecelerity/etc/conf/default:/opt/msys/ecelerity/etc:/opt/msys/ecelerity/etc/conf/global:»
  /opt/msys/ecelerity/etc/conf/*`nodename`*:/opt/msys/ecelerity/etc/conf/default

If there are minor differences between nodes, you can include a local node configuration file as discussed in the following the example:

For one node, you want `OPTION = "FOO"`.

For another node, you want `OPTION = "BAR"`.

Do not define `OPTION` in the `ecelerity.conf` file.

Set `OPTION` in a `node-local.conf` file in all the /opt/msys/ecelerity/etc/conf/*`nodename`* directories.

Add an "include node-local.conf" statement to `/opt/msys/ecelerity/etc/default/ecelerity.conf`.

If there are major differences between node configurations, it is probably simpler to create a separate configuration file for each node as described in [“Repository Working Copy for Cluster”](/momentum/4/4-cluster#cluster.config_files.mgmt.cluster).
