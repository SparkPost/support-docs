---
lastUpdated: "03/26/2020"
title: "ec_message_rsrc_get"
description: "ec message rsrc get This will return the I O object associated with the resource name as well as the state io object ec message rsrc get message name state ec message message const char name int state This reference page was automatically generated from functions found in the header..."
---

<a name="apis.ec_message_rsrc_get"></a> 
## Name

ec_message_rsrc_get — This will return the I/O object associated with the resource name as well as the state

## Synopsis

`#include "ec_message.h"`

| `io_object * **ec_message_rsrc_get** (` | <var class="pdparam">message</var>, |   |
|   | <var class="pdparam">name</var>, |   |
|   | <var class="pdparam">state</var>`)`; |   |

`ec_message * <var class="pdparam">message</var>`;
`const char * <var class="pdparam">name</var>`;
`int * <var class="pdparam">state</var>`;<a name="idp56858592"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

This will return the I/O object associated with the resource name as well as the state.

The function will return NULL only if it has set *state to EC_MESSAGE_RSRC_NONE or EC_MESSAGE_RSRC_DELETED. The value of *state may be different than the value returned by a preceding ec_message_rsrc_state (the latter only serving as a hint for I/O object access). If state is NULL then it is ignored.

**<a name="idp56862288"></a> Parameters**

<dl class="variablelist">

<dt>message</dt>

<dd>

the message to associate the resource with

</dd>

<dt>name</dt>

<dd>

the name of the resource

</dd>

<dt>state</dt>

<dd>

the state of the resource, may be NULL

</dd>

</dl>

**<a name="idp56868736"></a> Return Values**

Returns NULL on error and sets errno to indicate the problem if *state is either EC_MESSAGE_RSRC_NONE or EC_MESSAGE_RSRC_DELETED.

**Configuration Change. ** This feature is available starting from Momentum 3.1.