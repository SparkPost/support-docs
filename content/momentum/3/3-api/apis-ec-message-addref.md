---
lastUpdated: "03/26/2020"
title: "ec_message_addref"
description: "ec message addref Create a reference to an existing message ec message ec message addref sm ec message sm Create a reference to an existing message Intended to be used when performing async processing where part of the processing would otherwise free the message while it is still in use..."
---

<a name="apis.ec_message_addref"></a> 
## Name

ec_message_addref — Create a reference to an existing message

## Synopsis

`#include "ec_message.h"`

| `ec_message * **ec_message_addref** (` | <var class="pdparam">sm</var>`)`; |   |

`ec_message * <var class="pdparam">sm</var>`;<a name="idp55180080"></a> 
## Description

Create a reference to an existing message.

Intended to be used when performing async processing where part of the processing would otherwise free the message while it is still in use.

**<a name="idp55181888"></a> Parameters**

<dl class="variablelist">

<dt>sm</dt>

<dd>

A pointer to an ec_message struct (the source message). For documentation of this data structure see [“ec_message”](/momentum/3/3-api/structs-ec-message)

</dd>

</dl>

**<a name="idp55185264"></a> Return Values**

An ec_message pointer (the source message). You are responsible for releasing the reference via [ec_message_free](/momentum/3/3-api/apis-ec-message-free) when you no longer need it.

**<a name="idp55186832"></a> Threading**

It is legal to call this function in any thread.

<a name="idp55187936"></a> 
## See Also

[ec_message_free](/momentum/3/3-api/apis-ec-message-free)