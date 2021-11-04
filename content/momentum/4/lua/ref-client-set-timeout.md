---
lastUpdated: "03/26/2020"
title: "client:set_timeout"
description: "client set timeout Set the timeout for an HTTP client client set timeout number Set the timeout for an HTTP client Setting the parameter to an integer value determines the length of the timeout Passing no parameter clears the timeout setting msys http client new client do request client get..."
---

<a name="lua.ref.client_set_timeout"></a> 
## Name

client:set_timeout — Set the timeout for an HTTP client

<a name="idp15358400"></a> 
## Synopsis

`require('msys.http.client')`

`client:set_timeout(number);`

`number: integer (optional)`<a name="idp15362128"></a> 
## Description

Set the timeout for an HTTP client. Setting the parameter to an integer value determines the length of the timeout. Passing no parameter clears the timeout setting.

<a name="idp15363648"></a> 
## See Also

[msys.http.client.new](/momentum/4/lua/ref-msys-http-client-new), [client:do_request](/momentum/4/lua/ref-client-do-request), [client:get_status](/momentum/4/lua/ref-client-get-status), [client:set_header](/momentum/4/lua/ref-client-set-header), [client:get_body](/momentum/4/lua/ref-client-get-body), [client:parse_headers](/momentum/4/lua/ref-client-parse-headers) [client:get_headers](/momentum/4/lua/ref-client-get-headers)