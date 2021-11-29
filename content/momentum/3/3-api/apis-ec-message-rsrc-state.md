---
lastUpdated: "03/26/2020"
title: "ec_message_rsrc_state"
description: "ec message rsrc state This will return a state hint of a given resource int ec message rsrc state message name ec message message const char name This reference page was automatically generated from functions found in the header files in the development branch The function described here may not..."
---

<a name="apis.ec_message_rsrc_state"></a> 
## Name

ec_message_rsrc_state — This will return a state hint of a given resource

## Synopsis

`#include "ec_message.h"`

| `int **ec_message_rsrc_state** (` | <var class="pdparam">message</var>, |   |
|   | <var class="pdparam">name</var>`)`; |   |

`ec_message * <var class="pdparam">message</var>`;
`const char * <var class="pdparam">name</var>`;<a name="idp56924368"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

This will return a state hint of a given resource.

Any given resource may be in the following states:

*   EC_MESSAGE_RSRC_NONE: No resource with the provided name exists for message.

*   EC_MESSAGE_RSRC_MEMORY: The I/O object currently associated with the resource identified with name is guaranteed to be wait-free (informally).

*   EC_MESSAGE_RSRC_BLOCKING: The I/O object currently associated with the resource identified with name may block.

*   EC_MESSAGE_RSRC_PENDING: An I/O object for the given resource may be available, actual resolution is pending an ec_message_rsrc_get. A get operation is guaranteed to block.

*   EC_MESSAGE_RSRC_DELETED: The resource is pending deletion.

**<a name="idp56933312"></a> Parameters**

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

**<a name="idp56937904"></a> Return Values**

Returns current state of the resource.

**Configuration Change. ** This feature is available starting from Momentum 3.1.