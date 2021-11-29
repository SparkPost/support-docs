---
lastUpdated: "03/26/2020"
title: "message_body_in_core"
description: "message body in core int message body in core closure mess pull result void closure email message mess int pull int result int has core message body in core hook void register core message body in core hook first hook closure ec hook core message body in core func t..."
---

<a name="hooks.core.message_body_in_core"></a> 
## Name

message_body_in_core

## Synopsis

`#include "hooks/core/message_body_in_core.h"`

| `int **message_body_in_core** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">mess</var>, |   |
|   | <var class="pdparam">pull</var>, |   |
|   | <var class="pdparam">result</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`email_message * <var class="pdparam">mess</var>`;
`int <var class="pdparam">pull</var>`;
`int * <var class="pdparam">result</var>`;

| `int **has_core_message_body_in_core_hook** (` | `)`; |   |

| `void **register_core_message_body_in_core_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_message_body_in_core_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_message_body_in_core_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_message_body_in_core_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `int **call_core_message_body_in_core_hook** (` | <var class="pdparam">mess</var>, |   |
|   | <var class="pdparam">pull</var>, |   |
|   | <var class="pdparam">result</var>`)`; |   |

`email_message * <var class="pdparam">mess</var>`;
`int <var class="pdparam">pull</var>`;
`int * <var class="pdparam">result</var>`;<a name="idp36654176"></a> 
## Description

The message_body_in_core API call provides a mechanism through which Momentum can ascertain if the memory used by a message's body is "in core." In other words, if accessing the any of the pages of memory would induce a page fault and require the backing page to be fetched from swap. Page faulting is expensive and will block other actions in the system, so Momentum will choose to asynchronously pagefault (in another thread) if it determines the body it is about to send to the remote client would induce a page fault.

This hook allows you to override or supplement the core's implementation (based of `mincore`) with your own.

The message in question is passed in as *`mess`*. The *`pull`* parameter instructs you to perform the pagefault (typically by simply reading a byte of data from every page. The integer pointed to by *`result`* should be assigned 0 if the message is in core and 1 if it is not. If you provide a result of 0, the function will be invoked again from a different thread with `pull = 1`.

Return values of `IO_CONT` and `IO_DONE` are acceptable. `IO_CONT` informs Momentum that the registered function did not finalize the in-coring process and that subsequent hooks should be called. `IO_DONE` indicates that `*result` is valid and that no subsequent registered hooks should be invoked.