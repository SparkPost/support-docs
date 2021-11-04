---
lastUpdated: "03/26/2020"
title: "log_spool_import"
description: "log spool import void log spool import closure m orig id now ctx result void closure ec message m message id orig id struct timeval now ec spool ctx ctx int result int has core log spool import hook void register core log spool import hook first hook closure ec..."
---

<a name="hooks.core.log_spool_import"></a> 
## Name

log_spool_import

## Synopsis

`#include "hooks/core/log_spool_import.h"`

| `void **log_spool_import** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">m</var>, |   |
|   | <var class="pdparam">orig_id</var>, |   |
|   | <var class="pdparam">now</var>, |   |
|   | <var class="pdparam">ctx</var>, |   |
|   | <var class="pdparam">result</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`ec_message * <var class="pdparam">m</var>`;
`message_id * <var class="pdparam">orig_id</var>`;
`struct timeval * <var class="pdparam">now</var>`;
`ec_spool_ctx * <var class="pdparam">ctx</var>`;
`int <var class="pdparam">result</var>`;

| `int **has_core_log_spool_import_hook** (` | `)`; |   |

| `void **register_core_log_spool_import_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_log_spool_import_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_log_spool_import_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_log_spool_import_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **call_core_log_spool_import_hook** (` | <var class="pdparam">m</var>, |   |
|   | <var class="pdparam">orig_id</var>, |   |
|   | <var class="pdparam">now</var>, |   |
|   | <var class="pdparam">ctx</var>, |   |
|   | <var class="pdparam">result</var>`)`; |   |

`ec_message * <var class="pdparam">m</var>`;
`message_id * <var class="pdparam">orig_id</var>`;
`struct timeval * <var class="pdparam">now</var>`;
`ec_spool_ctx * <var class="pdparam">ctx</var>`;
`int <var class="pdparam">result</var>`;<a name="idp40663888"></a> 
## Description

This hook allows a module to be notified when a message is imported from a spool context. Note that m->id may differ from orig_id, as spool imports may cause the message id to be regenerated. msg may also be NULL. result is one of LOG_SPOOL_IMPORT_SUCCESS, LOG_SPOOL_IMPORT_SPOOL_IN_FAIL, LOG_SPOOL_IMPORT_SWAP_IN_FAIL, LOG_SPOOL_IMPORT_SWAP_OUT_FAIL.