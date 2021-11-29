---
lastUpdated: "03/26/2020"
title: "aaa_log"
description: "aaa log void aaa log closure rec void closure ec accounting record rec int has core aaa log hook void register core aaa log hook first hook closure ec hook core aaa log func t hook void closure void register core aaa log hook last hook closure ec hook core..."
---

<a name="hooks.core.aaa_log"></a> 
## Name

aaa_log

## Synopsis

`#include "hooks/core/aaa_log.h"`

| `void **aaa_log** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">rec</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`ec_accounting_record * <var class="pdparam">rec</var>`;

| `int **has_core_aaa_log_hook** (` | `)`; |   |

| `void **register_core_aaa_log_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_aaa_log_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_aaa_log_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_aaa_log_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **call_core_aaa_log_hook** (` | <var class="pdparam">rec</var>`)`; |   |

`ec_accounting_record * <var class="pdparam">rec</var>`;<a name="idp40724256"></a> 
## Description

Invoked on each accountable event, allowing collection and logging of that information.