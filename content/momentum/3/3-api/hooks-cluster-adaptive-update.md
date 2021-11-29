---
lastUpdated: "03/26/2020"
title: "adaptive_update"
description: "adaptive update void adaptive update closure buf buflen void closure const char buf int buflen int has cluster adaptive update hook void register cluster adaptive update hook first hook closure ec hook cluster adaptive update func t hook void closure void register cluster adaptive update hook last hook closure ec..."
---

<a name="hooks.cluster.adaptive_update"></a> 
## Name

adaptive_update

## Synopsis

`#include "hooks/cluster/adaptive_update.h"`

| `void **adaptive_update** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">buf</var>, |   |
|   | <var class="pdparam">buflen</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`const char * <var class="pdparam">buf</var>`;
`int <var class="pdparam">buflen</var>`;

| `int **has_cluster_adaptive_update_hook** (` | `)`; |   |

| `void **register_cluster_adaptive_update_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_cluster_adaptive_update_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_cluster_adaptive_update_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_cluster_adaptive_update_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **call_cluster_adaptive_update_hook** (` | <var class="pdparam">buf</var>, |   |
|   | <var class="pdparam">buflen</var>`)`; |   |

`const char * <var class="pdparam">buf</var>`;
`int <var class="pdparam">buflen</var>`;<a name="idp34302176"></a> 
## Description

Adaptive call this hook to inform the cluster that global parameter has been updated. Cluster module should implement this hook to broadcast this event.