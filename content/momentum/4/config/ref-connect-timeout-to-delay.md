---
lastUpdated: "03/26/2020"
title: "connect_timeout_to_delay"
description: "connect timeout to delay time interval before sweeping mail into the delayed queue connect timeout to delay 900 When Momentum detects that a domain cannot be contacted for example due to a network block it will move all that domain's active messages into the delayed queue This setting allows you..."
---

<a name="conf.ref.connect_timeout_to_delay"></a> 
## Name

connect_timeout_to_delay — time interval before sweeping mail into the delayed queue

## Synopsis

`connect_timeout_to_delay = 900`

<a name="idp23936592"></a> 
## Description

When Momentum detects that a domain cannot be contacted (for example, due to a network block), it will move all that domain's active messages into the delayed queue. This setting allows you to configure the sensitivity of Momentum to the time spent attempting to contact a domain before temporarily giving up and sweeping its messages into the delayed queue.

The default value is 900 seconds.

<a name="idp23939248"></a> 
## Scope

connect_timeout_to_delay is valid in the binding, binding_group, domain, and global scopes.