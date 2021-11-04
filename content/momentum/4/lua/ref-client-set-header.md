---
lastUpdated: "03/26/2020"
title: "client:set_header"
description: "client set header Set an HTTP header client set header header Set a client's HTTP header To set multiple headers invoke this function multiple times Calling this function with no arguments will clear the headers Example 70 13 client set header example msys http client new client set timeout client..."
---

<a name="lua.ref.client_set_header"></a> 
## Name

client:set_header — Set an HTTP header

<a name="idp15341312"></a> 
## Synopsis

`require('msys.http.client')`

`client:set_header(header);`

`header: string (optional)`<a name="idp15345040"></a> 
## Description

Set a client's HTTP header. To set multiple headers, invoke this function multiple times. Calling this function with no arguments will clear the headers.

<a name="lua.ref.client_set_header.example"></a> 


```
function httpclient_test_post(url, postdata)
  client:set_header("Content-Type: text/xml; charset=utf-8");
  client:do_request("POST", url, postdata);
end
```

<a name="idp15348720"></a> 
## See Also

[msys.http.client.new](/momentum/4/lua/ref-msys-http-client-new), [client:set_timeout](/momentum/4/lua/ref-client-set-timeout), [client:do_request](/momentum/4/lua/ref-client-do-request), [client:get_status](/momentum/4/lua/ref-client-get-status), [client:get_body](/momentum/4/lua/ref-client-get-body), [client:parse_headers](/momentum/4/lua/ref-client-parse-headers) [client:get_headers](/momentum/4/lua/ref-client-get-headers)