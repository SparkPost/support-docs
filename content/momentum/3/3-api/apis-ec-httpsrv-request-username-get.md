---
lastUpdated: "03/26/2020"
title: "ec_httpsrv_request_username_get"
description: "ec httpsrv request username get Gets the authenticated user name const char ec httpsrv request username get sess ec httpsrv session sess This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally available versions..."
---

<a name="apis.ec_httpsrv_request_username_get"></a> 
## Name

ec_httpsrv_request_username_get — Gets the authenticated user name

## Synopsis

`#include "modules/listeners/httpsrv.h"`

| `const char * **ec_httpsrv_request_username_get** (` | <var class="pdparam">sess</var>`)`; |   |

`ec_httpsrv_session * <var class="pdparam">sess</var>`;<a name="idp52949408"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Gets the authenticated user name.

**<a name="idp52952272"></a> Parameters**

<dl class="variablelist">

<dt>sess</dt>

<dd>

the session to interrogate

</dd>

</dl>

**<a name="idp52955008"></a> Return Values**

the user name, which will be NULL for a session that is not authenticated.

The nature of the string depends on the underlying authentication mechanism; it may be a simple user identifier like "john.smith", or an email address like "john.smith@example.com", a string representation of an SSL certificate common name, or a Windows style "domain\username".

The returned string is valid for the lifetime of the request.