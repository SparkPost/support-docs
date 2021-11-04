---
lastUpdated: "03/26/2020"
title: "ec_bag_find"
description: "ec bag find void ec bag find closure bag type name void closure ec bag bag const char type name int has core ec bag find hook void register core ec bag find hook first hook closure ec hook core ec bag find func t hook void closure void register..."
---

<a name="hooks.core.ec_bag_find"></a> 
## Name

ec_bag_find

## Synopsis

`#include "hooks/core/ec_bag_find.h"`

| `void * **ec_bag_find** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">bag</var>, |   |
|   | <var class="pdparam">type_name</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`ec_bag * <var class="pdparam">bag</var>`;
`const char * <var class="pdparam">type_name</var>`;

| `int **has_core_ec_bag_find_hook** (` | `)`; |   |

| `void **register_core_ec_bag_find_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_ec_bag_find_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_ec_bag_find_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_ec_bag_find_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void * **call_core_ec_bag_find_hook** (` | <var class="pdparam">bag</var>, |   |
|   | <var class="pdparam">type_name</var>`)`; |   |

`ec_bag * <var class="pdparam">bag</var>`;
`const char * <var class="pdparam">type_name</var>`;<a name="idp38177152"></a> 
## Description

Called whenever an ec_bag_find operation is executed. The default is to attempt to find the type, and then to attempt to locate the type within other types, provided that the original type is known. This hook allows others to create a way to search for their types within the context of the bag of holding.