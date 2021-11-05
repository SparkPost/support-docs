---
lastUpdated: "03/26/2020"
title: "cluster_scope_max_outbound_connections"
description: "cluster scope max outbound connections provide traffic shaping for outbound connections in a cluster configuration Cluster Scope Max Outbound Connections 20 Configuration Change This feature is available starting from Momentum 3 0 16 Cluster Scope Max Outbound Connections is for use in a cluster configuration and is the equivalent of..."
---

<a name="conf.ref.cluster_scope_max_outbound_connections"></a> 
## Name

cluster_scope_max_outbound_connections — provide traffic shaping for outbound connections in a cluster configuration

## Synopsis

`Cluster_Scope_Max_Outbound_Connections = 20`

<a name="idp8578640"></a> 
## Description

**Configuration Change. ** This feature is available starting from Momentum 3.0.16.

Cluster Scope_Max_Outbound_Connections is for use in a cluster configuration and is the equivalent of Scope_Max_Outbound_Connections. It provides for finer-grained manipulation of the number of outbound connections than does Cluster_Server_Max_Outbound_Connections. When used in different scopes its behavior is as follows:

*   In the global scope, it behaves like Cluster_Server_Max_Outbound_Connections

*   In a Global::Domain scope, it determines the maximum number of connections to the specified domain across all bindings

*   In a Binding_Group::Domain scope, it determines the maximum number of connections to the specified domain across all the bindings in that Binding Group

*   In a Binding::Domain scope, it behaves like Cluster_Max_Outbound_Connections

*   In a Global:Host scope it determines the maximum number of connections to the specified host across all bindings

Cluster_Scope_Max_Outbound_Connections is disabled by default. When it is not set then Cluster_Max_Outbound_Connections or Cluster_Server_Max_Outbound_Connections is used, depending on the context.

To use this option the `Replicate "outbound_binding_domains" {}` stanza must be defined in `ecelerity-cluster.conf`. For information on this topic see [the section called “Replication”](/momentum/3/3-reference/ecelerity-cluster-conf#ecelerity-cluster.conf.replication).

<a name="idp8591600"></a> 
## Scope

cluster_scope_max_outbound_connections is valid in the global, binding, binding_group, domain and host scopes.

<a name="idp8593312"></a> 
## See Also

[scope_max_outbound_connections](/momentum/3/3-reference/3-reference-conf-ref-scope-max-outbound-connections), [cluster_max_outbound_connections](/momentum/3/3-reference/3-reference-conf-ref-cluster-max-outbound-connections), [cluster_server_max_outbound_connections](/momentum/3/3-reference/3-reference-conf-ref-cluster-server-max-outbound-connections)