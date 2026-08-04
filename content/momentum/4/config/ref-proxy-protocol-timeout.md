---
lastUpdated: "08/03/2026"
title: "Proxy_Protocol_Timeout"
description: "proxy protocol timeout sets how long a listener with proxy protocol enabled waits for a complete PROXY protocol header before closing the connection."
---

<a name="conf.ref.proxy_protocol_timeout"></a>
## Name

Proxy_Protocol_Timeout — how long to wait for a complete PROXY protocol header.

## Synopsis

`Proxy_Protocol_Timeout = 60`

<a name="idp.proxy_protocol_timeout"></a>
## Description

On a listener with [Proxy_Protocol](/momentum/4/config/ref-proxy-protocol) enabled, this is the number of seconds the listener waits for a complete header before closing the connection.

The timeout covers the header only. Once the header has been read, the connection continues under the listener's normal timeouts, such as [Idle_Time](/momentum/4/config/ref-idle-time).

The default value is `60`. A value of `0` disables the timeout, which is not recommended: a client that opens a connection and sends a partial header would then occupy a session slot indefinitely.

A header is a few dozen bytes sent immediately on connection, so it should arrive within one round trip. The generous default exists to tolerate unusual networks; lowering it to a few seconds reclaims slots faster from clients that connect and then stall. Because a held slot counts against [Listener_Sessions](/momentum/4/config/ref-listener-sessions) and [Service_Sessions](/momentum/4/config/ref-service-sessions), a long timeout combined with a low session cap lets stalled connections crowd out real mail.

## Example

```
ESMTP_Listener {
  Listen "10.0.0.5:25" {
    Proxy_Protocol = true
    Proxy_Protocol_Timeout = 10
  }
}
```

## Scope

Set on any listener with `Proxy_Protocol` enabled, or on an individual `Listen` endpoint. It has no effect where `Proxy_Protocol` is not enabled.

## See Also

[Proxy_Protocol](/momentum/4/config/ref-proxy-protocol), [Idle_Time](/momentum/4/config/ref-idle-time), [Listener_Sessions](/momentum/4/config/ref-listener-sessions)
