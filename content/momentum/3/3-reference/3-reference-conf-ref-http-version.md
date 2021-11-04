---
lastUpdated: "03/26/2020"
title: "http_version"
description: "http version Define the HTTP version to use http version 1 1 Configuration Change This option is available as of version 3 5 6 Define which version of HTTP to use when delivery method is set to an HTTP protocol This option may be set to any one of the..."
---

<a name="conf.ref.http_version"></a> 
## Name

http_version — Define the HTTP version to use

## Synopsis

`http_version = "1.1"`

<a name="idp9814800"></a> 
## Description

**Configuration Change. ** This option is available as of version 3.5.6.

Define which version of HTTP to use when `delivery_method` is set to an HTTP protocol. This option may be set to any one of the following values:

*   `0.9`

*   `1.0`

*   `1.1`

The default value for this option is `"1.1"`.

<a name="idp9822896"></a> 
## Scope

`http_version` is valid in the global, binding_group, binding and domain scopes.

<a name="idp9824496"></a> 
## See Also

[delivery_method](/momentum/3/3-reference/3-reference-conf-ref-delivery-method), [http_basic_auth](/momentum/3/3-reference/3-reference-conf-ref-http-basic-auth), [http_method](/momentum/3/3-reference/3-reference-conf-ref-http-method), [http_uri](/momentum/3/3-reference/3-reference-conf-ref-http-uri), [http_host](/momentum/3/3-reference/3-reference-conf-ref-http-host), [http_host](/momentum/3/3-reference/3-reference-conf-ref-http-host) and [Momentum for Mobile Push Notifications](/momentum/3/3-push)