---
lastUpdated: "03/26/2020"
title: "ec_httpsrv_response_status_error"
description: "ec httpsrv response status error Sets the HTTP status to indicate a server error and sets content type int ec httpsrv response status error sess type ec httpsrv session sess const char type This reference page was automatically generated from functions found in the header files in the development branch..."
---

<a name="apis.ec_httpsrv_response_status_error"></a> 
## Name

ec_httpsrv_response_status_error — Sets the HTTP status to indicate a server error, and sets content-type

## Synopsis

`#include "modules/listeners/httpsrv.h"`

| `int **ec_httpsrv_response_status_error** (` | <var class="pdparam">sess</var>, |   |
|   | <var class="pdparam">type</var>`)`; |   |

`ec_httpsrv_session * <var class="pdparam">sess</var>`;
`const char * <var class="pdparam">type</var>`;<a name="idp53103584"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Sets the HTTP status to indicate a server error, and sets content-type.

**<a name="idp53106496"></a> Parameters**

<dl class="variablelist">

<dt>sess</dt>

<dd>

the session to modify

</dd>

<dt>type</dt>

<dd>

the content type to set

</dd>

</dl>

**<a name="idp53111072"></a> Return Values**

0 if successful, else returns an errno indicating what went wrong.

This function is equivalent to setting the status to 500 ERROR and setting the Content-Type: header to the value of type.