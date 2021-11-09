---
lastUpdated: "03/26/2020"
title: "ec_message_get_message_size"
description: "ec message get message size Returns the message size in bytes size t ec message get message size mess ec message mess Returns the message size mess A pointer to an ec message struct For documentation of this data structure see Section 68 38 ec message The size of the..."
---

<a name="apis.ec_message_get_message_size"></a> 
## Name

ec_message_get_message_size — Returns the message size, in bytes

## Synopsis

`#include "ec_message.h"`

| `size_t **ec_message_get_message_size** (` | <var class="pdparam">mess</var>`)`; |   |

`ec_message * <var class="pdparam">mess</var>`;<a name="idp55919264"></a> 
## Description

Returns the message size.

**<a name="idp55920464"></a> Parameters**

<dl class="variablelist">

<dt>mess</dt>

<dd>

A pointer to an ec_message struct. For documentation of this data structure see [“ec_message”](/momentum/3/3-api/structs-ec-message)

</dd>

</dl>

**<a name="idp55923824"></a> Return Values**

The size of the message, in bytes.

**<a name="idp55924752"></a> Threading**

It is legal to call this function in any thread.