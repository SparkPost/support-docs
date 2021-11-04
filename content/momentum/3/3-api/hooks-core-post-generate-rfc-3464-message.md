---
lastUpdated: "03/26/2020"
title: "post_generate_rfc3464_message"
description: "post generate rfc 3464 message void post generate rfc 3464 message closure orig bounce action void closure ec message orig ec message bounce dsn actype action int has core post generate rfc 3464 message hook void register core post generate rfc 3464 message hook first hook closure ec hook core..."
---

<a name="hooks.core.post_generate_rfc3464_message"></a> 
## Name

post_generate_rfc3464_message

## Synopsis

`#include "hooks/core/post_generate_rfc3464_message.h"`

| `void **post_generate_rfc3464_message** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">orig</var>, |   |
|   | <var class="pdparam">bounce</var>, |   |
|   | <var class="pdparam">action</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`ec_message * <var class="pdparam">orig</var>`;
`ec_message * <var class="pdparam">bounce</var>`;
`dsn_actype <var class="pdparam">action</var>`;

| `int **has_core_post_generate_rfc3464_message_hook** (` | `)`; |   |

| `void **register_core_post_generate_rfc3464_message_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_post_generate_rfc3464_message_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_post_generate_rfc3464_message_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_post_generate_rfc3464_message_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **call_core_post_generate_rfc3464_message_hook** (` | <var class="pdparam">orig</var>, |   |
|   | <var class="pdparam">bounce</var>, |   |
|   | <var class="pdparam">action</var>`)`; |   |

`ec_message * <var class="pdparam">orig</var>`;
`ec_message * <var class="pdparam">bounce</var>`;
`dsn_actype <var class="pdparam">action</var>`;<a name="idp38320288"></a> 
## Description

Called after a RFC 3464 notification has been created, allowing modules to perform some arbitrary action such as propagating state from the original message to the bounce message.