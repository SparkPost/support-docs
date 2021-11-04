---
lastUpdated: "03/26/2020"
title: "server_reserve_outbound_connections"
description: "server reserve outbound connections sets the server wide connection limit reserve Server Reserve Outbound Connections 200 Server Reserve Outbound Connections configures the server wide connection limit reserve The sum of Server Reserve Outbound Connections and Server Max Outbound Connections is used to set the ceiling on the total number of..."
---

<a name="conf.ref.server_reserve_outbound_connections"></a> 
## Name

server_reserve_outbound_connections — sets the server-wide connection limit reserve

## Synopsis

`Server_Reserve_Outbound_Connections = 200`

<a name="idp11707264"></a> 
## Description

`Server_Reserve_Outbound_Connections` configures the server-wide connection limit reserve. The sum of `Server_Reserve_Outbound_Connections` and `Server_Max_Outbound_Connections` is used to set the ceiling on the total number of outbound connections that Momentum will establish. The default value for this option is `200`.

### Note

`server_reserve_outbound_connections` must be set to `0` in order for `scope_max_outbound_connections` to work properly in the Global::Domain scope. However, when `server_reserve_outbound_connections` is set to `0` and the server is under load, low volume domains may be starved of connections.

It is recommended that you leave this value as is and alter `Server_Max_Outbound_Connections` at either the global scope or within a given binding instead.

<a name="idp11715008"></a> 
## Scope

server_reserve_outbound_connections is valid in the global scope.

<a name="idp11716672"></a> 
## See Also

[server_max_outbound_connections](/momentum/3/3-reference/3-reference-conf-ref-server-max-outbound-connections)