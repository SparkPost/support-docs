---
lastUpdated: "03/26/2020"
title: "pre_dns_handle_mx"
description: "pre dns handle mx int pre dns handle mx closure routes status abuf alen qdomain void closure mx routes routes int status unsigned char abuf int alen const char qdomain int has core pre dns handle mx hook void register core pre dns handle mx hook first hook closure ec..."
---

<a name="hooks.core.pre_dns_handle_mx"></a> 
## Name

pre_dns_handle_mx

## Synopsis

`#include "hooks/core/pre_dns_handle_mx.h"`

| `int **pre_dns_handle_mx** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">routes</var>, |   |
|   | <var class="pdparam">status</var>, |   |
|   | <var class="pdparam">abuf</var>, |   |
|   | <var class="pdparam">alen</var>, |   |
|   | <var class="pdparam">qdomain</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`mx_routes * <var class="pdparam">routes</var>`;
`int <var class="pdparam">status</var>`;
`unsigned char * <var class="pdparam">abuf</var>`;
`int <var class="pdparam">alen</var>`;
`const char * <var class="pdparam">qdomain</var>`;

| `int **has_core_pre_dns_handle_mx_hook** (` | `)`; |   |

| `void **register_core_pre_dns_handle_mx_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_pre_dns_handle_mx_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_pre_dns_handle_mx_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_pre_dns_handle_mx_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `int **call_core_pre_dns_handle_mx_hook** (` | <var class="pdparam">routes</var>, |   |
|   | <var class="pdparam">status</var>, |   |
|   | <var class="pdparam">abuf</var>, |   |
|   | <var class="pdparam">alen</var>, |   |
|   | <var class="pdparam">qdomain</var>`)`; |   |

`mx_routes * <var class="pdparam">routes</var>`;
`int <var class="pdparam">status</var>`;
`unsigned char * <var class="pdparam">abuf</var>`;
`int <var class="pdparam">alen</var>`;
`const char * <var class="pdparam">qdomain</var>`;<a name="idp32671680"></a> 
## Description

The dns_handle_mx is called when DNS query for MX record is returned. The pre_dns_handle_mx hook is called before the query result is handled. If a hook function returns 0, the remaining hook functions will be called. If all hook functions return 0, the processing of query result will continue. If 1 or 2 is returned from a hook function, the remaining hook functions and the processing of query result within dns_handle_mx will be skipped. If 2 is returned by a hook function, that hook function should free mx_routes structure. A hook function should not return any value other than 0, 1 and 2.