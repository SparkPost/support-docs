---
lastUpdated: "03/26/2020"
title: "http_uri"
description: "http uri Define the HTTP URI that you wish to connect to http uri gcm send Configuration Change This option is available as of version 3 5 6 When using the HTTP protocol this option defines the HTTP URI that you wish to connect to This option is used in..."
---

<a name="conf.ref.http_uri"></a> 
## Name

http_uri — Define the HTTP URI that you wish to connect to

## Synopsis

`http_uri = "/gcm/send"`

<a name="idp9795120"></a> 
## Description

**Configuration Change. ** This option is available as of version 3.5.6.

When using the HTTP protocol this option defines the HTTP URI that you wish to connect to. This option is used in conjunction with the [http_host](/momentum/3/3-reference/3-reference-conf-ref-http-host) option. Use this option when the [delivery_method](/momentum/3/3-reference/3-reference-conf-ref-delivery-method) is one of the following:

*   `apn`

*   `gcm`

*   `mm7`

The default value for this option is an empty string.

<a name="idp9803936"></a> 
## Scope

`http_uri` is valid in the global, binding_group, binding and domain scopes.

<a name="idp9805536"></a> 
## See Also

[http_basic_auth](/momentum/3/3-reference/3-reference-conf-ref-http-basic-auth), [http_method](/momentum/3/3-reference/3-reference-conf-ref-http-method), [http_host](/momentum/3/3-reference/3-reference-conf-ref-http-host), [http_version](/momentum/3/3-reference/3-reference-conf-ref-http-version) and [Momentum for Mobile Push Notifications](/momentum/3/3-push)