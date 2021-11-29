---
lastUpdated: "03/26/2020"
title: "ec_httpsrv_response_flush"
description: "ec httpsrv response flush Flush pending session response output int ec httpsrv response flush sess final ec httpsrv session sess int final This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally available versions..."
---

<a name="apis.ec_httpsrv_response_flush"></a> 
## Name

ec_httpsrv_response_flush — Flush pending session response output

## Synopsis

`#include "modules/listeners/httpsrv.h"`

| `int **ec_httpsrv_response_flush** (` | <var class="pdparam">sess</var>, |   |
|   | <var class="pdparam">final</var>`)`; |   |

`ec_httpsrv_session * <var class="pdparam">sess</var>`;
`int <var class="pdparam">final</var>`;<a name="idp52986736"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Flush pending session response output.

**<a name="idp52989600"></a> Parameters**

<dl class="variablelist">

<dt>sess</dt>

<dd>

the session to flush

</dd>

<dt>final</dt>

<dd>

indicates if there is no more data in this response.

</dd>

</dl>

Flushes pending data to the client. If final is non-zero, this is taken as a hint that there is no more data pending for this session (this is significant for compression schemes).

**<a name="idp52994848"></a> Return Values**

0 if successful, else returns an errno indicating what went wrong.

If invoked on the scheduler thread, this function is likely to return EAGAIN in cases where the network IO might have blocked the caller.