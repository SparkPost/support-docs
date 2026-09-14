---
lastUpdated: "09/14/2026"
title: "tcp_recv_buffer_size"
description: "tcp recv buffer size sets the TCP receive buffer size for inbound connections tcp recv buffer size 4096 The receive buffer is applied to each inbound connection when it is accepted When set to 0 the operating system manages the buffer size and can grow the receive window automatically..."
---

<a name="conf.ref.tcp_recv_buffer_size"></a>
## Name

tcp_recv_buffer_size — sets the TCP receive buffer size for inbound connections

## Synopsis

`tcp_recv_buffer_size = 4096`

<a name="tcp_recv_buffer_size.description"></a>
## Description

The receive buffer size is applied with `SO_RCVBUF` to each inbound connection at the moment it is accepted, and stays in force for the whole connection. The default is 4096 bytes for the ESMTP_Listener and 32768 bytes for the HTTP_Listener.

When set to `0`, no buffer size is imposed and the operating system manages it. On Linux this leaves receive window autotuning enabled, so the kernel grows the window to suit the connection.

### Choosing a value

The receive buffer bounds the TCP receive window, and the receive window bounds throughput on a single connection:

```
maximum throughput = receive window / round-trip time
```

The default of 4096 bytes is large enough to go unnoticed on a low-latency path: on a sub-millisecond LAN even a small window sustains a high transfer rate. On a long path it may become a limit, leading the sending MTA to abandon the transaction on its own [body_timeout](/momentum/4/config/ref-body-timeout) before Momentum can acknowledge it.

Set `tcp_recv_buffer_size = 0` to let the operating system size the buffer, which is the best choice on paths whose latency varies or is not known in advance. Alternatively, size it from the bandwidth-delay product of the path — bandwidth multiplied by round-trip time.

Note that setting a value explicitly (any non-zero value) disables receive window autotuning for the life of the connection, because the kernel treats the buffer as caller-managed. A value chosen for one path is therefore also the ceiling for every other client of that listener.

### Operating system limits

`SO_RCVBUF` is capped by the operating system, so a value larger than the kernel limit is silently reduced. On Linux, check `/etc/sysctl.conf` and if necessary raise:

```
net.core.rmem_max      # hard cap for an explicitly requested buffer
net.ipv4.tcp_rmem      # min / default / max used by autotuning
```

Remember that Linux doubles the requested size internally to account for bookkeeping overhead, so a socket configured with 262144 reports a 524288-byte buffer.

### Warning

This is an advanced option. Setting the value too high across many concurrent connections can increase memory use significantly. Thorough testing is recommended before deployment in a production environment.

<a name="tcp_recv_buffer_size.scope"></a>
## Scope

`tcp_recv_buffer_size` is valid in the control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen and xmpp_listener scopes.

<a name="tcp_recv_buffer_size.seealso"></a>
## See Also

[tcp_buffer_size](/momentum/4/config/ref-tcp-buffer-size), [disable_nagle_algorithm](/momentum/4/config/ref-disable-nagle-algorithm), [Configuring Inbound Mail Service Using SMTP](/momentum/4/esmtp-listener), [Adjusting /etc/sysctl.conf](/momentum/4/byb-sysctl-conf)
