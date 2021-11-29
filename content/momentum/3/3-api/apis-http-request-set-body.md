---
lastUpdated: "03/26/2020"
title: "http_request_set_body"
description: "http request set body Set the body of an HTTP request void http request set body sess body http session sess const char body Configuration Change This function is available as of version 3 6 Set the body of an HTTP request After modifying an http request you must call..."
---

<a name="apis.http_request_set_body"></a> 
## Name

http_request_set_body — Set the body of an HTTP request

## Synopsis

`#include "modules/delivery/http/httpclnt.h"`

| `void **http_request_set_body** (` | <var class="pdparam">sess</var>, |   |
|   | <var class="pdparam">body</var>`)`; |   |

`http_session *<var class="pdparam">sess</var>`;
`const char *<var class="pdparam">body</var>`;<a name="idp52614704"></a> 
## Description

**Configuration Change. ** This function is available as of version 3.6.

Set the body of an HTTP request. After modifying an http_request you must call [http_request_finalize](/momentum/3/3-api/apis-http-request-finalize).

**<a name="idp52618208"></a> Parameters**

<dl class="variablelist">

<dt>sess</dt>

<dd>

The http_session. For a description of this data type see [“http_session”](/momentum/3/3-api/structs-http-session).

</dd>

<dt>body</dt>

<dd>

A character pointer to the body of the HTTP request.

</dd>

</dl>

**<a name="idp52623408"></a> Return Values**

This function returns void.

**<a name="idp52624320"></a> Threading**

It is legal to call this function in any thread.

<a name="idp52625424"></a> 
## See Also

[http_request_finalize](/momentum/3/3-api/apis-http-request-finalize)