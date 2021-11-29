---
lastUpdated: "03/26/2020"
title: "ec_message_set_code"
description: "ec message set code Set the message delivery code meta information int ec message set code message code codestr ec message message int code const char codestr Set the message delivery code meta information Before setting the code you must lock the message using ec message lock Once the code..."
---

<a name="apis.ec_message_set_code"></a> 
## Name

ec_message_set_code — Set the message delivery code meta information

## Synopsis

`#include "ec_message.h"`

| `int **ec_message_set_code** (` | <var class="pdparam">message</var>, |   |
|   | <var class="pdparam">code</var>, |   |
|   | <var class="pdparam">codestr</var>`)`; |   |

`ec_message * <var class="pdparam">message</var>`;
`int <var class="pdparam">code</var>`;
`const char * <var class="pdparam">codestr</var>`;<a name="idp57015312"></a> 
## Description

Set the message delivery code meta information.

### Note

Before setting the code you must lock the message using [ec_message_lock](/momentum/3/3-api/apis-ec-message-lock). Once the code is set unlock it using [ec_message_unlock](/momentum/3/3-api/apis-ec-message-unlock).

<a name="idp57018656"></a> 


```
ec_message_set_code(mess, 0, "554 5.1.2 No Valid Domain")
ec_message_set_code(message, 551, "5.1.3 [internal] rcptto is invalid")
```

**<a name="idp57020384"></a> Parameters**

<dl class="variablelist">

<dt>message</dt>

<dd>

A pointer to an ec_message struct. For documentation of this data structure see [“ec_message”](/momentum/3/3-api/structs-ec-message)

</dd>

<dt>code</dt>

<dd>

An int representing the SMTP delivery status code

</dd>

<dt>codestr</dt>

<dd>

A string with the delivery code meta information

</dd>

</dl>

**<a name="idp57027488"></a> Return Values**

This function returns a -1 if the code is an invalid SMTP code (outside the range [1, 999]) **or** the prior code value, if it existed.

**<a name="idp57029232"></a> Threading**

It is legal to call this function in any thread.

<a name="idp57030336"></a> 
## See Also

[ec_message_get_code](/momentum/3/3-api/apis-ec-message-get-code), [ec_message_lock](/momentum/3/3-api/apis-ec-message-lock), and [ec_message_unlock](/momentum/3/3-api/apis-ec-message-unlock)