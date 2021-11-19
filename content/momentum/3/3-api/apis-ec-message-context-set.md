---
lastUpdated: "03/26/2020"
title: "ec_message_context_set"
description: "ec message context set Store a key value pair in the appropriate context dictionary int ec message context set m w k v ec message m int w const char k const char v Store a key value pair in the appropriate context dictionary either ECMESS CTX CONN or ECMESS..."
---

<a name="apis.ec_message_context_set"></a> 
## Name

ec_message_context_set — Store a key/value pair in the appropriate context dictionary

## Synopsis

`#include "ec_message.h"`

| `int **ec_message_context_set** (` | <var class="pdparam">m</var>, |   |
|   | <var class="pdparam">w</var>, |   |
|   | <var class="pdparam">k</var>, |   |
|   | <var class="pdparam">v</var>`)`; |   |

`ec_message * <var class="pdparam">m</var>`;
`int <var class="pdparam">w</var>`;
`const char * <var class="pdparam">k</var>`;
`const char * <var class="pdparam">v</var>`;<a name="idp55494096"></a> 
## Description

Store a key/value pair in the appropriate context dictionary, either ECMESS_CTX_CONN or ECMESS_CTX_MESS

**<a name="idp55495392"></a> Parameters**

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

<dt>v</dt>

<dd>

A constant string (char *) which is the dictionary value.

</dd>

</dl>

**<a name="idp55504352"></a> Return Values**

Returns 1 if the key/value pair was successfully added to the appropriate dictionary. Returns 0 if you pass in a NULL value of k or v. Also returns 0 if the key/value pair already existed in the appropriate dictionary.

**<a name="idp55505488"></a> Threading**

It is legal to call this function in any thread.

<a name="idp55506592"></a> 
## See Also

[ec_message_context_exists](/momentum/3/3-api/apis-ec-message-context-exists),[ec_message_context_exists_and_get](/momentum/3/3-api/apis-ec-message-context-exists-and-get), and [ec_message_context_delete](/momentum/3/3-api/apis-ec-message-context-delete)