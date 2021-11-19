---
lastUpdated: "03/26/2020"
title: "smtp_client_rcptto_args"
description: "smtp client rcptto args int smtp client rcptto args closure dc args void closure delivery construct dc smtp client args args int has core smtp client rcptto args hook void register core smtp client rcptto args hook first hook closure ec hook core smtp client rcptto args func t hook..."
---

<a name="hooks.core.smtp_client_rcptto_args"></a> 
## Name

smtp_client_rcptto_args

## Synopsis

`#include "hooks/core/smtp_client_rcptto_args.h"`

| `int **smtp_client_rcptto_args** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">dc</var>, |   |
|   | <var class="pdparam">args</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`delivery_construct * <var class="pdparam">dc</var>`;
`smtp_client_args * <var class="pdparam">args</var>`;

| `int **has_core_smtp_client_rcptto_args_hook** (` | `)`; |   |

| `void **register_core_smtp_client_rcptto_args_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_smtp_client_rcptto_args_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_smtp_client_rcptto_args_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_smtp_client_rcptto_args_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `int **call_core_smtp_client_rcptto_args_hook** (` | <var class="pdparam">dc</var>, |   |
|   | <var class="pdparam">args</var>`)`; |   |

`delivery_construct * <var class="pdparam">dc</var>`;
`smtp_client_args * <var class="pdparam">args</var>`;<a name="idp37022480"></a> 
## Description

This hook is called before the RCPT TO phase in the SMTP client. The called function may add entries to smtp_client_args using the functions smtp_client_args_add(), delete with smtp_client_args_delete() and query entries using smtp_client_args_exists_and_fetch(). The called function is responsible for verifying that the remote SMTP server is capable of supporting the desired extension. If the smtp_client_args_add() call returns non-zero then the add failed and the hook should act appropriately. Returning 0 to the caller will cause subsequent hooks to be called and the message continue on its way. Returning non-zero will cause the message to transiently fail.