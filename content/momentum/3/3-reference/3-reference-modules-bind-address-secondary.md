---
lastUpdated: "03/26/2020"
title: "bind_address_secondary – Dual-stack IPv4/IPv6 Support"
description: "Configuration Change This feature is available as beta in Momentum 3 6 10 and later The bind address secondary module allows a binding to attach itself to an ipv 6 address as well as a ipv 4 one supporting multiple IP addresses for dual stack The secondary could be ipv..."
---

<a name="idp17931408"></a> 

**Configuration Change. ** This feature is available as beta in Momentum 3.6.10 and later.

The bind_address_secondary module allows a binding to attach itself to an ipv6 address as well as a ipv4 one, supporting multiple IP addresses for dual stack. The secondary could be ipv6 or ipv4\. In the dual stack case, it is desirable to select the appropriate address family for a given downstream destination (ie, MX). This module supports one IP address per address family per binding.

### <a name="modules.bind_address_secondary.config"></a> Configuration

The bind_address_secondary module is enabled as follows:

<a name="modules.bind_address_secondary.example"></a> 


bind_address_secondary {}
binding "whatever" {
  bind_address_secondary = *`whatever`*
}