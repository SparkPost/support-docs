---
lastUpdated: "03/26/2020"
title: "http_request_delete_header"
description: "http request delete header Delete a header from an HTTP request int http request delete header sess header http session sess const char header Configuration Change This function is available as of version 3 6 Delete a header from an HTTP request You must call http request finalize after invoking..."
---

<a name="apis.http_request_delete_header"></a> 
## Name

http_request_delete_header — Delete a header from an HTTP request

## Synopsis

`#include "modules/delivery/http/httpclnt.h"`

| `int **http_request_delete_header** (` | <var class="pdparam">sess</var>, |   |
|   | <var class="pdparam">header</var>`)`; |   |

`http_session *<var class="pdparam">sess</var>`;
`const char *<var class="pdparam">header</var>`;<a name="idp52566128"></a> 
## Description

**Configuration Change. ** This function is available as of version 3.6.

Delete a header from an HTTP request. You must call [http_request_finalize](/momentum/3/3-api/apis-http-request-finalize) after invoking this function.

**<a name="idp52569632"></a> Parameters**

<dl class="variablelist">

<dt>sess</dt>

<dd>

The http_session. For a description of this data type see [“http_session”](/momentum/3/3-api/structs-http-session).

</dd>

<dt>header</dt>

<dd>

A character pointer to the header.

</dd>

</dl>

**<a name="idp52574816"></a> Return Values**

On success this function returns `1` and on failure `0`.

**<a name="idp52576640"></a> Threading**

It is legal to call this function in any thread.

<a name="idp52577744"></a> 
## See Also

[http_request_finalize](/momentum/3/3-api/apis-http-request-finalize)