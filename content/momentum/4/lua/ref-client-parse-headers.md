---
lastUpdated: "03/26/2020"
title: "client:parse_headers"
description: "client parse headers Parse the headers of an HTTP response client parse headers headers Parse the headers of an HTTP response Use this function in the following way Returns a table with the header name as a key and the header value as the value msys http client new client..."
---

<a name="lua.ref.client_parse_headers"></a> 
## Name

client:parse_headers — Parse the headers of an HTTP response

<a name="idp15325152"></a> 
## Synopsis

`require('msys.http.client')`

`client:parse_headers(headers);`

`headers: table`<a name="idp15328864"></a> 
## Description

Parse the headers of an HTTP response. Use this function in the following way:

`local headers = client:parse_headers(client:get_headers());`

Returns a table with the header name as a key and the header value as the value.

<a name="idp15331584"></a> 
## See Also

[msys.http.client.new](/momentum/4/lua/ref-msys-http-client-new), [client:set_timeout](/momentum/4/lua/ref-client-set-timeout), [client:do_request](/momentum/4/lua/ref-client-do-request), [client:get_status](/momentum/4/lua/ref-client-get-status), [client:set_header](/momentum/4/lua/ref-client-set-header), [client:get_body](/momentum/4/lua/ref-client-get-body) [client:get_headers](/momentum/4/lua/ref-client-get-headers)