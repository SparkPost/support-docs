---
lastUpdated: "03/26/2020"
title: "ec_message_set__object"
description: "ec message set object set the object for a message maintaining appropriate accounting void ec message set object mess io ec message mess io object io This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist..."
---

<a name="apis.ec_message_set__object"></a> 
## Name

ec_message_set__object — set the _object for a message, maintaining appropriate accounting

## Synopsis

`#include "ec_message.h"`

| `void **ec_message_set__object** (` | <var class="pdparam">mess</var>, |   |
|   | <var class="pdparam">io</var>`)`; |   |

`ec_message * <var class="pdparam">mess</var>`;
`io_object * <var class="pdparam">io</var>`;<a name="idp57002032"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

set the _object for a message, maintaining appropriate accounting.

Does not manipulate the refcount of the io object in any way.