---
lastUpdated: "03/26/2020"
title: "multicast_subscribe"
description: "multicast subscribe void multicast subscribe closure sender sender len group group len data data len void closure const char sender int sender len const char group int group len const unsigned char data int data len int has msgc multicast subscribe hook void register msgc multicast subscribe hook first hook..."
---

<a name="hooks.msgc.multicast_subscribe"></a> 
## Name

multicast_subscribe

## Synopsis

`#include "hooks/msgc/multicast_subscribe.h"`

| `void **multicast_subscribe** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">sender</var>, |   |
|   | <var class="pdparam">sender_len</var>, |   |
|   | <var class="pdparam">group</var>, |   |
|   | <var class="pdparam">group_len</var>, |   |
|   | <var class="pdparam">data</var>, |   |
|   | <var class="pdparam">data_len</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`const char * <var class="pdparam">sender</var>`;
`int <var class="pdparam">sender_len</var>`;
`const char * <var class="pdparam">group</var>`;
`int <var class="pdparam">group_len</var>`;
`const unsigned char * <var class="pdparam">data</var>`;
`int <var class="pdparam">data_len</var>`;

| `int **has_msgc_multicast_subscribe_hook** (` | `)`; |   |

| `void **register_msgc_multicast_subscribe_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_msgc_multicast_subscribe_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_msgc_multicast_subscribe_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_msgc_multicast_subscribe_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **call_msgc_multicast_subscribe_hook** (` | <var class="pdparam">sender</var>, |   |
|   | <var class="pdparam">sender_len</var>, |   |
|   | <var class="pdparam">group</var>, |   |
|   | <var class="pdparam">group_len</var>, |   |
|   | <var class="pdparam">data</var>, |   |
|   | <var class="pdparam">data_len</var>`)`; |   |

`const char * <var class="pdparam">sender</var>`;
`int <var class="pdparam">sender_len</var>`;
`const char * <var class="pdparam">group</var>`;
`int <var class="pdparam">group_len</var>`;
`const unsigned char * <var class="pdparam">data</var>`;
`int <var class="pdparam">data_len</var>`;<a name="idp44889472"></a> 
## Description

Called when any multicast message is received by MSGC