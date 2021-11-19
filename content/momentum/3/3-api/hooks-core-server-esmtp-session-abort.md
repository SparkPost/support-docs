---
lastUpdated: "03/26/2020"
title: "server_esmtp_session_abort"
description: "server esmtp session abort void server esmtp session abort closure ac void closure accept construct ac int has core server esmtp session abort hook void register core server esmtp session abort hook first hook closure ec hook core server esmtp session abort func t hook void closure void register core..."
---

<a name="hooks.core.server_esmtp_session_abort"></a> 
## Name

server_esmtp_session_abort

## Synopsis

`#include "hooks/core/server_esmtp_session_abort.h"`

| `void **server_esmtp_session_abort** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">ac</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`accept_construct * <var class="pdparam">ac</var>`;

| `int **has_core_server_esmtp_session_abort_hook** (` | `)`; |   |

| `void **register_core_server_esmtp_session_abort_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_server_esmtp_session_abort_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_server_esmtp_session_abort_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_server_esmtp_session_abort_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **call_core_server_esmtp_session_abort_hook** (` | <var class="pdparam">ac</var>`)`; |   |

`accept_construct * <var class="pdparam">ac</var>`;<a name="idp36956176"></a> 
## Description

This hook fires when an inbound smtp session prematurely disconnects.