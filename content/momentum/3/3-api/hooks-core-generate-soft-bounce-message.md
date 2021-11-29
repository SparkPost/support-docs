---
lastUpdated: "03/26/2020"
title: "generate_soft_bounce_message"
description: "generate soft bounce message email message generate soft bounce message closure message void closure email message message int has core generate soft bounce message hook void register core generate soft bounce message hook first hook closure ec hook core generate soft bounce message func t hook void closure void register..."
---

<a name="hooks.core.generate_soft_bounce_message"></a> 
## Name

generate_soft_bounce_message

## Synopsis

`#include "hooks/core/generate_soft_bounce_message.h"`

| `email_message* **generate_soft_bounce_message** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">message</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`email_message * <var class="pdparam">message</var>`;

| `int **has_core_generate_soft_bounce_message_hook** (` | `)`; |   |

| `void **register_core_generate_soft_bounce_message_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_generate_soft_bounce_message_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_generate_soft_bounce_message_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_generate_soft_bounce_message_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `email_message* **call_core_generate_soft_bounce_message_hook** (` | <var class="pdparam">message</var>`)`; |   |

`email_message * <var class="pdparam">message</var>`;<a name="idp43686432"></a> 
## Description

This hook allows the normal mailer delivery notification (a.k.a. bounce) message to be customized. The subject email is passed as parameter *`message`* and the registered function may choose to construct and return a valid `email_message` structure containing the desired attributes and body. If NULL is returned, the next registered function is invoked.

Constructing an entire email_message can be overly complicated if the goal is only a replacement of the preamble of the message. Preamble replacement can be accomplished via the `generate_soft_bounce_message_preamble` hook.