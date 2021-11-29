---
lastUpdated: "03/26/2020"
title: "rfc3464_inline_message_fragment"
description: "rfc 3464 inline message fragment int rfc 3464 inline message fragment closure response message action void closure string response ec message message dsn actype action int has core rfc 3464 inline message fragment hook void register core rfc 3464 inline message fragment hook first hook closure ec hook core rfc..."
---

<a name="hooks.core.rfc3464_inline_message_fragment"></a> 
## Name

rfc3464_inline_message_fragment

## Synopsis

`#include "hooks/core/rfc3464_inline_message_fragment.h"`

| `int **rfc3464_inline_message_fragment** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">response</var>, |   |
|   | <var class="pdparam">message</var>, |   |
|   | <var class="pdparam">action</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`string * <var class="pdparam">response</var>`;
`ec_message * <var class="pdparam">message</var>`;
`dsn_actype <var class="pdparam">action</var>`;

| `int **has_core_rfc3464_inline_message_fragment_hook** (` | `)`; |   |

| `void **register_core_rfc3464_inline_message_fragment_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_rfc3464_inline_message_fragment_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_rfc3464_inline_message_fragment_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_rfc3464_inline_message_fragment_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `int **call_core_rfc3464_inline_message_fragment_hook** (` | <var class="pdparam">response</var>, |   |
|   | <var class="pdparam">message</var>, |   |
|   | <var class="pdparam">action</var>`)`; |   |

`string * <var class="pdparam">response</var>`;
`ec_message * <var class="pdparam">message</var>`;
`dsn_actype <var class="pdparam">action</var>`;<a name="idp36934864"></a> 
## Description

This hook allows the portion of the original message to be included in an RFC 3464 MDN to be customized. When this hook is called the caller can write into `response` any context. The contents there will be the body content of the delivery-status component. The enclosing MIME boundaries will be automatically inserted by the system.

To acknowledge that your hook has taken responsibility for generating the message, you should return a true value from this hook.