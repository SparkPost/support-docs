---
lastUpdated: "03/26/2020"
title: "ec_gauge_cache"
description: "ec gauge cache init ec gauge cache inc ec gauge cache dec ec gauge cache get gauge cache functions for Sieve ec gauge cache init name for the cache max number of elements time to expiration of an element replicate ec gauge cache inc name for the cache name for..."
---

<a name="sieve.ref.ec_gauge_cache"></a> 
## Name

ec_gauge_cache_init, ec_gauge_cache_inc, ec_gauge_cache_dec, ec_gauge_cache_get — gauge cache functions for Sieve

## Synopsis

`ec_gauge_cache_init` { *`name for the cache`*                } { *`max number of elements`*                     } { *`time to expiration of an element`*                              } [ *`replicate`* ]

`ec_gauge_cache_inc` { *`name for the cache`*                } { *`name for the key to inc`*                     }

`ec_gauge_cache_dec` { *`name for the cache`*                } { *`name for the key to dec`*                     }

`ec_gauge_cache_get` { *`name for the cache`*                } { *`name for the key to get`*                     }

<a name="idp29590336"></a> 
## Description

`ec_gauge_cache_init` creates the cache with the given max number of elements and max time in seconds before an element automatically expires out of the cache. The final, optional argument is an integer replication flag. If non-zero, it indicates that increments and decrements for this cache should be broadcast among all nodes on a cluster. For this to be used, gauge cache replication must first be enabled; see [“Shared Gauge Caches”](/momentum/3/3-reference/3-reference-cluster-config-replication#cluster.replication.gauge_cache).

`ec_gauge_cache_inc` creates the given key in a given cache if it does not exist and increments it.

`ec_gauge_cache_dec` creates the given key in a given cache if it does not exist and decrements it.

`ec_gauge_cache_get` returns the value of the specified key in the specified cache.

<a name="example.ec_guage_cache"></a> 


```
$user = vctx_conn_get "auth_user";
ec_gauge_cache_init "cache1" 10 300;
ec_gauge_cache_inc "cache1" "${user}";
$test = ec_gauge_cache_get "cache1" "${user}";
if ec_test :value "gt" :comparator "i;ascii-numeric""${test}" "10" {
  ec_action "550" "Too much spamming";
}
```