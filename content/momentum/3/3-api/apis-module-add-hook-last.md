---
lastUpdated: "03/26/2020"
title: "module_add_hook_last"
description: "module add hook last Add a hook as the last hook ec atomic t module add hook last name proto hook closure flags const char name const char proto void hook void closure int flags This function is for internal use only Use the EC DECLARE VOID HOOK macro or..."
---

<a name="apis.module_add_hook_last"></a> 
## Name

module_add_hook_last — Add a hook as the last hook

## Synopsis

`#include "module-hooks.h"`

| `ec_atomic_t **module_add_hook_last** (` | <var class="pdparam">name</var>, |   |
|   | <var class="pdparam">proto</var>, |   |
|   | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">flags</var>`)`; |   |

`const char * <var class="pdparam">name</var>`;
`const char * <var class="pdparam">proto</var>`;
`void * <var class="pdparam">hook</var>`;
`void * <var class="pdparam">closure</var>`;
`int <var class="pdparam">flags</var>`;<a name="idp58035744"></a> 
## Description

### Note

This function is for internal use only. Use the `EC_DECLARE_VOID_HOOK` macro or the `EC_DECLARE_HOOK` macro.

<a name="idp58038800"></a> 
## See Also

[Hooking API](/momentum/3/3-api/arch-primary-apis#arch.hooking) and [EC_DECLARE_HOOK](/momentum/3/3-api/apis-ec-declare-hook)