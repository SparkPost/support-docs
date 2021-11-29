---
lastUpdated: "03/26/2020"
title: "post_dns_handle_mx"
description: "post dns handle mx void post dns handle mx closure routes status abuf alen qdomain void closure mx routes routes int status unsigned char abuf int alen const char qdomain int has core post dns handle mx hook void register core post dns handle mx hook first hook closure ec..."
---

<a name="hooks.core.post_dns_handle_mx"></a> 
## Name

post_dns_handle_mx

## Synopsis

`#include "hooks/core/post_dns_handle_mx.h"`

| `void **post_dns_handle_mx** (` | <var class="pdparam">closure</var>, |   |
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

| `int **has_core_post_dns_handle_mx_hook** (` | `)`; |   |

| `void **register_core_post_dns_handle_mx_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_post_dns_handle_mx_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_post_dns_handle_mx_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_post_dns_handle_mx_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **call_core_post_dns_handle_mx_hook** (` | <var class="pdparam">routes</var>, |   |
|   | <var class="pdparam">status</var>, |   |
|   | <var class="pdparam">abuf</var>, |   |
|   | <var class="pdparam">alen</var>, |   |
|   | <var class="pdparam">qdomain</var>`)`; |   |

`mx_routes * <var class="pdparam">routes</var>`;
`int <var class="pdparam">status</var>`;
`unsigned char * <var class="pdparam">abuf</var>`;
`int <var class="pdparam">alen</var>`;
`const char * <var class="pdparam">qdomain</var>`;<a name="idp42048208"></a> 
## Description

The dns_handle_mx is called when DNS query for MX record is returned. The post_dns_handle_mx hook is called after the query result is handled or the processing logic in dns_handle_a is short circuit when a pre_dns_handle_mx hook function returns 1 or 2\. The hook function must check if "routes" is NULL or not before using it.