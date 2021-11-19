---
lastUpdated: "03/26/2020"
title: "Use_IPv6"
description: "Use I Pv 6 Affects the selection of I Pv 6 hosts in the SMTP client Use I Pv 6 false Use I Pv 6 true When set to false Momentum will ignore AAAA records in the list of hosts resolved from MX lookups This will effectively prevent the use..."
---

<a name="conf.ref.use_ipv6"></a> 
## Name

Use_IPv6 — Affects the selection of IPv6 hosts in the SMTP client

## Synopsis

`Use_IPv6 = false`

`Use_IPv6 = true`

<a name="idp12369888"></a> 
## Description

When set to false, Momentum will ignore `AAAA` records in the list of hosts resolved from MX lookups. This will effectively prevent the use of outbound IPv6 SMTP connections. The AAAA records will not be visible in the output of the **dig** console command either.

For a discussion of using IPv6 addresses with listeners, see [the section called “Listeners and IPv6 Addresses”](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf.ipv6).

<a name="idp12374976"></a> 
## Scope

use_ipv6 is valid in the global scope.