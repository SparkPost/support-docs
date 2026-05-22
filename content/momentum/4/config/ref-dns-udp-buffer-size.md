---
lastUpdated: "01/31/2026"
title: "dns_udp_rcvbuf_size, dns_udp_sndbuf_size"
description: "dns_udp_***buf_size set the size of the UDP socket buffers used by DNS lookups"
---

<a name="conf.ref.dns_udp_buffer_size"></a> 
## Name

dns_udp_rcvbuf_size — set the size of the UDP socket receiving buffer used by DNS lookups

dns_udp_sndbuf_size - set the size of the UDP socket sending buffer

## Synopsis

`dns_udp_rcvbuf_size = 65536`

`dns_udp_sndbuf_size = 16384`

<a name="idp69437158"></a> 
## Description

By default, Momentum uses the operating system's default buffer sizes for the UDP sockets used for DNS lookups. In high-volume environments with tens of thousands of domains, these default buffer sizes may be insufficient. When the receive buffer fills up, incoming DNS responses can be dropped, causing unnecessary DNS failures and retries that further increase query volume. These configuration options allow you to increase the DNS socket buffer sizes at startup.

The default value for both options is `0` (use OS defaults).

<a name="idp69437159"></a> 
## Scope

Both `dns_udp_rcvbuf_size` and `dns_udp_sndbuf_size` are valid in the global scope.
