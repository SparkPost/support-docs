---
lastUpdated: "03/26/2020"
title: "multicast_publish"
description: "multicast publish void multicast publish closure group group len data data len result void closure const char group u int 16 t group len const unsigned char data u int 32 t data len int result int has msgc multicast publish hook void register msgc multicast publish hook first hook..."
---

<a name="hooks.msgc.multicast_publish"></a> 
## Name

multicast_publish

## Synopsis

`#include "hooks/msgc/multicast_publish.h"`

| `void **multicast_publish** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">group</var>, |   |
|   | <var class="pdparam">group_len</var>, |   |
|   | <var class="pdparam">data</var>, |   |
|   | <var class="pdparam">data_len</var>, |   |
|   | <var class="pdparam">result</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`const char * <var class="pdparam">group</var>`;
`u_int16_t <var class="pdparam">group_len</var>`;
`const unsigned char * <var class="pdparam">data</var>`;
`u_int32_t <var class="pdparam">data_len</var>`;
`int * <var class="pdparam">result</var>`;

| `int **has_msgc_multicast_publish_hook** (` | `)`; |   |

| `void **register_msgc_multicast_publish_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_msgc_multicast_publish_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_msgc_multicast_publish_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_msgc_multicast_publish_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **call_msgc_multicast_publish_hook** (` | <var class="pdparam">group</var>, |   |
|   | <var class="pdparam">group_len</var>, |   |
|   | <var class="pdparam">data</var>, |   |
|   | <var class="pdparam">data_len</var>, |   |
|   | <var class="pdparam">result</var>`)`; |   |

`const char * <var class="pdparam">group</var>`;
`u_int16_t <var class="pdparam">group_len</var>`;
`const unsigned char * <var class="pdparam">data</var>`;
`u_int32_t <var class="pdparam">data_len</var>`;
`int * <var class="pdparam">result</var>`;<a name="idp29965088"></a> 
## Description

This hook is registered by the MSGC infrastructure. Call it to publish data to the defined group. result is 0 on success, non-zero on failure to publish.