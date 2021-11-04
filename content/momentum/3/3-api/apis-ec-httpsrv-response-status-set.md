---
lastUpdated: "03/26/2020"
title: "ec_httpsrv_response_status_set"
description: "ec httpsrv response status set Sets the HTTP status for the session response int ec httpsrv response status set sess code message ec httpsrv session sess int code const char message This reference page was automatically generated from functions found in the header files in the development branch The function..."
---

<a name="apis.ec_httpsrv_response_status_set"></a> 
## Name

ec_httpsrv_response_status_set — Sets the HTTP status for the session response

## Synopsis

`#include "modules/listeners/httpsrv.h"`

| `int **ec_httpsrv_response_status_set** (` | <var class="pdparam">sess</var>, |   |
|   | <var class="pdparam">code</var>, |   |
|   | <var class="pdparam">message</var>`)`; |   |

`ec_httpsrv_session * <var class="pdparam">sess</var>`;
`int <var class="pdparam">code</var>`;
`const char * <var class="pdparam">message</var>`;<a name="idp53159216"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Sets the HTTP status for the session response.

**<a name="idp53162096"></a> Parameters**

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

</dl>

**<a name="idp53168544"></a> Return Values**

0 if successful, else returns an errno indicating what went wrong. In particular, ENOMEM indicates that insuficient memory was available when copying the provided message to the session, but it may be possible for other errors to occur.

You will typically want to use [ec_httpsrv_response_status_set_std](/momentum/3/3-api/apis-ec-httpsrv-response-status-set-std) instead of this function, as it will set up Connection headers and compression.