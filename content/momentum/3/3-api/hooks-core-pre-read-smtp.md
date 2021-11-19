---
lastUpdated: "03/26/2020"
title: "pre_read_smtp"
description: "pre read smtp int pre read smtp closure dc expected newstate now mask void closure delivery construct dc int expected int newstate struct timeval now int mask int has core pre read smtp hook void register core pre read smtp hook first hook closure ec hook core pre read smtp..."
---

<a name="hooks.core.pre_read_smtp"></a> 
## Name

pre_read_smtp

## Synopsis

`#include "hooks/core/pre_read_smtp.h"`

| `int **pre_read_smtp** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">dc</var>, |   |
|   | <var class="pdparam">expected</var>, |   |
|   | <var class="pdparam">newstate</var>, |   |
|   | <var class="pdparam">now</var>, |   |
|   | <var class="pdparam">mask</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`delivery_construct * <var class="pdparam">dc</var>`;
`int <var class="pdparam">expected</var>`;
`int <var class="pdparam">newstate</var>`;
`struct timeval * <var class="pdparam">now</var>`;
`int * <var class="pdparam">mask</var>`;

| `int **has_core_pre_read_smtp_hook** (` | `)`; |   |

| `void **register_core_pre_read_smtp_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_pre_read_smtp_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_pre_read_smtp_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_pre_read_smtp_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `int **call_core_pre_read_smtp_hook** (` | <var class="pdparam">dc</var>, |   |
|   | <var class="pdparam">expected</var>, |   |
|   | <var class="pdparam">newstate</var>, |   |
|   | <var class="pdparam">now</var>, |   |
|   | <var class="pdparam">mask</var>`)`; |   |

`delivery_construct * <var class="pdparam">dc</var>`;
`int <var class="pdparam">expected</var>`;
`int <var class="pdparam">newstate</var>`;
`struct timeval * <var class="pdparam">now</var>`;
`int * <var class="pdparam">mask</var>`;<a name="idp29711872"></a> 
## Description

The `pre_read_smtp` hook is invoked immediately before data is read from the the remote server during **outbound** connections. The subsequent read operation is not guaranteed to return a complete SMTP response.

*`dc`* holds all details regarding the current SMTP connection. *`expected`* represents the expected SMTP response code (e.g. 250). *`newstate`* hold the new SMTP state machine state should the read complete and match the *`expected`* response code. *`now`* is the current scheduler time. *`*mask`* holds the event mask that should be used to trigger the next read. Under most circumstances, values past by reference should not be altered. Those arguments that are passed by reference are done so to mirror the parent function's API.