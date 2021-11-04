---
lastUpdated: "03/26/2020"
title: "module_get_hook_array_from_transaction"
description: "module get hook array from transaction Get the hooks associated with the current transaction ec ptr array module get hook array from transaction transaction head ec config header transaction struct ec hook head head Get the hooks associated with the current transaction transaction For a description of this data type..."
---

<a name="apis.module_get_hook_array_from_transaction"></a> 
## Name

module_get_hook_array_from_transaction — Get the hooks associated with the current transaction

## Synopsis

`#include "module-hooks.h"`

| `ec_ptr_array * **module_get_hook_array_from_transaction** (` | <var class="pdparam">transaction</var>, |   |
|   | <var class="pdparam">head</var>`)`; |   |

`ec_config_header * <var class="pdparam">transaction</var>`;
`struct __ec_hook_head * <var class="pdparam">head</var>`;<a name="idp58050928"></a> 
## Description

Get the hooks associated with the current transaction.

**<a name="idp58052160"></a> Parameters**

<dl class="variablelist">

<dt>transaction</dt>

<dd>

For a description of this data type see [ec_config_header](/momentum/3/3-api/structs-ec-config-header).

</dd>

<dt>head</dt>

<dd>

The __ec_hook_head. Use [module_get_hook_head](/momentum/3/3-api/apis-module-get-hook-head) to retrieve this struct.

</dd>

</dl>

**<a name="idp58058256"></a> Return Values**

On success, this function returns an array of pointers to hooks. For more information about the ec_ptr_array data type see [ec_ptr_array](/momentum/3/3-api/structs-ec-ptr-array). On failure this function returns NULL.

**<a name="idp58060032"></a> Threading**

It is legal to call this function in any thread.

<a name="idp58061456"></a> 
## See Also

[module_get_hook_head](/momentum/3/3-api/apis-module-get-hook-head), [“__ec_hook_head”](/momentum/3/3-api/structs-ec-hook-head), [ec_ptr_array_init](/momentum/3/3-api/apis-ec-ptr-array-init) and [ec_config_fetch_globalconf](/momentum/3/3-api/apis-ec-config-fetch-globalconf)