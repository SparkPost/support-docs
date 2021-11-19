---
lastUpdated: "03/26/2020"
title: "dns_get_As"
description: "dns get As int dns get As closure name mxinfo void closure const char name mx info closure mxinfo int has core dns get As hook void register core dns get As hook first hook closure ec hook core dns get As func t hook void closure void register core..."
---

<a name="hooks.core.dns_get_As"></a> 
## Name

dns_get_As

## Synopsis

`#include "hooks/core/dns_get_As.h"`

| `int **dns_get_As** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">name</var>, |   |
|   | <var class="pdparam">mxinfo</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`const char * <var class="pdparam">name</var>`;
`mx_info_closure * <var class="pdparam">mxinfo</var>`;

| `int **has_core_dns_get_As_hook** (` | `)`; |   |

| `void **register_core_dns_get_As_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_dns_get_As_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_dns_get_As_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_dns_get_As_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `int **call_core_dns_get_As_hook** (` | <var class="pdparam">name</var>, |   |
|   | <var class="pdparam">mxinfo</var>`)`; |   |

`const char * <var class="pdparam">name</var>`;
`mx_info_closure * <var class="pdparam">mxinfo</var>`;<a name="idp44680512"></a> 
## Description

The dns_get_As command requests the name resolution subsystem to resolve the provided hostname to a set of IP addresses. Upon successful resolution, the mail exchange's IP addresses should be registered via dns_domain_add_failed_a() or dns_set_mx_addresses(). If the mxinfo->refresh is non-zero, then dns_replace_host_in_timeheap() should be called. After updating or inserting, mail_queue_maintiain_domain() should be called to initiate delivery.