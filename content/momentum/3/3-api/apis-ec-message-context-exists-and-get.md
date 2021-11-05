---
lastUpdated: "03/26/2020"
title: "ec_message_context_exists_and_get"
description: "ec message context exists and get Determines whether a dictionary key exists and if so supplies a reference to the value int ec message context exists and get m w k v ec message m int w const char k const char v Determine whether a key value pair exists..."
---

<a name="apis.ec_message_context_exists_and_get"></a> 
## Name

ec_message_context_exists_and_get — Determines whether a dictionary key exists and, if so, supplies a reference to the value

## Synopsis

`#include "ec_message.h"`

| `int **ec_message_context_exists_and_get** (` | <var class="pdparam">m</var>, |   |
|   | <var class="pdparam">w</var>, |   |
|   | <var class="pdparam">k</var>, |   |
|   | <var class="pdparam">v</var>`)`; |   |

`ec_message * <var class="pdparam">m</var>`;
`int <var class="pdparam">w</var>`;
`const char * <var class="pdparam">k</var>`;
`const char ** <var class="pdparam">v</var>`;<a name="idp55419792"></a> 
## Description

Determine whether a key/value pair exists in either the message context or connection context dictionary. Also provides a reference to the value in *v.

**<a name="idp55421136"></a> Parameters**

<dl class="variablelist">

<dt>m</dt>

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

<dt>v</dt>

<dd>

A pointer to a constant string (char **). *v stores a reference to the dictionary value.

</dd>

</dl>

**<a name="idp55430128"></a> Return Values**

Returns 1 if the provided key exists in the appropriate dictionary and 0 otherwise.

**<a name="idp55431104"></a> Threading**

It is legal to call this function in any thread.

<a name="idp55432208"></a> 
## See Also

[ec_message_context_set](/momentum/3/3-api/apis-ec-message-context-set),[ec_message_context_exists](/momentum/3/3-api/apis-ec-message-context-exists), and [ec_message_context_delete](/momentum/3/3-api/apis-ec-message-context-delete)