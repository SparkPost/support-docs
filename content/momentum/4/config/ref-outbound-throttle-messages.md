---
lastUpdated: "03/26/2020"
title: "outbound_throttle_messages"
description: "outbound throttle messages limit the rate at which messages are delivered outbound throttle messages 1 outbound throttle messages 1 60 This option allows you to limit the rate at which Momentum will attempt to deliver mail It can be employed to globally limit throughput or to reduce the rate sent..."
---

<a name="conf.ref.outbound_throttle_messages"></a> 
## Name

outbound_throttle_messages — limit the rate at which messages are delivered

## Synopsis

`outbound_throttle_messages = "1"`

`outbound_throttle_messages = "1/60"`

<a name="idp25662240"></a> 
## Description

This option allows you to limit the rate at which Momentum will attempt to deliver mail. It can be employed to globally limit throughput or to reduce the rate sent to a particular domain.

If a single integer parameter is provided, Momentum will ensure that no more than the specified number of messages are sent in a given second of time. If a proper fraction parameter is provided, Momentum will limit the number of sent message to the number specified in the numerator over the time window in seconds specified by the denominator. By default this option is not set, indicating an unlimited number of deliveries.

### Note

For best results, a throttle in the same scope and with the same values should also be defined using [outbound_throttle_connections](/momentum/4/config/ref-outbound-throttle-connections).

If this option is not set or if is set to `0`, there is no limit on the number of messages sent.

<a name="conf.ref.outbound_throttle_messages.fallback"></a> 
### Throttles and Fallback

In general, the configuration system works by taking the most specific instance of a given configuration option. Consider the following:

```
opt = "foo"
a {
  b {
    opt = "bar"
  }

  c {}
}
```

In this case, we have a notional option called `opt` specified globally, and within the `b` stanza. If we look it up globally, we get the value "`foo`. If we look it up inside the "`a` stanza, it falls back to global, and we get `foo`. Within the `b` stanza, it's explicitly set to `bar`, and this is the value we receive. Inside the `c` stanza, no value is set, so we fall back to `a`. As no value is set there, we fall back to the global `foo` value. The effective values are shown in the following:

```
opt = "foo"
a {
 opt = "foo"
 b { opt = "bar" }
 c { opt = "foo" }
}
```

Throttles work in a similar way, but are treated "by reference" as opposed to "by value." Consider the following configuration:

```
binding_group "mygroup" {
  Outbound_Throttle_Messages = "10"

  binding "mybinding1" {}

  binding "mybinding2" {}

  domain "mydomain1" {}

}
```

A single throttle structure is created in the scope of the binding group, `mygroup`. However, this doesn't mean that you end up with a new throttle in each scope. The fallback behavior of the configuration system for throttles means that a broader scope throttle *will* apply cumulatively to all subordinate options. In other words, options falling back to a less specific stanza to find a throttle will all affect the throttle together.

In the above configuration the **combined** scopes `mybinding1, mybinding2` and `mydomain1` may send 10 messages cumulatively within a 1 second time period. Thus, if 10 messages go out for `mybinding1, mybinding2` and `mydomain1` will not send out any messages within that second.

The following configuration allows 10 messages per second individually for each scope.

```
binding_group "mygroup" {
  outbound_throttle_messages = "10"

  binding "mybinding1" {
    outbound_throttle_messages = "10"
  }

  binding "mybinding2" {
    outbound_throttle_messages = "10"
  }

  domain "mydomain1" {
    outbound_throttle_messages = "10"
  }
}
```

## <a name="idp25683424"></a> outbound_throttle_messages and Regex Domains

Regex Domains can also be considered a scope.

```
Domain "/(?:^|[.])example[.](/momentum/4/com-co-uk)$/" {
  Outbound_Throttle_Messages = 10
}
```

outbound_throttle_messages set in the regex domain shown in the preceding example will impact all domains together, in the same way that a throttle set in a binding_group impacts all bindings.

<a name="conf.ref.outbound_throttle_messages.host_scope"></a>
### `Outbound_Throttle_Messages` in the `host` Scope

`Outbound_Throttle_Messages` may also be declared inside a `host` stanza to limit the message-delivery rate to a particular MX host — a dimension that the binding/binding_group/domain/global form cannot express on its own, since multiple domains can share a single MX host and a single domain can be served by several MX hosts. The `host` scope identifies the resolved MX hostname for a delivery, so the throttle is consulted once the connection has been bound to a specific MX host, and is enforced alongside any binding/binding_group/domain/global throttle already in effect (see [Layering on top of the binding/domain/global throttle](#conf.ref.outbound_throttle_messages.host_scope) below).

#### Layering on top of the binding/domain/global throttle

The host-scoped throttle is **additive**: it is consulted **in addition to** any `Outbound_Throttle_Messages` value already in effect for the binding/binding_group/domain/global fallback chain. A delivery proceeds only when none of the applicable throttles is saturated; if either the per-binding/domain throttle **or** the per-host throttle is exceeded, the delivery is deferred.

#### `host` scope fallback chain

The `host`-scoped throttle walks its own dedicated fallback chain — separate from the binding/binding_group/domain/global chain — when looking up the most specific value for a given `(binding_group, binding, host)` triple:

```
binding_group::binding::host  >  binding_group::host  >  binding::host  >  host
```

The most specific declaration wins. If no `host` stanza along the chain sets `Outbound_Throttle_Messages`, the host-scoped throttle is not enforced; only the binding/domain/global throttle applies. Note that, as with [max_outbound_connections](/momentum/4/config/ref-max-outbound-connections) in the `host` scope, there is no fallback from a `host`-scope lookup to the binding/domain/global value of `Outbound_Throttle_Messages` — the two chains are independent.

#### Usage Example

```
host "smtp.example.com" {
  Outbound_Throttle_Messages = "10/5"
}

Binding "vip" {
  host "smtp.example.com" {
    Outbound_Throttle_Messages = "100"
  }
}
```

With the configuration above, deliveries to the resolved MX host `smtp.example.com` are capped at 10 messages per 5 seconds by default, but messages going out from the `vip` binding to the same host may run at 100 per second.

#### Throttles-by-reference semantics still apply

As with the binding/domain/global form (see [the section called “Throttles and Fallback”](#conf.ref.outbound_throttle_messages.fallback)), the host-scoped throttle object is shared by reference across more specific scopes that fall back to it. For example, deliveries from `binding_a::host smtp.example.com` and `binding_b::host smtp.example.com` that both fall back to the plain `host "smtp.example.com"` declaration share the **same** token bucket and are rate-limited cumulatively. Declare an explicit `Outbound_Throttle_Messages` inside each binding's `host` stanza if you want each binding to have its own independent rate to the host.

#### Note on cluster enforcement

The `host`-scoped form of `Outbound_Throttle_Messages` is enforced **locally** on each Momentum node. The cluster module does **not** replicate this throttle across nodes; for cluster-wide rate limiting, use [cluster_outbound_throttle_messages](/momentum/4/config/ref-cluster-outbound-throttle-messages), which operates in the binding_group, domain, and global scopes.

<a name="idp25685888"></a> 
## Scope

outbound_throttle_messages is valid in the binding, binding_group, domain, global, and host scopes. In the `host` scope it walks a dedicated fallback chain (binding_group::binding::host, binding_group::host, binding::host, host).

<a name="idp25687776"></a> 
## See Also

[“Configuration Scopes and Fallback”](/momentum/4/4-ecelerity-conf-fallback), [outbound_throttle_connections](/momentum/4/config/ref-outbound-throttle-connections), [host](/momentum/4/config/ref-host), [max_outbound_connections](/momentum/4/config/ref-max-outbound-connections), [cluster_outbound_throttle_messages](/momentum/4/config/ref-cluster-outbound-throttle-messages)
