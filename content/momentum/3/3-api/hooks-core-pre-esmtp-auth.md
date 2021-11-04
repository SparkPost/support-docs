---
lastUpdated: "03/26/2020"
title: "pre_esmtp_auth"
description: "pre esmtp auth int pre esmtp auth closure ac mc c void closure accept construct ac message construct mc validate context c int has core pre esmtp auth hook void register core pre esmtp auth hook first hook closure ec hook core pre esmtp auth func t hook void closure..."
---

<a name="hooks.core.pre_esmtp_auth"></a> 
## Name

pre_esmtp_auth

## Synopsis

`#include "hooks/core/pre_esmtp_auth.h"`

| `int **pre_esmtp_auth** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">ac</var>, |   |
|   | <var class="pdparam">mc</var>, |   |
|   | <var class="pdparam">c</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`accept_construct * <var class="pdparam">ac</var>`;
`message_construct * <var class="pdparam">mc</var>`;
`validate_context * <var class="pdparam">c</var>`;

| `int **has_core_pre_esmtp_auth_hook** (` | `)`; |   |

| `void **register_core_pre_esmtp_auth_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_pre_esmtp_auth_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_pre_esmtp_auth_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_pre_esmtp_auth_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `int **call_core_pre_esmtp_auth_hook** (` | <var class="pdparam">ac</var>, |   |
|   | <var class="pdparam">mc</var>, |   |
|   | <var class="pdparam">c</var>`)`; |   |

`accept_construct * <var class="pdparam">ac</var>`;
`message_construct * <var class="pdparam">mc</var>`;
`validate_context * <var class="pdparam">c</var>`;<a name="idp32738528"></a> 
## Description

**Configuration Change. ** This hook is available as of version 3.1.

Pre-auth validation. Allows us to preemptively succeed or fail authentication regardless of credentials. Return EC_AUTH_FAIL to fail authentication, EC_AUTH_OK to succeed authentication, -1 to have standard authentication run.