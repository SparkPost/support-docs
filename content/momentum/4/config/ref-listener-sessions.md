---
lastUpdated: "06/24/2026"
title: "Listener_Sessions"
description: "listener sessions specifies the maximum number of concurrent inbound sessions that can be established to this listener When the cap is reached new connections receive a retryable 421 4 4 5 response and are closed Use Peer CIDR scopes to partition the cap per source block."
---

<a name="conf.ref.listener_sessions"></a> 
## Name

Listener_Sessions — maximum number of concurrent inbound sessions for a single listener.

## Synopsis

`Listener_Sessions = 0`

<a name="idp.listener_sessions"></a> 
## Description

`Listener_Sessions` caps the number of concurrent inbound sessions that may be established to *this* listener (for example, the `ESMTP_Listener`). It is a circuit-breaker that protects a node from being overwhelmed by inbound concurrency.

A session slot is held for the entire life of a connection — including time spent idle or otherwise lingering — and is only released when the connection is fully closed. While the cap is reached, every new connection in the same scope is rejected, including legitimate mail, until a slot is freed.

When the cap is reached, the connection is given a clean, retryable response and is closed:

```
421 4.4.5 Service unavailable, concurrency limit reached.
```

The default value is `0`, which means *no limit*.

### Scope, fallback, and per-source caps

`Listener_Sessions` is a *per-scope aggregate*, not a per-IP limit. How the active sessions are counted depends on the scope in which the option is set:

*   When set **outside** a `Peer` scope (directly in the `ESMTP_Listener` or a `Listen` scope), the cap is a single shared budget summed across **all** connecting sources. A few noisy sources can consume the entire budget.

*   When set **inside** a `Peer` (CIDR) scope, sessions are counted **per matching CIDR block**, so each source block gets its own independent budget.

Because `Peer` scopes use most-specific-match fallback, you can partition a broad cap into narrower per-source budgets, and apply tighter caps to known offenders. For more information about fallback, see [“Configuration Scopes and Fallback”](/momentum/4/4-ecelerity-conf-fallback).

The following example sets an absolute ceiling on the listener, a larger budget for a trusted subnet, and a tighter budget for everyone else:

```
ESMTP_Listener {
  Listener_Sessions = 1800   # ceiling for this listener
  Idle_Time = 60

  Peer "10.0.0.0/8" {        # trusted senders: larger budget
    Listener_Sessions = 1500
    Idle_Time = 300
  }
  Peer "0.0.0.0/0" {         # everyone else: tighter cap, faster reaping
    Listener_Sessions = 600
    Idle_Time = 30
  }

  Listen ":25" {
    Listener_Sessions = 1800
    Idle_Time = 60
  }
}
```

### Caveats

*   **The cap counts lingering connections too.** A slot is held for the connection's whole life, including while it is stuck. If connections keep lingering, the cap fills with them and then rejects all new connections in that scope. It is a circuit-breaker, not a cure for connections that fail to close.

*   **It is a per-scope aggregate, not per-IP.** A broad cap is one shared budget that a few noisy sources can consume. Partition it with narrower `Peer` scopes, and use specific tight scopes (or upstream firewalling) for known offenders.

To cap concurrency across *all* listeners for a service rather than a single listener, see [Service_Sessions](/momentum/4/config/ref-service-sessions).

<a name="idp.listener_sessions.scope"></a> 
## Scope

`Listener_Sessions` is valid in the esmtp_listener, listen, pathway, pathway_group, and peer scopes.

<a name="idp.listener_sessions.seealso"></a> 
## See Also

[Service_Sessions](/momentum/4/config/ref-service-sessions), [Idle_Time](/momentum/4/config/ref-idle-time), [Listeners](/momentum/4/listeners), [Configuring Inbound Mail Service Using SMTP](/momentum/4/esmtp-listener)
