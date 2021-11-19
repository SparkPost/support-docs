---
lastUpdated: "03/26/2020"
title: "outbound_tls_key"
description: "outbound tls key char outbound tls key closure message void closure email message message int has core outbound tls key hook void register core outbound tls key hook first hook closure ec hook core outbound tls key func t hook void closure void register core outbound tls key hook last..."
---

<a name="hooks.core.outbound_tls_key"></a> 
## Name

outbound_tls_key

## Synopsis

`#include "hooks/core/outbound_tls_key.h"`

| `char * **outbound_tls_key** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">message</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`email_message * <var class="pdparam">message</var>`;

| `int **has_core_outbound_tls_key_hook** (` | `)`; |   |

| `void **register_core_outbound_tls_key_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_outbound_tls_key_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_outbound_tls_key_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_outbound_tls_key_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `char * **call_core_outbound_tls_key_hook** (` | <var class="pdparam">message</var>`)`; |   |

`email_message * <var class="pdparam">message</var>`;<a name="idp39953920"></a> 
## Description

This hook allows a client key file to be specified for a given email message.