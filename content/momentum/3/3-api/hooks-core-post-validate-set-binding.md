---
lastUpdated: "03/26/2020"
title: "post_validate_set_binding"
description: "post validate set binding void post validate set binding closure m void closure ec message m int has core post validate set binding hook void register core post validate set binding hook first hook closure ec hook core post validate set binding func t hook void closure void register core..."
---

<a name="hooks.core.post_validate_set_binding"></a> 
## Name

post_validate_set_binding

## Synopsis

`#include "hooks/core/post_validate_set_binding.h"`

| `void **post_validate_set_binding** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">m</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`ec_message * <var class="pdparam">m</var>`;

| `int **has_core_post_validate_set_binding_hook** (` | `)`; |   |

| `void **register_core_post_validate_set_binding_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_post_validate_set_binding_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_post_validate_set_binding_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_post_validate_set_binding_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **call_core_post_validate_set_binding_hook** (` | <var class="pdparam">m</var>`)`; |   |

`ec_message * <var class="pdparam">m</var>`;<a name="idp31412832"></a> 
## Description

This hook is invoked after the validate_set_binding callouts are invoked. This hook is only called if the binding of a message is actually changed, such that if the binding was already set to a valid binding then the validate_set_binding calls will have no effect and the hook will not be called.