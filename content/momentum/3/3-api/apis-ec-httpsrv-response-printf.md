---
lastUpdated: "03/26/2020"
title: "ec_httpsrv_response_printf"
description: "ec httpsrv response printf Format and append a string to the session response output int ec httpsrv response printf sess fmt ec httpsrv session sess const char fmt This reference page was automatically generated from functions found in the header files in the development branch The function described here may..."
---

<a name="apis.ec_httpsrv_response_printf"></a> 
## Name

ec_httpsrv_response_printf — Format and append a string to the session response output

## Synopsis

`#include "modules/listeners/httpsrv.h"`

| `int **ec_httpsrv_response_printf** (` | <var class="pdparam">sess</var>, |   |
|   | <var class="pdparam">fmt</var>, |   |
|   | `)`; |   |

`ec_httpsrv_session * <var class="pdparam">sess</var>`;
`const char * <var class="pdparam">fmt</var>`;
`...`;<a name="idp53067520"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Format and append a string to the session response output.

**<a name="idp53070400"></a> Parameters**

<dl class="variablelist">

<dt>sess</dt>

<dd>

the session to modify

</dd>

<dt>fmt</dt>

<dd>

the printf(3) style format string

</dd>

</dl>

**<a name="idp53074976"></a> Return Values**

0 if successful, else returns an errno indicating what went wrong. In particular, ENOMEM indicates that insuficient memory was available.