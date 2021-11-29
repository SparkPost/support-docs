---
lastUpdated: "03/26/2020"
title: "outbound_tls_ciphers"
description: "outbound tls ciphers char outbound tls ciphers closure message void closure email message message int has core outbound tls ciphers hook void register core outbound tls ciphers hook first hook closure ec hook core outbound tls ciphers func t hook void closure void register core outbound tls ciphers hook last..."
---

<a name="hooks.core.outbound_tls_ciphers"></a> 
## Name

outbound_tls_ciphers

## Synopsis

`#include "hooks/core/outbound_tls_ciphers.h"`

| `char * **outbound_tls_ciphers** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">message</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`email_message * <var class="pdparam">message</var>`;

| `int **has_core_outbound_tls_ciphers_hook** (` | `)`; |   |

| `void **register_core_outbound_tls_ciphers_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_outbound_tls_ciphers_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_outbound_tls_ciphers_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_outbound_tls_ciphers_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `char * **call_core_outbound_tls_ciphers_hook** (` | <var class="pdparam">message</var>`)`; |   |

`email_message * <var class="pdparam">message</var>`;<a name="idp39932688"></a> 
## Description

This hook allows the available ciphers configured via the `ecelerity.conf` file to be replaced based on the *`message`*.