---
lastUpdated: "03/26/2020"
title: "ec_cluster_cache_set"
description: "ec cluster cache set Set a value in a cluster wide replicated cache ec cluster cache set replication name key value ttl ec cluster cache set sets the value for the given key and cache name The ttl is a string specifying the number of seconds until the value expires..."
---

<a name="sieve.ref.ec_cluster_cache_set"></a> 
## Name

ec_cluster_cache_set — Set a value in a cluster-wide replicated cache

## Synopsis

`ec_cluster_cache_set` { *`replication_name`* } { *`key`* } { *`value`* } { *`ttl`* }

<a name="idp29267584"></a> 
## Description

`ec_cluster_cache_set` sets the value for the given key and cache name. The `ttl` is a string specifying the number of seconds until the value expires (unless it ends with "H" or "M" for hours or minutes). The value will not expire if the `ttl` is "0".

### Note

This feature requires the cluster module. The cluster configuration stanza must include a `replicate` directive that names this cache. See [“Replicated Caches”](/momentum/3/3-reference/3-reference-cluster-config-replication#cluster.replicatedcache).

<a name="example.ec_cluster_cache_set"></a> 


`ec_cluster_cache_set "mycache" "mykey" "myvalue" "0";`