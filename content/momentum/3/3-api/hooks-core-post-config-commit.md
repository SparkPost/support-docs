---
lastUpdated: "03/26/2020"
title: "post_config_commit"
description: "post config commit void post config commit closure void closure int has core post config commit hook void register core post config commit hook first hook closure ec hook core post config commit func t hook void closure void register core post config commit hook last hook closure ec hook..."
---

<a name="hooks.core.post_config_commit"></a> 
## Name

post_config_commit

## Synopsis

`#include "hooks/core/post_config_commit.h"`

| `void **post_config_commit** (` | <var class="pdparam">closure</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;

| `int **has_core_post_config_commit_hook** (` | `)`; |   |

| `void **register_core_post_config_commit_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_post_config_commit_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_post_config_commit_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_post_config_commit_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **call_core_post_config_commit_hook** (` | `)`; |   |

<a name="idp42736112"></a> 
## Description

This hook is called immediately after a configuration was successfully committed.