---
lastUpdated: "03/26/2020"
title: "ec_message_context_firstkey"
description: "ec message context firstkey Returns a pointer to the first key in the appropriate per message dictionary NULL if the dictionary is empty const char ec message context firstkey m w ec message m int w This reference page was automatically generated from functions found in the header files in..."
---

<a name="apis.ec_message_context_firstkey"></a> 
## Name

ec_message_context_firstkey — Returns a pointer to the first key in the appropriate per-message dictionary, NULL if the dictionary is empty

## Synopsis

`#include "ec_message.h"`

| `const char * **ec_message_context_firstkey** (` | <var class="pdparam">m</var>, |   |
|   | <var class="pdparam">w</var>`)`; |   |

`ec_message * <var class="pdparam">m</var>`;
`int <var class="pdparam">w</var>`;<a name="idp55444384"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Returns a pointer to the first key in the appropriate per-message dictionary, NULL if the dictionary is empty.

w can be ECMESS_CTX_CONN or ECMESS_CTX_MESS