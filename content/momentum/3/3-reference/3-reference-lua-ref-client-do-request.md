---
lastUpdated: "03/26/2020"
title: "client:do_request"
description: "client do request Perform an HTTP request client do request type url data Perform an HTTP request The legal values for the type parameter are as follows GET POST PUT DELETE The url parameter defines the URL that will process the request The data parameter does not need to be..."
---

<a name="lua.ref.client_do_request"></a> 
## Name

client:do_request — Perform an HTTP request

<a name="idp23643520"></a> 
## Synopsis

`require('msys.http.client')`

`client:do_request(type, url, data);`

```
type: string
url: string
data: string (optional)
```
<a name="idp23646896"></a> 
## Description

Perform an HTTP request. The legal values for the `type` parameter are as follows:

*   GET

*   POST

*   PUT

*   DELETE

The `url` parameter defines the URL that will process the request.

The `data` parameter does not need to be provided when `type` is `GET`.

<a name="lua.ref.client_do_request.example"></a> 


```
function httpclient_test_post(url, postdata)
  client:set_header("Content-Type: text/xml; charset=utf-8");
  client:do_request("POST", url, postdata);
end
```

<a name="idp23656960"></a> 
## See Also

[msys.http.client.new](/momentum/3/3-reference/3-reference-lua-ref-msys-http-client-new), [client:set_timeout](/momentum/3/3-reference/3-reference-lua-ref-client-set-timeout), [client:set_header](/momentum/3/3-reference/3-reference-lua-ref-client-set-header), [client:get_status](/momentum/3/3-reference/3-reference-lua-ref-client-get-status), [client:get_body](/momentum/3/3-reference/3-reference-lua-ref-client-get-body), [client:parse_headers](/momentum/3/3-reference/3-reference-lua-ref-client-parse-headers) [client:get_headers](/momentum/3/3-reference/3-reference-lua-ref-client-get-headers)