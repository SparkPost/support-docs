---
title: "prefer_ipv6_mxs"
description: "prefer IPv6 over IPv4 when they have the same priority"
---

<a name="conf.ref.prefer_ipv6_mxs"></a>
## Name

prefer_ipv6_mxs — prefer IPv6 addresses over IPv4 addresses when they have the same priority

## Synopsis

`prefer_ipv6_mxs = true`

<a name="idp23262528"></a>
## Description

Use the `prefer_ipv6_mxs` to have momentum prefer IPv6 addresses over IPv4 addresses when they have the same priority:

```
prefer_ipv6_mxs = true
```

The default value is `false`.

<a name="idp23269392"></a>
## Scope

`prefer_ipv6_mxs` is valid only in the global scope.
