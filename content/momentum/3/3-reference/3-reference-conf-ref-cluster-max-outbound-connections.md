---
lastUpdated: "03/26/2020"
title: "cluster_max_outbound_connections"
description: "cluster max outbound connections set the maximum number of outbound connections for a scope and enforce it across a cluster Cluster Max Outbound Connections 128 This will limit the number of outbound connections across the cluster to an individual binding to the specified value It can also be set at..."
---

<a name="conf.ref.cluster_max_outbound_connections"></a> 
## Name

cluster_max_outbound_connections — set the maximum number of outbound connections for a scope and enforce it across a cluster

## Synopsis

`Cluster_Max_Outbound_Connections = 128`

<a name="idp8516784"></a> 
## Description

This will limit the number of outbound connections across the cluster to an individual binding to the specified value. It can also be set at a global level, which enforces the limit on every domain in the cluster. The global value can be overridden by setting it in a `Binding` stanza. Furthermore, this option can be used in a `Host` stanza to limit the connections to a particular MX as shown in [the section called “Scope”](/momentum/3/3-reference/3-reference-conf-ref-cluster-max-outbound-connections#conf.ref.cluster_max_outbound_connections.scope). *Note*: When used in the Host scope, `Cluster_Max_Outbound_Connections` limits the number of connections **to** the particular MX.

The default value for this option is `-1` meaning that an unlimited number of connections are allowed.

### Note

When this option is used in scopes other than the Host scope, The cluster module must have the outbound_domains parameter configured as defined here: [“Replication Configurations”](/momentum/3/3-reference/3-reference-cluster-config-replication#cluster.replication.features).

<a name="conf.ref.cluster_max_outbound_connections.scope"></a> 
## Scope

cluster_max_outbound_connections is valid in the binding, domain and global scopes. *Note*: This option is not valid when defined in a binding contained within a binding_group.

cluster_max_outbound_connections is also valid in the host scope.

Used within a Host scope, this enforces a limit on the number of connections to a particular MX. The Host should be listed exactly as it exists in the DNS MX record. (Do not specify an equivalent IP address or hostname). For example, the console can be used to obtain the MX records for a given domain, and then a Host stanza can be written to limit connections to a particular MX.

```
16:33:51 ecelerity(/tmp/2025)> dig messagesystems.com
submitted
16:34:01 ecelerity(/tmp/2025)> domain messagesystems.com
Domain 'messagesystems.com' has 1 MXs and a TTL of 86394 seconds
  [10 edge.omniti.com. TTL:594]
```

This domain has only one MX record (edge.omniti.com). A Host stanza to limit connections to it would look like this:

```
Host edge.omniti.com {
  Cluster_Max_Outbound_Connections = 2
}
```

`cluster_max_outbound_connections` is one of only two options valid in the host scope and is *not* valid in the binding_group scope. The value that this option assumes, in order of decreasing precedence, is as follows:

1.  binding::host

2.  host

3.  binding::domain

4.  binding

5.  domain

6.  global

<a name="idp8538000"></a> 
## See Also

[max_outbound_connections](/momentum/3/3-reference/3-reference-conf-ref-max-outbound-connections) [host](/momentum/3/3-reference/3-reference-conf-ref-host) [“Configuration Scopes and Fallback”](/momentum/3/3-reference/3-reference-ecelerity-conf-fallback)