---
lastUpdated: "03/26/2020"
title: "ec_message_unlink_on_free"
description: "ec message unlink on free Marks the message as to be removed from disk when the last reference is dropped void ec message unlink on free mess ec message mess Marks the message as needing to be removed from disk when the last reference is dropped This should only happen..."
---

<a name="apis.ec_message_unlink_on_free"></a> 
## Name

ec_message_unlink_on_free — Marks the message as to be removed from disk when the last reference is dropped

## Synopsis

`#include "ec_message.h"`

| `void **ec_message_unlink_on_free** (` | <var class="pdparam">mess</var>`)`; |   |

`ec_message * <var class="pdparam">mess</var>`;<a name="idp57261312"></a> 
## Description

Marks the message as needing to be removed from disk when the last reference is dropped. This should only happen when the message has been explicitly failed or delivered.

**<a name="idp57262672"></a> Parameters**

<dl class="variablelist">

<dt>msg</dt>

<dd>

A pointer to an ec_message struct. For documentation of this data structure see [“ec_message”](/momentum/3/3-api/structs-ec-message)

</dd>

</dl>

**<a name="idp57266016"></a> Return Values**

This function returns void.

**<a name="idp57266928"></a> Threading**

It is legal to call this function in any thread.

<a name="idp57268032"></a> 
## See Also

[ec_message_free](/momentum/3/3-api/apis-ec-message-free).