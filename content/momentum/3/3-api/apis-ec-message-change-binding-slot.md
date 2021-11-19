---
lastUpdated: "03/26/2020"
title: "ec_message_change_binding_slot"
description: "ec message change binding slot Set the binding for a message void ec message change binding slot mess newslot ec message mess ec binding slot newslot Set the binding for a message mess A pointer to an ec message struct For documentation of this data structure see Section 68 38..."
---

<a name="apis.ec_message_change_binding_slot"></a> 
## Name

ec_message_change_binding_slot — Set the binding for a message

## Synopsis

`#include "ec_message.h"`

| `void **ec_message_change_binding_slot** (` | <var class="pdparam">mess</var>, |   |
|   | <var class="pdparam">newslot</var>`)`; |   |

`ec_message * <var class="pdparam">mess</var>`;
`ec_binding_slot <var class="pdparam">newslot</var>`;<a name="idp55291168"></a> 
## Description

Set the binding for a message.

**<a name="idp55292384"></a> Parameters**

<dl class="variablelist">

<dt>mess</dt>

<dd>

A pointer to an ec_message struct. For documentation of this data structure see [“ec_message”](/momentum/3/3-api/structs-ec-message)

</dd>

<dt>newslot</dt>

<dd>

The new binding slot to which the message should be bound

</dd>

</dl>

*   `EC_BINDING_SLOT_REBIND_IF_NOT_BOUND` If newslot has the value EC_BINDING_SLOT_REBIND_IF_NOT_BOUND then the validation infrastructure will be invoked to assign a binding only if the message is currently unbound.

*   `EC_BINDING_SLOT_REBIND_ALWAYS` If newslot has the value EC_BINDING_SLOT_REBIND_ALWAYS then the validation infrastructure will be invoked to assign a binding.

*   Otherwise, the value of newslot will be used as the new binding for the message, and appropriate counters will be updated.

### Note

You **must** use this API to perform binding assignments, otherwise the binding statistics will be skewed.

**<a name="idp55303872"></a> Threading**

It is legal to call this function in any thread.