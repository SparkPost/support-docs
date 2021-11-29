---
lastUpdated: "03/26/2020"
title: "sess:request_add_header"
description: "sess request add header Add a header to an HTTP session sess request add header header value replace Configuration Change This function is available as of version 3 6 Set the header of an HTTP session Use header for the header identifier and value for its value If you are..."
---

<a name="lua.ref.sess_request_add_header"></a> 
## Name

sess:request_add_header — Add a header to an HTTP session

<a name="idp23706096"></a> 
## Synopsis

`require('msys.httpclnt')`

`sess:request_add_header(header, value, replace);`

```
header: string
value: string
replace: boolean
```
<a name="idp23709536"></a> 
## Description

**Configuration Change. ** This function is available as of version 3.6.

Set the header of an HTTP session. Use `header` for the header identifier and `value` for its value. If you are replacing an existing header, set `repace` to `1`. Otherwise set it to `0`. You must call [sess:request_finalize](/momentum/3/3-reference/3-reference-lua-ref-sess-request-finalize) after invoking this function.

For a code example see [http_request_eval](/momentum/3/3-push/push-http-request-eval).

<a name="idp23716800"></a> 
## See Also

[sess:request_set_body](/momentum/3/3-reference/3-reference-lua-ref-sess-request-set-body) and [sess:request_finalize](/momentum/3/3-reference/3-reference-lua-ref-sess-request-finalize)