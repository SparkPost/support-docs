---
lastUpdated: "06/24/2026"
title: "Idle_Time"
description: "idle time specifies the number of seconds of inactivity before an inbound client connection is disconnected It recycles idle session slots so that concurrency caps such as listener sessions and service sessions are not held by idle connections."
---

<a name="conf.ref.idle_time"></a> 
## Name

Idle_Time — number of seconds of inactivity before an inbound client is disconnected.

## Synopsis

`Idle_Time = 300`

<a name="idp.idle_time"></a> 
## Description

`Idle_Time` sets the number of seconds an inbound client connection may remain idle before Momentum disconnects it. It is the primary mechanism for reclaiming session slots held by connections that are no longer doing useful work, and it works hand-in-hand with the inbound concurrency caps [Listener_Sessions](/momentum/4/config/ref-listener-sessions) and [Service_Sessions](/momentum/4/config/ref-service-sessions): because a session slot is held for the entire life of a connection, reaping idle connections frees slots that would otherwise count against those caps.

The default for this option is `0`, which means connections are never reaped for inactivity. The `ecelerity.conf` file shipped with Momentum sets `Idle_Time` to `300`, which is the recommended value.

Like the session caps, `Idle_Time` can be set per source block by placing it inside a `Peer` (CIDR) scope — for example, a longer idle window for trusted senders and a shorter one for everyone else:

```
ESMTP_Listener {
  Idle_Time = 60

  Peer "10.0.0.0/8" {        # trusted senders: longer idle window
    Idle_Time = 300
  }
  Peer "0.0.0.0/0" {         # everyone else: faster reaping
    Idle_Time = 30
  }
}
```

### Caveats

`Idle_Time` only reaps connections that the event loop is actively watching, and only when the loop is free. Under saturation it fires late, and it will not reap connections parked for asynchronous work. It recycles idle session slots, but it will not clear every lingering connection — it is not a substitute for addressing connections that fail to close.

<a name="idp.idle_time.scope"></a> 
## Scope

`Idle_Time` is valid in the esmtp_listener, http_listener, listen, pathway, pathway_group, peer, and xmpp_listener scopes.

<a name="idp.idle_time.seealso"></a> 
## See Also

[Listener_Sessions](/momentum/4/config/ref-listener-sessions), [Service_Sessions](/momentum/4/config/ref-service-sessions), [Listeners](/momentum/4/listeners), [Configuring Inbound Mail Service Using SMTP](/momentum/4/esmtp-listener)
