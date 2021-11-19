---
lastUpdated: "03/26/2020"
title: "dns_get_MXs"
description: "dns get M Xs int dns get M Xs closure domain void closure const char domain int has core dns get M Xs hook void register core dns get M Xs hook first hook closure ec hook core dns get M Xs func t hook void closure void register core..."
---

<a name="hooks.core.dns_get_MXs"></a> 
## Name

dns_get_MXs

## Synopsis

`#include "hooks/core/dns_get_MXs.h"`

| `int **dns_get_MXs** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">domain</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`const char * <var class="pdparam">domain</var>`;

| `int **has_core_dns_get_MXs_hook** (` | `)`; |   |

| `void **register_core_dns_get_MXs_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_dns_get_MXs_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_dns_get_MXs_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_dns_get_MXs_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `int **call_core_dns_get_MXs_hook** (` | <var class="pdparam">domain</var>`)`; |   |

`const char * <var class="pdparam">domain</var>`;<a name="idp46532784"></a> 
## Description

The dns_get_MXs command requests the name resolution subsystem to resolve the provided domain name to a set of mail exchanges. Upon successful resolution, the domain's mx list should be registered with the system (from the main thread) by calling dns_add_domain() and dns_domain_add_mx(). Afterwards, lookuptable_flushdomain() and mail_queue_maintain_domain() should be called on the resulting domain_record to initiate delivery. In case of failure, dns_add_mx_broken can be used to add an unrouteble domain container; it calls the flush and maintain functions, so doing so manually is unnecessary.