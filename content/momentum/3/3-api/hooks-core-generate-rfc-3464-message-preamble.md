---
lastUpdated: "03/26/2020"
title: "generate_rfc3464_message_preamble"
description: "generate rfc 3464 message preamble int generate rfc 3464 message preamble closure message action body void closure ec message message dsn actype action string body int has core generate rfc 3464 message preamble hook void register core generate rfc 3464 message preamble hook first hook closure ec hook core generate..."
---

<a name="hooks.core.generate_rfc3464_message_preamble"></a> 
## Name

generate_rfc3464_message_preamble

## Synopsis

`#include "hooks/core/generate_rfc3464_message_preamble.h"`

| `int **generate_rfc3464_message_preamble** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">message</var>, |   |
|   | <var class="pdparam">action</var>, |   |
|   | <var class="pdparam">body</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`ec_message * <var class="pdparam">message</var>`;
`dsn_actype <var class="pdparam">action</var>`;
`string * <var class="pdparam">body</var>`;

| `int **has_core_generate_rfc3464_message_preamble_hook** (` | `)`; |   |

| `void **register_core_generate_rfc3464_message_preamble_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_generate_rfc3464_message_preamble_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_generate_rfc3464_message_preamble_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_generate_rfc3464_message_preamble_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `int **call_core_generate_rfc3464_message_preamble_hook** (` | <var class="pdparam">message</var>, |   |
|   | <var class="pdparam">action</var>, |   |
|   | <var class="pdparam">body</var>`)`; |   |

`ec_message * <var class="pdparam">message</var>`;
`dsn_actype <var class="pdparam">action</var>`;
`string * <var class="pdparam">body</var>`;<a name="idp43663616"></a> 
## Description

When Momentum generates a delivery status notification (DSN) message, it creates the `ec_message`, constructs the headers, a preamble and then attaches some portion of the reference email to the end (based on the configuration).

This hook gives you the current RFC 3464 action being invoked and the constructed headers as a `string *` and allows you to modify the headers directly and/or append your own preamble that will be used as the DSN body.

If a truth value is returned, the generated preamble is considered complete, otherwise the normal preamble will be generated subsequently.