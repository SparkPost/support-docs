---
lastUpdated: "03/26/2020"
title: "Configuring Momentum for High Availability and Failover"
description: "Momentum's architecture supports fault tolerant configurations This means that you can operate in an environment that is readily configured to support failing over automatically Components that support high availability and fault tolerance include ecconfigd Dura VIP™ bindings Command delegation in a cluster Centralized logging Per node data CIDR server as..."
---

Momentum's architecture supports fault-tolerant configurations. This means that you can operate in an environment that is readily configured to support failing over automatically.

Components that support high availability and fault tolerance include:

*   ecconfigd

*   DuraVIP™ bindings

*   Command delegation in a cluster

*   Centralized logging

*   Per-node data

*   CIDR server/as_logger

### <a name="idp4165552"></a> ecconfigd and eccfg

**ecconfigd** is the Momentum configuration management server. Configuration files are maintained in a version control repository and exported via the ecconfigd service. In a clustered configuration, ecconfigd will automatically replicate your configuration repositories to all participating cluster nodes.

When nodes share the same configuration, DuraVIP™ bindings provide transparent failover in the event that a node fails.

### <a name="idp4169488"></a> DuraVIP™ Bindings

One of the most important features of Momentum cluster configuration is DuraVIP™ bindings. DuraVIP™ maintains the availability of bindings and listener services even when nodes are down either due to failure or for administrative reasons.

With DuraVIP™, all injection IP addresses and outbound IP addresses are assigned automatically to the nodes in the cluster, allowing the reception and delivery of messages to be divided among the nodes. In the event of node failure, these injection IPs and outbound IP addresses are assumed by the remaining nodes

If the owner of a given IP address goes down, either due to administrative action or due to failure, the other nodes will notice its departure from the cluster and then hold an election for that IP address, assigning it to another node. The IP will then be plumbed on the new owning node with minimal interruption to service.

When the downed node rejoins the cluster, another election will be held for ownership of the IP addresses, which will likely cause reassignment of IP addresses back to the downed node.

For a complete description of how DuraVIP™ bindings are implemented see [“DuraVIP™: IP Fail over”](/momentum/3/3-reference/3-reference-cluster-config-duravip).

### <a name="idp4176496"></a> Command Delegation in a Cluster

The web UI makes use of the cluster manager to talk to nodes. In a worst case failure scenario, a cluster manager fails and the web interface is unable to gather statistics and information from the nodes.

As a safeguard we recommend that a web UI be installed alongside the cluster manager. If fault tolerance is desired, simply adding a new cluster manager with a web interface will suffice.

### <a name="idp4178944"></a> Central Logging and Aggregation

The log aggregation capability of the cluster provides a reliable, durable, centralized logging facility. The default cluster configuration implements centralized logging in addition to the regular loggers, so that the node keeps its own local logs in the usual location as well as making that information available to the cluster manager.

If redundant logs are required,customers are recommended to follow one of the two following options:

*   Store data on a Storage Area network (SAN)

*   Use multiple managers with separate subscriber names for consuming the jlogs

For a complete discussion of log aggregation see [“Log Aggregation”](/momentum/3/3-reference/cluster-config-logging).

### <a name="idp4184592"></a> Per-node Data

Per-node logs can be made redundant by storing the node-specific data on a SAN. Locking semantics must be checked for the log: spool locks are currently enforced and safe.

On the SAN, the paths to directories should be unique per node and each node should be able to mount the SAN directory at its unique location.

### <a name="idp4186928"></a> CIDR Server and as_logger

The CIDR Server queries the data created by an as_logger module and displays the result in the cluster console. The CIDR server and as_logger can be configured to log data to a SAN. Locking semantics must be checked.

For more information see [“as_logger – Audit series logger”](/momentum/3/3-reference/3-reference-modules-as-logger) and [“The `cidr_server`”](/momentum/3/3-reference/3-reference-cluster-cidr-server).