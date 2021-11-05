---
lastUpdated: "03/26/2020"
title: "max_resident_active_queue"
description: "max resident active queue threshold above which messages are not held in memory Max Resident Active Queue 250 The maximum number of messages in a domain's active queue before certain destaging actions should be taken to prevent them from consuming excessive system memory This option is very useful for domains..."
---

<a name="conf.ref.max_resident_active_queue"></a> 
## Name

max_resident_active_queue — threshold above which messages are not held in memory

## Synopsis

`Max_Resident_Active_Queue = 250`

<a name="idp10222448"></a> 
## Description

The maximum number of messages in a domain's active queue before certain destaging actions should be taken to prevent them from consuming excessive system memory. This option is very useful for domains that practice tarpitting. A value of ‘`-1`’ deactivates this setting and a value of ‘`0`’ makes the system drop all resident messages in the queue. The default value for this option is `250`. Reasonable non-zero values are between 500 and 10000, depending on system memory.

### Warning

This is an advanced option. Setting this option to small non-zero values can have deleterious effects on performance. Thorough testing is recommended prior to deployment in a production environment.

<a name="idp10227056"></a> 
## Scope

max_resident_active_queue is valid in the binding, binding_group, domain and global scopes.