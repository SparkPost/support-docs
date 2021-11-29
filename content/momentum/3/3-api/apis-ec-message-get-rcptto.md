---
lastUpdated: "03/26/2020"
title: "ec_message_get_rcptto"
description: "ec message get rcptto returns the entire protocol decorated rcptto string const char ec message get rcptto mess ec message mess Returns the entire protocol decorated rcptto string via a read only buffer For example RCPT TO john doe example com CRLF mess A pointer to an ec message struct..."
---

<a name="apis.ec_message_get_rcptto"></a> 
## Name

ec_message_get_rcptto — returns the entire protocol-decorated rcptto string

## Synopsis

`#include "ec_message.h"`

| `const char * **ec_message_get_rcptto** (` | <var class="pdparam">mess</var>`)`; |   |

`ec_message * <var class="pdparam">mess</var>`;<a name="idp55950464"></a> 
## Description

Returns the entire protocol-decorated rcptto string via a read-only buffer. For example, RCPT TO: john.doe@example.comCRLF

**<a name="idp55951776"></a> Parameters**

<dl class="variablelist">

<dt>mess</dt>

<dd>

A pointer to an ec_message struct. For documentation of this data structure see [“ec_message”](/momentum/3/3-api/structs-ec-message)

</dd>

</dl>

**<a name="idp55955136"></a> Return Values**

Returns a read-only pointer to the message rcptto buffer. This may be NULL, indicating that no rcptto string has been set.

**<a name="idp55956160"></a> Threading**

It is legal to call this function in any thread.

<a name="idp55957264"></a> 
## See Also

[ec_message_set_envelope](/momentum/3/3-api/apis-ec-message-set-envelope) and [ec_message_get_mailfrom](/momentum/3/3-api/apis-ec-message-get-mailfrom)