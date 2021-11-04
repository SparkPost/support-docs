---
lastUpdated: "03/26/2020"
title: "ec_authz_id"
description: "ec authz id Get the ID of the specified user int ec authz id authzinfo user roles session struct ec authz info authzinfo const char user ec ptr array roles Event session This reference page was automatically generated from functions found in the header files in the development branch The..."
---

<a name="apis.ec_authz_id"></a> 
## Name

ec_authz_id — Get the ID of the specified user

## Synopsis

`#include "security/auth_lookup.h"`

| `int **ec_authz_id** (` | <var class="pdparam">authzinfo</var>, |   |
|   | <var class="pdparam">user</var>, |   |
|   | <var class="pdparam">roles</var>, |   |
|   | <var class="pdparam">session</var>`)`; |   |

`struct ec_authz_info * <var class="pdparam">authzinfo</var>`;
`const char * <var class="pdparam">user</var>`;
`ec_ptr_array * <var class="pdparam">roles</var>`;
`Event * <var class="pdparam">session</var>`;<a name="idp59632640"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

**<a name="idp59635312"></a> Return Values**

This function returns `EC_AUTH_OK`, `EC_AUTH_FAIL` or `EC_AUTH_ERROR`.

<a name="idp59637728"></a> 
## See Also

[authz id](/momentum/3/3-reference/3-reference-console-commands-authz-id)