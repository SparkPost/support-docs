---
lastUpdated: "03/26/2020"
title: "ec_message_context_delete"
description: "ec message context delete Delete a key value pair from the message context or connection context dictionary int ec message context delete m w k ec message m int w const char k Delete a key value pair from either the message context or connection context dictionary message A pointer..."
---

<a name="apis.ec_message_context_delete"></a> 
## Name

ec_message_context_delete — Delete a key/value pair from the message context or connection context dictionary

## Synopsis

`#include "ec_message.h"`

| `int **ec_message_context_delete** (` | <var class="pdparam">m</var>, |   |
|   | <var class="pdparam">w</var>, |   |
|   | <var class="pdparam">k</var>`)`; |   |

`ec_message * <var class="pdparam">m</var>`;
`int <var class="pdparam">w</var>`;
`const char * <var class="pdparam">k</var>`;<a name="idp55327552"></a> 
## Description

Delete a key/value pair from either the message context or connection context dictionary.

**<a name="idp55328832"></a> Parameters**

<dl class="variablelist">

<dt>message</dt>

<dd>

A pointer to an ec_message struct. For documentation of this data structure see [“ec_message”](/momentum/3/3-api/structs-ec-message)

</dd>

<dt>w</dt>

<dd>

An integer. Valid values are either ECMESS_CTX_CONN or ECMESS_CTX_MESS.

</dd>

<dt>k</dt>

<dd>

A constant string (char *) which is the dictionary key.

</dd>

</dl>

**<a name="idp55335936"></a> Return Values**

Returns `1` if the key existed and was deleted. Returns `0` if the key does not exist.

**<a name="idp55337776"></a> Threading**

It is legal to call this function in any thread.

<a name="idp55338880"></a> 
## See Also

[ec_message_context_exists](/momentum/3/3-api/apis-ec-message-context-exists), [ec_message_context_exists_and_get](/momentum/3/3-api/apis-ec-message-context-exists-and-get) and [ec_message_context_set](/momentum/3/3-api/apis-ec-message-context-set)