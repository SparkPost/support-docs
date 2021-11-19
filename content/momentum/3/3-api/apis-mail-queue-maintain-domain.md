---
lastUpdated: "03/26/2020"
title: "_mail_queue_maintain_domain"
description: "mail queue maintain domain mail queue maintain domain is an internal function that is called if no mail queue maintain domain hook is registered int mail queue maintain domain dr now goalsz reserve domain record dr struct timeval now int goalsz int reserve This reference page was automatically generated from..."
---

<a name="apis._mail_queue_maintain_domain"></a> 
## Name

_mail_queue_maintain_domain — _mail_queue_maintain_domain is an internal function that is called if no mail_queue_maintain_domain hook is registered

## Synopsis

`#include "mail_queue.h"`

| `int **_mail_queue_maintain_domain** (` | <var class="pdparam">dr</var>, |   |
|   | <var class="pdparam">now</var>, |   |
|   | <var class="pdparam">goalsz</var>, |   |
|   | <var class="pdparam">reserve</var>`)`; |   |

`domain_record * <var class="pdparam">dr</var>`;
`struct timeval * <var class="pdparam">now</var>`;
`int <var class="pdparam">goalsz</var>`;
`int <var class="pdparam">reserve</var>`;<a name="idp54346752"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

_mail_queue_maintain_domain is an internal function that is called if no mail_queue_maintain_domain hook is registered.

This is provided as an export so you can create a hook that uses this default as a part of a larger, smarter implementation.