---
lastUpdated: "03/26/2020"
title: "ec_message_refetch_meta"
description: "ec message refetch meta refetch extended meta information from the spool int ec message refetch meta msg ec message msg This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally available versions of Momentum..."
---

<a name="apis.ec_message_refetch_meta"></a> 
## Name

ec_message_refetch_meta — refetch extended meta information from the spool

## Synopsis

`#include "ec_message.h"`

| `int **ec_message_refetch_meta** (` | <var class="pdparam">msg</var>`)`; |   |

`ec_message * <var class="pdparam">msg</var>`;<a name="idp56511312"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

refetch extended meta information from the spool

Called internally when extended meta information that was previously discarded (either due to low memory or because we had a transient failure and no longer need it).

**<a name="idp56514768"></a> Return Values**

returns IO_DONE on success, or IO_FAIL on failure.