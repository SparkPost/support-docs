---
lastUpdated: "03/12/2021"
title: "prefer_ipv6_mxs"
description: "prefer IPv6 over IPv4 at a given MX priority level"
---

<a name="conf.ref.prefer_ipv6_mxs"></a>
## Name

prefer_ipv6_mxs — prefer IPv6 addresses over IPv4 addresses at a given MX priority level

## Synopsis

`prefer_ipv6_mxs = true`

## Description

The option will cause Momentum to prefer any IPv6 addresses at a given MX priority level. E.g.: if there is an IPv6 and an IPv4 address at MX priority 10, then it will prefer the IPv6 address.

Momentum keeps track of whether hosts are up/down at a per binding level. This option does not override whether Momentum thinks a host is up or down. So, in this example, if the IPv6 address is considered to be down, then the system will use the IPv4 address.

There may be multiple priority levels defined for an MX - e.g.: 10 and 20 (lower number = higher priority, i.e.: 10 being the higher priority here). The option only prefers IPv6 within a given priority level. If no IPv6 hosts are considered up at level 10, the system would try to use an IPv4 host that is up at priority level 10, before it would move on to trying the hosts at priority level 20.

```
prefer_ipv6_mxs = true
```

The default value is `false`.

## Scope

`prefer_ipv6_mxs` is valid only in the global scope.
