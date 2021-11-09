---
lastUpdated: "03/26/2020"
title: "ec_httpsrv_request_url_get"
description: "ec httpsrv request url get Gets the request URL ec url details ec httpsrv request url get sess ec httpsrv session sess This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally available versions..."
---

<a name="apis.ec_httpsrv_request_url_get"></a> 
## Name

ec_httpsrv_request_url_get — Gets the request URL

## Synopsis

`#include "modules/listeners/httpsrv.h"`

| `ec_url_details * **ec_httpsrv_request_url_get** (` | <var class="pdparam">sess</var>`)`; |   |

`ec_httpsrv_session * <var class="pdparam">sess</var>`;<a name="idp52932224"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Gets the request URL.

**<a name="idp52935072"></a> Parameters**

<dl class="variablelist">

<dt>sess</dt>

<dd>

the session to interrogate

</dd>

</dl>

**<a name="idp52937808"></a> Return Values**

the parsed URL

The parsed URL is valid for the lifetime of the request.

The HTTP server system owns this object and will dispose of it once the request completes. You should not modify it.

See misc/ec_url_parse.h for details on the parsed URL.

Since ec_url_details provides access to the raw_query, should it be needed, a separate API to return the raw query from the request session is not provided.