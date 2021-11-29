---
lastUpdated: "03/26/2020"
title: "__mail_queue_maintain"
description: "mail queue maintain mail queue maintain is the default implementation if the mail queue maintain hook int mail queue maintain closure dr binding slot sl now goalsz reserve void closure domain record dr ec binding slot binding slot Skiplist sl struct timeval now int goalsz int reserve This reference page..."
---

<a name="apis.__mail_queue_maintain"></a> 
## Name

__mail_queue_maintain — __mail_queue_maintain is the default implementation if the __mail_queue_maintain hook

## Synopsis

`#include "mail_queue.h"`

| `int **__mail_queue_maintain** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">dr</var>, |   |
|   | <var class="pdparam">binding_slot</var>, |   |
|   | <var class="pdparam">sl</var>, |   |
|   | <var class="pdparam">now</var>, |   |
|   | <var class="pdparam">goalsz</var>, |   |
|   | <var class="pdparam">reserve</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`domain_record * <var class="pdparam">dr</var>`;
`ec_binding_slot <var class="pdparam">binding_slot</var>`;
`Skiplist * <var class="pdparam">sl</var>`;
`struct timeval * <var class="pdparam">now</var>`;
`int <var class="pdparam">goalsz</var>`;
`int <var class="pdparam">reserve</var>`;<a name="idp54318944"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

__mail_queue_maintain is the default implementation if the __mail_queue_maintain hook.

This is provided as an export so you can create a hook that uses this default as a part of a larger, smarter implementation.