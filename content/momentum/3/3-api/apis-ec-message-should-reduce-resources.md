---
lastUpdated: "03/26/2020"
title: "ec_message_should_reduce_resources"
description: "ec message should reduce resources Determines whether or not a message should be removed from memory int ec message should reduce resources message ec message message Determines whether a message should be removed from memory based on the value of max resident messages message A pointer to an ec message..."
---

<a name="apis.ec_message_should_reduce_resources"></a> 
## Name

ec_message_should_reduce_resources — Determines whether or not a message should be removed from memory

## Synopsis

`#include "ec_message.h"`

| `int **ec_message_should_reduce_resources** (` | <var class="pdparam">message</var>`)`; |   |

`ec_message * <var class="pdparam">message</var>`;<a name="idp57167888"></a> 
## Description

Determines whether a message should be removed from memory, based on the value of max_resident_messages.

**<a name="idp57169184"></a> Parameters**

<dl class="variablelist">

<dt>message</dt>

<dd>

A pointer to an ec_message struct. For documentation of this data structure see [“ec_message”](/momentum/3/3-api/structs-ec-message)

</dd>

</dl>

**<a name="idp57172544"></a> Return Values**

This function returns a boolean value (0 or 1) indicating whether a message should be forced out of memory depending on whether the max_resident_messages count has been exceeded for the binding (or global value of max_resident_messages).

**<a name="idp57173696"></a> Threading**

It is legal to call this function in any thread.

<a name="idp57174800"></a> 
## See Also

[max_resident_messages](/momentum/3/3-reference/3-reference-conf-ref-max-resident-messages)