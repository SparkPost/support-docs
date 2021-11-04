---
lastUpdated: "03/26/2020"
title: "adaptive_backstore_leveldb"
description: "adaptive backstore leveldb use Level DB as the backing store for Adaptive Delivery adaptive backstore leveldb path var log ecelerity adaptive leveldb Riak is the default backing store for the adaptive module In some circumstances it may not provide the required level of performance As an alternate backing store you..."
---

<a name="conf.ref.adaptive_backstore_leveldb"></a> 
## Name

adaptive_backstore_leveldb — use LevelDB as the backing store for Adaptive Delivery

## Synopsis

`adaptive_backstore_leveldb { path = "/var/log/ecelerity/adaptive.leveldb" }`

<a name="idp13611040"></a> 
## Description

Riak is the default backing store for the adaptive module. In some circumstances, it may not provide the required level of performance. As an alternate backing store, you can use [LevelDB](http://en.wikipedia.org/wiki/LevelDB) on Linux. To use LevelDB, add the following stanza to your `ecelerity.conf` file:

```
adaptive_backstore_leveldb {
  path = "/var/log/ecelerity/adaptive.leveldb"
}
```

`path` identifies the LevelDB database and is the only option in the `adaptive_backstore_leveldb` scope. Default value is `/var/log/ecelerity/adaptive.leveldb`.

### Warning

Please consult with support before reconfiguring Momentum as described here. The LevelDB package can be used only as a replacement backing store for the adaptive module. If you are using Mobile Momentum, Riak continues to be used for message resubmission. *LevelDB is not cluster aware.* 

<a name="idp13617248"></a> 
## Scope

`adaptive_backstore_leveldb` is valid in the global scope.

<a name="idp13619424"></a> 
## See Also

[“adaptive – Adaptive Delivery”](/momentum/4/modules/4-adaptive)