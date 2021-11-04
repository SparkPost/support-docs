---
lastUpdated: "03/26/2020"
title: "http_basic_auth"
description: "http basic auth Define the user credentials when using basic HTTP authentication http basic auth user password Define the user credentials when using basic HTTP authentication Use this option when the delivery method uses an HTTP protocol Use a to separate the username and password Theres is no default value..."
---

<a name="conf.ref.http_basic_auth"></a> 
## Name

http_basic_auth — Define the user credentials when using basic HTTP authentication

## Synopsis

http_basic_auth = "*`user:password`*"

<a name="idp24792256"></a> 
## Description

Define the user credentials when using basic HTTP authentication. Use this option when the [delivery_method](/momentum/4/config/ref-delivery-method) uses an HTTP protocol. Use a ‘`:`’ to separate the username and password.

Theres is no default value for this option.

<a name="idp24795248"></a> 
## Scope

`http_` is valid in the global, binding_group, binding, and domain scopes.

<a name="idp24797104"></a> 
## See Also

[http_basic_auth](/momentum/4/config/ref-http-basic-auth), [http_method](/momentum/4/config/ref-http-method), [http_uri](/momentum/4/config/ref-http-uri), [http_host](/momentum/4/config/ref-http-host), [http_version](/momentum/4/config/ref-http-version), and [Momentum for Mobile Push Notifications](/momentum/3/3-push)