---
lastUpdated: "03/26/2020"
title: "ec_message_rsrc_flush"
description: "ec message rsrc flush Explicitly flush the resource name to its relevant backing store int ec message rsrc flush message name ec message message const char name This reference page was automatically generated from functions found in the header files in the development branch The function described here may not..."
---

<a name="apis.ec_message_rsrc_flush"></a> 
## Name

ec_message_rsrc_flush — Explicitly flush the resource name to its relevant backing store

## Synopsis

`#include "ec_message.h"`

| `int **ec_message_rsrc_flush** (` | <var class="pdparam">message</var>, |   |
|   | <var class="pdparam">name</var>`)`; |   |

`ec_message * <var class="pdparam">message</var>`;
`const char * <var class="pdparam">name</var>`;<a name="idp56822800"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Explicitly flush the resource name to its relevant backing store.

If name is NULL then all resource streams will be flushed. This is automatically done during message swap out when the message is either transiently failed or during shutdown if resources have been updated with ec_message_resource_set. If the user wishes to explicitly flush updated resources then they must use ec_message_swap_out or this function.

**<a name="idp56826512"></a> Parameters**

<dl class="variablelist">

<dt>message</dt>

<dd>

the message the resource is associated with

</dd>

<dt>name</dt>

<dd>

the name of the resource to flush

</dd>

</dl>

**<a name="idp56831120"></a> Return Values**

Returns 0 on success. On failure this returns -1 and sets errno to indicate the reason.

**Configuration Change. ** This feature is available starting from Momentum 3.1.