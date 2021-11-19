---
lastUpdated: "03/26/2020"
title: "post_dns_handle_a"
description: "post dns handle a void post dns handle a closure mxinfo status abuf alen qdomain void closure mx info closure mxinfo int status unsigned char abuf int alen const char qdomain int has core post dns handle a hook void register core post dns handle a hook first hook closure..."
---

<a name="hooks.core.post_dns_handle_a"></a> 
## Name

post_dns_handle_a

## Synopsis

`#include "hooks/core/post_dns_handle_a.h"`

| `void **post_dns_handle_a** (` | <var class="pdparam">closure</var>, |   |
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

| `int **has_core_post_dns_handle_a_hook** (` | `)`; |   |

| `void **register_core_post_dns_handle_a_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_post_dns_handle_a_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_post_dns_handle_a_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_post_dns_handle_a_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **call_core_post_dns_handle_a_hook** (` | <var class="pdparam">mxinfo</var>, |   |
|   | <var class="pdparam">status</var>, |   |
|   | <var class="pdparam">abuf</var>, |   |
|   | <var class="pdparam">alen</var>, |   |
|   | <var class="pdparam">qdomain</var>`)`; |   |

`mx_info_closure * <var class="pdparam">mxinfo</var>`;
`int <var class="pdparam">status</var>`;
`unsigned char * <var class="pdparam">abuf</var>`;
`int <var class="pdparam">alen</var>`;
`const char * <var class="pdparam">qdomain</var>`;<a name="idp42762336"></a> 
## Description

The dns_handle_a is called when DNS query for A record is returned. The post_dns_handle_a hook is called after the query result is handled or the processing logic in dns_handle_a is short circuit when a pre_dns_handle_a hook function returns 1 or 2\. The hook function must check if mxinfo is NULL or not before using it.