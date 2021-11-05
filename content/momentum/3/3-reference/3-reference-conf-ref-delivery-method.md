---
lastUpdated: "03/26/2020"
title: "delivery_method"
description: "delivery method set the delivery method Delivery Method ESMTP Delivery Method SMTP Delivery Method LMTP Delivery Method ECSTREAM Delivery Method APN Delivery Method GCM Delivery Method MM 7 This option directs Momentum to perform deliveries via ESMTP LMTP Local Mail Transport Protocol SMTP ECSTREAM APN GCM and MM 7 The..."
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

<a name="idp8848416"></a> 
## Description

This option directs Momentum to perform deliveries via ESMTP, LMTP (Local Mail Transport Protocol), SMTP, ECSTREAM, APN, GCM and MM7.

The `ECSTREAM` option is available as of version 3.1.4\. `ESMTP` is the default value for this option.

Use `apn` to deliver Apple push notifications.

Use `gcm` to deliver Google push notifications.

Use `mm7` for multimedia messaging.

<a name="conf.ref.delivery_method.push"></a> 
## Delivery Methods in Version 3.5.6

As of version 3.5.6 and higher the `delivery_method` option can also be defined as:

*   `apn` – The Apple Push Notification protocol

*   `gcm` – The Google Cloud Messages protocol

*   `mm7` – For the mm7 protocol

The `delivery_method` option is used in combination with [routes](/momentum/3/3-reference/3-reference-conf-ref-routes). Use `delivery_method` in the following way:

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

<a name="idp8868656"></a> 
## Scope

`delivery_method` is valid in the binding, binding_group, domain and global scopes.

<a name="idp8870736"></a> 
## See Also

[lmtp_port](/momentum/3/3-reference/3-reference-conf-ref-lmtp-port), [ecstream_port](/momentum/3/3-reference/3-reference-conf-ref-ecstream-port), [routes](/momentum/3/3-reference/3-reference-conf-ref-routes), [msg:get_delivery_method](/momentum/3/3-reference/3-reference-lua-ref-msg-get-delivery-method), [Momentum for Mobile Push Notifications](/momentum/3/3-push)