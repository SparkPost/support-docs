---
lastUpdated: "03/26/2020"
title: "config_option_post_set"
description: "config option post set void config option post set closure cfghdr opt container void closure ec config header cfghdr ec config option opt void container int has core config option post set hook void register core config option post set hook first hook closure ec hook core config option post..."
---

<a name="hooks.core.config_option_post_set"></a> 
## Name

config_option_post_set

## Synopsis

`#include "hooks/core/config_option_set.h"`

| `void **config_option_post_set** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">cfghdr</var>, |   |
|   | <var class="pdparam">opt</var>, |   |
|   | <var class="pdparam">container</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`ec_config_header * <var class="pdparam">cfghdr</var>`;
`ec_config_option * <var class="pdparam">opt</var>`;
`void ** <var class="pdparam">container</var>`;

| `int **has_core_config_option_post_set_hook** (` | `)`; |   |

| `void **register_core_config_option_post_set_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_config_option_post_set_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_config_option_post_set_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_config_option_post_set_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **call_core_config_option_post_set_hook** (` | <var class="pdparam">cfghdr</var>, |   |
|   | <var class="pdparam">opt</var>, |   |
|   | <var class="pdparam">container</var>`)`; |   |

`ec_config_header * <var class="pdparam">cfghdr</var>`;
`ec_config_option * <var class="pdparam">opt</var>`;
`void ** <var class="pdparam">container</var>`;<a name="idp33683616"></a> 
## Description

This hook is called after successfully setting a config option.