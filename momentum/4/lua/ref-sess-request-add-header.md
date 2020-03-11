---
title: "sess:request_add_header"
description: "sess request add header Add a header to an HTTP session sess request add header header value replace Set the header of an HTTP session Use header for the header identifier and value for its value If you are replacing an existing header set repace to 1 Otherwise set it..."
---

<a name="lua.ref.sess_request_add_header"></a> 
## Name

sess:request_add_header — Add a header to an HTTP session

<a name="idp15229280"></a> 
## Synopsis

`require('msys.httpclnt')`

`sess:request_add_header(header, value, replace);`

```
header: string
value: string
replace: boolean
```
<a name="idp15233040"></a> 
## Description

Set the header of an HTTP session. Use `header` for the header identifier and `value` for its value. If you are replacing an existing header, set `repace` to `1`. Otherwise set it to `0`. You must call [sess:request_finalize](lua.ref.sess_request_finalize "sess:request_finalize") after invoking this function.

For a code example see [http_request_eval](/3/3-push/push.http_request_eval/push-http-request-eval).

<a name="idp15239056"></a> 
## See Also

[sess:request_set_body](lua.ref.sess_request_set_body "sess:request_set_body") and [sess:request_finalize](lua.ref.sess_request_finalize "sess:request_finalize")