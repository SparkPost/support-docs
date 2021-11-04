---
lastUpdated: "03/26/2020"
title: "ec_message_lock"
description: "ec message lock Perform a mutex lock operation void ec message lock message ec message message Perform a mutex lock operation on this message message A pointer to an ec message struct For documentation of this data structure see Section 68 38 ec message This function returns void It is..."
---

<a name="apis.ec_message_lock"></a> 
## Name

ec_message_lock — Perform a mutex lock operation

## Synopsis

`#include "ec_message.h"`

| `void **ec_message_lock** (` | <var class="pdparam">message</var>`)`; |   |

`ec_message * <var class="pdparam">message</var>`;<a name="idp56044720"></a> 
## Description

Perform a mutex lock operation on this message.

**<a name="idp56045952"></a> Parameters**

<dl class="variablelist">

<dt>message</dt>

<dd>

A pointer to an ec_message struct. For documentation of this data structure see [“ec_message”](/momentum/3/3-api/structs-ec-message)

</dd>

</dl>

**<a name="idp56049312"></a> Return Values**

This function returns void.

**<a name="idp56050224"></a> Threading**

It is legal to call this function in any thread.

<a name="idp56051328"></a> 
## See Also

[ec_message_unlock](/momentum/3/3-api/apis-ec-message-unlock)