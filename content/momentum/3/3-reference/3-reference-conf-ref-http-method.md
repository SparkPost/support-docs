---
lastUpdated: "03/26/2020"
title: "http_method"
description: "http method Define the HTTP method to use http method POST Configuration Change This option is available as of version 3 5 6 Define the HTTP method to use when delivery method is set to an HTTP protocol This option may be set to the following values POST SET GET..."
---

<a name="conf.ref.http_method"></a> 
## Name

http_method — Define the HTTP method to use

## Synopsis

`http_method = "POST"`

<a name="idp9774400"></a> 
## Description

**Configuration Change. ** This option is available as of version 3.5.6.

Define the HTTP method to use when `delivery_method` is set to an HTTP protocol. This option may be set to the following values:

*   `POST`

*   `SET`

*   `GET`

*   `DELETE`

The default value for this option is `"POST"`.

<a name="idp9783552"></a> 
## Scope

`http_method` is valid in the global, binding_group, binding and domain scopes.

<a name="idp9785248"></a> 
## See Also

[http_basic_auth](/momentum/3/3-reference/3-reference-conf-ref-http-basic-auth), [delivery_method](/momentum/3/3-reference/3-reference-conf-ref-delivery-method), [http_uri](/momentum/3/3-reference/3-reference-conf-ref-http-uri), [http_host](/momentum/3/3-reference/3-reference-conf-ref-http-host), [http_version](/momentum/3/3-reference/3-reference-conf-ref-http-version) and [Momentum for Mobile Push Notifications](/momentum/3/3-push)