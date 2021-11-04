---
lastUpdated: "03/26/2020"
title: "ec_authz_enum_groups"
description: "ec authz enum groups Check authorization of groups int ec authz enum groups authzinfo all groups session struct ec authz info authzinfo ec ptr array all groups Event session This reference page was automatically generated from functions found in the header files in the development branch The function described here..."
---

<a name="apis.ec_authz_enum_groups"></a> 
## Name

ec_authz_enum_groups — Check authorization of groups

## Synopsis

`#include "security/auth_lookup.h"`

| `int **ec_authz_enum_groups** (` | <var class="pdparam">authzinfo</var>, |   |
|   | <var class="pdparam">all_groups</var>, |   |
|   | <var class="pdparam">session</var>`)`; |   |

`struct ec_authz_info * <var class="pdparam">authzinfo</var>`;
`ec_ptr_array * <var class="pdparam">all_groups</var>`;
`Event * <var class="pdparam">session</var>`;<a name="idp59614864"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

**<a name="idp59617536"></a> Return Values**

This function returns `EC_AUTH_OK`, `EC_AUTH_FAIL` or `EC_AUTH_ERROR`.

<a name="idp59619952"></a> 
## See Also

[authz id](/momentum/3/3-reference/3-reference-console-commands-authz-id)