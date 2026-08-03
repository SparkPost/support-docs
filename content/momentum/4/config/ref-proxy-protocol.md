---
lastUpdated: "08/03/2026"
title: "Proxy_Protocol"
description: "proxy protocol makes a listener read a PROXY protocol header from each incoming connection and use the client address it reports instead of the address of the proxy or load balancer that connected. Both the version 1 text format and the version 2 binary format are accepted and detected automatically."
---

<a name="conf.ref.proxy_protocol"></a>
## Name

Proxy_Protocol — read the originating client address from a PROXY protocol header.

## Synopsis

`Proxy_Protocol = false`

<a name="idp.proxy_protocol"></a>
## Description

When a listener sits behind a proxy or load balancer, every connection appears to come from the proxy. `Proxy_Protocol` makes the listener read a [PROXY protocol](http://www.haproxy.org/download/1.5/doc/proxy-protocol.txt) header at the start of each connection and adopt the client address it reports.

That address is then the one Momentum uses everywhere it refers to the connecting client, including:

*   policy decisions such as `Relay_Hosts` and `Peer` scope matching,
*   SPF evaluation,
*   the reception entry in the mainlog and the address reported to policy scripts,
*   inbound concurrency accounting.

The default value is `false`.

### Versions and automatic detection

Both header formats are accepted, and the listener tells them apart from the first byte of the connection. Nothing needs to be configured to select one:

*   **Version 1** is a line of text, as sent by older load balancers and by AWS Classic Load Balancers.
*   **Version 2** is a binary header, and is what current HAProxy (`send-proxy-v2`), AWS Network Load Balancers and Envoy send.

Version 2 headers may carry extra type-length-value fields after the addresses — for example the AWS VPC endpoint identifier. These are read and discarded; their contents are not available to policy.

### The header is required

Once `Proxy_Protocol` is enabled on a listener, every connection to it **must** begin with a valid header. A client that sends none, or sends a malformed one, is disconnected without a banner. Reserve the listener for traffic that arrives through the proxy, and give direct clients a separate `Listen` endpoint.

Some headers deliberately carry no client address, and are accepted with the real connecting address left in place:

*   the version 2 `LOCAL` command, which proxies use for their own health checks,
*   a version 1 `PROXY UNKNOWN` line,
*   an address family the listener does not use for policy, such as UNIX sockets.

### Trust

There is no source-address allowlist. Any client that can reach a listener with `Proxy_Protocol` enabled can assert whatever client address it likes, which means it can present itself as a relay-permitted host or defeat an IP-based block.

Trust is therefore scoped entirely by *which* endpoint has the option enabled. Only enable it on endpoints reachable from the proxy — bind them to an internal address, or restrict them with a firewall or security group.

## Example

```
ESMTP_Listener {
  # behind the load balancer: adopt the client address it reports
  Listen "10.0.0.5:25" {
    Proxy_Protocol = true
    Proxy_Protocol_Timeout = 30
  }

  # direct submission, no header expected
  Listen "127.0.0.1:587" {}
}
```

## Scope

`Proxy_Protocol` is available on any listener, not only the `ESMTP_Listener`, and may be set on the listener itself or on an individual `Listen` endpoint. Setting it per `Listen` endpoint is usually what you want, so that proxied and direct traffic can be served side by side.

## See Also

[Proxy_Protocol_Timeout](/momentum/4/config/ref-proxy-protocol-timeout), [Configuring Inbound Mail Service Using SMTP](/momentum/4/esmtp-listener), [ha_proxy_client](/momentum/4/modules/ha-proxy-client) for sending a PROXY protocol header on outbound connections.
