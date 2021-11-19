---
lastUpdated: "03/26/2020"
title: "ec_message_select_binding_by_group"
description: "ec message select binding by group Select a binding from a binding group ec binding slot ec message select binding by group msg group ec message msg const char group This reference page was automatically generated from functions found in the header files in the development branch The function described..."
---

<a name="apis.ec_message_select_binding_by_group"></a> 
## Name

ec_message_select_binding_by_group — Select a binding from a binding group

## Synopsis

`#include "binding.h"`

| `ec_binding_slot **ec_message_select_binding_by_group** (` | <var class="pdparam">msg</var>, |   |
|   | <var class="pdparam">group</var>`)`; |   |

`ec_message * <var class="pdparam">msg</var>`;
`const char * <var class="pdparam">group</var>`;<a name="idp56969040"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Select a binding from a binding group.

This function will randomly select one of the bindings in a group. If that binding is not local to the machine, or otherwise unplumbed, another binding will be chosen.

If no suitable binding is found, the default binding will be chosen.

Note that this function does not actually assign the message to the binding; it merely returns the binding that should be used.

**<a name="idp56973616"></a> Parameters**

<dl class="variablelist">

<dt>msg</dt>

<dd>

the message to bind

</dd>

<dt>group</dt>

<dd>

the name of the binding group

</dd>

</dl>

**<a name="idp56978176"></a> Return Values**

Returns the binding that was selected.