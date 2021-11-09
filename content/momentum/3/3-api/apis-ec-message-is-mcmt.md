---
lastUpdated: "03/26/2020"
title: "ec_message_is_mcmt"
description: "ec message is mcmt returns 1 if the message is a MCMT container int ec message is mcmt msg ec message msg This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally available versions..."
---

<a name="apis.ec_message_is_mcmt"></a> 
## Name

ec_message_is_mcmt — returns 1 if the message is a MCMT container

## Synopsis

`#include "ec_message.h"`

| `int **ec_message_is_mcmt** (` | <var class="pdparam">msg</var>`)`; |   |

`ec_message * <var class="pdparam">msg</var>`;<a name="idp56026656"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

returns 1 if the message is a MCMT container.

This function should be called before validate_data phase. At or after that phase, this function will always return 0 since any MCMT container will be altered to become the email payload of the injected MCMT.

**<a name="idp56030208"></a> Parameters**

<dl class="variablelist">

<dt>msg</dt>

<dd>

- a message.

</dd>

</dl>

**<a name="idp56033200"></a> Return Values**

1 - if the msg is a MCMT container.

**Configuration Change. ** This feature is available starting from Momentum 3.1.