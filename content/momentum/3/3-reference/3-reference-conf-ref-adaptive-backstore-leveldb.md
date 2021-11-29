---
lastUpdated: "03/26/2020"
title: "adaptive_backstore_leveldb"
description: "adaptive backstore leveldb use Level DB as the backing store for Adaptive Delivery adaptive backstore leveldb path var log ecelerity adaptive leveldb Configuration Change This feature is available as of version 3 6 Riak is the default backing store for the adaptive module In some circumstances it may not provide..."
---

<a name="conf.ref.adaptive_backstore_leveldb"></a> 
## Name

adaptive_backstore_leveldb — use LevelDB as the backing store for Adaptive Delivery

## Synopsis

`adaptive_backstore_leveldb { path = "/var/log/ecelerity/adaptive.leveldb" }`

<a name="idp7334576"></a> 
## Description

**Configuration Change. ** This feature is available as of version 3.6.

Riak is the default backing store for the adaptive module. In some circumstances it may not provide the required level of performance. As an alternate backing store, you can use [LevelDB](http://en.wikipedia.org/wiki/LevelDB) on Linux with Momentum 3.6 or greater. To use LevelDB you must add an `adaptive_backstore_leveldb` stanza to your `ecelerity.conf` file.

### Warning

Please consult with support before reconfiguring Momentum as described here. The LevelDB package is installed with Momentum 3.6; it can be used only as a replacement backing store for the adaptive module. If you are using Mobile Momentum, Riak continues to be used for message resubmission. *LevelDB is not cluster aware.* 

`path` identifies the LevelDB database and is the only option in the `adaptive_backstore_leveldb` scope. The default value for this option is `/var/log/ecelerity/adaptive.leveldb`.

<a name="idp7342640"></a> 
## Scope

`adaptive_backstore_leveldb` is valid in the global scope.

<a name="idp7344704"></a> 
## See Also

[“adaptive – Adaptive Delivery”](/momentum/3/3-reference/3-reference-modules-adaptive) and [“Using an Adaptive Delivery Backing Store Other than Riak”](/momentum/3/3-reference/operations-riak#operations.riak.alternate)