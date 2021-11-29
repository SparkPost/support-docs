---
lastUpdated: "03/26/2020"
title: "ec_message_cowref"
description: "ec message cowref Create a copy on write reference to an existing message ec message ec message cowref sm ec message sm This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally available versions..."
---

<a name="apis.ec_message_cowref"></a> 
## Name

ec_message_cowref — Create a copy-on-write reference to an existing message

## Synopsis

`#include "ec_message.h"`

| `ec_message * **ec_message_cowref** (` | <var class="pdparam">sm</var>`)`; |   |

`ec_message * <var class="pdparam">sm</var>`;<a name="idp55542576"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Create a copy-on-write reference to an existing message.

This is used during message reception to efficiently handle multi-recipient mail. The newly created message has a unique queue id that is distinct from the source message.

**<a name="idp55546080"></a> Parameters**

<dl class="variablelist">

<dt>sm</dt>

<dd>

the source message

</dd>

</dl>

**<a name="idp55548800"></a> Return Values**

a new message that holds copy-on-write references to the components of the source message, sm.