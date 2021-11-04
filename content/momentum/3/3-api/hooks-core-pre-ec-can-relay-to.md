---
lastUpdated: "03/26/2020"
title: "pre_ec_can_relay_to"
description: "pre ec can relay to void pre ec can relay to closure domain rv cont void closure const char domain int rv int cont int has core pre ec can relay to hook void register core pre ec can relay to hook first hook closure ec hook core pre ec..."
---

<a name="hooks.core.pre_ec_can_relay_to"></a> 
## Name

pre_ec_can_relay_to

## Synopsis

`#include "hooks/core/pre_ec_can_relay_to.h"`

| `void **pre_ec_can_relay_to** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">domain</var>, |   |
|   | <var class="pdparam">rv</var>, |   |
|   | <var class="pdparam">cont</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`const char * <var class="pdparam">domain</var>`;
`int * <var class="pdparam">rv</var>`;
`int * <var class="pdparam">cont</var>`;

| `int **has_core_pre_ec_can_relay_to_hook** (` | `)`; |   |

| `void **register_core_pre_ec_can_relay_to_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_pre_ec_can_relay_to_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_pre_ec_can_relay_to_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_pre_ec_can_relay_to_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **call_core_pre_ec_can_relay_to_hook** (` | <var class="pdparam">domain</var>, |   |
|   | <var class="pdparam">rv</var>, |   |
|   | <var class="pdparam">cont</var>`)`; |   |

`const char * <var class="pdparam">domain</var>`;
`int * <var class="pdparam">rv</var>`;
`int * <var class="pdparam">cont</var>`;<a name="idp32714016"></a> 
## Description

This provides an override mechanism to the conventional domain-based relaying in Momentum. The default action is to return *`config_get_domain_relay(NULL, domain)`*         . Functions registered at this point can optionally set the return value *`*rv`* and set *`*cont = VALIDATE_DONE`*                  to avoid calling out to the configuration subsystem.