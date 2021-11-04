---
lastUpdated: "03/26/2020"
title: "ec_message_context_nextkey"
description: "ec message context nextkey Returns a pointer to the next key in the appropriate per message dictionary NULL if there are no more keys const char ec message context nextkey m w lk ec message m int w const char lk This reference page was automatically generated from functions found..."
---

<a name="apis.ec_message_context_nextkey"></a> 
## Name

ec_message_context_nextkey — Returns a pointer to the 'next' key in the appropriate per-message dictionary, NULL if there are no more keys

## Synopsis

`#include "ec_message.h"`

| `const char * **ec_message_context_nextkey** (` | <var class="pdparam">m</var>, |   |
|   | <var class="pdparam">w</var>, |   |
|   | <var class="pdparam">lk</var>`)`; |   |

`ec_message * <var class="pdparam">m</var>`;
`int <var class="pdparam">w</var>`;
`const char * <var class="pdparam">lk</var>`;<a name="idp55479904"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Returns a pointer to the 'next' key in the appropriate per-message dictionary, NULL if there are no more keys.

w can be ECMESS_CTX_CONN or ECMESS_CTX_MESS