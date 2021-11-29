---
lastUpdated: "03/26/2020"
title: "ec_mailq_set_next_attempt_prep_quick"
description: "ec mailq set next attempt prep quick pre calculates next attempt times void ec mailq set next attempt prep quick binding slot dr now cdate thresh interval max times ec binding slot binding slot domain record dr struct timeval now time t cdate thresh time t interval int max times..."
---

<a name="apis.ec_mailq_set_next_attempt_prep_quick"></a> 
## Name

ec_mailq_set_next_attempt_prep_quick — pre-calculates next attempt times

## Synopsis

`#include "mail_queue.h"`

| `void **ec_mailq_set_next_attempt_prep_quick** (` | <var class="pdparam">binding_slot</var>, |   |
|   | <var class="pdparam">dr</var>, |   |
|   | <var class="pdparam">now</var>, |   |
|   | <var class="pdparam">cdate_thresh</var>, |   |
|   | <var class="pdparam">interval</var>, |   |
|   | <var class="pdparam">max_times</var>`)`; |   |

`ec_binding_slot <var class="pdparam">binding_slot</var>`;
`domain_record * <var class="pdparam">dr</var>`;
`struct timeval * <var class="pdparam">now</var>`;
`time_t * <var class="pdparam">cdate_thresh</var>`;
`time_t * <var class="pdparam">interval</var>`;
`int * <var class="pdparam">max_times</var>`;<a name="idp54499888"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

pre-calculates next attempt times.