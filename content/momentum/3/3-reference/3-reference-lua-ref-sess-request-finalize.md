---
lastUpdated: "03/26/2020"
title: "sess:request_finalize"
description: "sess request finalize Finalize changes to an HTTP request sess request finalize update Configuration Change This function is available as of version 3 6 Finalize changes to an HTTP session Call this function whenever the data in an http session has been modified Set update to 1 if you are..."
---

<a name="lua.ref.sess_request_finalize"></a> 
## Name

sess:request_finalize — Finalize changes to an HTTP request

<a name="idp23736112"></a> 
## Synopsis

`require('msys.httpclnt')`

`sess:request_finalize(update);`

`update: boolean`<a name="idp23739504"></a> 
## Description

**Configuration Change. ** This function is available as of version 3.6.

Finalize changes to an HTTP session. Call this function whenever the data in an http_session has been modified. Set `update` to `1` if you are updating existing data. If you are adding new session elements, set it to `0`.

For a code example see [http_request_eval](/momentum/3/3-push/push-http-request-eval). Use this function in the `http_request_eval` callout.

<a name="idp23746544"></a> 
## See Also

[sess:request_set_body](/momentum/3/3-reference/3-reference-lua-ref-sess-request-set-body) and [sess:request_add_header](/momentum/3/3-reference/3-reference-lua-ref-sess-request-add-header)