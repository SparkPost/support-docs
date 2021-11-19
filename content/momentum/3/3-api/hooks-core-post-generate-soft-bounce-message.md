---
lastUpdated: "03/26/2020"
title: "post_generate_soft_bounce_message"
description: "post generate soft bounce message void post generate soft bounce message closure orig bounce void closure email message orig email message bounce int has core post generate soft bounce message hook void register core post generate soft bounce message hook first hook closure ec hook core post generate soft bounce..."
---

<a name="hooks.core.post_generate_soft_bounce_message"></a> 
## Name

post_generate_soft_bounce_message

## Synopsis

`#include "hooks/core/post_generate_soft_bounce_message.h"`

| `void **post_generate_soft_bounce_message** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">orig</var>, |   |
|   | <var class="pdparam">bounce</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`email_message * <var class="pdparam">orig</var>`;
`email_message * <var class="pdparam">bounce</var>`;

| `int **has_core_post_generate_soft_bounce_message_hook** (` | `)`; |   |

| `void **register_core_post_generate_soft_bounce_message_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_post_generate_soft_bounce_message_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_post_generate_soft_bounce_message_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_post_generate_soft_bounce_message_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **call_core_post_generate_soft_bounce_message_hook** (` | <var class="pdparam">orig</var>, |   |
|   | <var class="pdparam">bounce</var>`)`; |   |

`email_message * <var class="pdparam">orig</var>`;
`email_message * <var class="pdparam">bounce</var>`;<a name="idp44820416"></a> 
## Description

Called after a bounce message has been created, allowing modules to perform some arbitrary action such as propagating state from the original message to the bounce message.