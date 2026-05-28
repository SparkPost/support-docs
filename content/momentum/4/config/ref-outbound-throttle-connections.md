---
lastUpdated: "03/26/2020"
title: "outbound_throttle_connections"
description: "outbound throttle connections limit the rate at which connections are established outbound throttle connections 1 outbound throttle connections 1 60 This allows you to limit the rate at which Momentum will attempt to establish TCP IP connections It can be employed to globally limit connection allocation or to reduce the..."
---

<a name="conf.ref.outbound_throttle_connections"></a> 
## Name

outbound_throttle_connections — limit the rate at which connections are established

## Synopsis

`outbound_throttle_connections = "1"`

`outbound_throttle_connections = "1/60"`

<a name="idp25644896"></a> 
## Description

This allows you to limit the rate at which Momentum will attempt to establish TCP/IP connections. It can be employed to globally limit connection allocation or to reduce the rate established to a particular domain. When used in the global scope it limits the entire system to the value specified. For example, when set to `100`, no more than a total of `100` outbound connections can be made in a given second across any number of bindings.

If a single integer parameter is provided, Momentum will ensure that no more than the specified number of connections are initiated in a given second. If a proper fraction parameter is provided, Momentum will limit the number of connections to the number specified in the numerator over the time window in seconds specified by the denominator. By default this option is not set, indicating an unlimited number of connections.

Where throttles are concerned, Momentum's fallback behavior differs. For more information, see [the section called “Throttles and Fallback”](/momentum/4/config/ref-outbound-throttle-messages#conf.ref.outbound_throttle_messages.fallback).

### Note

This option can also be used to throttle *ecstream* connections.

<a name="conf.ref.outbound_throttle_connections.host_scope"></a>
### `Outbound_Throttle_Connections` in the `host` Scope

`Outbound_Throttle_Connections` may also be declared inside a `host` stanza to limit the rate at which connections are initiated to a particular MX host — a dimension that the binding/binding_group/domain/global form cannot express on its own, since multiple domains can share a single MX host and a single domain can be served by several MX hosts. The throttle is consulted at connection-establishment time, once the MX host has been selected, and is enforced alongside any binding/binding_group/domain/global throttle already in effect (see [Layering on top of the binding/domain/global throttle](#conf.ref.outbound_throttle_connections.host_scope) below).

#### Layering on top of the binding/domain/global throttle

The host-scoped throttle is **additive**: it is consulted **in addition to** any `Outbound_Throttle_Connections` value already in effect for the binding/binding_group/domain/global fallback chain. A new outbound TCP connection to a host proceeds only when none of the applicable throttles is saturated.

#### `host` scope fallback chain

The `host`-scoped throttle walks its own dedicated fallback chain — separate from the binding/binding_group/domain/global chain — when looking up the most specific value for a given `(binding_group, binding, host)` triple:

```
binding_group::binding::host  >  binding_group::host  >  binding::host  >  host
```

The most specific declaration wins. If no `host` stanza along the chain sets `Outbound_Throttle_Connections`, the host-scoped throttle is not enforced; only the binding/domain/global throttle applies. Note that, as with [max_outbound_connections](/momentum/4/config/ref-max-outbound-connections) in the `host` scope, there is no fallback from a `host`-scope lookup to the binding/domain/global value of `Outbound_Throttle_Connections` — the two chains are independent.

#### Usage Example

```
host "smtp.example.com" {
  Outbound_Throttle_Connections = "5/10"
}

Binding "vip" {
  host "smtp.example.com" {
    Outbound_Throttle_Connections = "30"
  }
}
```

In the example above, connections opened to the resolved MX host `smtp.example.com` are limited to 5 every 10 seconds by default, but the `vip` binding may open up to 30 new connections per second to the same host.

#### Throttles-by-reference semantics still apply

As with the binding/domain/global form (see [the section called “Throttles and Fallback”](/momentum/4/config/ref-outbound-throttle-messages#conf.ref.outbound_throttle_messages.fallback)), the host-scoped throttle object is shared by reference across more specific scopes that fall back to it. Two bindings whose `binding::host` lookup falls back to the same plain `host "smtp.example.com"` declaration share the **same** token bucket and are rate-limited cumulatively. Declare an explicit `Outbound_Throttle_Connections` inside each binding's `host` stanza if you want each binding to have its own independent connection rate to the host.

#### Note on cluster enforcement

The `host`-scoped form of `Outbound_Throttle_Connections` is enforced **locally** on each Momentum node. The cluster module does **not** replicate this throttle across nodes; for cluster-wide rate limiting, use [cluster_outbound_throttle_connections](/momentum/4/config/ref-cluster-outbound-throttle-connections), which operates in the binding_group, domain, and global scopes.

<a name="idp25651456"></a> 
## Scope

outbound_throttle_connections is valid in the binding, binding_group, domain, global, and host scopes. In the `host` scope it walks a dedicated fallback chain (binding_group::binding::host, binding_group::host, binding::host, host).

<a name="conf.ref.outbound_throttle_connections.see_also"></a>
## See Also

[outbound_throttle_messages](/momentum/4/config/ref-outbound-throttle-messages), [host](/momentum/4/config/ref-host), [max_outbound_connections](/momentum/4/config/ref-max-outbound-connections), [cluster_outbound_throttle_connections](/momentum/4/config/ref-cluster-outbound-throttle-connections)
