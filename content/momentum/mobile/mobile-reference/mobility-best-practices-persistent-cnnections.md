---
lastUpdated: "03/26/2020"
title: "Persistent Connections"
description: "Normally SMPP connections are established by Mobile Momentum whenever traffic is destined for an SMPP domain The connection is kept open until the SMPP inactivity timer expires While this may be fine for most MT based applications it does not guarantee that an SMPP connection is in place when an..."
---

Normally, SMPP connections are established by Mobile Momentum whenever traffic is destined for an SMPP domain. The connection is kept open until the SMPP inactivity timer expires. While this may be fine for most MT based applications, it does not guarantee that an SMPP connection is in place when an SMSC has SMS messages to send. As a solution, persistent SMPP connections may be specified in the configuration when a permanent SMPP connection is needed.

The following example shows how the `SMPP_Persistent_Connections` option is associated with a binding that specifies the configuration of a persistent connection(s):

```
Domain "somewhere.com" {
  SMPP_SMSC_Server = "10.0.0.1"
  ...
  Max_Outbound_Connections = 1
  SMPP_Bind_Type = "Transmitter"
  SMPP_Persistent_Connections = [ Persist_This = 1 ]
  ...
}
```

```
Binding "Persist_This"  {
  Max_Outbound_Connections = 1
  SMPP_Bind_Type = "Receiver"
}
```

In this example, the SMPP domain `somewhere.com` establishes a bind transmitter SMPP connection as needed for outgoing MT traffic and will maintain a single bind receiver SMPP connection for MO traffic.

For more information see [smpp_persistent_connections](/momentum/mobile/mobile-reference/mobility-conf-smpp-persistent-connections).