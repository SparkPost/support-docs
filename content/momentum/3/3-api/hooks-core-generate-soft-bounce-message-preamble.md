---
lastUpdated: "03/26/2020"
title: "generate_soft_bounce_message_preamble"
description: "generate soft bounce message preamble int generate soft bounce message preamble closure message body void closure email message message string body int has core generate soft bounce message preamble hook void register core generate soft bounce message preamble hook first hook closure ec hook core generate soft bounce message preamble..."
---

<a name="hooks.core.generate_soft_bounce_message_preamble"></a> 
## Name

generate_soft_bounce_message_preamble

## Synopsis

`#include "hooks/core/generate_soft_bounce_message_preamble.h"`

| `int **generate_soft_bounce_message_preamble** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">message</var>, |   |
|   | <var class="pdparam">body</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`email_message * <var class="pdparam">message</var>`;
`string * <var class="pdparam">body</var>`;

| `int **has_core_generate_soft_bounce_message_preamble_hook** (` | `)`; |   |

| `void **register_core_generate_soft_bounce_message_preamble_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_generate_soft_bounce_message_preamble_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_generate_soft_bounce_message_preamble_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_generate_soft_bounce_message_preamble_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `int **call_core_generate_soft_bounce_message_preamble_hook** (` | <var class="pdparam">message</var>, |   |
|   | <var class="pdparam">body</var>`)`; |   |

`email_message * <var class="pdparam">message</var>`;
`string * <var class="pdparam">body</var>`;<a name="idp45549488"></a> 
## Description

When Momentum generates a delivery status notification (DSN) message, it creates the `email_message`, constructs the headers, a preamble and then attaches some portion of the reference email to the end (based on the configuration).

This hook gives you the constructed header as a `string *` and allows you to modify the headers directly and/or append your own preamble that will be used as the DSN body.