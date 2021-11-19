---
lastUpdated: "03/26/2020"
title: "post_validate_data_spool_each_rcpt_v1"
description: "post validate data spool each rcpt v 1 void post validate data spool each rcpt v 1 closure m ac c void closure ec message m accept construct ac validate context c int has core post validate data spool each rcpt v 1 hook void register core post validate data..."
---

<a name="hooks.core.post_validate_data_spool_each_rcpt_v1"></a> 
## Name

post_validate_data_spool_each_rcpt_v1

## Synopsis

`#include "hooks/core/post_validate_data_spool_each_rcpt_v1.h"`

| `void **post_validate_data_spool_each_rcpt_v1** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">m</var>, |   |
|   | <var class="pdparam">ac</var>, |   |
|   | <var class="pdparam">c</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`ec_message * <var class="pdparam">m</var>`;
`accept_construct * <var class="pdparam">ac</var>`;
`validate_context * <var class="pdparam">c</var>`;

| `int **has_core_post_validate_data_spool_each_rcpt_v1_hook** (` | `)`; |   |

| `void **register_core_post_validate_data_spool_each_rcpt_v1_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_post_validate_data_spool_each_rcpt_v1_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_post_validate_data_spool_each_rcpt_v1_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_post_validate_data_spool_each_rcpt_v1_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **call_core_post_validate_data_spool_each_rcpt_v1_hook** (` | <var class="pdparam">m</var>, |   |
|   | <var class="pdparam">ac</var>, |   |
|   | <var class="pdparam">c</var>`)`; |   |

`ec_message * <var class="pdparam">m</var>`;
`accept_construct * <var class="pdparam">ac</var>`;
`validate_context * <var class="pdparam">c</var>`;<a name="idp31390240"></a> 
## Description

This is a core hook invoked after all module validate_data_spool_each_rcpt callbacks as well as after the validate_data_spool_each_rcpt core hook. The only reason to use this hook point instead of a traditional module callback is that you can guarantee an invocation subsequent to all other modules' `validate_data_spool_each_rcpt` callbacks and also subsequent to the core `validate_data_spool_each_rcpt`. The `mess` and `ctx` parameters are the same used in the `validate_data_spool_each_rcpt` traditional module callback.