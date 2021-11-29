---
lastUpdated: "03/26/2020"
title: "ec_message_rsrc_set"
description: "ec message rsrc set This function associates I O object source with the resource name for message int ec message rsrc set message name io ec message message const char name io object io This reference page was automatically generated from functions found in the header files in the development..."
---

<a name="apis.ec_message_rsrc_set"></a> 
## Name

ec_message_rsrc_set — This function associates I/O object source with the resource name for message

## Synopsis

`#include "ec_message.h"`

| `int **ec_message_rsrc_set** (` | <var class="pdparam">message</var>, |   |
|   | <var class="pdparam">name</var>, |   |
|   | <var class="pdparam">io</var>`)`; |   |

`ec_message * <var class="pdparam">message</var>`;
`const char * <var class="pdparam">name</var>`;
`io_object * <var class="pdparam">io</var>`;<a name="idp56900272"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

This function associates I/O object source with the resource name for message.

If a resource with the given name does not exist then a new resource is created. If a resource exists with the provided name then the resource's I/O object is replaced with source. The source I/O object will have a reference added to it. The previous I/O object will be placed in a backlog and be destroyed either with an explicit ec_message_rsrc_flush or during swap-out (ec_message_swap_out). Behavior is undefined if source is NULL. Any set operation will indicate that the message resource has been updated so it can be explicitly swapped out during message swap out.

**<a name="idp56904256"></a> Parameters**

<dl class="variablelist">

<dt>message</dt>

<dd>

the message to associated the resource with

</dd>

<dt>name</dt>

<dd>

the name of the resource to set or create

</dd>

<dt>state</dt>

<dd>

the state of the associated I/O object

</dd>

<dt>io</dt>

<dd>

the I/O object associated with the resource

</dd>

</dl>

**<a name="idp56912560"></a> Return Values**

Returns 0 on success. Returns -1 on failure and sets errno to indicate the reason.

**Configuration Change. ** This feature is available starting from Momentum 3.1.