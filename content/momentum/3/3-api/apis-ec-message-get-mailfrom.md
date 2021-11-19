---
lastUpdated: "03/26/2020"
title: "ec_message_get_mailfrom"
description: "ec message get mailfrom Returns the entire protocol decorated mailfrom string const char ec message get mailfrom mess ec message mess Returns the entire protocol decorated mailfrom string via a read only buffer For example MAIL FROM john doe example com CRLF mess A pointer to an ec message struct..."
---

<a name="apis.ec_message_get_mailfrom"></a> 
## Name

ec_message_get_mailfrom — Returns the entire protocol-decorated mailfrom string

## Synopsis

`#include "ec_message.h"`

| `const char * **ec_message_get_mailfrom** (` | <var class="pdparam">mess</var>`)`; |   |

`ec_message * <var class="pdparam">mess</var>`;<a name="idp55889600"></a> 
## Description

Returns the entire protocol-decorated mailfrom string via a read-only buffer. For example, MAIL FROM: john.doe@example.comCRLF

**<a name="idp55890912"></a> Parameters**

<dl class="variablelist">

<dt>mess</dt>

<dd>

A pointer to an ec_message struct. For documentation of this data structure see [“ec_message”](/momentum/3/3-api/structs-ec-message)

</dd>

</dl>

**<a name="idp55894272"></a> Return Values**

Returns a read-only pointer to the message mailfrom buffer. This may be NULL, indicating that no mailfrom string has been set.

**<a name="idp55895296"></a> Threading**

It is legal to call this function in any thread.

<a name="idp55896400"></a> 
## See Also

[ec_message_set_envelope](/momentum/3/3-api/apis-ec-message-set-envelope) and [ec_message_get_rcptto](/momentum/3/3-api/apis-ec-message-get-rcptto)