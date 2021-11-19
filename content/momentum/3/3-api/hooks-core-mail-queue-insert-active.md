---
lastUpdated: "03/26/2020"
title: "mail_queue_insert_active"
description: "mail queue insert active int mail queue insert active closure mq message void closure mail queue mq abstract message message int has core mail queue insert active hook void register core mail queue insert active hook first hook closure ec hook core mail queue insert active func t hook void..."
---

<a name="hooks.core.mail_queue_insert_active"></a> 
## Name

mail_queue_insert_active

## Synopsis

`#include "hooks/core/mail_queue_insert_active.h"`

| `int **mail_queue_insert_active** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">mq</var>, |   |
|   | <var class="pdparam">message</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`mail_queue * <var class="pdparam">mq</var>`;
`abstract_message * <var class="pdparam">message</var>`;

| `int **has_core_mail_queue_insert_active_hook** (` | `)`; |   |

| `void **register_core_mail_queue_insert_active_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_mail_queue_insert_active_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_mail_queue_insert_active_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_mail_queue_insert_active_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `int **call_core_mail_queue_insert_active_hook** (` | <var class="pdparam">mq</var>, |   |
|   | <var class="pdparam">message</var>`)`; |   |

`mail_queue * <var class="pdparam">mq</var>`;
`abstract_message * <var class="pdparam">message</var>`;<a name="idp27936912"></a> 
## Description

When a message is attempted it is removed from the delayed queue and inserted into the active queue for a given domain by invoking this hook. Returning 0 will cause subsequent hooks to not be called. The default hook behavior will find the appropriate active queue within *`mq`* for the *`message`* based on the message's binding and insert it. If this action is subverted by new callee, then 0 should be returned to avoid a terminal error within Momentum.