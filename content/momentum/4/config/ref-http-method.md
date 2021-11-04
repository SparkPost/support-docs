---
lastUpdated: "03/26/2020"
title: "http_method"
description: "http method Define the HTTP method to use http method POST Define the HTTP method to use when delivery method is set to an HTTP protocol This option may be set to the following values POST SET GET DELETE The default value for this option is POST http method is..."
---

<a name="conf.ref.http_method"></a> 
## Name

http_method — Define the HTTP method to use

## Synopsis

`http_method = "POST"`

<a name="idp24822704"></a> 
## Description

Define the HTTP method to use when `delivery_method` is set to an HTTP protocol. This option may be set to the following values:

*   `POST`

*   `SET`

*   `GET`

*   `DELETE`

The default value for this option is `"POST"`.

<a name="idp24831360"></a> 
## Scope

`http_method` is valid in the global, binding_group, binding, and domain scopes.

<a name="idp24833216"></a> 
## See Also

[http_basic_auth](/momentum/4/config/ref-http-basic-auth), [delivery_method](/momentum/4/config/ref-delivery-method), [http_uri](/momentum/4/config/ref-http-uri), [http_host](/momentum/4/config/ref-http-host), [http_version](/momentum/4/config/ref-http-version), and [Momentum for Mobile Push Notifications](/momentum/3/3-push)