---
lastUpdated: "03/26/2020"
title: "ec_message_context_get"
description: "ec message context get Returns a pointer to the value of the key in the appropriate dictionary otherwise it returns an empty string const char ec message context get m w k ec message m int w const char k Returns a pointer to the value for the key in..."
---

<a name="apis.ec_message_context_get"></a> 
## Name

ec_message_context_get — Returns a pointer to the value of the key in the appropriate dictionary, otherwise it returns an empty string

## Synopsis

`#include "ec_message.h"`

| `const char * **ec_message_context_get** (` | <var class="pdparam">m</var>, |   |
|   | <var class="pdparam">w</var>, |   |
|   | <var class="pdparam">k</var>`)`; |   |

`ec_message * <var class="pdparam">m</var>`;
`int <var class="pdparam">w</var>`;
`const char * <var class="pdparam">k</var>`;<a name="idp55457776"></a> 
## Description

Returns a pointer to the value for the key in the appropriate dictionary type, otherwise it returns an empty string.

**<a name="idp55459072"></a> Parameters**

<dl class="variablelist">

<dt>m</dt>

<dd>

The message. For more information about this struct see [“ec_message”](/momentum/3/3-api/structs-ec-message).

</dd>

<dt>w</dt>

<dd>

The context type, either ECMESS_CTX_CONN or ECMESS_CTX_MESS.

</dd>

<dt>k</dt>

<dd>

The key associated with the context variable value.

</dd>

</dl>

**<a name="idp55466096"></a> Return Value**

The value of the context variable or an empty string.

**<a name="idp55467040"></a> Threading**

It is legal to call this function in any thread.

<a name="idp55468144"></a> 
## See Also

[ec_message_context_set](/momentum/3/3-api/apis-ec-message-context-set)