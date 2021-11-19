---
lastUpdated: "03/26/2020"
title: "ec_httpsrv_response_vprintf"
description: "ec httpsrv response vprintf Format and append a string to the session response output int ec httpsrv response vprintf sess fmt ap ec httpsrv session sess const char fmt va list ap This reference page was automatically generated from functions found in the header files in the development branch The..."
---

<a name="apis.ec_httpsrv_response_vprintf"></a> 
## Name

ec_httpsrv_response_vprintf — Format and append a string to the session response output

## Synopsis

`#include "modules/listeners/httpsrv.h"`

| `int **ec_httpsrv_response_vprintf** (` | <var class="pdparam">sess</var>, |   |
|   | <var class="pdparam">fmt</var>, |   |
|   | <var class="pdparam">ap</var>`)`; |   |

`ec_httpsrv_session * <var class="pdparam">sess</var>`;
`const char * <var class="pdparam">fmt</var>`;
`va_list <var class="pdparam">ap</var>`;<a name="idp53222704"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Format and append a string to the session response output.

**<a name="idp53225584"></a> Parameters**

<dl class="variablelist">

<dt>sess</dt>

<dd>

the session to modify

</dd>

<dt>fmt</dt>

<dd>

the printf(3) style format string

</dd>

<dt>ap</dt>

<dd>

the argument list

</dd>

</dl>

**<a name="idp53231984"></a> Return Values**

0 if successful, else returns an errno indicating what went wrong. In particular, ENOMEM indicates that insuficient memory was available.