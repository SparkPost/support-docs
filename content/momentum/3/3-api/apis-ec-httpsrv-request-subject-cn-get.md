---
lastUpdated: "03/26/2020"
title: "ec_httpsrv_request_subject_cn_get"
description: "ec httpsrv request subject cn get Gets the peer SSL certificate common name string const char ec httpsrv request subject cn get sess ec httpsrv session sess This reference page was automatically generated from functions found in the header files in the development branch The function described here may not..."
---

<a name="apis.ec_httpsrv_request_subject_cn_get"></a> 
## Name

ec_httpsrv_request_subject_cn_get — Gets the peer SSL certificate common name string

## Synopsis

`#include "modules/listeners/httpsrv.h"`

| `const char * **ec_httpsrv_request_subject_cn_get** (` | <var class="pdparam">sess</var>`)`; |   |

`ec_httpsrv_session * <var class="pdparam">sess</var>`;<a name="idp52916576"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Gets the peer SSL certificate common name string.

**<a name="idp52919456"></a> Parameters**

<dl class="variablelist">

<dt>sess</dt>

<dd>

the session to interrogate

</dd>

</dl>

**<a name="idp52922192"></a> Return Values**

the remote common name, which will be NULL for a session that is not using an authenticated peer certificate.

The returned string is valid for the lifetime of the request.