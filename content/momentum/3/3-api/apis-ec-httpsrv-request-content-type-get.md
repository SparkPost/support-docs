---
lastUpdated: "03/26/2020"
title: "ec_httpsrv_request_content_type_get"
description: "ec httpsrv request content type get Gets the content type and charset from the session request int ec httpsrv request content type get sess content type charset ec httpsrv session sess const char content type const char charset This reference page was automatically generated from functions found in the header..."
---

<a name="apis.ec_httpsrv_request_content_type_get"></a> 
## Name

ec_httpsrv_request_content_type_get — Gets the content type and charset from the session request

## Synopsis

`#include "modules/listeners/httpsrv.h"`

| `int **ec_httpsrv_request_content_type_get** (` | <var class="pdparam">sess</var>, |   |
|   | <var class="pdparam">content_type</var>, |   |
|   | <var class="pdparam">charset</var>`)`; |   |

`ec_httpsrv_session * <var class="pdparam">sess</var>`;
`const char ** <var class="pdparam">content_type</var>`;
`const char ** <var class="pdparam">charset</var>`;<a name="idp52747712"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Gets the content type and charset from the session request.

**<a name="idp52750592"></a> Parameters**

<dl class="variablelist">

<dt>sess</dt>

<dd>

the session to interrogate

</dd>

<dt>content_type</dt>

<dd>

returns the content type

</dd>

<dt>charset</dt>

<dd>

returns the charset

</dd>

</dl>

**<a name="idp52757008"></a> Return Values**

0 on success, ENOENT if the content type header was missing from the request, or some other errno value for other error conditions.

The returned strings are valid for the lifetime of the request.