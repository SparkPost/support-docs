---
lastUpdated: "03/26/2020"
title: "pre_mail_queue_message_requeue"
description: "pre mail queue message requeue void pre mail queue message requeue closure b c void closure abstract message b struct timeval c int has core pre mail queue message requeue hook void register core pre mail queue message requeue hook first hook closure ec hook core pre mail queue message..."
---

<a name="hooks.core.pre_mail_queue_message_requeue"></a> 
## Name

pre_mail_queue_message_requeue

## Synopsis

`#include "hooks/core/pre_mail_queue_message_requeue.h"`

| `void **pre_mail_queue_message_requeue** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">b</var>, |   |
|   | <var class="pdparam">c</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`abstract_message * <var class="pdparam">b</var>`;
`struct timeval * <var class="pdparam">c</var>`;

| `int **has_core_pre_mail_queue_message_requeue_hook** (` | `)`; |   |

| `void **register_core_pre_mail_queue_message_requeue_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_pre_mail_queue_message_requeue_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_pre_mail_queue_message_requeue_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_pre_mail_queue_message_requeue_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **call_core_pre_mail_queue_message_requeue_hook** (` | <var class="pdparam">b</var>, |   |
|   | <var class="pdparam">c</var>`)`; |   |

`abstract_message * <var class="pdparam">b</var>`;
`struct timeval * <var class="pdparam">c</var>`;<a name="idp29663488"></a> 
## Description

Functions registered in at this hook will be invoked immediately prior to Momentum's logic to requeue a message subsequent to a delivery failure.