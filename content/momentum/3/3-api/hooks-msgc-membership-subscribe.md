---
lastUpdated: "03/26/2020"
title: "membership_subscribe"
description: "membership subscribe void membership subscribe closure mode sender sender len group group len capabilities capabilities len gid void closure int mode const char sender int sender len const char group int group len const char capabilities int capabilities len u int 32 t gid int has msgc membership subscribe hook..."
---

<a name="hooks.msgc.membership_subscribe"></a> 
## Name

membership_subscribe

## Synopsis

`#include "hooks/msgc/membership_subscribe.h"`

| `void **membership_subscribe** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">mode</var>, |   |
|   | <var class="pdparam">sender</var>, |   |
|   | <var class="pdparam">sender_len</var>, |   |
|   | <var class="pdparam">group</var>, |   |
|   | <var class="pdparam">group_len</var>, |   |
|   | <var class="pdparam">capabilities</var>, |   |
|   | <var class="pdparam">capabilities_len</var>, |   |
|   | <var class="pdparam">gid</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`int <var class="pdparam">mode</var>`;
`const char * <var class="pdparam">sender</var>`;
`int <var class="pdparam">sender_len</var>`;
`const char * <var class="pdparam">group</var>`;
`int <var class="pdparam">group_len</var>`;
`const char * <var class="pdparam">capabilities</var>`;
`int <var class="pdparam">capabilities_len</var>`;
`u_int32_t <var class="pdparam">gid</var>`;

| `int **has_msgc_membership_subscribe_hook** (` | `)`; |   |

| `void **register_msgc_membership_subscribe_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_msgc_membership_subscribe_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_msgc_membership_subscribe_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_msgc_membership_subscribe_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **call_msgc_membership_subscribe_hook** (` | <var class="pdparam">mode</var>, |   |
|   | <var class="pdparam">sender</var>, |   |
|   | <var class="pdparam">sender_len</var>, |   |
|   | <var class="pdparam">group</var>, |   |
|   | <var class="pdparam">group_len</var>, |   |
|   | <var class="pdparam">capabilities</var>, |   |
|   | <var class="pdparam">capabilities_len</var>, |   |
|   | <var class="pdparam">gid</var>`)`; |   |

`int <var class="pdparam">mode</var>`;
`const char * <var class="pdparam">sender</var>`;
`int <var class="pdparam">sender_len</var>`;
`const char * <var class="pdparam">group</var>`;
`int <var class="pdparam">group_len</var>`;
`const char * <var class="pdparam">capabilities</var>`;
`int <var class="pdparam">capabilities_len</var>`;
`u_int32_t <var class="pdparam">gid</var>`;<a name="idp29939088"></a> 
## Description

Called when any MSGC membership event is received. mode means the following: 0: Leave message 1: Join message 2: GID update message (sender and capabilities will be empty in this case