---
title: "ha_proxy_client - HAProxy protocol client module"
description: "The ha_proxy_client module is used to configure Momentum to use HAProxy's PROXY protocol version 2 for outbound connections (see https://github.com/haproxy/haproxy/blob/master/doc/proxy-protocol.txt).  This can be leveraged in cases where your sending IPs are deployed on a different machine than Momentum.
---

When configured for a binding or binding group Momentum will connect to the given `ha_proxy_server` and prefix the SMTP session with a PROXY protocol version 2 header.  The `dst_addr` and `dst_port` will be filled in with the resolved MX, the `src_addr` will be filled in with the configured value of `ha_proxy_src_addr` if the destination family is IPV4, or `ha_proxy_ipv6_src_addr` if the destination family is IPV6.  If you need to deliver to both IPV4 and IPV6 destinations than you must configure both options for the binding or binding_group.  It is the customers responsibility to configure a listener on `dst_addr:dst_port` that listens for PROXY protocol and routes based on the `src_addr`, but a simple example configuration for HAProxy would be:


```
# listen to proxy protocol and forward to backend
frontend  main
    bind *:5000 accept-proxy
    mode tcp
    default_backend     out

# forward to the destination using the clientip
# from proxy protocol as the source address 
backend out
    mode tcp
    source 0.0.0.0 usesrc clientip
    server foo 0.0.0.0
``` 
## Health Check

The module supports a configurable health check. The `ha_proxy_bypass` option allows you to bypass the proxy and follow the normal delivery method on a domain by domain basis.

<a name="modules.ha_proxy_client.example"></a> 

```
ha_proxy_client {
  health_check_failure_threshold = "3"
  health_check_interval = "5"
  health_check_timeout = "1"
  health_check_success_threshold = "3"
}
binding {
  ha_proxy_server = "10.0.0.1:8085"
  ha_proxy_src_addr = "9.9.9.9"
  ha_proxy_ipv6_src_addr = "1.2.3.4"
  Domain example.com {
    ha_proxy_bypass = "true"
  }
}
```
