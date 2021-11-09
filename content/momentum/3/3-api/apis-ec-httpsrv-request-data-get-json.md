---
lastUpdated: "03/26/2020"
title: "ec_httpsrv_request_data_get_json"
description: "ec httpsrv request data get json Gets a JSON object representation of the request payload data int ec httpsrv request data get json sess json ec httpsrv session sess struct json object json This reference page was automatically generated from functions found in the header files in the development branch..."
---

<a name="apis.ec_httpsrv_request_data_get_json"></a> 
## Name

ec_httpsrv_request_data_get_json — Gets a JSON object representation of the request payload data

## Synopsis

`#include "modules/listeners/httpsrv.h"`

| `int **ec_httpsrv_request_data_get_json** (` | <var class="pdparam">sess</var>, |   |
|   | <var class="pdparam">json</var>`)`; |   |

`ec_httpsrv_session * <var class="pdparam">sess</var>`;
`struct json_object ** <var class="pdparam">json</var>`;<a name="idp52788080"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Gets a JSON object representation of the request payload data.

**<a name="idp52790976"></a> Parameters**

<dl class="variablelist">

<dt>sess</dt>

<dd>

the session to interrogate

</dd>

<dt>json</dt>

<dd>

returns the json object

</dd>

</dl>

Passes the payload data to json_object_new_string_len() and returns resultant json object via the json parameter.

**<a name="idp52796112"></a> Return Values**

0 on success, or an errno value indicating any issues with consuming the payload data.

The json object will be set to the successfully created json representation of the string on success, otherwise it will be NULL.

It is possible for the return value to be 0 and the json parameter to be set to NULL or for it to be an error (use json_is_error to detect this). The likely cause of this is that that payload was not valid JSON text. You may determine the error code by casting the json pointer like this: -(unsigned long)json. You may look up the reason string by indexing the resulting value into json_tokener_errors. These facilities are provided by the msys-json-c package; consult <json/json.h>

The caller owns the returned json object and is responsible for freeing it by calling json_object_put() when it is no longer needed.