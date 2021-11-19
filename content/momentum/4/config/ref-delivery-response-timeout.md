---
lastUpdated: "03/26/2020"
title: "delivery_response_timeout"
description: "delivery response timeout time to wait for a response to an outbound request delivery response timeout 5000 The time in milliseconds to wait for a response to an outbound request Use this option when delivery method is set to an HTTP protocol The default value is 5000 This option was..."
---

<a name="conf.ref.delivery_response_timeout"></a> 
## Name

delivery_response_timeout — time to wait for a response to an outbound request

## Synopsis

`delivery_response_timeout = 5000`

<a name="idp24230128"></a> 
## Description

The time in milliseconds to wait for a response to an outbound request. Use this option when `delivery_method` is set to an HTTP protocol.

The default value is `5000`.

This option was introduced to define the delivery response timeout for Mobile push notifications. Use it in the following way:

```
domain "apn_example.com"{
  ...
  delivery_method = "apn"
  routes = ("apn://gateway.push.apple.com?port=2195")
  idle_timeout = 10
  delivery_response_timeout = 1000
}
domain "gcm.example.com" {
  ...
  delivery_method = "gcm"
  routes = ("gcm://android.google.apis.com?port=443")
  idle_timeout = 10
  delivery_response_timeout = 1000
}
```
<a name="idp24234288"></a> 
## Scope

`delivery_response_timeout` is valid in the global, binding, and domain scopes.

<a name="idp24236144"></a> 
## See Also

[idle_timeout](/momentum/4/config/ref-idle-timeout), [delivery_method](/momentum/4/config/ref-delivery-method), and [Momentum for Mobile Push Notifications](/momentum/3/3-push)