---
lastUpdated: "03/26/2020"
title: "ec_message_get_first_part"
description: "ec message get first part Returns the top level mime part of the message ec message part ec message get first part mess headers only ec message mess int headers only Returns the top level mime part of the message This may result in a just in time message parse..."
---

<a name="apis.ec_message_get_first_part"></a> 
## Name

ec_message_get_first_part — Returns the top level mime part of the message

## Synopsis

`#include "ec_message.h"`

| `ec_message_part * **ec_message_get_first_part** (` | <var class="pdparam">mess</var>, |   |
|   | <var class="pdparam">headers_only</var>`)`; |   |

`ec_message * <var class="pdparam">mess</var>`;
`int <var class="pdparam">headers_only</var>`;<a name="idp55847168"></a> 
## Description

Returns the top level mime part of the message. This may result in a just-in-time message parse if we haven't already done one. Does **not** manipulate the reference count of the message part.

**<a name="idp55849264"></a> Parameters**

<dl class="variablelist">

<dt>mess</dt>

<dd>

A pointer to an ec_message struct. For documentation of this data structure see [“ec_message”](/momentum/3/3-api/structs-ec-message)

</dd>

<dt>headers_only</dt>

<dd>

An integer value. If headers_only = 1, then there will not be a message reparse. If headers_only = 0, reparsing the message may be required.

</dd>

</dl>

**<a name="idp55854608"></a> Return Values**

A pointer to an ec_message_part struct. For documentation of this data structure see [“ec_message_part”](/momentum/3/3-api/structs-ec-message-part)

**<a name="idp55856144"></a> Threading**

It is legal to call this function in any thread.

<a name="idp55857248"></a> 
## See Also

[ec_message_set_first_part](/momentum/3/3-api/apis-ec-message-set-first-part) and [ec_message_part_touch](/momentum/3/3-api/apis-ec-message-part-touch).