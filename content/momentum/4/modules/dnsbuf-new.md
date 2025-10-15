---
lastUpdated: "09/30/2020"
title: "dnsbuf – Configure the DNS UDP Buffer Sizes"
description: "Configuration Change This feature is available in Momentum 4 8 and later"
---

<a name="idp21140416"></a> 

**Configuration Change.** This feature is available in Momentum 4.8 and later.

Momentum does not manipulate the size of UDP sockets it creates and uses for DNS queries; instead, it will use the default sizes configured by the Operating System. This can create problems for clients with too many domains (e.g., tens of thousands) in the system. Responses may be dropped, causing unnecessary DNS failures and retries, thus further increasing the DNS query volume. The `dnsbuf` module enables the client to configure the DNS buffer sizes at the service startup.

### <a name="modules.dnsbuf.configuration"></a> Configuration

The `dnsbuf` module is configured as follows:

<a name="example.dnsbuf"></a> 

```
dnsbuf {
    sndbuf_size = "65536" # In Linux this is set to 131072
    rcvbuf_size = "65536" # In Linux this is set to 131072
}
```

<dl class="variablelist">

<dt>sndbuf_size</dt>

<dd>

The SO_SNDBUF value is set to this value for all UDP DNS sockets. Minimum value is 1024\. Note that in Linux the value in the kernel is automatically doubled; e.g., when a value of 65536 is configured in the module, the kernel will implement a buffer size of 131072.

</dd>

<dt>rcvbuf_size</dt>

<dd>

The SO_RCVBUF value is set to this value for all UDP DNS sockets. Minimum value is 1024\. Note that in Linux the value in the kernel is automatically doubled; e.g., when a value of 65536 is configured in the module, the kernel will actually implement a buffer size of 131072.

</dd>

</dl>

### <a name="modules.dnsbuf.subtleties"></a> Subtleties


* Changes in the values require a service restart to take effect. They are *not* applied in a configuration reload.
* The buffer cannot be set beyond the **sysctl**-defined maximums in Linux:

  ```
  net.core.rmem_max
  net.core.wmem_max
  ```

  Note that those values are the post-doubled values; e.g., if `net.core.wmem_max` is set to 65536, the maximum value that will work in the `dnsbuf` module is `sndbuf_max` = 32768.

### <a name="modules.dnsbuf.dropped"></a> Determining that DNS Responses are Being Dropped

To determine whether the DNS responses are being dropped because the DNS UDP socket buffer is full, look for a corresponding increase in the "Pending DNS Queries" statistic from Momentum and the UDP packet errors from netstat, e.g.:

```
while sleep 1; do (netstat --udp -s | grep error; echo summary |
    /opt/msys/ecelerity/bin/ec_console | grep DNS); echo; done
```

> **NOTE:** Whenever possible, prefer to use the [HTTP-API statistics](/momentum/4/http-api-stats/summary) instead of the `summary` command for performance reasons.

The following is an example in which Momentum started with ~30,000 unresolvable domains in the queue. Notice that the "packet receive errors" number has increased, and there are a high number of pending DNS queries.

```
1559857 packet receive errors
  DNS A Queries: 924801
  DNS AAAA Queries: 0
  DNS MX Queries: 907577
  Pending DNS Queries: 312

    1559857 packet receive errors
  DNS A Queries: 924803
  DNS AAAA Queries: 0
  DNS MX Queries: 907849
  Pending DNS Queries: 43

    1560125 packet receive errors
  DNS A Queries: 924803
  DNS AAAA Queries: 0
  DNS MX Queries: 908388
  Pending DNS Queries: 311
```
