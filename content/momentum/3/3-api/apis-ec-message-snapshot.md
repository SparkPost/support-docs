---
lastUpdated: "03/26/2020"
title: "ec_message_snapshot"
description: "ec message snapshot Create a snapshot of an existing message ec message ec message snapshot orig ec message orig This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally available versions of Momentum and..."
---

<a name="apis.ec_message_snapshot"></a> 
## Name

ec_message_snapshot — Create a snapshot of an existing message

## Synopsis

`#include "ec_message.h"`

| `ec_message * **ec_message_snapshot** (` | <var class="pdparam">orig</var>`)`; |   |

`ec_message * <var class="pdparam">orig</var>`;<a name="idp57185216"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Create a snapshot of an existing message.

The snapshot is a medium-shallow copy of the original message, intended to be used for async processing in cases where you need a consistent view of the message at a given point in time.

This consistent view extends only as far as the meta information contained in the ec_message structure, and the current state of the mime tree.