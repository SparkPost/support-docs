---
lastUpdated: "03/26/2020"
title: "ec_message_mcmt_pre_fixup"
description: "ec message mcmt pre fixup int ec message mcmt pre fixup closure msg mcmt reception void closure ec message msg int mcmt reception int has core ec message mcmt pre fixup hook void register core ec message mcmt pre fixup hook first hook closure ec hook core ec message mcmt..."
---

<a name="hooks.core.ec_message_mcmt_pre_fixup"></a> 
## Name

ec_message_mcmt_pre_fixup

## Synopsis

`#include "hooks/core/ec_message_mcmt_pre_fixup.h"`

| `int **ec_message_mcmt_pre_fixup** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">msg</var>, |   |
|   | <var class="pdparam">mcmt_reception</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`ec_message * <var class="pdparam">msg</var>`;
`int <var class="pdparam">mcmt_reception</var>`;

| `int **has_core_ec_message_mcmt_pre_fixup_hook** (` | `)`; |   |

| `void **register_core_ec_message_mcmt_pre_fixup_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_ec_message_mcmt_pre_fixup_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_ec_message_mcmt_pre_fixup_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_ec_message_mcmt_pre_fixup_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `int **call_core_ec_message_mcmt_pre_fixup_hook** (` | <var class="pdparam">msg</var>, |   |
|   | <var class="pdparam">mcmt_reception</var>`)`; |   |

`ec_message * <var class="pdparam">msg</var>`;
`int <var class="pdparam">mcmt_reception</var>`;<a name="idp45811024"></a> 
## Description

**Configuration Change. ** This hook is available as of version 3.1.

This hook is called by listener for MCMT container to allow manipulation of processing option for a MCMT message.

If an implementor returns MCMT_RECEPTION_REJECT, then the no more hook in the chain will be called. The value of option mcmt_reception being passed in the first hook is the configured value. For subsequent hooks, this value is that returned from the previous hook. The allowed values are MCMT_RECEPTION_ALLOW, MCMT_RECEPTION_REJECT and MCMT_RECEPTION_PASSTHRU.

The return value from the last hook will determine the processing option for current message.

If you return MCMT_RECEPTION_REJECT, the message will be rejected and you must set appropriate error code/text using ec_message_set_code().