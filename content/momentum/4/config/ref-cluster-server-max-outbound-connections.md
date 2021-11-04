---
lastUpdated: "03/26/2020"
title: "cluster_server_max_outbound_connections"
description: "cluster server max outbound connections set the maximum number of outbound connections and enforce it across a cluster cluster server max outbound connections 800 Limits the number of total connections that will be established concurrently by a cluster of Momentum systems irrespective of bindings There is no limit enforced by..."
---

<a name="conf.ref.cluster_server_max_outbound_connections"></a> 
## Name

cluster_server_max_outbound_connections — set the maximum number of outbound connections, and enforce it across a cluster

## Synopsis

`cluster_server_max_outbound_connections = 800`

<a name="idp23907696"></a> 
## Description

Limits the number of total connections that will be established concurrently by a cluster of Momentum systems, irrespective of bindings. There is no limit enforced by default; 800 is an example value. A more realistic value would need to be based on the cluster size and the capabilities of the underlying hardware and operating system.

Within a `Binding` stanza, this option will regulate the total number of connections through that particular binding across the cluster.

### Note

The cluster module must be configured with the outbound CIDR parameters.

<a name="idp23912208"></a> 
## Scope

cluster_server_max_outbound_connections is valid in the binding, binding_group, and global scopes.

<a name="idp23914096"></a> 
## See Also

[server_max_outbound_connections](/momentum/4/config/ref-server-max-outbound-connections)