---
lastUpdated: "03/26/2020"
title: "smtp_error_classify"
description: "smtp error classify int smtp error classify closure response domain void closure const char response const char domain int has core smtp error classify hook void register core smtp error classify hook first hook closure ec hook core smtp error classify func t hook void closure void register core smtp..."
---

<a name="hooks.core.smtp_error_classify"></a> 
## Name

smtp_error_classify

## Synopsis

`#include "hooks/core/smtp_error_classify.h"`

| `int **smtp_error_classify** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">response</var>, |   |
|   | <var class="pdparam">domain</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`const char * <var class="pdparam">response</var>`;
`const char * <var class="pdparam">domain</var>`;

| `int **has_core_smtp_error_classify_hook** (` | `)`; |   |

| `void **register_core_smtp_error_classify_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_smtp_error_classify_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_smtp_error_classify_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_smtp_error_classify_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `int **call_core_smtp_error_classify_hook** (` | <var class="pdparam">response</var>, |   |
|   | <var class="pdparam">domain</var>`)`; |   |

`const char * <var class="pdparam">response</var>`;
`const char * <var class="pdparam">domain</var>`;<a name="idp37066624"></a> 
## Description

Bounce classify an smtp response code