---
lastUpdated: "03/26/2020"
title: "http_request_finalize"
description: "http request finalize Finalize changes to an HTTP request http request finalize sess update http session sess int update Configuration Change This function is available as of version 3 6 Finalize changes to an HTTP request Call this function whenever the structural data in an http request has been modified..."
---

<a name="apis.http_request_finalize"></a> 
## Name

http_request_finalize — Finalize changes to an HTTP request

## Synopsis

`#include "modules/delivery/http/httpclnt.h"`

| `**http_request_finalize** (` | <var class="pdparam">sess</var>, |   |
|   | <var class="pdparam">update</var>`)`; |   |

`http_session *<var class="pdparam">sess</var>`;
`int <var class="pdparam">update</var>`;<a name="idp52588656"></a> 
## Description

**Configuration Change. ** This function is available as of version 3.6.

Finalize changes to an HTTP request. Call this function whenever the structural data in an http_request has been modified.

**<a name="idp52591632"></a> Parameters**

<dl class="variablelist">

<dt>sess</dt>

<dd>

The http_session. For a description of this data type see [“http_session”](/momentum/3/3-api/structs-http-session).

</dd>

<dt>update</dt>

<dd>

If update is set to `0` and the request is present, the routine does nothing and returns the length of the existing request. If update is set to `0` and the request is not present then the routine builds the HTTP request. If update is set to `1`, the existing request is deleted and a new HTTP request is built.

</dd>

</dl>

**<a name="idp52598448"></a> Return Values**

When update is set to `1`, this function returns `HTTP_INTERNAL_OK` on success. On failure, `HTTP_INTERNAL_FAIL` is returned.

When `update` is set to `0`, and the request is present, this function returns the length of the request data field.

**<a name="idp52602176"></a> Threading**

It is legal to call this function in any thread.

<a name="idp52603280"></a> 
## See Also

[http_request_set_body](/momentum/3/3-api/apis-http-request-set-body) and [http_request_add_header](/momentum/3/3-api/apis-http-request-add-header)