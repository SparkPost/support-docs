---
lastUpdated: "03/26/2020"
title: "ec_httpsrv_ctx_set"
description: "ec httpsrv ctx set Sets a per request closure blobject on a session void ec httpsrv ctx set sess blobject ec httpsrv session sess ec blobject blobject This reference page was automatically generated from functions found in the header files in the development branch The function described here may not..."
---

<a name="apis.ec_httpsrv_ctx_set"></a> 
## Name

ec_httpsrv_ctx_set — Sets a per-request closure blobject on a session

## Synopsis

`#include "modules/listeners/httpsrv.h"`

| `void **ec_httpsrv_ctx_set** (` | <var class="pdparam">sess</var>, |   |
|   | <var class="pdparam">blobject</var>`)`; |   |

`ec_httpsrv_session * <var class="pdparam">sess</var>`;
`ec_blobject * <var class="pdparam">blobject</var>`;<a name="idp52679536"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Sets a per-request closure blobject on a session.

This mechanism allows the request handler to store state with the session.

**<a name="idp52682944"></a> Parameters**

<dl class="variablelist">

<dt>sess</dt>

<dd>

the session to modify

</dd>

<dt>blobject</dt>

<dd>

the closure to store

</dd>

</dl>

If blobject is NULL, any previously associated state will be released.

Otherwise, the blobject will have a reference added; the system will maintain that reference until the request is completed.