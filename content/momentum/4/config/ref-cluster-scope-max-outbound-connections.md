---
lastUpdated: "03/26/2020"
title: "cluster_scope_max_outbound_connections"
description: "cluster scope max outbound connections provide traffic shaping for outbound connections in a cluster configuration cluster scope max outbound connections 20 cluster scope max outbound connections is for use in a cluster configuration and is the equivalent of scope max outbound connections It provides for finer grained manipulation of the..."
---

<a name="conf.ref.cluster_scope_max_outbound_connections"></a> 
## Name

cluster_scope_max_outbound_connections — provide traffic shaping for outbound connections in a cluster configuration

## Synopsis

`cluster_scope_max_outbound_connections = 20`

<a name="idp23881056"></a> 
## Description

`cluster_scope_max_outbound_connections` is for use in a cluster configuration and is the equivalent of `scope_max_outbound_connections`. It provides for finer-grained manipulation of the number of outbound connections than does `cluster_scope_max_outbound_connections`. When used in different scopes its behavior is as follows:

*   In the global scope, it behaves like `cluster_server_max_outbound_connections`

*   In a Global::Domain scope, it determines the maximum number of connections to the specified domain across all bindings

*   In a Binding_Group::Domain scope, it determines the maximum number of connections to the specified domain across all the bindings in that Binding Group

*   In a Binding::Domain scope, it behaves like `cluster_max_outbound_connections`

*   In a Global:Host scope it determines the maximum number of connections to the specified host across all bindings

`cluster_scope_max_outbound_connections` is disabled by default. When it is not set then `cluster_max_outbound_connections` or `cluster_server_max_outbound_connections` is used, depending on the context.

To use this option the `Replicate "outbound_binding_domains" {}` stanza must be defined in `ecelerity-cluster.conf`.

<a name="idp23894560"></a> 
## Scope

cluster_scope_max_outbound_connections is valid in the global, binding, binding_group, domain, and host scopes.

<a name="idp23896464"></a> 
## See Also

[scope_max_outbound_connections](/momentum/4/config/ref-scope-max-outbound-connections), [cluster_max_outbound_connections](/momentum/4/config/ref-cluster-max-outbound-connections), [cluster_server_max_outbound_connections](/momentum/4/config/ref-cluster-server-max-outbound-connections)