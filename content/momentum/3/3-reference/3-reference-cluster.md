---
lastUpdated: "03/26/2020"
title: "Clustering"
description: "The clustering capabilities of the product enable the following features Centralized management of configuration for multiple MTA nodes Replicated redundant configuration repository with revision control Log aggregation pulls log files from MTA nodes to centralized location s on the network Replication of a variety of real time metrics to allow..."
---


The clustering capabilities of the product enable the following features:

*   Centralized management of configuration for multiple MTA nodes

*   Replicated, redundant, configuration repository with revision control

*   Log aggregation pulls log files from MTA nodes to centralized location(s) on the network

*   Replication of a variety of real-time metrics to allow cluster-wide coordination for inbound and outbound traffic shaping

*   DuraVIP™, our IP Failover mechanism.

Clustering is based on the concept of having a cluster of machines that communicate using a group communication message bus. Ideally, a cluster will have a dedicated gigabit network for transmission of replicated data and internal message moves.

The product assumes that the cluster network is a trusted network, meaning that it leaves host based authentication to be implemented by the network administrator at an appropriate firewall on the network.