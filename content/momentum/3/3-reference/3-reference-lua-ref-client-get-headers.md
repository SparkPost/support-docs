---
lastUpdated: "03/26/2020"
title: "client:get_headers"
description: "client get headers Get HTTP headers client get headers Get the HTTP headers Use this function in the following way This function returns the raw HTTP headers as a table Use client parse headers to create a key value table where the key is the header name msys http client..."
---

<a name="lua.ref.client_get_headers"></a> 
## Name

client:get_headers — Get HTTP headers

<a name="idp23677584"></a> 
## Synopsis

`require('msys.http.client')`

client:get_headers();

<a name="idp23679856"></a> 
## Description

Get the HTTP headers. Use this function in the following way:

`local headers = client:parse_headers(client:get_headers());`

This function returns the raw HTTP headers as a table. Use `client:parse_headers` to create a key/value table where the key is the header name.

<a name="idp23682816"></a> 
## See Also

[msys.http.client.new](/momentum/3/3-reference/3-reference-lua-ref-msys-http-client-new), [client:set_timeout](/momentum/3/3-reference/3-reference-lua-ref-client-set-timeout), [client:set_header](/momentum/3/3-reference/3-reference-lua-ref-client-set-header), [client:do_request](/momentum/3/3-reference/3-reference-lua-ref-client-do-request), [client:get_status](/momentum/3/3-reference/3-reference-lua-ref-client-get-status), [client:get_body](/momentum/3/3-reference/3-reference-lua-ref-client-get-body), [client:parse_headers](/momentum/3/3-reference/3-reference-lua-ref-client-parse-headers)