---
lastUpdated: "03/26/2020"
title: "ec_httpsrv_response_status_set_std"
description: "ec httpsrv response status set std Sets the HTTP status for the session response int ec httpsrv response status set std sess code message mimetype ec httpsrv session sess int code const char message const char mimetype This reference page was automatically generated from functions found in the header files..."
---

<a name="apis.ec_httpsrv_response_status_set_std"></a> 
## Name

ec_httpsrv_response_status_set_std — Sets the HTTP status for the session response

## Synopsis

`#include "modules/listeners/httpsrv.h"`

| `int **ec_httpsrv_response_status_set_std** (` | <var class="pdparam">sess</var>, |   |
|   | <var class="pdparam">code</var>, |   |
|   | <var class="pdparam">message</var>, |   |
|   | <var class="pdparam">mimetype</var>`)`; |   |

`ec_httpsrv_session * <var class="pdparam">sess</var>`;
`int <var class="pdparam">code</var>`;
`const char * <var class="pdparam">message</var>`;
`const char * <var class="pdparam">mimetype</var>`;<a name="idp53181568"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Sets the HTTP status for the session response.

**<a name="idp53184448"></a> Parameters**

<dl class="variablelist">

<dt>sess</dt>

<dd>

the session to modify

</dd>

<dt>code</dt>

<dd>

must be any valid HTTP status code number

</dd>

<dt>message</dt>

<dd>

is a (typically) human readable response string

</dd>

<dt>mimetype</dt>

<dd>

optional (may be NULL) mime type

</dd>

</dl>

**<a name="idp53192752"></a> Return Values**

0 if successful, else returns an errno indicating what went wrong. In particular, ENOMEM indicates that insuficient memory was available when copying the provided message to the session, but it may be possible for other errors to occur.

This function will set up Connection: close and/or chunked and compressed output.