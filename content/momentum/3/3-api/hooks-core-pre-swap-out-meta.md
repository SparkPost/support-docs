---
lastUpdated: "03/26/2020"
title: "pre_swap_out_meta"
description: "pre swap out meta int pre swap out meta closure mess flags void closure ec message mess int flags int has core pre swap out meta hook void register core pre swap out meta hook first hook closure ec hook core pre swap out meta func t hook void closure..."
---

<a name="hooks.core.pre_swap_out_meta"></a> 
## Name

pre_swap_out_meta

## Synopsis

`#include "hooks/core/swap_out_meta.h"`

| `int **pre_swap_out_meta** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">mess</var>, |   |
|   | <var class="pdparam">flags</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`ec_message * <var class="pdparam">mess</var>`;
`int <var class="pdparam">flags</var>`;

| `int **has_core_pre_swap_out_meta_hook** (` | `)`; |   |

| `void **register_core_pre_swap_out_meta_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_pre_swap_out_meta_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_pre_swap_out_meta_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_pre_swap_out_meta_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `int **call_core_pre_swap_out_meta_hook** (` | <var class="pdparam">mess</var>, |   |
|   | <var class="pdparam">flags</var>`)`; |   |

`ec_message * <var class="pdparam">mess</var>`;
`int <var class="pdparam">flags</var>`;<a name="idp29738240"></a> 
## Description

The `pre_swap_out_meta` hook allows modules to perform last minute actions immediately prior to the meta-data file being written to spool. The mess and flags parameters are the parameters of the same names to the ec_message_swap_out_meta() function.

Making body modifications at this point is strongly discouraged, as they may be happening too late to be noticed and may result in those changes not being journalled to spool.

If this hook returns zero, it indicates an error and causes ec_message_swap_out_meta() to fail with the return value EC_MSG_SWAP_RESULT_ERR.

If this hook returns 1, it indicates success. Any other return value is undefined.