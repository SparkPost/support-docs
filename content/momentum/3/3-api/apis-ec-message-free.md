---
lastUpdated: "03/26/2020"
title: "ec_message_free"
description: "ec message free Release resources held by this message void ec message free message ec message message Drops the reference to the message or frees memory if it's the last reference to the ec message message A pointer to an ec message struct For documentation of this data structure see..."
---

<a name="apis.ec_message_free"></a> 
## Name

ec_message_free — Release resources held by this message

## Synopsis

`#include "ec_message.h"`

| `void **ec_message_free** (` | <var class="pdparam">message</var>`)`; |   |

`ec_message * <var class="pdparam">message</var>`;<a name="idp55662368"></a> 
## Description

Drops the reference to the message or frees memory if it's the last reference to the ec_message.

**<a name="idp55663648"></a> Parameters**

<dl class="variablelist">

<dt>message</dt>

<dd>

A pointer to an ec_message struct. For documentation of this data structure see [“ec_message”](/momentum/3/3-api/structs-ec-message)

</dd>

</dl>

**<a name="idp55667008"></a> Return Values**

This function returns void.

**<a name="idp55667920"></a> Threading**

It is legal to call this function in any thread.

<a name="idp55669024"></a> 
## See Also

[ec_message_unlink_on_free](/momentum/3/3-api/apis-ec-message-unlink-on-free) and [ec_free](/momentum/3/3-api/apis-ec-free)