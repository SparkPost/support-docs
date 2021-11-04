---
lastUpdated: "03/26/2020"
title: "pre_dns_handle_a"
description: "pre dns handle a int pre dns handle a closure mxinfo status abuf alen qdomain void closure mx info closure mxinfo int status unsigned char abuf int alen const char qdomain int has core pre dns handle a hook void register core pre dns handle a hook first hook closure..."
---

<a name="hooks.core.pre_dns_handle_a"></a> 
## Name

pre_dns_handle_a

## Synopsis

`#include "hooks/core/pre_dns_handle_a.h"`

| `int **pre_dns_handle_a** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">mxinfo</var>, |   |
|   | <var class="pdparam">status</var>, |   |
|   | <var class="pdparam">abuf</var>, |   |
|   | <var class="pdparam">alen</var>, |   |
|   | <var class="pdparam">qdomain</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`mx_info_closure * <var class="pdparam">mxinfo</var>`;
`int <var class="pdparam">status</var>`;
`unsigned char * <var class="pdparam">abuf</var>`;
`int <var class="pdparam">alen</var>`;
`const char * <var class="pdparam">qdomain</var>`;

| `int **has_core_pre_dns_handle_a_hook** (` | `)`; |   |

| `void **register_core_pre_dns_handle_a_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_pre_dns_handle_a_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_pre_dns_handle_a_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_pre_dns_handle_a_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `int **call_core_pre_dns_handle_a_hook** (` | <var class="pdparam">mxinfo</var>, |   |
|   | <var class="pdparam">status</var>, |   |
|   | <var class="pdparam">abuf</var>, |   |
|   | <var class="pdparam">alen</var>, |   |
|   | <var class="pdparam">qdomain</var>`)`; |   |

`mx_info_closure * <var class="pdparam">mxinfo</var>`;
`int <var class="pdparam">status</var>`;
`unsigned char * <var class="pdparam">abuf</var>`;
`int <var class="pdparam">alen</var>`;
`const char * <var class="pdparam">qdomain</var>`;<a name="idp32645200"></a> 
## Description

The dns_handle_a is called when DNS query for A record is returned. The pre_dns_handle_a hook is called before the query result is handled. If a hook function returns 0, the remaining hook functions will be called. If all hook functions return 0, the processing of query result will continue. If 1 or 2 is returned from a hook function, the remaining hook functions and the processing of query result within dns_handle_a will be skipped. If 2 is returned by a hook function, that hook function should free mx_info_closure structure. A hook function should not return any value other than 0, 1 and 2.