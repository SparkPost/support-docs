---
lastUpdated: "03/26/2020"
title: "ec_message_unlock"
description: "ec message unlock Perform a message unlock operation void ec message unlock message ec message message Perform a mutex unlock operation on this message message A pointer to an ec message struct For documentation of this data structure see Section 68 38 ec message This function returns void It is..."
---

<a name="apis.ec_message_unlock"></a> 
## Name

ec_message_unlock — Perform a message unlock operation

## Synopsis

`#include "ec_message.h"`

| `void **ec_message_unlock** (` | <var class="pdparam">message</var>`)`; |   |

`ec_message * <var class="pdparam">message</var>`;<a name="idp57278128"></a> 
## Description

Perform a mutex unlock operation on this message.

**<a name="idp57279360"></a> Parameters**

<dl class="variablelist">

<dt>message</dt>

<dd>

A pointer to an ec_message struct. For documentation of this data structure see [“ec_message”](/momentum/3/3-api/structs-ec-message)

</dd>

</dl>

**<a name="idp57282720"></a> Return Values**

This function returns void.

**<a name="idp57283632"></a> Threading**

It is legal to call this function in any thread.

<a name="idp57284736"></a> 
## See Also

[ec_message_lock](/momentum/3/3-api/apis-ec-message-lock)