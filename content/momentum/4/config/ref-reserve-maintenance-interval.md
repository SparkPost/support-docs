---
lastUpdated: "03/26/2020"
title: "reserve_maintenance_interval"
description: "reserve maintenance interval how often to perform mail queue maintenance reserve maintenance interval 15 This option specifies how often to perform mail queue maintenance to evaluate whether reserved connections should be established to get mail out of the system The system will usually limit the number of connections to server..."
---

<a name="conf.ref.reserve_maintenance_interval"></a> 
## Name

reserve_maintenance_interval — how often to perform mail queue maintenance

## Synopsis

`reserve_maintenance_interval = 15`

<a name="idp25918704"></a> 
## Description

This option specifies how often to perform mail queue maintenance to evaluate whether reserved connections should be established to get mail out of the system.

The system will usually limit the number of connections to `server_max_outbound_connections`, but during the reserve sweep, will allow up to `server_max_outbound` plus `reserve_outbound connections` to be established.

The system will respect any limits that have been defined, the reserve mechanism will not cause more connections to be established beyond a defined limit for a particular domain.

The default value is `15`.

<a name="idp25924144"></a> 
## Scope

reserve_maintenance_interval is valid in the global scope.

<a name="idp25925984"></a> 
## See Also

[server_max_outbound_connections](/momentum/4/config/ref-server-max-outbound-connections)