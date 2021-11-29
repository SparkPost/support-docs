---
lastUpdated: "03/26/2020"
title: "generate_bounces"
description: "generate bounces int generate bounces closure mess enabled void closure ec message mess int enabled int has core generate bounces hook void register core generate bounces hook first hook closure ec hook core generate bounces func t hook void closure void register core generate bounces hook last hook closure ec..."
---

<a name="hooks.core.generate_bounces"></a> 
## Name

generate_bounces

## Synopsis

`#include "hooks/core/generate_bounces.h"`

| `int **generate_bounces** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">mess</var>, |   |
|   | <var class="pdparam">enabled</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`ec_message * <var class="pdparam">mess</var>`;
`int * <var class="pdparam">enabled</var>`;

| `int **has_core_generate_bounces_hook** (` | `)`; |   |

| `void **register_core_generate_bounces_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_generate_bounces_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_generate_bounces_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_generate_bounces_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `int **call_core_generate_bounces_hook** (` | <var class="pdparam">mess</var>, |   |
|   | <var class="pdparam">enabled</var>`)`; |   |

`ec_message * <var class="pdparam">mess</var>`;
`int * <var class="pdparam">enabled</var>`;<a name="idp40767152"></a> 
## Description

This hook allows you to override whether a bounce message will be generated for a given mail. The default behavior is to fall back to the configured settings. If `GENERATE_BOUNCES_HOOK_CONT` is returned, processing will fallback to other modules and then to the configuration. If `GENERATE_BOUNCES_HOOK_OK` is returned, then processing will terminate and the value passed back via enabled will be used.