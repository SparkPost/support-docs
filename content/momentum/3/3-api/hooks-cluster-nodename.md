---
lastUpdated: "03/26/2020"
title: "nodename"
description: "nodename void nodename closure buffer void closure string buffer int has cluster nodename hook void register cluster nodename hook first hook closure ec hook cluster nodename func t hook void closure void register cluster nodename hook last hook closure ec hook cluster nodename func t hook void closure void call..."
---

<a name="hooks.cluster.nodename"></a> 
## Name

nodename

## Synopsis

`#include "hooks/cluster/nodename.h"`

| `void **nodename** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">buffer</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`string * <var class="pdparam">buffer</var>`;

| `int **has_cluster_nodename_hook** (` | `)`; |   |

| `void **register_cluster_nodename_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_cluster_nodename_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_cluster_nodename_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_cluster_nodename_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **call_cluster_nodename_hook** (` | <var class="pdparam">buffer</var>`)`; |   |

`string * <var class="pdparam">buffer</var>`;<a name="idp31436384"></a> 
## Description

If your module needs to determine the nodename configured for the active Momentum instance, it can call this hook to populate a string with the nodename.