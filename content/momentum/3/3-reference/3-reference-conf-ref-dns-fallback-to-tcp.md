---
lastUpdated: "03/26/2020"
title: "dns_fallback_to_tcp"
description: "dns fallback to tcp whether or not to fail over to TCP in place of UDP dns fallback to tcp false Momentum uses User Datagram Protocol UDP for DNS queries However the size of a UDP packet is limited and a DNS query can exceed it Set this option to..."
---

<a name="conf.ref.dns_fallback_to_tcp"></a> 
## Name

dns_fallback_to_tcp — whether or not to fail over to TCP in place of UDP

## Synopsis

`dns_fallback_to_tcp = false`

<a name="idp8993440"></a> 
## Description

Momentum uses User Datagram Protocol (UDP) for DNS queries. However, the size of a UDP packet is limited and a DNS query can exceed it. Set this option to `true` and Momentum tries first with UDP then fails over to TCP if the query response is too large. This avoids having lengthy DNS responses truncated.

The default value for this option is `false`.

<a name="idp8996304"></a> 
## Scope

`dns_fallback_to_tcp` is valid in the global scope.