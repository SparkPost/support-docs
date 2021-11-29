---
lastUpdated: "03/26/2020"
title: "config_get_domain_relay"
description: "config get domain relay int config get domain relay closure cs domain retval void closure generic module infrastructure cs const char domain int retval int has core config get domain relay hook void register core config get domain relay hook first hook closure ec hook core config get domain relay..."
---

<a name="hooks.core.config_get_domain_relay"></a> 
## Name

config_get_domain_relay

## Synopsis

`#include "hooks/core/config_get_domain_relay.h"`

| `int **config_get_domain_relay** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">cs</var>, |   |
|   | <var class="pdparam">domain</var>, |   |
|   | <var class="pdparam">retval</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`generic_module_infrastructure * <var class="pdparam">cs</var>`;
`const char * <var class="pdparam">domain</var>`;
`int * <var class="pdparam">retval</var>`;

| `int **has_core_config_get_domain_relay_hook** (` | `)`; |   |

| `void **register_core_config_get_domain_relay_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_config_get_domain_relay_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_config_get_domain_relay_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_config_get_domain_relay_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `int **call_core_config_get_domain_relay_hook** (` | <var class="pdparam">cs</var>, |   |
|   | <var class="pdparam">domain</var>, |   |
|   | <var class="pdparam">retval</var>`)`; |   |

`generic_module_infrastructure * <var class="pdparam">cs</var>`;
`const char * <var class="pdparam">domain</var>`;
`int * <var class="pdparam">retval</var>`;<a name="idp28851392"></a> 
## Description

This hook is called to determine whether a given domain should be relayed for. The default action is to check the relay_hosts list, but it can be overridden by registering a custom function at this hook. If the hook returns non-zero, then the value of retval will be set to the relay status for the domain.