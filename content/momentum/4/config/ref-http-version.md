---
lastUpdated: "03/26/2020"
title: "http_version"
description: "http version Define the HTTP version to use http version 1 1 Define which version of HTTP to use when delivery method is set to an HTTP protocol This option may be set to any one of the following values 0 9 1 0 1 1 The default value for..."
---

<a name="conf.ref.http_version"></a> 
## Name

http_version — Define the HTTP version to use

## Synopsis

`http_version = "1.1"`

<a name="idp24864784"></a> 
## Description

Define which version of HTTP to use when `delivery_method` is set to an HTTP protocol. This option may be set to any one of the following values:

*   `0.9`

*   `1.0`

*   `1.1`

The default value for this option is `"1.1"`.

<a name="idp24872096"></a> 
## Scope

`http_version` is valid in the global, binding_group, binding, and domain scopes.

<a name="idp24873952"></a> 
## See Also

[delivery_method](/momentum/4/config/ref-delivery-method), [http_basic_auth](/momentum/4/config/ref-http-basic-auth), [http_method](/momentum/4/config/ref-http-method), [http_uri](/momentum/4/config/ref-http-uri), [http_host](/momentum/4/config/ref-http-host), [http_host](/momentum/4/config/ref-http-host), and [Momentum for Mobile Push Notifications](/momentum/3/3-push)