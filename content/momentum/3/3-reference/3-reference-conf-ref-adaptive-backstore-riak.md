---
lastUpdated: "03/26/2020"
title: "adaptive_backstore_riak"
description: "adaptive backstore riak set characteristics of the Riak backing store Configuration Change This feature is available as of version 3 6 Riak is the default backing store for the adaptive module Use the adaptive backstore riak scope to set the timeout and the connect timeout timeout defines the amount of..."
---

<a name="conf.ref.adaptive_backstore_riak"></a> 
## Name

adaptive_backstore_riak — set characteristics of the Riak backing store

<a name="idp7352192"></a> 
## Description

**Configuration Change. ** This feature is available as of version 3.6.

Riak is the default backing store for the adaptive module. Use the `adaptive_backstore_riak` scope to set the timeout and the connect timeout:

```
adaptive_backstore_riak {
  timeout = 5
  connect_timeout = 5
}
```

`timeout` defines the amount of time in seconds that the adaptive module will wait for a response from the adaptive backing store. The default setting is `5` seconds. `connect_timeout` defines the amount of time in seconds that the adaptive module will wait for a connection to the backing store server. This occurs in the connection phase only and also defaults to `5` seconds.

### Note

The options in this scope replace the `backing_store_connect_timeout` and the `backing_store_timeout` options defined in the adaptive module scope.

<a name="idp7360448"></a> 
## Scope

`adaptive_backstore_riak` is valid in the global scope.

<a name="idp7362496"></a> 
## See Also

[“adaptive – Adaptive Delivery”](/momentum/3/3-reference/3-reference-modules-adaptive), [adaptive_backstore_leveldb](/momentum/3/3-reference/3-reference-conf-ref-adaptive-backstore-leveldb) and [“Using an Adaptive Delivery Backing Store Other than Riak”](/momentum/3/3-reference/operations-riak#operations.riak.alternate)