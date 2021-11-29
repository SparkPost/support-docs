---
lastUpdated: "03/26/2020"
title: "ec_httpsrv_response_string"
description: "ec httpsrv response string Set the session response to an ec string object int ec httpsrv response string sess string ec httpsrv session sess string string This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist..."
---

<a name="apis.ec_httpsrv_response_string"></a> 
## Name

ec_httpsrv_response_string — Set the session response to an ec_string object

## Synopsis

`#include "modules/listeners/httpsrv.h"`

| `int **ec_httpsrv_response_string** (` | <var class="pdparam">sess</var>, |   |
|   | <var class="pdparam">string</var>`)`; |   |

`ec_httpsrv_session * <var class="pdparam">sess</var>`;
`string * <var class="pdparam">string</var>`;<a name="idp53203696"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Set the session response to an ec_string object.

**<a name="idp53206576"></a> Parameters**

<dl class="variablelist">

<dt>sess</dt>

<dd>

the session to modify

</dd>

<dt>string</dt>

<dd>

the ec_string

</dd>

</dl>

Sets the response payload to the contents of the provided string.

**<a name="idp53211648"></a> Return Values**

0 if successful, else returns an errno indicating what went wrong. In particular, ENOMEM indicates that insuficient memory was available.