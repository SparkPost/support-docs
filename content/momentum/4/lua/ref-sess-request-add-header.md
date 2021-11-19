---
lastUpdated: "03/26/2020"
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

Set the header of an HTTP session. Use `header` for the header identifier and `value` for its value. If you are replacing an existing header, set `repace` to `1`. Otherwise set it to `0`. You must call [sess:request_finalize](/momentum/4/lua/ref-sess-request-finalize) after invoking this function.

For a code example see [http_request_eval](/momentum/3/3-push/push-http-request-eval).

<a name="idp15239056"></a> 
## See Also

[sess:request_set_body](/momentum/4/lua/ref-sess-request-set-body) and [sess:request_finalize](/momentum/4/lua/ref-sess-request-finalize)