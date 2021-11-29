---
lastUpdated: "03/26/2020"
title: "validate_auth"
description: "validate auth int validate auth closure c auth info auth status void closure validate context c struct ec auth info auth info int auth status int has core validate auth hook void register core validate auth hook first hook closure ec hook core validate auth func t hook void closure..."
---

<a name="hooks.core.validate_auth"></a> 
## Name

validate_auth

## Synopsis

`#include "hooks/core/validate_auth.h"`

| `int **validate_auth** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">c</var>, |   |
|   | <var class="pdparam">auth_info</var>, |   |
|   | <var class="pdparam">auth_status</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`validate_context * <var class="pdparam">c</var>`;
`struct ec_auth_info * <var class="pdparam">auth_info</var>`;
`int <var class="pdparam">auth_status</var>`;

| `int **has_core_validate_auth_hook** (` | `)`; |   |

| `void **register_core_validate_auth_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_validate_auth_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_validate_auth_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_validate_auth_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `int **call_core_validate_auth_hook** (` | <var class="pdparam">c</var>, |   |
|   | <var class="pdparam">auth_info</var>, |   |
|   | <var class="pdparam">auth_status</var>`)`; |   |

`validate_context * <var class="pdparam">c</var>`;
`struct ec_auth_info * <var class="pdparam">auth_info</var>`;
`int <var class="pdparam">auth_status</var>`;<a name="idp33782624"></a> 
## Description

**Configuration Change. ** This hook is available as of version 3.1.

This hook allows a module to perform an action in response to an SMTP AUTH event. The validate context will contain an "auth_status" key, containing either "fail," "pass," or "error" depending on whether authentication failed, succeeded, or encountered an internal error, respectively. Additionally, an "auth_user" key may exist containing the user name: the DIGEST-MD5 authentication method may fail an authentication attempt before the username is known. An "auth_name" key is also provided, describing what form of authentication was attempted (e.g. PLAIN, LOGIN, CRAM-MD5, DIGEST-MD5).