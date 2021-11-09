---
lastUpdated: "03/26/2020"
title: "ec_message_set_first_part"
description: "ec message set first part Accessor function for changing the top level mime part for a message void ec message set first part mess part ec message mess ec message part part Set or change the top level mime part for a message You should not set mess top directly..."
---

<a name="apis.ec_message_set_first_part"></a> 
## Name

ec_message_set_first_part — Accessor function for changing the top level mime part for a message

## Synopsis

`#include "ec_message.h"`

| `void **ec_message_set_first_part** (` | <var class="pdparam">mess</var>, |   |
|   | <var class="pdparam">part</var>`)`; |   |

`ec_message * <var class="pdparam">mess</var>`;
`ec_message_part * <var class="pdparam">part</var>`;<a name="idp57079952"></a> 
## Description

Set or change the top level mime part for a message.

### Note

You should not set mess->top directly. Rather, you should use this function so that proper accounting can occur.

### Note

Does not manipulate the reference count of the *part* but will delete the reference to the old part.

**<a name="idp57083648"></a> Parameters**

<dl class="variablelist">

<dt>mess</dt>

<dd>

The message. A pointer to an ec_message struct. For documentation of this data structure see [“ec_message”](/momentum/3/3-api/structs-ec-message)

</dd>

<dt>part</dt>

<dd>

The message part. A pointer to an ec_message_part struct. For documentation of this data structure see [“ec_message_part”](/momentum/3/3-api/structs-ec-message-part)

</dd>

</dl>

**<a name="idp57089520"></a> Return Values**

This function returns void.

**<a name="idp57090432"></a> Threading**

It is legal to call this function in any thread.

<a name="idp57091536"></a> 
## See Also

[ec_message_get_first_part](/momentum/3/3-api/apis-ec-message-get-first-part) and [ec_message_part_touch](/momentum/3/3-api/apis-ec-message-part-touch).