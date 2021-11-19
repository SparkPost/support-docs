---
lastUpdated: "03/26/2020"
title: "is_adaptive_scope_global"
description: "is adaptive scope global int is adaptive scope global closure binding slot domain void closure int binding slot const char domain int has core is adaptive scope global hook void register core is adaptive scope global hook first hook closure ec hook core is adaptive scope global func t hook..."
---

<a name="hooks.core.is_adaptive_scope_global"></a> 
## Name

is_adaptive_scope_global

## Synopsis

`#include "hooks/core/is_adaptive_scope_global.h"`

| `int **is_adaptive_scope_global** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">binding_slot</var>, |   |
|   | <var class="pdparam">domain</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`int <var class="pdparam">binding_slot</var>`;
`const char * <var class="pdparam">domain</var>`;

| `int **has_core_is_adaptive_scope_global_hook** (` | `)`; |   |

| `void **register_core_is_adaptive_scope_global_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_is_adaptive_scope_global_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_is_adaptive_scope_global_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_is_adaptive_scope_global_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `int **call_core_is_adaptive_scope_global_hook** (` | <var class="pdparam">binding_slot</var>, |   |
|   | <var class="pdparam">domain</var>`)`; |   |

`int <var class="pdparam">binding_slot</var>`;
`const char * <var class="pdparam">domain</var>`;<a name="idp29088256"></a> 
## Description

This hook is called to check if the adaptive scope of the binding/domain pair is global or not. binding_slot is required but domain is optional. It returns a boolean: 1 means that adaptive scope is global.