---
lastUpdated: "03/26/2020"
title: "bounce_error_classify"
description: "bounce error classify int bounce error classify closure body len pos void closure const char body int len int pos int has core bounce error classify hook void register core bounce error classify hook first hook closure ec hook core bounce error classify func t hook void closure void register..."
---

<a name="hooks.core.bounce_error_classify"></a> 
## Name

bounce_error_classify

## Synopsis

`#include "hooks/core/bounce_error_classify.h"`

| `int **bounce_error_classify** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">body</var>, |   |
|   | <var class="pdparam">len</var>, |   |
|   | <var class="pdparam">pos</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`const char * <var class="pdparam">body</var>`;
`int <var class="pdparam">len</var>`;
`int * <var class="pdparam">pos</var>`;

| `int **has_core_bounce_error_classify_hook** (` | `)`; |   |

| `void **register_core_bounce_error_classify_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_bounce_error_classify_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_bounce_error_classify_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_bounce_error_classify_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `int **call_core_bounce_error_classify_hook** (` | <var class="pdparam">body</var>, |   |
|   | <var class="pdparam">len</var>, |   |
|   | <var class="pdparam">pos</var>`)`; |   |

`const char * <var class="pdparam">body</var>`;
`int <var class="pdparam">len</var>`;
`int * <var class="pdparam">pos</var>`;<a name="idp46308832"></a> 
## Description

Bounce classify an out of band bounce

The system calls this hook when bounce_classify2() or bounce_classify() are called. You should not invoke this hook directly; use bounce_classify2() instead.

The system guarantees that body will not include the trailing "." from the message terminator. In addition, the message payload will have transfer decoding removed.

The hook implementation returns a bounce classification code from the range defined in misc/smtp_error_codes.h, which may include custom classifications registered via smtp_error_register_class().

If the hook classifies the message, it will update the integer to which "pos" points to reflect the start of the substring of body that was responsible for the classification.