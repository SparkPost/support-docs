---
lastUpdated: "07/14/2021"
title: "generate_rfc3464_message"
description: "generate rfc 3464 message int generate rfc 3464 message closure message action mdn void closure ec message message dsn actype action ec message mdn int has core generate rfc 3464 message hook void register core generate rfc 3464 message hook first hook closure ec hook core generate rfc 3464 message..."
---

<a name="hooks.core.generate_rfc3464_message"></a> 
## Name

generate_rfc3464_message

## Synopsis

`#include "hooks/core/generate_rfc3464_message.h"`

| `int `**`generate_rfc3464_message`**` (` | <var class="pdparam">closure</var>, |
|   | <var class="pdparam">message</var>, |
|   | <var class="pdparam">action</var>, |
|   | <var class="pdparam">mdn</var>`)`; |

`void * `*`closure`*;
`ec_message * `*`message`*;
`dsn_actype `*`action`*;
`ec_message ** `*`mdn`*;

| `int `**`has_core_generate_rfc3464_message_hook`**` ( );` |

| `void `**`register_core_generate_rfc3464_message_hook_first`**` (`*`hook,`* |
|   | *`closure`*`);` |

`ec_hook_core_generate_rfc3464_message_func_t `*`hook`*`;`
`void *`*`closure`*`;`

| `void `**`register_core_generate_rfc3464_message_hook_last`**` (`*`hook`*`,`|
|   | *`closure</var>`*`);` |

`ec_hook_core_generate_rfc3464_message_func_t `*`hook`*`;`
`void *`*`closure`*`;`

| `int `**`call_core_generate_rfc3464_message_hook`**` (`*`message`*`,`|
|   | *`action`*`,` |
|   | *`mdn`*`);` |

`ec_message * `*`message`*`;`
`dsn_actype `*`action`*`;`
`ec_message ** `*`mdn`*`;`<a name="idp40791600"></a> 
## Description

This hook allows the normal mailer delivery notification (a.k.a. bounce) message to be customized. The subject email is passed as parameter *`message`* and the registered function may choose to construct and return a valid `ec_message` structure containing the desired attributes and body by reference. If a true value is returned, the bounce message set by reference will be used. If that message is NULL, then no bounce will be generated.

Constructing an entire ec_message can be overly complicated if the goal is only a replacement of the preamble of the message. Preamble replacement can be accomplished via the `generate_rfc3464_message_preamble` hook.

Implementing this hook in C will cause the first argument to be `void * closure`. Implementing this hook in Lua is different and the closure argument will not be passed. Instead the first argument is `ec_message * message`.  