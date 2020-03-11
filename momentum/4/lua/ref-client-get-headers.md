---
title: "client:get_headers"
description: "client get headers Get HTTP headers client get headers Get the HTTP headers Use this function in the following way This function returns the raw HTTP headers as a table Use client parse headers to create a key value table where the key is the header name msys http client..."
---

<a name="lua.ref.client_get_headers"></a> 
## Name

client:get_headers — Get HTTP headers

<a name="idp15197184"></a> 
## Synopsis

`require('msys.http.client')`

client:get_headers();

<a name="idp15199728"></a> 
## Description

Get the HTTP headers. Use this function in the following way:

`local headers = client:parse_headers(client:get_headers());`

This function returns the raw HTTP headers as a table. Use `client:parse_headers` to create a key/value table where the key is the header name.

<a name="idp15202912"></a> 
## See Also

[msys.http.client.new](lua.ref.msys.http.client.new "msys.http.client.new"), [client:set_timeout](lua.ref.client_set_timeout "client:set_timeout"), [client:set_header](lua.ref.client_set_header "client:set_header"), [client:do_request](lua.ref.client_do_request "client:do_request"), [client:get_status](lua.ref.client_get_status "client:get_status"), [client:get_body](lua.ref.client_get_body "client:get_body"), [client:parse_headers](lua.ref.client_parse_headers "client:parse_headers")