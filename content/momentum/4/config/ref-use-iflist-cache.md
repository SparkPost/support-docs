---
lastUpdated: "03/26/2020"
title: "use_iflist_cache"
description: "use iflist cache Whether or not to cache the list of network interfaces configured by the system use iflist cache 0 This option determines whether or not to use cached information about the state of the network interfaces namely which ones are in use and their state The default value..."
---

<a name="conf.ref.use_iflist_cache"></a> 
## Name

use_iflist_cache — Whether or not to cache the list of network interfaces configured by the system

## Synopsis

`use_iflist_cache = 0`

<a name="idp27195136"></a> 
## Description

This option determines whether or not to use cached information about the state of the network interfaces; namely which ones are in use and their state.

The default value is `0`. When this option is off and DuraVIP™ is in use, Momentum must traverse the entire list of interfaces. Enable this option if you are using a large number of DuraVIP™s.

Changing the value of this options at runtime requires restarting the ecelerity process–issuing the ec_console command **config reload**        will not suffice.

<a name="idp27200064"></a> 
## Scope

`use_iflist_cache` is valid in the global scope.

<a name="idp27202320"></a> 
## See Also

[*DuraVIP™: IP Fail over*](/momentum/4/4-cluster-config-duravip)