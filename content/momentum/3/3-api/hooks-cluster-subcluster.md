---
lastUpdated: "03/26/2020"
title: "subcluster"
description: "subcluster void subcluster closure buffer void closure string buffer int has cluster subcluster hook void register cluster subcluster hook first hook closure ec hook cluster subcluster func t hook void closure void register cluster subcluster hook last hook closure ec hook cluster subcluster func t hook void closure void call..."
---

<a name="hooks.cluster.subcluster"></a> 
## Name

subcluster

## Synopsis

`#include "hooks/cluster/subcluster.h"`

| `void **subcluster** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">buffer</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`string * <var class="pdparam">buffer</var>`;

| `int **has_cluster_subcluster_hook** (` | `)`; |   |

| `void **register_cluster_subcluster_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_cluster_subcluster_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_cluster_subcluster_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_cluster_subcluster_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **call_cluster_subcluster_hook** (` | <var class="pdparam">buffer</var>`)`; |   |

`string * <var class="pdparam">buffer</var>`;<a name="idp44687904"></a> 
## Description

**Configuration Change. ** This hook is available as of version 3.2.

If your module needs to determine the subcluster configured for the active Momentum instance, it can call this hook to populate a string with the subcluster name.