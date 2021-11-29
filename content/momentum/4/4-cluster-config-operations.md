---
lastUpdated: "03/26/2020"
title: "Using the Cluster Manager (eccmgr)"
description: "eccmgr is the Momentum Cluster Manager henceforth referred to as the cluster manager On start up the script etc init d eccmgr start runs eccmgr as a service on the node designated as Manager For details about the available options see eccmgr Use eccmgr ctl to start stop or restart..."
---


**eccmgr** is the Momentum Cluster Manager, henceforth referred to as the cluster manager. On start up, the script **/etc/init.d/eccmgr start**       runs **eccmgr** as a service on the node designated as Manager. For details about the available options, see [eccmgr](/momentum/4/executable/eccmgr).

Use **eccmgr_ctl** to start, stop, or restart this service. For details about this command, see [eccmgr_ctl](/momentum/4/executable/eccmgr-ctl).

## <a name="idp4323200"></a> Connecting to the Console on the Cluster Manager

When **eccmgr** is running, you can log in to the console as you would any other node - by issuing the command:

`/opt/msys/ecelerity/bin/ec_console`

A successful connection will result in output similar to the following:

```
##############################################
# eccmgr version: 3.0.10.30753 r(30754)
# Copyright (c) 1999-2009 Message Systems, Inc.
# All Rights Reserved.
##############################################
12:33:15 /tmp/2025>
```

For information about the console, see [`ec_console`](/momentum/4/4-operations#operations.console).

On Unix systems, **eccmgr** listens at `/tmp/2025` by default. If you should need to change this default, you must edit the `Control_Listener` stanza in [`eccluster.conf`](/momentum/4/config/ref-eccluster-conf) and perhaps also your [`/opt/msys/ecelerity/etc/environment`](/momentum/4/environment-file) file.

When you are logged into the console of the cluster manager, you can use any of the commands listed in [“Console Commands for the Cluster Manager”](/momentum/4/cluster-config-operations-eccmgr-console)

### Note

The cluster *module* belongs to the configuration of a node. For this reason, the console commands specific to the cluster *module* can only be issued from that node and not from within the **eccmgr** service. For a list of these commands, see [“Cluster Module-specific Console Commands”](/momentum/4/modules/4-modules-cluster#modules.cluster.console).