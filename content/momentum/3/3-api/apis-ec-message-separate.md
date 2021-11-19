---
lastUpdated: "03/26/2020"
title: "ec_message_separate"
description: "ec message separate Separate references to an existing message void ec message separate msg ec message msg This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally available versions of Momentum and may change..."
---

<a name="apis.ec_message_separate"></a> 
## Name

ec_message_separate — Separate references to an existing message

## Synopsis

`#include "ec_message.h"`

| `void **ec_message_separate** (` | <var class="pdparam">msg</var>`)`; |   |

`ec_message * <var class="pdparam">msg</var>`;<a name="idp56987536"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Separate references to an existing message.

When you need to make modifications to a message and need to ensure that those changes only apply to the current message, instead of all messages that are part of the same inbound batch, you must first separate it from the others so that its resources are no longer shared with the others in the batch.

**Configuration Change. ** This feature is available starting from Momentum 3.0.18.