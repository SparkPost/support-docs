---
lastUpdated: "03/26/2020"
title: "module_get_hook_head"
description: "module get hook head Fetch the arguments for a hook struct ec hook head module get hook head hook name proto const char hook name const char proto Retreive an ec hook head which contains the arguments for a hook hook name The hook name proto The hook prototype This..."
---

<a name="apis.module_get_hook_head"></a> 
## Name

module_get_hook_head — Fetch the arguments for a hook

## Synopsis

`#include "module-hooks.h"`

| `(struct __ec_hook_head *) **module_get_hook_head** (` | <var class="pdparam">hook_name</var>, |   |
|   | <var class="pdparam">proto</var>`)`; |   |

`const char * <var class="pdparam">hook_name</var>`;
`const char * <var class="pdparam">proto</var>`;<a name="idp58074064"></a> 
## Description

Retreive an __ec_hook_head which contains the arguments for a hook.

**<a name="idp58075312"></a> Parameters**

<dl class="variablelist">

<dt>hook_name</dt>

<dd>

The hook name.

</dd>

<dt>proto</dt>

<dd>

The hook prototype.

</dd>

</dl>

**<a name="idp58079872"></a> Return Values**

This function returns a pointer to a __ec_hook_head struct which contains the hook arguments. For more information see [__ec_hook_head](/momentum/3/3-api/structs-ec-hook-head).

**<a name="idp58081616"></a> Threading**

It is legal to call this function in any thread.