---
lastUpdated: "03/26/2020"
title: "ec_message_new"
description: "ec message new Create a new message ec message ec message new now struct timeval now Create a new message now A pointer to a timeval struct which may be NULL Configuration Change Prior to version 3 0 NULL was not an allowed value A reference to an ec message..."
---

<a name="apis.ec_message_new"></a> 
## Name

ec_message_new — Create a new message

## Synopsis

`#include "ec_message.h"`

| `ec_message * **ec_message_new** (` | <var class="pdparam">now</var>`)`; |   |

`struct timeval * <var class="pdparam">now</var>`;<a name="idp56073856"></a> 
## Description

Create a new message.

**<a name="idp56075056"></a> Parameters**

<dl class="variablelist">

<dt>now</dt>

<dd>

A pointer to a timeval struct, which may be NULL.

**Configuration Change. ** Prior to version 3.0, NULL was not an allowed value.

</dd>

</dl>

**<a name="idp56079488"></a> Return Values**

A reference to an ec_message struct. For documentation of this data structure see [“ec_message_part”](/momentum/3/3-api/structs-ec-message-part)

**<a name="idp56081024"></a> Threading**

It is legal to call this function in any thread.

<a name="idp56082128"></a> 
## See Also

[ec_message_free](/momentum/3/3-api/apis-ec-message-free)