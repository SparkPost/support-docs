---
lastUpdated: "03/26/2020"
title: "pre_drop_privileges"
description: "pre drop privileges int pre drop privileges closure void closure int has core pre drop privileges hook void register core pre drop privileges hook first hook closure ec hook core pre drop privileges func t hook void closure void register core pre drop privileges hook last hook closure ec hook..."
---

<a name="hooks.core.pre_drop_privileges"></a> 
## Name

pre_drop_privileges

## Synopsis

`#include "hooks/core/pre_drop_privileges.h"`

| `int **pre_drop_privileges** (` | <var class="pdparam">closure</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;

| `int **has_core_pre_drop_privileges_hook** (` | `)`; |   |

| `void **register_core_pre_drop_privileges_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_pre_drop_privileges_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_pre_drop_privileges_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_pre_drop_privileges_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `int **call_core_pre_drop_privileges_hook** (` | `)`; |   |

<a name="idp32690992"></a> 
## Description

This hook offers you the last chance to carry out activities before dropping privileges. You should return 0 to indicate success; a non-zero return code indicates a critical error and will result in the Momentum instance shutting down.