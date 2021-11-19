---
lastUpdated: "03/26/2020"
title: "ec_message_mcmt_fixup"
description: "ec message mcmt fixup int ec message mcmt fixup closure msg void closure ec message msg int has core ec message mcmt fixup hook void register core ec message mcmt fixup hook first hook closure ec hook core ec message mcmt fixup func t hook void closure void register core..."
---

<a name="hooks.core.ec_message_mcmt_fixup"></a> 
## Name

ec_message_mcmt_fixup

## Synopsis

`#include "hooks/core/ec_message_mcmt_fixup.h"`

| `int **ec_message_mcmt_fixup** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">msg</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`ec_message * <var class="pdparam">msg</var>`;

| `int **has_core_ec_message_mcmt_fixup_hook** (` | `)`; |   |

| `void **register_core_ec_message_mcmt_fixup_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_ec_message_mcmt_fixup_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_ec_message_mcmt_fixup_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_ec_message_mcmt_fixup_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `int **call_core_ec_message_mcmt_fixup_hook** (` | <var class="pdparam">msg</var>`)`; |   |

`ec_message * <var class="pdparam">msg</var>`;<a name="idp44640768"></a> 
## Description

**Configuration Change. ** This hook is available as of version 3.1.

This hook is called by listener for MCMT container to allow manipulation of non-email parts contained in.

If you return EC_MSG_MCMT_OK, then the next hook in the chain is called.

If you return EC_MSG_MCMT_INVALID, then subsequent hooks are skipped, and you must set appropriate error code/text using ec_message_set_code() to permanently reject the message. ec_message_mcmt_fixup will return to its caller with the same return code.

If you return EC_MSG_MCMT_ERROR, then subsequent hooks are skipped, and you must set appropriate error code/text using ec_message_set_code() to temporarily reject the message. ec_message_mcmt_fixup will return to its caller with the same return code.