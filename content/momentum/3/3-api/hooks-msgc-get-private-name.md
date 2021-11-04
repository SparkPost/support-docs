---
lastUpdated: "03/26/2020"
title: "get_private_name"
description: "get private name void get private name closure buf buf len void closure char buf int buf len int has msgc get private name hook void register msgc get private name hook first hook closure ec hook msgc get private name func t hook void closure void register msgc get..."
---

<a name="hooks.msgc.get_private_name"></a> 
## Name

get_private_name

## Synopsis

`#include "hooks/msgc/get_private_name.h"`

| `void **get_private_name** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">buf</var>, |   |
|   | <var class="pdparam">buf_len</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`char * <var class="pdparam">buf</var>`;
`int <var class="pdparam">buf_len</var>`;

| `int **has_msgc_get_private_name_hook** (` | `)`; |   |

| `void **register_msgc_get_private_name_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_msgc_get_private_name_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_msgc_get_private_name_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_msgc_get_private_name_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **call_msgc_get_private_name_hook** (` | <var class="pdparam">buf</var>, |   |
|   | <var class="pdparam">buf_len</var>`)`; |   |

`char * <var class="pdparam">buf</var>`;
`int <var class="pdparam">buf_len</var>`;<a name="idp29884272"></a> 
## Description

Get our private name from the MSGC client.