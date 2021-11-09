---
lastUpdated: "03/26/2020"
title: "ec_message_context_exists"
description: "ec message context exists Determines whether a provided key exists in the connection context or message context dictionary int ec message context exists m w k ec message m int w const char k Determine whether a key value pair exists in either the message context or connection context dictionary..."
---

<a name="apis.ec_message_context_exists"></a> 
## Name

ec_message_context_exists — Determines whether a provided key exists in the connection context or message context dictionary

## Synopsis

`#include "ec_message.h"`

| `int **ec_message_context_exists** (` | <var class="pdparam">m</var>, |   |
|   | <var class="pdparam">w</var>, |   |
|   | <var class="pdparam">k</var>`)`; |   |

`ec_message * <var class="pdparam">m</var>`;
`int <var class="pdparam">w</var>`;
`const char * <var class="pdparam">k</var>`;<a name="idp55395904"></a> 
## Description

Determine whether a key/value pair exists in either the message context or connection context dictionary.

**<a name="idp55397200"></a> Parameters**

<dl class="variablelist">

<dt>m</dt>

<dd>

A pointer to an ec_message struct. For documentation of this data structure see [“ec_message”](/momentum/3/3-api/structs-ec-message)

</dd>

<dt>w</dt>

<dd>

An int. Valid values are either ECMESS_CTX_CONN or ECMESS_CTX_MESS.

</dd>

<dt>k</dt>

<dd>

A constant string (char *) which is the dictionary key.

</dd>

</dl>

**<a name="idp55404272"></a> Return Values**

Returns 1 if the provided key exists in the appropriate dictionary and 0 otherwise.

**<a name="idp55405248"></a> Threading**

It is legal to call this function in any thread.

<a name="idp55406352"></a> 
## See Also

[ec_message_context_set](/momentum/3/3-api/apis-ec-message-context-set),[ec_message_context_exists_and_get](/momentum/3/3-api/apis-ec-message-context-exists-and-get), and [ec_message_context_delete](/momentum/3/3-api/apis-ec-message-context-delete)