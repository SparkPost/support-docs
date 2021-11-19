---
lastUpdated: "03/26/2020"
title: "http_uri"
description: "http uri Define the HTTP URI that you wish to connect to http uri gcm send When using the HTTP protocol this option defines the HTTP URI that you wish to connect to This option is used in conjunction with the http host option Use this option when the delivery..."
---

<a name="conf.ref.http_uri"></a> 
## Name

http_uri — Define the HTTP URI that you wish to connect to

## Synopsis

`http_uri = "/gcm/send"`

<a name="idp24844320"></a> 
## Description

When using the HTTP protocol this option defines the HTTP URI that you wish to connect to. This option is used in conjunction with the [http_host](/momentum/4/config/ref-http-host) option. Use this option when the [delivery_method](/momentum/4/config/ref-delivery-method) is one of the following:

*   `apn`

*   `gcm`

*   `mm7`

The default value for this option is an empty string.

<a name="idp24852432"></a> 
## Scope

`http_uri` is valid in the global, binding_group, binding, and domain scopes.

<a name="idp24854288"></a> 
## See Also

[http_basic_auth](/momentum/4/config/ref-http-basic-auth), [http_method](/momentum/4/config/ref-http-method), [http_host](/momentum/4/config/ref-http-host), [http_version](/momentum/4/config/ref-http-version), and [Momentum for Mobile Push Notifications](/momentum/3/3-push)