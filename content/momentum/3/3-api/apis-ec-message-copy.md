---
lastUpdated: "03/26/2020"
title: "ec_message_copy"
description: "ec message copy Create a copy of an existing message ec message ec message copy orig ec message orig This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally available versions of Momentum and..."
---

<a name="apis.ec_message_copy"></a> 
## Name

ec_message_copy — Create a copy of an existing message

## Synopsis

`#include "ec_message.h"`

| `ec_message * **ec_message_copy** (` | <var class="pdparam">orig</var>`)`; |   |

`ec_message * <var class="pdparam">orig</var>`;<a name="idp55530704"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Create a copy of an existing message.

The copy is a deep copy for use when duplicating a message when it needs to be processed independently or concurrently from the source message.