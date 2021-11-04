---
lastUpdated: "03/26/2020"
title: "delivery_method"
description: "delivery method set the delivery method Delivery Method ESMTP Delivery Method SMTP Delivery Method LMTP Delivery Method ECSTREAM Delivery Method APN Delivery Method GCM Delivery Method MM 7 This option directs Momentum to perform deliveries via ESMTP LMTP Local Mail Transport Protocol SMTP ECSTREAM APN GCM and MM 7 ESMTP..."
---

<a name="conf.ref.delivery_method"></a> 
## Name

delivery_method — set the delivery method

## Synopsis

`Delivery_Method = "ESMTP"`

`Delivery_Method = "SMTP"`

`Delivery_Method = "LMTP"`

`Delivery_Method = "ECSTREAM"`

`Delivery_Method = "APN"`

`Delivery_Method = "GCM"`

`Delivery_Method = "MM7"`

<a name="idp24184656"></a> 
## Description

This option directs Momentum to perform deliveries via ESMTP, LMTP (Local Mail Transport Protocol), SMTP, ECSTREAM, APN, GCM, and MM7.

`ESMTP` is the default value.

*   Use `apn` to deliver Apple push notifications.

*   Use `gcm` to deliver Google push notifications.

*   Use `mm7` for multimedia messaging.

The `delivery_method` option is used in combination with [routes](/momentum/4/config/ref-routes). Use `delivery_method` in the following way:

```
domain "apn_example.com"{
  ...
  delivery_method = "apn"
  routes = ("apn://gateway.push.apple.com?port=2195")
}
domain "gcm.example.com" {
  ...
  delivery_method = "gcm"
  routes = ("gcm://android.google.apis.com?port=443")
}
```

Typically, with push notifications `delivery_method` will be defined within a domain scope applicable to the Apple or Google application that is receiving the notifications. For a detailed description of configuring Momentum for push notifications see [Momentum for Mobile Push Notifications](/momentum/3/3-push).

For domain configuration when the `delivery_method` is `mm7` see [Domain Configuration for MM7](/momentum/mobile/mobile-reference/mobility-mm-7-config).

<a name="idp24198928"></a> 
## Scope

`delivery_method` is valid in the binding, binding_group, domain, and global scopes.

<a name="idp24201232"></a> 
## See Also

[ecstream_port](/momentum/4/config/ref-ecstream-port), [lmtp_port](/momentum/4/config/ref-lmtp-port), [Momentum for Mobile Push Notifications](/momentum/3/3-push), [msg:get_delivery_method](/momentum/4/lua/ref-msg-get-delivery-method), and [routes](/momentum/4/config/ref-routes)