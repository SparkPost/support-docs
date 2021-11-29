---
lastUpdated: "03/26/2020"
title: "ec_httpsrv_response_json"
description: "ec httpsrv response json Set the session response to a JSON object int ec httpsrv response json sess json ec httpsrv session sess struct json object json This reference page was automatically generated from functions found in the header files in the development branch The function described here may not..."
---

<a name="apis.ec_httpsrv_response_json"></a> 
## Name

ec_httpsrv_response_json — Set the session response to a JSON object

## Synopsis

`#include "modules/listeners/httpsrv.h"`

| `int **ec_httpsrv_response_json** (` | <var class="pdparam">sess</var>, |   |
|   | <var class="pdparam">json</var>`)`; |   |

`ec_httpsrv_session * <var class="pdparam">sess</var>`;
`struct json_object * <var class="pdparam">json</var>`;<a name="idp53048800"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Set the session response to a JSON object.

**<a name="idp53051664"></a> Parameters**

<dl class="variablelist">

<dt>sess</dt>

<dd>

the session to modify

</dd>

<dt>json</dt>

<dd>

a json object

</dd>

</dl>

Sets the response payload to be the JSON representation of the supplied json object.

**<a name="idp53056752"></a> Return Values**

0 if successful, else returns an errno indicating what went wrong. In particular, ENOMEM indicates that insuficient memory was available.