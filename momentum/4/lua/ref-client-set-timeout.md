---
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

[msys.http.client.new](lua.ref.msys.http.client.new "msys.http.client.new"), [client:do_request](lua.ref.client_do_request "client:do_request"), [client:get_status](lua.ref.client_get_status "client:get_status"), [client:set_header](lua.ref.client_set_header "client:set_header"), [client:get_body](lua.ref.client_get_body "client:get_body"), [client:parse_headers](lua.ref.client_parse_headers "client:parse_headers") [client:get_headers](lua.ref.client_get_headers "client:get_headers")