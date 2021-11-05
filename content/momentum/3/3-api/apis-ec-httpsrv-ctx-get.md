---
lastUpdated: "03/26/2020"
title: "ec_httpsrv_ctx_get"
description: "ec httpsrv ctx get Gets the per request closure blobject from a session ec blobject ec httpsrv ctx get sess ec httpsrv session sess This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally..."
---

<a name="apis.ec_httpsrv_ctx_get"></a> 
## Name

ec_httpsrv_ctx_get — Gets the per-request closure blobject from a session

## Synopsis

`#include "modules/listeners/httpsrv.h"`

| `ec_blobject * **ec_httpsrv_ctx_get** (` | <var class="pdparam">sess</var>`)`; |   |

`ec_httpsrv_session * <var class="pdparam">sess</var>`;<a name="idp52662192"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Gets the per-request closure blobject from a session.

Returns the blobject that was previously associated with the session by a call to [ec_httpsrv_ctx_set](/momentum/3/3-api/apis-ec-httpsrv-ctx-set).

If the blobject is non-NULL, it will have a reference added for you; you must call ec_blobject_delref to release it when you no longer require it.

**<a name="idp52666768"></a> Parameters**

<dl class="variablelist">

<dt>sess</dt>

<dd>

the session to interrogate

</dd>

</dl>

**<a name="idp52669504"></a> Return Values**

a blobject, or NULL if no blobject is present.