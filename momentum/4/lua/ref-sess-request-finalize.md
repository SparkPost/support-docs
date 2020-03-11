---
title: "sess:request_finalize"
description: "sess request finalize Finalize changes to an HTTP request sess request finalize update Finalize changes to an HTTP session Call this function whenever the data in an http session has been modified Set update to 1 if you are updating existing data If you are adding new session elements set..."
---

<a name="lua.ref.sess_request_finalize"></a> 
## Name

sess:request_finalize — Finalize changes to an HTTP request

<a name="idp15261648"></a> 
## Synopsis

`require('msys.httpclnt')`

`sess:request_finalize(update);`

`update: boolean`<a name="idp15265360"></a> 
## Description

Finalize changes to an HTTP session. Call this function whenever the data in an http_session has been modified. Set `update` to `1` if you are updating existing data. If you are adding new session elements, set it to `0`.

For a code example see [http_request_eval](/3/3-push/push.http_request_eval/push-http-request-eval). Use this function in the `http_request_eval` callout.

<a name="idp15271136"></a> 
## See Also

[sess:request_set_body](lua.ref.sess_request_set_body "sess:request_set_body") and [sess:request_add_header](lua.ref.sess_request_add_header "sess:request_add_header")