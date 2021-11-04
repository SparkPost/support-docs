---
lastUpdated: "03/26/2020"
title: "log_error"
description: "log error void log error closure now level format arg void closure struct timeval now int level const char format va list arg int has core log error hook void register core log error hook first hook closure ec hook core log error func t hook void closure void register..."
---

<a name="hooks.core.log_error"></a> 
## Name

log_error

## Synopsis

`#include "hooks/core/log_error.h"`

| `void **log_error** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">now</var>, |   |
|   | <var class="pdparam">level</var>, |   |
|   | <var class="pdparam">format</var>, |   |
|   | <var class="pdparam">arg</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`struct timeval * <var class="pdparam">now</var>`;
`int <var class="pdparam">level</var>`;
`const char * <var class="pdparam">format</var>`;
`va_list <var class="pdparam">arg</var>`;

| `int **has_core_log_error_hook** (` | `)`; |   |

| `void **register_core_log_error_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_log_error_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_log_error_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_log_error_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **call_core_log_error_hook** (` | <var class="pdparam">now</var>, |   |
|   | <var class="pdparam">level</var>, |   |
|   | <var class="pdparam">format</var>, |   |
|   | <var class="pdparam">arg</var>`)`; |   |

`struct timeval * <var class="pdparam">now</var>`;
`int <var class="pdparam">level</var>`;
`const char * <var class="pdparam">format</var>`;
`va_list <var class="pdparam">arg</var>`;<a name="idp45497600"></a> 
## Description

This registerable hook mirrors the module callback of the same name.