---
lastUpdated: "06/24/2026"
title: "Service_Sessions"
description: "service sessions specifies the maximum number of concurrent inbound sessions that can be established to all listeners for a service such as ESMTP or ECStream When the cap is reached new connections receive a retryable 421 4 4 5 response and are closed Use Peer CIDR scopes to partition the cap per source block."
---

<a name="conf.ref.service_sessions"></a> 
## Name

Service_Sessions — maximum number of concurrent inbound sessions across all listeners for a service.

## Synopsis

`Service_Sessions = 0`

<a name="idp.service_sessions"></a> 
## Description

`Service_Sessions` caps the number of concurrent inbound sessions that may be established across **all** listeners for a given service (for example, ESMTP or ECStream). This differs from [Listener_Sessions](/momentum/4/config/ref-listener-sessions), which limits a single listener: where several listeners serve the same service (for example, an `ESMTP_Listener` bound to ports 25, 587, and a Unix socket), `Service_Sessions` is the shared ceiling across all of them.

A session slot is held for the entire life of a connection — including time spent idle or otherwise lingering — and is only released when the connection is fully closed. While the cap is reached, every new connection in the same scope is rejected, including legitimate mail, until a slot is freed.

When the cap is reached, the connection is given a clean, retryable response and is closed:

```
421 4.4.5 Service unavailable, concurrency limit reached.
```

The default value is `0`, which means *no limit*.

### Scope, fallback, and per-source caps

`Service_Sessions` is a *per-scope aggregate*, not a per-IP limit. How the active sessions are counted depends on the scope in which the option is set:

*   When set **outside** a `Peer` scope, the cap is a single shared budget summed across **all** connecting sources for the service. A few noisy sources can consume the entire budget.

*   When set **inside** a `Peer` (CIDR) scope, sessions are counted **per matching CIDR block**, so each source block gets its own independent budget.

Because `Peer` scopes use most-specific-match fallback, you can partition a broad cap into narrower per-source budgets, and apply tighter caps to known offenders. For more information about fallback, see [“Configuration Scopes and Fallback”](/momentum/4/4-ecelerity-conf-fallback).

The following example sets a service-wide ceiling, a larger budget for a trusted subnet, and a tighter budget for everyone else:

```
ESMTP_Listener {
  Service_Sessions = 2000    # absolute ceiling across all ESMTP sockets
  Idle_Time = 60

  Peer "10.0.0.0/8" {        # trusted senders: larger budget
    Service_Sessions = 1500
    Idle_Time = 300
  }
  Peer "0.0.0.0/0" {         # everyone else: tighter cap, faster reaping
    Service_Sessions = 600
    Idle_Time = 30
  }
}
```

### Caveats

*   **The cap counts lingering connections too.** A slot is held for the connection's whole life, including while it is stuck. If connections keep lingering, the cap fills with them and then rejects all new connections in that scope. It is a circuit-breaker, not a cure for connections that fail to close.

*   **It is a per-scope aggregate, not per-IP.** A broad cap is one shared budget that a few noisy sources can consume. Partition it with narrower `Peer` scopes, and use specific tight scopes (or upstream firewalling) for known offenders.

To cap concurrency for a single listener rather than the whole service, see [Listener_Sessions](/momentum/4/config/ref-listener-sessions).

<a name="idp.service_sessions.scope"></a> 
## Scope

`Service_Sessions` is valid in the esmtp_listener, listen, pathway, pathway_group, and peer scopes.

<a name="idp.service_sessions.seealso"></a> 
## See Also

[Listener_Sessions](/momentum/4/config/ref-listener-sessions), [Idle_Time](/momentum/4/config/ref-idle-time), [Listeners](/momentum/4/listeners), [Configuring Inbound Mail Service Using SMTP](/momentum/4/esmtp-listener)
