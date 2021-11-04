---
lastUpdated: "03/26/2020"
title: "membership_update"
description: "membership update void membership update closure spc sender void closure sp closure t spc const char sender int has cluster membership update hook void register cluster membership update hook first hook closure ec hook cluster membership update func t hook void closure void register cluster membership update hook last hook..."
---

<a name="hooks.cluster.membership_update"></a> 
## Name

membership_update

## Synopsis

`#include "hooks/cluster/membership_update.h"`

| `void **membership_update** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">spc</var>, |   |
|   | <var class="pdparam">sender</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`sp_closure_t * <var class="pdparam">spc</var>`;
`const char * <var class="pdparam">sender</var>`;

| `int **has_cluster_membership_update_hook** (` | `)`; |   |

| `void **register_cluster_membership_update_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_cluster_membership_update_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_cluster_membership_update_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_cluster_membership_update_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **call_cluster_membership_update_hook** (` | <var class="pdparam">spc</var>, |   |
|   | <var class="pdparam">sender</var>`)`; |   |

`sp_closure_t * <var class="pdparam">spc</var>`;
`const char * <var class="pdparam">sender</var>`;<a name="idp41239248"></a> 
## Description

Functions registered with this hook will be called whenever a cluster membership update is detected. The required arugments are the appropriate sp_closure_t structure and the group name of the change. The registered function should verify that it is the desired group.