---
lastUpdated: "03/26/2020"
title: "use_ipv6"
description: "use ipv 6 Affects the selection of I Pv 6 hosts in the SMTP client use ipv 6 false use ipv 6 true When set to false Momentum will ignore AAAA records in the list of hosts resolved from MX lookups This will effectively prevent the use of outbound I..."
---

<a name="conf.ref.use_ipv6"></a> 
## Name

use_ipv6 — Affects the selection of IPv6 hosts in the SMTP client

## Synopsis

`use_ipv6 = false`

`use_ipv6 = true`

<a name="idp27212800"></a> 
## Description

When set to false, Momentum will ignore `AAAA` records in the list of hosts resolved from MX lookups. This will effectively prevent the use of outbound IPv6 SMTP connections. The AAAA records will not be visible in the output of the **dig** console command either.

The default is `false`.

For a discussion of using IPv6 addresses with listeners, see [“Listeners and IPv6 Addresses”](/momentum/4/listeners#listeners.ipv6).

<a name="idp27217696"></a> 
## Scope

use_ipv6 is valid in the global scope.