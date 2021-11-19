---
lastUpdated: "03/26/2020"
title: "ec_message_get_code"
description: "ec message get code Fetches the code set for the message const char ec message get code mess ec message mess Returns the SMTP status code set for the message This status code is updated after a delivery attempt with the SMTP status returned by the remote MX server mess..."
---

<a name="apis.ec_message_get_code"></a> 
## Name

ec_message_get_code — Fetches the code set for the message

## Synopsis

`#include "ec_message.h"`

| `const char * **ec_message_get_code** (` | <var class="pdparam">mess</var>`)`; |   |

`ec_message * <var class="pdparam">mess</var>`;<a name="idp55716336"></a> 
## Description

Returns the SMTP status code set for the message. This status code is updated after a delivery attempt with the SMTP status returned by the remote MX server.

**<a name="idp55717680"></a> Parameters**

<dl class="variablelist">

<dt>mess</dt>

<dd>

A pointer to an ec_message struct. For documentation of this data structure see [“ec_message”](/momentum/3/3-api/structs-ec-message)

</dd>

</dl>

**<a name="idp55721040"></a> Return Values**

Returns a read-only pointer to the SMTP status code of the message. This may be NULL, indicating that no code has been set.

**<a name="idp55722064"></a> Threading**

It is legal to call this function in any thread.

<a name="idp55723168"></a> 
## See Also

[ec_message_set_code](/momentum/3/3-api/apis-ec-message-set-code)