---
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

When using the HTTP protocol this option defines the HTTP URI that you wish to connect to. This option is used in conjunction with the [http_host](conf.ref.http_host "http_host") option. Use this option when the [delivery_method](conf.ref.delivery_method "delivery_method") is one of the following:

*   `apn`

*   `gcm`

*   `mm7`

The default value for this option is an empty string.

<a name="idp24852432"></a> 
## Scope

`http_uri` is valid in the global, binding_group, binding, and domain scopes.

<a name="idp24854288"></a> 
## See Also

[http_basic_auth](conf.ref.http_basic_auth "http_basic_auth"), [http_method](conf.ref.http_method "http_method"), [http_host](conf.ref.http_host "http_host"), [http_version](conf.ref.http_version "http_version"), and [Momentum for Mobile Push Notifications](/3/3-push/)