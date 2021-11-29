---
lastUpdated: "03/26/2020"
title: "ec_httpsrv_response_header_set"
description: "ec httpsrv response header set Sets a header in the session response int ec httpsrv response header set sess name value ec httpsrv session sess const char name const char value This reference page was automatically generated from functions found in the header files in the development branch The function..."
---

<a name="apis.ec_httpsrv_response_header_set"></a> 
## Name

ec_httpsrv_response_header_set — Sets a header in the session response

## Synopsis

`#include "modules/listeners/httpsrv.h"`

| `int **ec_httpsrv_response_header_set** (` | <var class="pdparam">sess</var>, |   |
|   | <var class="pdparam">name</var>, |   |
|   | <var class="pdparam">value</var>`)`; |   |

`ec_httpsrv_session * <var class="pdparam">sess</var>`;
`const char * <var class="pdparam">name</var>`;
`const char * <var class="pdparam">value</var>`;<a name="idp53006384"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Sets a header in the session response.

**<a name="idp53009248"></a> Parameters**

<dl class="variablelist">

<dt>sess</dt>

<dd>

the session to modify

</dd>

<dt>name</dt>

<dd>

the name of the header being set

</dd>

<dt>value</dt>

<dd>

the value of the header being set

</dd>

</dl>

**<a name="idp53015696"></a> Return Values**

0 if successful, else returns an errno indicating what went wrong. In particular, ENOMEM indicates that insuficient memory was available when copying the strings to the session, but it may be possible for other errors to occur.