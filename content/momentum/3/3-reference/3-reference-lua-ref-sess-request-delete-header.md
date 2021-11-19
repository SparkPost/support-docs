---
lastUpdated: "03/26/2020"
title: "sess:request_delete_header"
description: "sess request delete header Delete a header from an HTTP session sess request delete header header Delete a header from an HTTP session header is the key that you wish to delete You must call sess request finalize after invoking this function Use this function in the http request eval..."
---

<a name="lua.ref.sess_request_delete_header"></a> 
## Name

sess:request_delete_header — Delete a header from an HTTP session

<a name="idp23722480"></a> 
## Synopsis

`require('msys.httpclnt');`

`sess:request__delete_header(header);`

`header: string`<a name="idp23725872"></a> 
## Description

Delete a header from an HTTP session. `header` is the key that you wish to delete. You must call [sess:request_finalize](/momentum/3/3-reference/3-reference-lua-ref-sess-request-finalize) after invoking this function. Use this function in the `http_request_eval` callout.

On success this function returns `1` and on failure `0`.

<a name="idp23730224"></a> 
### See Also

[sess:request_finalize](/momentum/3/3-reference/3-reference-lua-ref-sess-request-finalize) and [sess:request_add_header](/momentum/3/3-reference/3-reference-lua-ref-sess-request-add-header)