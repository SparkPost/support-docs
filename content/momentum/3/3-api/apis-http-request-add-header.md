---
lastUpdated: "03/26/2020"
title: "http_request_add_header"
description: "http request add header Add a header to an HTTP request int http request add header sess header value replace http session sess const char header const char value int replace Configuration Change This function is available as of version 3 6 Add a header to an HTTP request You..."
---

<a name="apis.http_request_add_header"></a> 
## Name

http_request_add_header — Add a header to an HTTP request

## Synopsis

`#include "modules/delivery/http/httpclnt.h"`

| `int **http_request_add_header** (` | <var class="pdparam">sess</var>, |   |
|   | <var class="pdparam">header</var>, |   |
|   | <var class="pdparam">value</var>, |   |
|   | <var class="pdparam">replace</var>`)`; |   |

`http_session *<var class="pdparam">sess</var>`;
`const char *<var class="pdparam">header</var>`;
`const char *<var class="pdparam">value</var>`;
`int <var class="pdparam">replace</var>`;<a name="idp52539648"></a> 
## Description

**Configuration Change. ** This function is available as of version 3.6.

Add a header to an HTTP request. You must call [http_request_finalize](/momentum/3/3-api/apis-http-request-finalize) after invoking this function.

**<a name="idp52543152"></a> Parameters**

<dl class="variablelist">

<dt>sess</dt>

<dd>

The http_session. For a description of this data type see [“http_session”](/momentum/3/3-api/structs-http-session).

</dd>

<dt>header</dt>

<dd>

A character pointer to the header.

</dd>

<dt>value</dt>

<dd>

A character pointer to the value associated with the header.

</dd>

<dt>replace</dt>

<dd>

Whether or not you are adding a new header or replacing an existing header.

</dd>

</dl>

**<a name="idp52552112"></a> Return Values**

On successful replacement of an existing header, this function returns `1`. Upon successfully appending a new header, this function returns `0`.

**<a name="idp52554032"></a> Threading**

It is legal to call this function in any thread.

<a name="idp52555136"></a> 
## See Also

[http_request_finalize](/momentum/3/3-api/apis-http-request-finalize)