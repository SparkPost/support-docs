---
lastUpdated: "03/26/2020"
title: "__mailq_get_next_active"
description: "mailq get next active mailq get next active is an internal function called by the default implementation if the mailq get next active hook ec message mailq get next active dr binding slot connh domain record dr ec binding slot binding slot connection handle connh This reference page was automatically..."
---

<a name="apis.__mailq_get_next_active"></a> 
## Name

__mailq_get_next_active — __mailq_get_next_active is an internal function called by the default implementation if the mailq_get_next_active hook

## Synopsis

`#include "mail_queue.h"`

| `ec_message * **__mailq_get_next_active** (` | <var class="pdparam">dr</var>, |   |
|   | <var class="pdparam">binding_slot</var>, |   |
|   | <var class="pdparam">connh</var>`)`; |   |

`domain_record * <var class="pdparam">dr</var>`;
`ec_binding_slot <var class="pdparam">binding_slot</var>`;
`connection_handle * <var class="pdparam">connh</var>`;<a name="idp54332448"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

__mailq_get_next_active is an internal function called by the default implementation if the mailq_get_next_active hook.

This is provided as an export so you can create a hook that uses this default as a part of a larger, smarter implementation.