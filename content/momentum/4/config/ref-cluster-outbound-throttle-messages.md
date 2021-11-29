---
lastUpdated: "03/26/2020"
title: "cluster_outbound_throttle_messages"
description: "cluster outbound throttle messages limit the rate at which messages are delivered and enforce it across the cluster Cluster Outbound Throttle Messages 1 Cluster Outbound Throttle Messages 1 60 This allows you to limit the rate at which Momentum will attempt to deliver mail It can be employed to globally..."
---

<a name="conf.ref.cluster_outbound_throttle_messages"></a> 
## Name

cluster_outbound_throttle_messages — limit the rate at which messages are delivered, and enforce it across the cluster

## Synopsis

`Cluster_Outbound_Throttle_Messages = "1"`

`Cluster_Outbound_Throttle_Messages = "1/60"`

<a name="idp23865696"></a> 
## Description

This allows you to limit the rate at which Momentum will attempt to deliver mail. It can be employed to globally limit throughput or to reduce the rate sent to a particular domain.

If a single integer parameter is provided, Momentum will ensure that no more than the specified number of messages are sent in a given second of time. If a proper fraction parameter is provided, Momentum will limit the number of sent message to the number specified in the numerator over the time window in seconds specified by the denominator.

### Note

For best results, a throttle in the same scope and with the same values should also be defined using [cluster_outbound_throttle_connections](/momentum/4/config/ref-cluster-outbound-throttle-connections)

The cluster module must be configured with the outbound throttle parameters.

<a name="idp23871008"></a> 
## Scope

`cluster_outbound_throttle_messages` is valid in the binding_group, domain, and global scopes.