---
lastUpdated: "03/26/2020"
title: "post_drop_privileges"
description: "post drop privileges int post drop privileges closure void closure int has core post drop privileges hook void register core post drop privileges hook first hook closure ec hook core post drop privileges func t hook void closure void register core post drop privileges hook last hook closure ec hook..."
---

<a name="hooks.core.post_drop_privileges"></a> 
## Name

post_drop_privileges

## Synopsis

`#include "hooks/core/post_drop_privileges.h"`

| `int **post_drop_privileges** (` | <var class="pdparam">closure</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;

| `int **has_core_post_drop_privileges_hook** (` | `)`; |   |

| `void **register_core_post_drop_privileges_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_post_drop_privileges_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_post_drop_privileges_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_post_drop_privileges_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `int **call_core_post_drop_privileges_hook** (` | `)`; |   |

<a name="idp42067664"></a> 
## Description

Parameters:

<dl class="variablelist">

<dt>closure</dt>

<dd>

the implementation specific closure, this is not needed for the hook's caller.

</dd>

</dl>

Called after privileges are dropped and allows activities to be carried out directly after dropping priveleges. You should return 0 to indicate success; a non-zero return code indicates a critical error and will result in the Momentum instance shutting down.