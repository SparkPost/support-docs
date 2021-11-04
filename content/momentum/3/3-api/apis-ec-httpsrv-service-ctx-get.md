---
lastUpdated: "03/26/2020"
title: "ec_httpsrv_service_ctx_get"
description: "ec httpsrv service ctx get Returns the closure parameter that was registered with the handler ec blobject ec httpsrv service ctx get sess ec httpsrv session sess This reference page was automatically generated from functions found in the header files in the development branch The function described here may not..."
---

<a name="apis.ec_httpsrv_service_ctx_get"></a> 
## Name

ec_httpsrv_service_ctx_get — Returns the closure parameter that was registered with the handler

## Synopsis

`#include "modules/listeners/httpsrv.h"`

| `ec_blobject * **ec_httpsrv_service_ctx_get** (` | <var class="pdparam">sess</var>`)`; |   |

`ec_httpsrv_session * <var class="pdparam">sess</var>`;<a name="idp53259824"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Returns the closure parameter that was registered with the handler.

When called from inside a handler function, returns the closure blobject that was registered with the handler by ec_httpsrv_register.

If non-NULL, the blobject will have a reference added for the caller; you must call ec_blobject_delref() to release it when you no longer need it.

**<a name="idp53263920"></a> Parameters**

<dl class="variablelist">

<dt>sess</dt>

<dd>

the session to interrogate

</dd>

</dl>

**<a name="idp53266656"></a> Return Values**

a blobject