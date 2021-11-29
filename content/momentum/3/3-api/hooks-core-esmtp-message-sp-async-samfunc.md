---
lastUpdated: "03/26/2020"
title: "esmtp_message_sp_async_samfunc"
description: "esmtp message sp async samfunc sp async message esmtp message sp async samfunc closure mc void closure message construct mc int has core esmtp message sp async samfunc hook void register core esmtp message sp async samfunc hook first hook closure ec hook core esmtp message sp async samfunc func..."
---

<a name="hooks.core.esmtp_message_sp_async_samfunc"></a> 
## Name

esmtp_message_sp_async_samfunc

## Synopsis

`#include "hooks/core/esmtp_message_sp_async_samfunc.h"`

| `sp_async_message* **esmtp_message_sp_async_samfunc** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">mc</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`message_construct * <var class="pdparam">mc</var>`;

| `int **has_core_esmtp_message_sp_async_samfunc_hook** (` | `)`; |   |

| `void **register_core_esmtp_message_sp_async_samfunc_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_esmtp_message_sp_async_samfunc_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_esmtp_message_sp_async_samfunc_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_esmtp_message_sp_async_samfunc_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `sp_async_message* **call_core_esmtp_message_sp_async_samfunc_hook** (` | <var class="pdparam">mc</var>`)`; |   |

`message_construct * <var class="pdparam">mc</var>`;<a name="idp45840496"></a> 
## Description

This hook allows a message to be bifurcated into a list of sp_async_message's, potentially overiding our internal bifurcation.