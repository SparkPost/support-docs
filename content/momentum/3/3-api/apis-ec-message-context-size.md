---
lastUpdated: "03/26/2020"
title: "ec_message_context_size"
description: "ec message context size Returns the size of the appropriate per message dictionary int ec message context size m w ec message m int w This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in..."
---

<a name="apis.ec_message_context_size"></a> 
## Name

ec_message_context_size — Returns the size of the appropriate per-message dictionary

## Synopsis

`#include "ec_message.h"`

| `int **ec_message_context_size** (` | <var class="pdparam">m</var>, |   |
|   | <var class="pdparam">w</var>`)`; |   |

`ec_message * <var class="pdparam">m</var>`;
`int <var class="pdparam">w</var>`;<a name="idp55518704"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Returns the size of the appropriate per-message dictionary.

w can be ECMESS_CTX_CONN or ECMESS_CTX_MESS