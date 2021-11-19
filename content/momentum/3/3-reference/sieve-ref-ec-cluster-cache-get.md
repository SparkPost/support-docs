---
lastUpdated: "03/26/2020"
title: "ec_cluster_cache_get"
description: "ec cluster cache get Retrieve a value from a cluster wide replicated cache ec cluster cache get replication name key ec cluster cache get retrieves the value for the given key and cache name This feature requires the cluster module The cluster configuration stanza must include a replicate directive that..."
---

<a name="sieve.ref.ec_cluster_cache_get"></a> 
## Name

ec_cluster_cache_get — Retrieve a value from a cluster-wide replicated cache

## Synopsis

`ec_cluster_cache_get` { *`replication_name`* } { *`key`* }

<a name="idp29247504"></a> 
## Description

`ec_cluster_cache_get` retrieves the value for the given key and cache name.

### Note

This feature requires the cluster module. The cluster configuration stanza must include a `replicate` directive that names this cache. See [“Replicated Caches”](/momentum/3/3-reference/3-reference-cluster-config-replication#cluster.replicatedcache).

<a name="example.ec_cluster_cache_get"></a> 


```
$value = ec_cluster_cache_get "mycache" "mykey";
ec_log "mykey: ${value}";
```