---
lastUpdated: "03/26/2020"
title: "Using the Cluster Manager"
description: "On start up the script etc init d eccmgr start runs eccmgr as a service on the Momentum cluster manager When this service is running you can log in to the system console as you would on a node by issuing the command opt msys ecelerity bin ec console For..."
---

### <a name="idp4079680"></a> Connecting via ec_console

On start up, the script **/etc/init.d/eccmgr start**       runs eccmgr as a service on the Momentum cluster manager. When this service is running you can log in to the system console as you would on a node—by issuing the command **/opt/msys/ecelerity/bin/ec_console**. For more information about the system console see [ec_console](/momentum/3/3-reference/operations-console).

When you are logged in to the cluster manager console, you can both change and view the manager's configuration. Since mail does not transit the manager, the configuration options are limited when compared to those of a node. You can view all options that affect the manager by issuing the command **config showrecurse** . Using the `config` command, you can set or get any configuration options that are displayed when **config showrecurse**             is executed.

**config showrecurse**             displays options found in the following files:

*   `eccluster.conf`

*   `webui-common.conf` (Note that the Datasource `ecdb` configuration is overlayed during installation by `/opt/msys/etc/installer/eccmgr.d/ecdb.conf`)

If you wish to make any configuration changes permanent you cannot do it through the web UI. You must manually change the contents of these configuration files. For instructions on manually changing configuration files see [“Best Practices for Manually Changing Configuration Files”](/momentum/3/3-reference/conf-manual-changes). It is also worth noting that the as_logger module is specific to the cluster manager so must be manually added to the `eccluster.conf` file.

In addition to configuring the manager from the system console, you can also communicate with cluster nodes. For example you can flush the Sieve cache for all nodes by issuing the command **broadcast sieve:sieve1 flush cache**                          from the manager.

### Note

The cluster *module* belongs to the configuration of a node. For this reason, cluster console commands can only be issued from a node and not from the cluster manager.

On Unix systems, **eccmgr** listens at `/tmp/2025` by default. If you should need to change this default you must edit the control listener in `eccluster.conf` and perhaps also your `/opt/msys/ecelerity/etc/environment` file.

`shell> /opt/msys/ecelerity/bin/ec_console`

A successful connection will result in output similar to the following:

```
##############################################
# eccmgr version: 3.0.10.30753 r(30754)
# Copyright (c) 1999-2009 Message Systems, Inc.
# All Rights Reserved.
##############################################
12:33:15 /tmp/2025>
```

### <a name="cluster.config.operations.eccmgr.console"></a> Console Commands for eccmgr

The following commands are console commands that can be issued from the console manager. The **info** command and **show cluster membership**                    are analogous to the similarly named cluster console commands described in [“Cluster Management Using Console Commands”](/momentum/3/3-reference/3-reference-cluster-config-replication#cluster.logging.console). For example, the output of **show cluster membership**                    while in XML format, is identical to the output of the cluster module command **cluster membership** .

Otherwise, the console manager commands are concerned with broadcasting or unicasting commands to cluster nodes.

**<a name="cluster.config.operations.eccmgr.console.broadcast"></a> 7.8.2.1. broadcast *`command`***

Broadcast a [console command](/momentum/3/3-reference/3-reference-operations-console-commands) to the cluster. For example, if you change a Sieve script that affects all nodes you may wish to issue the command **`broadcast sieve:sieve1 flush cache`**                          .

The only safe way to do a duravip move is from the cluster console using a **broadcast** command. This guarantees that both the node that currently owns the address and the new owner will be in sync. For example:

09:25:18 /tmp/2025> broadcast cluster duravip move *`10.0.5.139`* to *`hostname`*

Furthermore, if there is a mismatch between the machine's hostname and the spread node name (i.e. if the hostname is fully qualified) the move will not succeed.

**<a name="idp4113632"></a> broadcast cluster duravip announce view**
### Warning

If you modify bindings in the configuration file, a possible race condition means that a **config reload**        taking effect on multiple machines at the same time can cause nodes to disagree about who owns which binding. For this reason it is strongly suggested that you execute the console command **broadcast cluster duravip announce view**                               immediately after **config reload** . Doing this synchronizes ownership of the bindings and eliminates a possible race condition among the nodes.

**<a name="idp4116800"></a> 7.8.2.2. subcluster broadcast *`subcluster command`*         **

This command works in the same way as the **broadcast *`command`***             but sends the command only to the subcluster identified by *`subcluster`*.

Given the following subcluster configuration in your `mbus.conf` file:

```
# Subcluster: east = rh52mgr.vmnet24.example.com
Spread_Segment 10.79.24.255:4803 {
       rh52bare        10.79.24.130
       rh52mgr         10.79.24.136
}
...

# Subcluster: west = rh52mgr.vmnet24.example.com
Spread_Segment 10.79.240.255:4803 {
       rh52bar2        10.79.240.129
}
```

To broadcast a command to all nodes on the `west` subcluster, you would issue the command **subcluster broadcast west *`command`***                           .

**Configuration Change. ** As of version 3.4, cluster communication is handled by the msgc modules rather than by mbus. For more information see [“msgc – Modules”](/momentum/3/3-reference/3-reference-modules-msgc).

**<a name="idp4126096"></a> 7.8.2.3. subcluster retrieve *`subcluster command`*         **

This command works in the same way as the **retrieve *`command`***             but retrieves the responses only from the subcluster identified by *`subcluster`*.

To retrieve the responses to a command broadcast to all nodes on the `west` subcluster, you would issue the command **subcluster retrieve west *`command`***                          .

**<a name="idp4130976"></a> 7.8.2.4. flush control cache**

Clear the results buffer. After executing this command you will not be able to retrieve previous commands.

**<a name="idp4132688"></a> 7.8.2.5. help**

Show a help message, listing available commands and their brief usages.

**<a name="idp4134368"></a> 7.8.2.6. info**

Show general information about the cluster group and the cluster node.

**<a name="idp4136048"></a> 7.8.2.7. retrieve *`command`***

Retrieve the responses to a command broadcasted by the cluster manager.

**<a name="idp4138016"></a> 7.8.2.8. retrieve_node *`node`* *`command`***

Retrieve the responses to a unicasted/broadcasted command from the specified node of the cluster.

**<a name="idp4140432"></a> 7.8.2.9. show cluster membership**

Show current cluster members and their roles (nodes, manager or other).

**<a name="idp4142112"></a> 7.8.2.10. shutdown**

Shutdown the cluster manager.

**<a name="idp4143744"></a> 7.8.2.11. unicast *`node`* *`command`***

Unicast a [console command](/momentum/3/3-reference/3-reference-operations-console-commands) to the specified node in the cluster.

**<a name="idp4146816"></a> 7.8.2.12. version**

Display version and copyright information of eccmgr.

### <a name="idp4148592"></a> config [set | get | eval] [ *`scope`* ] *`option_name`* [ *`value`* ]

Use the **config** command to set, get or eval any of the options in the `eccluster.conf` or `webui-common.conf` files. You can also use other **config** commands such as **config locate**        or **config showrecurse** . For information on using the **config** command see [config](/momentum/3/3-reference/3-reference-console-commands-config).