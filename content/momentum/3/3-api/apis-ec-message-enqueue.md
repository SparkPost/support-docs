---
lastUpdated: "03/26/2020"
title: "ec_message_enqueue"
description: "ec message enqueue Enqueue a message int ec message enqueue message now ec message message struct timeval now Perform a message enqueue operation either delayed OR active queue message A pointer to an ec message struct For documentation of this data structure see Section 68 38 ec message now A..."
---

<a name="apis.ec_message_enqueue"></a> 
## Name

ec_message_enqueue — Enqueue a message

## Synopsis

`#include "message.h"`

| `int **ec_message_enqueue** (` | <var class="pdparam">message</var>, |   |
|   | <var class="pdparam">now</var>`)`; |   |

`ec_message * <var class="pdparam">message</var>`;
`struct timeval * <var class="pdparam">now</var>`;<a name="idp55558864"></a> 
## Description

Perform a message enqueue operation (either delayed OR active queue).

**<a name="idp55560112"></a> Parameters**

<dl class="variablelist">

<dt>message</dt>

<dd>

A pointer to an ec_message struct. For documentation of this data structure see [“ec_message”](/momentum/3/3-api/structs-ec-message)

</dd>

<dt>now</dt>

<dd>

A pointer to a timeval struct.

</dd>

</dl>

**<a name="idp55565296"></a> Return Values**

This function returns an int. It returns 0 on success (which could mean the message has already been delivered) or -1 on error, but the error generally only happens if the recipient is invalid (which typically should not happen). The message MUST NOT be in any queue in the system otherwise the system will abort and shutdown.

**<a name="idp55566544"></a> Threading**

It is legal to call this function in the `Scheduler` thread.

<a name="idp55568080"></a> 
## See Also

[ec_mailq_insert_active](/momentum/3/3-api/apis-ec-mailq-insert-active)