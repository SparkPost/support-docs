---
lastUpdated: "10/05/2021"
title: "ha_proxy_client - HAProxy protocol client module"
description: "The ha_proxy_client module is used to configure Momentum to use HAProxy's PROXY protocol version 2 for outbound connections (see https://github.com/haproxy/haproxy/blob/master/doc/proxy-protocol.txt).  This can be leveraged in cases where your sending IPs are deployed on a different machine than Momentum."
---

## Configuration
 
* When configured for a binding or binding group Momentum will connect to the given `ha_proxy_server` and prefix the SMTP session with a PROXY protocol version 2 header.  
* The `dst_addr` and `dst_port` will be filled in with the resolved MX, the `src_addr` will be filled in with the configured value of `ha_proxy_src_addr` if the destination family is IPV4, or `ha_proxy_ipv6_src_addr` if the destination family is IPV6.  If you need to deliver to both IPV4 and IPV6 destinations then you must configure both options for the binding or binding_group.  
* The `ha_proxy_bypass` option allows you to bypass the proxy and follow the normal delivery method on a domain by domain basis.
* It is the customers responsibility to configure a listener at `ha_proxy_server` that   listens for PROXY protocol and forwards traffic based on `dst_addr:dst_port`. 

A simple **example configuration** for HAProxy would be:

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

binding {
  ha_proxy_server = "10.0.0.1:8085"
  ha_proxy_src_addr = "9.9.9.9"
  ha_proxy_ipv6_src_addr = "490c:d8fe:9906:6b57:3f5f:4d00:5b26:aae5"
  Domain example.com {
    ha_proxy_bypass = "true"
}
``` 

## Health Check

The module supports a configurable health check. 

* In order to flip the state of a server from plumbed to unplumbed, a certain number of consecutive failures or successes must be met. The configurations `health_check_failure_threshold` and `health_check_success_threshold` define the number of said failures or successes to be met. 
* Health check will happen periodically, as defined by the `health_check_interval` configuration in seconds. 
* All health checks will follow a specified `health_check_timeout` period defined in seconds. Health checks will be aborted once this timeout threshold is met. 

<a name="modules.ha_proxy_client.example"></a> 

```
ha_proxy_client {
  health_check_failure_threshold = "3"
  health_check_interval = "5"
  health_check_timeout = "1"
  health_check_success_threshold = "3"
}
```
