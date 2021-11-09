---
lastUpdated: "03/26/2020"
title: "sess:request_set_body"
description: "sess request set body Set the body of an HTTP session sess request set body request Set the body of an HTTP session request is a JSON formatted string You must call sess request finalize after invoking this function For a code example see http request eval sess request finalize..."
---

<a name="lua.ref.sess_request_set_body"></a> 
## Name

sess:request_set_body — Set the body of an HTTP session

<a name="idp15278160"></a> 
## Synopsis

`require('msys.httpclnt')`

`sess:request_set_body(request);`

`request: JSON string`<a name="idp15281872"></a> 
## Description

Set the body of an HTTP session. `request` is a JSON-formatted string. You must call [sess:request_finalize](/momentum/4/lua/ref-sess-request-finalize) after invoking this function.

For a code example see [http_request_eval](/momentum/3/3-push/push-http-request-eval).

<a name="idp15285872"></a> 
### See Also

[sess:request_finalize](/momentum/4/lua/ref-sess-request-finalize) and [sess:request_add_header](/momentum/4/lua/ref-sess-request-add-header)