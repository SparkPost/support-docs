---
lastUpdated: "03/26/2020"
title: "server_max_outbound_connections"
description: "server max outbound connections sets the maximum number of outbound connections Server Max Outbound Connections 20000 Limits the number of total connections that will be established concurrently within Momentum irrespective of bindings While 20 000 is the value assigned to this option in the configuration file it may be reasonable..."
---

<a name="conf.ref.server_max_outbound_connections"></a> 
## Name

server_max_outbound_connections — sets the maximum number of outbound connections

## Synopsis

`Server_Max_Outbound_Connections = 20000`

<a name="idp26437136"></a> 
## Description

Limits the number of total connections that will be established concurrently within Momentum, irrespective of bindings. While 20,000 is the value assigned to this option in the configuration file, it may be reasonable to increase this value to 50,000 or 75,000 depending on the capabilities of the underlying hardware and operating system.

The default value is `75000`; however, the assigned value in the default configuration file is `20000`.

Note that this parameter is intimately related to [server_max_file_descriptors](/momentum/4/config/ref-server-max-file-descriptors) since the number of available OS file descriptors will limit the number of messages that can be queued simultaneously.

Within a `Binding` stanza, this option will regulate the total number of connections through that particular binding.

<a name="idp26442912"></a> 
## Scope

server_max_outbound_connections is valid in the binding, binding_group and global scopes.

<a name="idp26444800"></a> 
## See Also

[server_reserve_outbound_connections](/momentum/4/config/ref-server-reserve-outbound-connections), [server_max_file_descriptors](/momentum/4/config/ref-server-max-file-descriptors)