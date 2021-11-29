---
lastUpdated: "03/26/2020"
title: "ec_httpsrv_response_append"
description: "ec httpsrv response append Append data to the session response output int ec httpsrv response append sess buf len ec httpsrv session sess const void buf size t len This reference page was automatically generated from functions found in the header files in the development branch The function described here..."
---

<a name="apis.ec_httpsrv_response_append"></a> 
## Name

ec_httpsrv_response_append — Append data to the session response output

## Synopsis

`#include "modules/listeners/httpsrv.h"`

| `int **ec_httpsrv_response_append** (` | <var class="pdparam">sess</var>, |   |
|   | <var class="pdparam">buf</var>, |   |
|   | <var class="pdparam">len</var>`)`; |   |

`ec_httpsrv_session * <var class="pdparam">sess</var>`;
`const void * <var class="pdparam">buf</var>`;
`size_t <var class="pdparam">len</var>`;<a name="idp52967248"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Append data to the session response output.

**<a name="idp52970112"></a> Parameters**

<dl class="variablelist">

<dt>sess</dt>

<dd>

the session to modify

</dd>

<dt>buf</dt>

<dd>

the data to emit

</dd>

<dt>len</dt>

<dd>

the amount of data being emitted

</dd>

</dl>

**<a name="idp52976512"></a> Return Values**

0 if successful, else returns an errno indicating what went wrong. In particular, ENOMEM indicates that insuficient memory was available.