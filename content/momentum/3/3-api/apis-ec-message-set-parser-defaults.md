---
lastUpdated: "03/26/2020"
title: "ec_message_set_parser_defaults"
description: "ec message set parser defaults Set message parsing validation defaults void ec message set parser defaults mess ec message mess This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally available versions of Momentum..."
---

<a name="apis.ec_message_set_parser_defaults"></a> 
## Name

ec_message_set_parser_defaults — Set message parsing/validation defaults

## Synopsis

`#include "ec_message.h"`

| `void **ec_message_set_parser_defaults** (` | <var class="pdparam">mess</var>`)`; |   |

`ec_message * <var class="pdparam">mess</var>`;<a name="idp57136704"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Set message parsing/validation defaults.

Sets the default parsing parameters onto the supplied message. The defaults are those configured by the administrator in the `ecelerity.conf`. You should call this function (or ec_message_parser_defaults2) before starting to ec_message_parse a message.

**<a name="idp57140704"></a> Parameters**

<dl class="variablelist">

<dt>mess</dt>

<dd>

the message to apply defaults to.

</dd>

</dl>

**Configuration Change. ** This feature is available starting from Momentum 3.0.18.