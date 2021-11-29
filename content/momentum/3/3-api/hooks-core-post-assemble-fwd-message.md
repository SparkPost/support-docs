---
lastUpdated: "03/26/2020"
title: "post_assemble_fwd_message"
description: "post assemble fwd message void post assemble fwd message closure orig forwarded void closure email message orig email message forwarded int has core post assemble fwd message hook void register core post assemble fwd message hook first hook closure ec hook core post assemble fwd message func t hook void..."
---

<a name="hooks.core.post_assemble_fwd_message"></a> 
## Name

post_assemble_fwd_message

## Synopsis

`#include "hooks/core/post_assemble_fwd_message.h"`

| `void **post_assemble_fwd_message** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">orig</var>, |   |
|   | <var class="pdparam">forwarded</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`email_message * <var class="pdparam">orig</var>`;
`email_message * <var class="pdparam">forwarded</var>`;

| `int **has_core_post_assemble_fwd_message_hook** (` | `)`; |   |

| `void **register_core_post_assemble_fwd_message_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_post_assemble_fwd_message_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_post_assemble_fwd_message_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_post_assemble_fwd_message_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **call_core_post_assemble_fwd_message_hook** (` | <var class="pdparam">orig</var>, |   |
|   | <var class="pdparam">forwarded</var>`)`; |   |

`email_message * <var class="pdparam">orig</var>`;
`email_message * <var class="pdparam">forwarded</var>`;<a name="idp42716864"></a> 
## Description

Called after a forwarded message has been created, allowing modules to perform some arbitrary action such as propagating state from the original message to the forwarded message.