---
lastUpdated: "03/26/2020"
title: "ec_message_context_clean"
description: "ec message context clean Cleans the appropriate per message dictionary void ec message context clean m w ec message m int w This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally available versions..."
---

<a name="apis.ec_message_context_clean"></a> 
## Name

ec_message_context_clean — Cleans the appropriate per-message dictionary

## Synopsis

`#include "ec_message.h"`

| `void **ec_message_context_clean** (` | <var class="pdparam">m</var>, |   |
|   | <var class="pdparam">w</var>`)`; |   |

`ec_message * <var class="pdparam">m</var>`;
`int <var class="pdparam">w</var>`;<a name="idp55314064"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Cleans the appropriate per-message dictionary.

w can be ECMESS_CTX_CONN or ECMESS_CTX_MESS