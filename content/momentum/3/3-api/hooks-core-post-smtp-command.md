---
lastUpdated: "03/26/2020"
title: "post_smtp_command"
description: "post smtp command void post smtp command closure b c d void closure int b message construct c validate context d int has core post smtp command hook void register core post smtp command hook first hook closure ec hook core post smtp command func t hook void closure void..."
---

<a name="hooks.core.post_smtp_command"></a> 
## Name

post_smtp_command

## Synopsis

`#include "hooks/core/post_smtp_command.h"`

| `void **post_smtp_command** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">b</var>, |   |
|   | <var class="pdparam">c</var>, |   |
|   | <var class="pdparam">d</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`int * <var class="pdparam">b</var>`;
`message_construct * <var class="pdparam">c</var>`;
`validate_context * <var class="pdparam">d</var>`;

| `int **has_core_post_smtp_command_hook** (` | `)`; |   |

| `void **register_core_post_smtp_command_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_post_smtp_command_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_post_smtp_command_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_post_smtp_command_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **call_core_post_smtp_command_hook** (` | <var class="pdparam">b</var>, |   |
|   | <var class="pdparam">c</var>, |   |
|   | <var class="pdparam">d</var>`)`; |   |

`int * <var class="pdparam">b</var>`;
`message_construct * <var class="pdparam">c</var>`;
`validate_context * <var class="pdparam">d</var>`;<a name="idp31333184"></a> 
## Description

This hook is invoked immediately after receiving a complete network command on an SMTP session. It will be invoked regardless of the validity of the command.

The data of the command itself is stored in *`c->subcon.gb_donebuffer`* and its length in *`c->subcon.gb_donesize`*. The command itself may not be null terminated, **respect the size** . The validate context is passed as a parameter for convenience as *`&c->ctx == ctx`*        .