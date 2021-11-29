---
lastUpdated: "03/26/2020"
title: "ec_message_set_mailfrom"
description: "ec message set mailfrom sets the entire protocol decorated mailfrom string int ec message set mailfrom mess str len take buffer ec message mess const char str int len int take buffer This reference page was automatically generated from functions found in the header files in the development branch The..."
---

<a name="apis.ec_message_set_mailfrom"></a> 
## Name

ec_message_set_mailfrom — sets the entire protocol decorated mailfrom string

## Synopsis

`#include "ec_message.h"`

| `int **ec_message_set_mailfrom** (` | <var class="pdparam">mess</var>, |   |
|   | <var class="pdparam">str</var>, |   |
|   | <var class="pdparam">len</var>, |   |
|   | <var class="pdparam">take_buffer</var>`)`; |   |

`ec_message * <var class="pdparam">mess</var>`;
`const char * <var class="pdparam">str</var>`;
`int <var class="pdparam">len</var>`;
`int <var class="pdparam">take_buffer</var>`;<a name="idp57104592"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

sets the entire protocol decorated mailfrom string.

If take_buffer is non-zero, then str MUST be a buffer allocated using MEMTYPE_MESSAGE_BODY; ownership of that buffer will be taken by the message and the caller must not access it any more. If take_buffer is non-zero, the supplied buffer MUST also be NUL terminated.