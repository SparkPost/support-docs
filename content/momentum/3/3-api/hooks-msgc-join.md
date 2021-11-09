---
lastUpdated: "03/26/2020"
title: "join"
description: "join void join closure group group len capabilities capabilities len void closure const char group u int 16 t group len const char capabilities u int 16 t capabilities len int has msgc join hook void register msgc join hook first hook closure ec hook msgc join func t hook..."
---

<a name="hooks.msgc.join"></a> 
## Name

join

## Synopsis

`#include "hooks/msgc/join.h"`

| `void **join** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">group</var>, |   |
|   | <var class="pdparam">group_len</var>, |   |
|   | <var class="pdparam">capabilities</var>, |   |
|   | <var class="pdparam">capabilities_len</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`const char * <var class="pdparam">group</var>`;
`u_int16_t <var class="pdparam">group_len</var>`;
`const char * <var class="pdparam">capabilities</var>`;
`u_int16_t <var class="pdparam">capabilities_len</var>`;

| `int **has_msgc_join_hook** (` | `)`; |   |

| `void **register_msgc_join_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_msgc_join_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_msgc_join_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_msgc_join_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **call_msgc_join_hook** (` | <var class="pdparam">group</var>, |   |
|   | <var class="pdparam">group_len</var>, |   |
|   | <var class="pdparam">capabilities</var>, |   |
|   | <var class="pdparam">capabilities_len</var>`)`; |   |

`const char * <var class="pdparam">group</var>`;
`u_int16_t <var class="pdparam">group_len</var>`;
`const char * <var class="pdparam">capabilities</var>`;
`u_int16_t <var class="pdparam">capabilities_len</var>`;<a name="idp29908736"></a> 
## Description

This hook is registered by the MSGC infrastructure. Call it only once to join the named group. MSGC takes care of re-joining if the underlying connections to the MSGC infrastructure are broken.