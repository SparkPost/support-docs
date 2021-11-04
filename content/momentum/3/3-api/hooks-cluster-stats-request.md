---
lastUpdated: "03/26/2020"
title: "stats_request"
description: "stats request void stats request closure cclosure sender group command type which mess len void closure void cclosure char sender char group int command type int which char mess int len int has cluster stats request hook void register cluster stats request hook first hook closure ec hook cluster stats..."
---

<a name="hooks.cluster.stats_request"></a> 
## Name

stats_request

## Synopsis

`#include "hooks/cluster/stats_request.h"`

| `void **stats_request** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">cclosure</var>, |   |
|   | <var class="pdparam">sender</var>, |   |
|   | <var class="pdparam">group</var>, |   |
|   | <var class="pdparam">command_type</var>, |   |
|   | <var class="pdparam">which</var>, |   |
|   | <var class="pdparam">mess</var>, |   |
|   | <var class="pdparam">len</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`void * <var class="pdparam">cclosure</var>`;
`char * <var class="pdparam">sender</var>`;
`char * <var class="pdparam">group</var>`;
`int <var class="pdparam">command_type</var>`;
`int <var class="pdparam">which</var>`;
`char * <var class="pdparam">mess</var>`;
`int <var class="pdparam">len</var>`;

| `int **has_cluster_stats_request_hook** (` | `)`; |   |

| `void **register_cluster_stats_request_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_cluster_stats_request_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_cluster_stats_request_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_cluster_stats_request_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **call_cluster_stats_request_hook** (` | <var class="pdparam">cclosure</var>, |   |
|   | <var class="pdparam">sender</var>, |   |
|   | <var class="pdparam">group</var>, |   |
|   | <var class="pdparam">command_type</var>, |   |
|   | <var class="pdparam">which</var>, |   |
|   | <var class="pdparam">mess</var>, |   |
|   | <var class="pdparam">len</var>`)`; |   |

`void * <var class="pdparam">cclosure</var>`;
`char * <var class="pdparam">sender</var>`;
`char * <var class="pdparam">group</var>`;
`int <var class="pdparam">command_type</var>`;
`int <var class="pdparam">which</var>`;
`char * <var class="pdparam">mess</var>`;
`int <var class="pdparam">len</var>`;<a name="idp28824480"></a> 
## Description

Functions registered with this hook are called whenever a EC_CLUSTER_STATS_REQUEST message is received on the shared message bus. The expected behavior is for the called function to respond with a private message to the sender with the requested stats information.