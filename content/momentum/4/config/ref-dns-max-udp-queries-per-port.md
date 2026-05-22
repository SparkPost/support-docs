---
lastUpdated: "01/31/2026"
title: "dns_max_udp_queries_per_port"
description: "dns max udp queries per port limit the number of DNS queries sent using the same UDP source port Momentum uses User Datagram Protocol UDP for DNS queries However the size of a UDP packet is limited and a DNS query can exceed it Set this option to..."
---

<a name="conf.ref.dns_max_udp_queries_per_port"></a> 
## Name

dns_max_udp_queries_per_port — limit the number of DNS queries sent using the same UDP source port

## Synopsis

`dns_max_udp_queries_per_port = 10`

<a name="idp69432014"></a> 
## Description

Momentum uses User Datagram Protocol (UDP) for DNS queries. Each internal channel to the DNS server(s) is assigned a dynamic (ephemeral) UDP source port number. All DNS queries sent over that channel use the same source port. When many queries originate from a single source port, security devices such as firewalls may interpret this pattern as malicious behavior (e.g., a DNS-based attack) and drop or block the queries. This setting limits how many DNS queries will be sent from each source port before Momentum allocates a new port number, helping to avoid triggering such security measures.

The default value is `0` (no limit). Most users do not need to change this value unless experiencing DNS-related firewall blocks.

<a name="idp69432015"></a> 
## Scope

`dns_max_udp_queries_per_port` is valid in the global scope.
