---
lastUpdated: "03/26/2020"
title: "ec_httpsrv_request_accept_construct_get"
description: "ec httpsrv request accept construct get Returns the accept construct from the current session accept construct ec httpsrv request accept construct get sess ec httpsrv session sess This reference page was automatically generated from functions found in the header files in the development branch The function described here may not..."
---

<a name="apis.ec_httpsrv_request_accept_construct_get"></a> 
## Name

ec_httpsrv_request_accept_construct_get — Returns the accept construct from the current session

## Synopsis

`#include "modules/listeners/httpsrv.h"`

| `accept_construct * **ec_httpsrv_request_accept_construct_get** (` | <var class="pdparam">sess</var>`)`; |   |

`ec_httpsrv_session * <var class="pdparam">sess</var>`;<a name="idp52730608"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Returns the accept construct from the current session.

**<a name="idp52733488"></a> Parameters**

<dl class="variablelist">

<dt>sess</dt>

<dd>

the session to interrogate

</dd>

</dl>

**<a name="idp52736224"></a> Return Values**

the accept construct.

The accept_construct will be valid for the lifetime of the inbound session.