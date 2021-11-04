---
lastUpdated: "03/26/2020"
title: "ec_message_rsrc_remove"
description: "ec message rsrc remove This will set the resource name in message to state EC MESSAGE RSRC DELETED void ec message rsrc remove message name ec message message const char name This reference page was automatically generated from functions found in the header files in the development branch The function..."
---

<a name="apis.ec_message_rsrc_remove"></a> 
## Name

ec_message_rsrc_remove — This will set the resource name in message to state EC_MESSAGE_RSRC_DELETED

## Synopsis

`#include "ec_message.h"`

| `void **ec_message_rsrc_remove** (` | <var class="pdparam">message</var>, |   |
|   | <var class="pdparam">name</var>`)`; |   |

`ec_message * <var class="pdparam">message</var>`;
`const char * <var class="pdparam">name</var>`;<a name="idp56880624"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

This will set the resource name in message to state EC_MESSAGE_RSRC_DELETED.

The previous I/O object will be placed in a backlog and be destroyed in a thread pool.

**<a name="idp56884080"></a> Parameters**

<dl class="variablelist">

<dt>message</dt>

<dd>

the message the resource is associated with

</dd>

<dt>name</dt>

<dd>

the name of the resource

</dd>

</dl>

**Configuration Change. ** This feature is available starting from Momentum 3.1.