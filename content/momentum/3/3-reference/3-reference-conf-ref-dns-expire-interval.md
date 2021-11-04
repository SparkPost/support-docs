---
lastUpdated: "03/26/2020"
title: "dns_expire_interval"
description: "dns expire interval how often to check for domains with expired DNS information dns expire interval 10 How often the garbage collector should check for domains with expired DNS entries and resubmit them for lookup The default is 10 seconds dns expire interval is valid in the global scope..."
---

<a name="conf.ref.dns_expire_interval"></a> 
## Name

dns_expire_interval — how often to check for domains with expired DNS information

## Synopsis

`dns_expire_interval = 10`

<a name="idp8970560"></a> 
## Description

How often the garbage collector should check for domains with expired DNS entries and resubmit them for lookup.

The default is `10` seconds.

<a name="idp8973104"></a> 
## Scope

`dns_expire_interval` is valid in the global scope.