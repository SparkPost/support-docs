---
lastUpdated: "03/26/2020"
title: "ec_mailq_get_mid"
description: "ec mailq get mid Returns a message by message id ec message ec mailq get mid dr mid deqeue domain record dr message id mid int deqeue This reference page was automatically generated from functions found in the header files in the development branch The function described here may not..."
---

<a name="apis.ec_mailq_get_mid"></a> 
## Name

ec_mailq_get_mid — Returns a message by message_id

## Synopsis

`#include "mail_queue.h"`

| `ec_message * **ec_mailq_get_mid** (` | <var class="pdparam">dr</var>, |   |
|   | <var class="pdparam">mid</var>, |   |
|   | <var class="pdparam">deqeue</var>`)`; |   |

`domain_record * <var class="pdparam">dr</var>`;
`message_id * <var class="pdparam">mid</var>`;
`int <var class="pdparam">deqeue</var>`;<a name="idp54423184"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Returns a message by message_id.