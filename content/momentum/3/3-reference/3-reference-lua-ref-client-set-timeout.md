---
lastUpdated: "03/26/2020"
title: "client:set_timeout"
description: "client set timeout Set the timeout for an HTTP client client set timeout number Set the timeout for an HTTP client Setting the parameter to an integer value determines the length of the timeout Passing no parameter clears the timeout setting msys http client new client do request client get..."
---

<a name="lua.ref.client_set_timeout"></a> 
## Name

client:set_timeout — Set the timeout for an HTTP client

<a name="idp23825232"></a> 
## Synopsis

`require('msys.http.client')`

`client:set_timeout(number);`

`number: integer (optional)`<a name="idp23828640"></a> 
## Description

Set the timeout for an HTTP client. Setting the parameter to an integer value determines the length of the timeout. Passing no parameter clears the timeout setting.

<a name="idp23830032"></a> 
## See Also

[msys.http.client.new](/momentum/3/3-reference/3-reference-lua-ref-msys-http-client-new), [client:do_request](/momentum/3/3-reference/3-reference-lua-ref-client-do-request), [client:get_status](/momentum/3/3-reference/3-reference-lua-ref-client-get-status), [client:set_header](/momentum/3/3-reference/3-reference-lua-ref-client-set-header), [client:get_body](/momentum/3/3-reference/3-reference-lua-ref-client-get-body), [client:parse_headers](/momentum/3/3-reference/3-reference-lua-ref-client-parse-headers) [client:get_headers](/momentum/3/3-reference/3-reference-lua-ref-client-get-headers)