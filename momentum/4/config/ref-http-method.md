---
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

[http_basic_auth](conf.ref.http_basic_auth "http_basic_auth"), [delivery_method](conf.ref.delivery_method "delivery_method"), [http_uri](conf.ref.http_uri "http_uri"), [http_host](conf.ref.http_host "http_host"), [http_version](conf.ref.http_version "http_version"), and [Momentum for Mobile Push Notifications](/3/3-push/)