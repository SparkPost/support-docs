---
lastUpdated: "03/26/2020"
title: "connection_allocation_aggressiveness"
description: "connection allocation aggressiveness tune the aggressiveness for establishing new connections to domains connection allocation aggressiveness normal connection allocation aggressiveness high When set to high Momentum will be more aggressive when opening up new connections to domains Momentum achieves this by considering the max outbound connections setting global or domain specific..."
---

<a name="conf.ref.connection_allocation_aggressiveness"></a> 
## Name

connection_allocation_aggressiveness — tune the aggressiveness for establishing new connections to domains

## Synopsis

`connection_allocation_aggressiveness = "normal"`

`connection_allocation_aggressiveness = "high"`

<a name="idp8642560"></a> 
## Description

When set to `high`, Momentum will be more aggressive when opening up new connections to domains. Momentum achieves this by considering the max_outbound_connections setting (global or domain-specific, whichever is configured) and the size of the active queue for that domain. A setting of "normal" will produce a gradual increase in the number of connections, while "high" will result in a rapid number of new connections, up to the maximum allowed.

The following figure illustrates a typical scenario, with an active queue of 400 messages and a max_outbound_connections = 32 (the default).

<a name="conf.ref.connagg-diagram"></a> 


![](images/connagg.png)

The default value for this option is `normal`.

`normal` corresponds to the value `0.3` and high to the value `0.75`. Using the web UI you may pick a value in between to end up with a curve in between the two shown in [“Connection Allocation Aggressiveness”](/momentum/3/3-reference/3-reference-conf-ref-connection-allocation-aggressiveness#conf.ref.connagg-diagram), though it is unlikely that you will need to. For more information on setting custom values see [“The `Custom` Value”](/momentum/3/3-reference/web-3-administration#web3.custom.value).

<a name="idp8652864"></a> 
## Scope

connection_allocation_aggressiveness is valid in the binding, binding_group, domain and global scopes.