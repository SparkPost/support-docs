---
title: "generate_rfc3464_message"
description: "generate rfc 3464 message int generate rfc 3464 message closure message action mdn void closure ec message message dsn actype action ec message mdn int has core generate rfc 3464 message hook void register core generate rfc 3464 message hook first hook closure ec hook core generate rfc 3464 message..."
---

<a name="hooks.core.generate_rfc3464_message"></a> 
## Name

generate_rfc3464_message

## Synopsis

`#include "hooks/core/generate_rfc3464_message.h"`

| `int **generate_rfc3464_message** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">message</var>, |   |
|   | <var class="pdparam">action</var>, |   |
|   | <var class="pdparam">mdn</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`ec_message * <var class="pdparam">message</var>`;
`dsn_actype <var class="pdparam">action</var>`;
`ec_message ** <var class="pdparam">mdn</var>`;

| `int **has_core_generate_rfc3464_message_hook** (` | `)`; |   |

| `void **register_core_generate_rfc3464_message_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_generate_rfc3464_message_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_generate_rfc3464_message_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_generate_rfc3464_message_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `int **call_core_generate_rfc3464_message_hook** (` | <var class="pdparam">message</var>, |   |
|   | <var class="pdparam">action</var>, |   |
|   | <var class="pdparam">mdn</var>`)`; |   |

`ec_message * <var class="pdparam">message</var>`;
`dsn_actype <var class="pdparam">action</var>`;
`ec_message ** <var class="pdparam">mdn</var>`;<a name="idp40791600"></a> 
## Description

This hook allows the normal mailer delivery notification (a.k.a. bounce) message to be customized. The subject email is passed as parameter *`message`* and the registered function may choose to construct and return a valid `ec_message` structure containing the desired attributes and body by reference. If a true value is returned, the bounce message set by reference will be used. If that message is NULL, then no bounce will be generated.

Constructing an entire ec_message can be overly complicated if the goal is only a replacement of the preamble of the message. Preamble replacement can be accomplished via the `generate_rfc3464_message_preamble` hook.