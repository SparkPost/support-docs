---
lastUpdated: "03/26/2020"
title: "mx_failures_to_delay"
description: "mx failures to delay number of consecutive failures before a domain is auto delayed mx failures to delay 50 When Momentum detects that a domain has no contactable M Xs it will move all that domain's active messages into the delayed queue This setting allows you to configure the sensitivity..."
---

<a name="conf.ref.mx_failures_to_delay"></a> 
## Name

mx_failures_to_delay — number of consecutive failures before a domain is auto-delayed

## Synopsis

`mx_failures_to_delay = 50`

<a name="idp25510672"></a> 
## Description

When Momentum detects that a domain has no contactable MXs, it will move all that domain's active messages into the delayed queue. This setting allows you to configure the sensitivity of Momentum to consecutive connection failures. Momentum will need `mx_failures_to_delay` consecutive failures for every MX in a domain to trigger a delay event. The default value is 50\. This is configurable both at a global and per-domain level. Setting this value to zero will disable the auto-delay feature.

### Warning

This is an advanced option. Making Momentum too sensitive to transient network connection problems will cause unnecessary delays in message delivery. Thorough testing is recommended prior to deployment in a production environment.

<a name="idp25514560"></a> 
## Scope

`mx_failures_to_delay` is valid in the domain and global scopes.