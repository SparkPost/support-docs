---
lastUpdated: "03/26/2020"
title: "client:get_status"
description: "client get status Return the status of an HTTP request client get status Return the status code and description of an HTTP request Example 70 12 client get status example msys http client new client set timeout client set header client do request client get body client parse headers client..."
---

<a name="lua.ref.client_get_status"></a> 
## Name

client:get_status — Return the status of an HTTP request

<a name="idp15212944"></a> 
## Synopsis

`require('msys.http.client')`

client:get_status();

<a name="idp15215488"></a> 
## Description

Return the status code and description of an HTTP request.

<a name="lua.ref.client_get_status.example"></a> 


`local code, status = client:get_status();`
<a name="idp15219008"></a> 
## See Also

[msys.http.client.new](/momentum/4/lua/ref-msys-http-client-new), [client:set_timeout](/momentum/4/lua/ref-client-set-timeout), [client:set_header](/momentum/4/lua/ref-client-set-header), [client:do_request](/momentum/4/lua/ref-client-do-request), [client:get_body](/momentum/4/lua/ref-client-get-body), [client:parse_headers](/momentum/4/lua/ref-client-parse-headers) [client:get_headers](/momentum/4/lua/ref-client-get-headers)