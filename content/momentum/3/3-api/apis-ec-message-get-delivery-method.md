---
lastUpdated: "03/26/2020"
title: "ec_message_get_delivery_method"
description: "ec message get delivery method Retrieve the delivery method of a message const char ec message get delivery method mess ec message mess Configuration Change This function is available as of Momentum version 3 5 5 Retrieve the delivery method of a message msg A pointer to an ec message..."
---

<a name="apis.ec_message_get_delivery_method"></a> 
## Name

ec_message_get_delivery_method — Retrieve the delivery method of a message

## Synopsis

`#include "ec_message.h"`

| `const char * **ec_message_get_delivery_method** (` | <var class="pdparam">mess</var>`)`; |   |

`ec_message * <var class="pdparam">mess</var>`;<a name="idp55733424"></a> 
## Description

**Configuration Change. ** This function is available as of Momentum version 3.5.5.

Retrieve the delivery method of a message.

**<a name="idp55736320"></a> Parameters**

<dl class="variablelist">

<dt>msg</dt>

<dd>

A pointer to an ec_message struct. For documentation of this data structure see [“ec_message”](/momentum/3/3-api/structs-ec-message).

</dd>

</dl>

**<a name="idp55739664"></a> Return Values**

A character pointer to the delivery method, for example "gcm". For more information about delivery methods see [delivery_method](/momentum/3/3-reference/3-reference-conf-ref-delivery-method).

**<a name="idp55741456"></a> Threading**

It is legal to call this function in any thread.

<a name="idp55742560"></a> 
## See Also

[msg_dispose](/momentum/3/3-api/hooks-generic-delivery-msg-dispose) and [Momentum for Mobile Push Notifications](/momentum/3/3-push)