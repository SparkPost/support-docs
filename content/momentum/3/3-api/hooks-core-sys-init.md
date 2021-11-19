---
lastUpdated: "03/26/2020"
title: "sys_init"
description: "sys init void sys init closure void closure int has core sys init hook void register core sys init hook first hook closure ec hook core sys init func t hook void closure void register core sys init hook last hook closure ec hook core sys init func t hook..."
---

<a name="hooks.core.sys_init"></a> 
## Name

sys_init

## Synopsis

`#include "hooks/core/sys_init.h"`

| `void **sys_init** (` | <var class="pdparam">closure</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;

| `int **has_core_sys_init_hook** (` | `)`; |   |

| `void **register_core_sys_init_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_sys_init_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_sys_init_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_sys_init_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **call_core_sys_init_hook** (` | `)`; |   |

<a name="idp33709232"></a> 
## Description

**THIS HOOK IS DEPRECATED AND SHOULD NO LONGER BE USED** . The `sys_init` hook allows modules within interpreters (like Perl or Java) to act in the post_conf phase. As the interpreters themselves use the post_conf hook to bootstrap, it is unavailable to their modules. As such, modules with these systems can use the sys_init hook to do initialization that needs to be done prior to system startup (the eventloop).