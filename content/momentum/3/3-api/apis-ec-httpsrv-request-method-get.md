---
lastUpdated: "03/26/2020"
title: "ec_httpsrv_request_method_get"
description: "ec httpsrv request method get Gets the method from the session request const char ec httpsrv request method get sess ec httpsrv session sess This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally..."
---

<a name="apis.ec_httpsrv_request_method_get"></a> 
## Name

ec_httpsrv_request_method_get — Gets the method from the session request

## Synopsis

`#include "modules/listeners/httpsrv.h"`

| `const char * **ec_httpsrv_request_method_get** (` | <var class="pdparam">sess</var>`)`; |   |

`ec_httpsrv_session * <var class="pdparam">sess</var>`;<a name="idp52900912"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Gets the method from the session request.

**<a name="idp52903776"></a> Parameters**

<dl class="variablelist">

<dt>sess</dt>

<dd>

the session to interrogate

</dd>

</dl>

**<a name="idp52906512"></a> Return Values**

the method string, which will typically be "GET" or "POST", but could be any method allowed by the handler.

The returned string is valid for the lifetime of the request.