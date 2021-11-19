---
lastUpdated: "03/26/2020"
title: "domain_requires_master_scheduler"
description: "domain requires master scheduler int domain requires master scheduler closure domain void closure const char domain int has core domain requires master scheduler hook void register core domain requires master scheduler hook first hook closure ec hook core domain requires master scheduler func t hook void closure void register core..."
---

<a name="hooks.core.domain_requires_master_scheduler"></a> 
## Name

domain_requires_master_scheduler

## Synopsis

`#include "hooks/core/domain_requires_master_scheduler.h"`

| `int **domain_requires_master_scheduler** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">domain</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`const char * <var class="pdparam">domain</var>`;

| `int **has_core_domain_requires_master_scheduler_hook** (` | `)`; |   |

| `void **register_core_domain_requires_master_scheduler_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_domain_requires_master_scheduler_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_domain_requires_master_scheduler_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_domain_requires_master_scheduler_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `int **call_core_domain_requires_master_scheduler_hook** (` | <var class="pdparam">domain</var>`)`; |   |

`const char * <var class="pdparam">domain</var>`;<a name="idp38155248"></a> 
## Description

This hook is called whenever a scheduler is not defined for a given domain and one needs to be selected. Providers returning 1 will cause the listed domain to always be assigned to the master scheduler. This is for purposes of mail queue maintenance.