---
lastUpdated: "03/26/2020"
title: "msgc_server.conf File"
description: "The msgc server conf file contains the configuration relevant to the cluster messaging bus This file is referenced from the eccluster conf file on the cluster manager and from the ecelerity cluster conf file on nodes It MUST live in the global portion of the repository as it must be..."
---

The `msgc_server.conf` file contains the configuration relevant to the cluster messaging bus. This file is referenced from the `eccluster.conf` file on the cluster manager and from the `ecelerity-cluster.conf` file on nodes. It MUST live in the global portion of the repository, as it must be the same for all nodes in the cluster.

### Note

Restart [Section 15.1.3, “Configuration Management (**ecconfigd**)”](conf.overview#conf.ecconfigd "15.1.3. Configuration Management (ecconfigd)") after making extensive changes to `msgc_server.conf`, such as adding multiple nodes. Use the command **`/etc/init.d/ecconfigd restart`**         .

For a discussion of scopes and fallbacks, see [“Configuration Scopes and Fallback”](/momentum/4/4-ecelerity-conf-fallback).

For a summary of all the non-module specific configuration options, refer to [*Configuration Options Summary*](/momentum/4/config-options-summary) .

Modules and their configuration options are discussed in the [*Modules Reference*](/momentum/4/modules/) .

The following are the modules configured in the `msgc_server.conf` file:

<dl class="variablelist">

<dt>msgc_server</dt>

<dd>

The msgc_server module maintains connections with all other msgc_servers in the network (if they exist).

</dd>

<dt>msgc_client</dt>

<dd>

The msgc_client module connects to msgc_server in order to participate in the cluster.

</dd>

<dt>msgcserver_listener</dt>

<dd>

The msgcserver_listener mediates between msgc_servers and between msgc_servers and their clients. See [“Msgcserver_Listener Configuration”](/momentum/4/cluster-listeners#msgcserver_listener).

</dd>

</dl>