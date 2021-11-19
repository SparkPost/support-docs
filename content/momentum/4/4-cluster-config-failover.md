---
lastUpdated: "03/26/2020"
title: "Configuring Momentum for High Availability and Failover"
description: "Momentum's architecture supports fault tolerant configurations This means that you can operate in an environment that is readily configured to support failing over automatically Components that support high availability and fault tolerance include the following ecconfigd Dura VIP™ bindings Centralized logging and Aggregration Per node data Per node logs can..."
---

Momentum's architecture supports fault-tolerant configurations. This means that you can operate in an environment that is readily configured to support failing over automatically.

Components that support high availability and fault tolerance include the following:

*   [`ecconfigd`](/momentum/4/conf-overview#conf.ecconfigd)

*   [DuraVIP™ bindings](/momentum/4/4-cluster-config-duravip)

*   [Centralized logging and Aggregration](/momentum/4/log-aggregation)

*   Per-node data

    Per-node logs can be made redundant by storing the node-specific data on a SAN. Locking semantics must be checked for the log: spool locks are currently enforced and safe.

    On the SAN, the paths to directories should be unique per node and each node should be able to mount the SAN directory at its unique location.

*   [cidr_server](/momentum/4/4-cluster-cidr-server) and [as_logger](/momentum/4/modules/as-logger)

    The **cidr_server** queries the data created by an as_logger module and displays the result in the cluster console. The **cidr_server** and as_logger can be configured to log data to a SAN. Locking semantics must be checked.