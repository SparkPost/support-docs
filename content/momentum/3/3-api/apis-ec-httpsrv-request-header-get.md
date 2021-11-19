---
lastUpdated: "03/26/2020"
title: "ec_httpsrv_request_header_get"
description: "ec httpsrv request header get Gets the value of a specific HTTP request header int ec httpsrv request header get sess name value ec httpsrv session sess const char name const char value This reference page was automatically generated from functions found in the header files in the development branch..."
---

<a name="apis.ec_httpsrv_request_header_get"></a> 
## Name

ec_httpsrv_request_header_get — Gets the value of a specific HTTP request header

## Synopsis

`#include "modules/listeners/httpsrv.h"`

| `int **ec_httpsrv_request_header_get** (` | <var class="pdparam">sess</var>, |   |
|   | <var class="pdparam">name</var>, |   |
|   | <var class="pdparam">value</var>`)`; |   |

`ec_httpsrv_session * <var class="pdparam">sess</var>`;
`const char * <var class="pdparam">name</var>`;
`const char ** <var class="pdparam">value</var>`;<a name="idp52881040"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Gets the value of a specific HTTP request header.

**<a name="idp52883920"></a> Parameters**

<dl class="variablelist">

<dt>sess</dt>

<dd>

the session to interrogate

</dd>

<dt>name</dt>

<dd>

the name of the header to query

</dd>

<dt>value</dt>

<dd>

the value of the header

</dd>

</dl>

**<a name="idp52890336"></a> Return Values**

0 on success, ENOENT if the named header is missing from the request, or some other errno value for other error conditions.

The name is treated in a case insensitive manner.

The returned string is valid for the lifetime of the request.