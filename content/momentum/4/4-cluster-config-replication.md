---
lastUpdated: "03/26/2020"
title: "Data Replication"
description: "The clustered Replication feature provided by the Momentum clustering suite is an extensive set of data sharing and aggregation facilities for representing information across node boundaries Replication is managed using the Replication scope within the cluster module For details about this scope see Section 71 19 2 Replication Scope There..."
---


The clustered Replication feature provided by the Momentum clustering suite is an extensive set of data sharing and aggregation facilities for representing information across node boundaries.

Replication is managed using the Replication scope within the cluster module. For details about this scope, see [“Replication Scope”](/momentum/4/modules/4-modules-cluster#modules.cluster.replication).

## <a name="cluster.replication.features"></a> Replication Configurations

There are special replication facilities that are used for enforcing cluster wide reception and delivery behaviors. These facilities exist to count inbound connections by IP address as well as outbound connections by both IP address and domain. To enable these facilities, you use the following configuration:

```
cluster {
  # ... other cluster config ...
  Replicate "inbound_cidr" {}
  Replicate "outbound_cidr" {}
  Replicate "outbound_domains" {}
  Replicate "outbound_binding_domains" {}
  Replicate "shared_named_throttles" {}
}
```

Given the above configuration, Momentum will track cluster-wide inbound SMTP connections by IP address in the `inbound_cidr` replicated data structure, the outbound SMTP connections by IP address in the `outbound_cidr` replicated data structure, and the outbound SMTP connections by destination domain in the `outbound_domains` replicated data structure. `outbound_binding_domains` tracks outbound connections in the cluster scope.

From the console you can view the configuration using the **cluster shared list**             command:

```
22:36:50 ecelerity(2025)> cluster shared list
Currently managed objects:
                  inbound_cidr [lazy, cidrtree w/ snapshots]
                 outbound_cidr [lazy, cidrtree w/ snapshots]
              outbound_domains [lazy, gauge table w/ snapshots]
```

For a complete list of the cluster commands available from the console, see [“Cluster Module-specific Console Commands”](/momentum/4/modules/4-modules-cluster#modules.cluster.console).

### <a name="idp3700896"></a> Tracking inbound connections via inbound_cidr

On a running system, investigating the contents of the `inbound_cidr` storage will show us the inbound connections to our cluster:

```
22:45:34 ecelerity(2025)> cluster shared show inbound_cidr
lazy, snapped cidrtree 'inbound_cidr', view 'global'
     31                         10.0.0.0/8
     31                         10.0.0.0/24
      4                         10.0.0.0/25
      4                         10.0.0.103/32
     27                         10.0.0.160/27
     27                         10.0.0.176/29
     27                         10.0.0.180/31
     14                         10.0.0.180/32
     13                         10.0.0.181/32
```

The above output shows the view of inbound SMTP connections per IP address aggregated across the entire cluster. In order to view the inbound connection counts to a particular node, we can ask for the view of that information from the perspective of any node by appending `from nodename` where `nodename` is the name of the node:

```
22:45:40 ecelerity(2025)> cluster shared show inbound_cidr from relay-0-1
lazy, snapped cidrtree 'inbound_cidr', view '#ec1-12137#relay-0-1'
      5                         10.0.0.0/8
      5                         10.0.0.0/24
      5                         10.0.0.160/27
      5                         10.0.0.176/29
      5                         10.0.0.180/31
      4                         10.0.0.180/32
      1                         10.0.0.181/32

22:45:59 ecelerity(2025)> cluster shared show inbound_cidr from relay-0-2
lazy, snapped cidrtree 'inbound_cidr', view '#ec1-48616#relay-0-2'
      7                         10.0.0.0/8
      7                         10.0.0.0/24
      3                         10.0.0.103/32
      4                         10.0.0.160/27
      4                         10.0.0.180/31
      2                         10.0.0.180/32
      2                         10.0.0.181/32
```

### <a name="idp3767360"></a> Tracking outbound connections via outbound_cidr

To look at the outbound SMTP connections by IP address, we can use the same command as above, replacing `inbound_cidr` with `outbound_cidr`, yielding an identical data layout and meaning (excepting the data represents outbound connections).

### <a name="idp3770304"></a> Tracking outbound connections via outbound_domain

The outbound connections tallied by destination domain can be viewed by specifying the `outbound_domain` shared structure:

```
23:05:30 ecelerity(2025)> cluster shared show outbound_domain
lazy, snapped gauge table 'outbound_domain', view 'global'
                                                     aol.com:           10
                                               bellsouth.net:           23
                                                 hotmail.com:          246
                                                  omniti.com:            5
                                                   yahoo.com:           65
```

Just as in any shared structure view, you can limit the display to the perspective of any participating node by appending `from nodename` to the command. To see the view from relay-0-1 instead of the cluster-wide aggregate, we can issue the following command:

```
23:05:34 ecelerity(2025)> cluster shared show outbound_domain from relay-0-1
lazy, snapped gauge table 'outbound_domain', view '#ec1-12137#relay-0-1'
                                                     aol.com:            1
                                               bellsouth.net:            4
                                                 hotmail.com:           26
                                                   yahoo.com:           30
```

### <a name="cluster.replication.inbound_audit"></a> Replicated inbound audit metrics

We can use this feature with [“inbound_audit – Inbound traffic analytics”](/momentum/4/modules/inbound-audit) in order to maintain cluster-wide time series views of inbound connections, receptions, and rejections from any IP address or CIDR block.

```
cluster {
  # ... other cluster configuration ...
  Replicate "metrics" {
    parameters="connect;reception;rejection"
  }
}
```

With this configuration, it's also necessary to define one or more audit series for the inbound audit module.

```
inbound_audit {
  # keep audit data for the last half hour,
  # placed into six windows of 5 min (300s) each
  monitors = ("300,6")
}
```

### Note

The inbound_audit module is a singleton and does not have an instance name. This affects the way the module is defined and also the way that console commands are invoked.

The adaptive module is cluster-aware. To enable this capability, a `replicate "metrics"` stanza must be declared and the `parameters` must be set to `audit_series`.

With such a configuration we can view connections, receptions, and rejections over the entire cluster for the last half hour from any IP address or CIDR block. From the console, this can be done using a command of this form:

`09:16:03 ecelerity> inbound_audit:inbound_audit1 show ip 127.0.0.0/8`
### <a name="cluster.replicated_audit_series"></a> Replicated named audit series

Named audit series are a more general mechanism than the inbound audit metrics. We can use them to maintain time series for any events we wish—in comparison, the inbound audit metrics can track only connections, receptions, and rejections. Since the source IP address is recorded for each event, we can obtain event counts by IP address or CIDR block. These named audit series can be replicated across a cluster by including `audit_series` in the metrics replication stanza.

```
cluster {
  # ... other cluster configuration ...
  Replicate  "metrics" {
    parameters="audit_series"
  }
}
```

With this configuration, you can use Lua to add data to a named series and specify that it be replicated. You can also obtain counts from these series. See [msys.audit_series.add](/momentum/4/lua/ref-msys-audit-series-add) and [msys.audit_series.define](/momentum/4/lua/ref-msys-audit-series-define).

### <a name="cluster.replicatedcache"></a> Replicated Caches

In addition to the other built-in replication objects, we can dynamically replicate arbitrary key-value pairs across all nodes of the cluster using replicated caches.

<a name="cluster.replicatedcache.code"></a> 


```
Datasource "mycache" {
  uri = ("odbc:DSN=sqlserver;UID=user;PWD=pass")
  serialized = true
}

cluster {
  # ... other cluster configuration ...
  Replicate "mycache" {
    type = "cache"
  }
}
```

Note that if you have the replicate type defined as `cache`, you must supply the `replication_name` of the cache and that name must match the cache name defined in the ds_core module. In [“Replicated caches”](/momentum/4/4-cluster-config-replication#cluster.replicatedcache.code), for example, the name `mycache` referenced in the cluster stanza is defined in the Datasource scope of the ds_core module. For more information about using the ds_core module, see [“ds_core - Datasource Query Core”](/momentum/4/modules/ds-core).

This stanza can be repeated any number of times, specifying a unique `replication_name` for each cache. Key-value pairs can be inserted into, or retrieved from, the replicated cache at run time using Lua. See [msys.gauge_cache.define](/momentum/4/lua/ref-msys-gauge-cache-define) and [msys.gauge_cache.get](/momentum/4/lua/ref-msys-gauge-cache-get).

By default, nodes that join the cluster will receive new or updated key-value pairs as they are inserted into the cache. Any pre-existing key-value pairs present on other nodes will not be populated into the cache on a new node until the key-value pair is updated. To change this behavior, snapshots can be enabled on a per-cache basis. This causes all pre-existing key-value pairs on the other nodes to be populated on a new node as soon as it joins the cluster.

```
cluster {
  # ... other cluster configuration ...
  Replicate "mycache" {
    type = "cache"
    parameters="snapshot"
  }
}
```

### <a name="cluster.replication.named_throttles"></a> Shared named throttles

Cluster-wide enforcement of name-keyed throttles is supported in the MTA. The following stanza must be placed in the cluster module configuration to enable the shared throttles:

```
cluster {
  # ... other cluster configuration ...
  Replicate "shared_named_throttles" {}
}
```

### <a name="cluster.replication.outbound_throttles"></a> Shared Outbound Throttles

Cluster-wide outbound connection and message throttles are supported in the MTA, using the [cluster_outbound_throttle_connections](/momentum/4/config/ref-cluster-outbound-throttle-connections) and [cluster_outbound_throttle_messages](/momentum/4/config/ref-cluster-outbound-throttle-messages) configuration parameters. The cluster stanza must include a `replicate` directive to enable outbound message throttles (OBTM) or outbound connection throttles (OBTC).

```
cluster {
  # ... other cluster configuration ...
  Replicate "OBTM" {}   # outbound message throttles
  Replicate "OBTC" {}   # outbound connection throttles
}
```

### <a name="cluster.replication.gauge_cache"></a> Shared Gauge Caches

A gauge cache is a collection of named counters (gauges), which are manipulated by increment or decrement operations. For the Lua functions, see [msys.gauge_cache.inc](/momentum/4/lua/ref-msys-gauge-cache-inc) and [msys.gauge_cache.dec](/momentum/4/lua/ref-msys-gauge-cache-dec). When gauge cache replication is enabled, increments or decrements are broadcast to all nodes on the cluster.

```
cluster {
  # ... other cluster configuration ...
  Replicate "metrics" {
    parameters="gauge_cache"
  }
}
```