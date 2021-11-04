---
lastUpdated: "03/26/2020"
title: "update_trans_metrics"
description: "update trans metrics void update trans metrics closure msg void closure const ec cluster metrics msg int has cluster update trans metrics hook void register cluster update trans metrics hook first hook closure ec hook cluster update trans metrics func t hook void closure void register cluster update trans metrics..."
---

<a name="hooks.cluster.update_trans_metrics"></a> 
## Name

update_trans_metrics

## Synopsis

`#include "hooks/cluster/update_trans_metrics.h"`

| `void **update_trans_metrics** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">msg</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`const ec_cluster_metrics * <var class="pdparam">msg</var>`;

| `int **has_cluster_update_trans_metrics_hook** (` | `)`; |   |

| `void **register_cluster_update_trans_metrics_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_cluster_update_trans_metrics_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_cluster_update_trans_metrics_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_cluster_update_trans_metrics_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **call_cluster_update_trans_metrics_hook** (` | <var class="pdparam">msg</var>`)`; |   |

`const ec_cluster_metrics * <var class="pdparam">msg</var>`;<a name="idp27658048"></a> 
## Description

Register this hook to be called whenever a trans metrics update comes over the cluster.