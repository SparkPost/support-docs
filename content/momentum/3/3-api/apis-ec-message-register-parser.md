---
lastUpdated: "03/26/2020"
title: "ec_message_register_parser"
description: "ec message register parser Replaces the core message parser int ec message register parser parser struct ec message parser parser This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally available versions of Momentum..."
---

<a name="apis.ec_message_register_parser"></a> 
## Name

ec_message_register_parser — Replaces the core message parser

## Synopsis

`#include "ec_message.h"`

| `int **ec_message_register_parser** (` | <var class="pdparam">parser</var>`)`; |   |

`struct ec_message_parser * <var class="pdparam">parser</var>`;<a name="idp56524224"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Replaces the core message parser.

If you want to replace the core message parser with your own implementation, you would do so by calling this function during the post_init phase.

**<a name="idp56527696"></a> Parameters**

<dl class="variablelist">

<dt>parser</dt>

<dd>

the replacement parser.

</dd>

</dl>

**<a name="idp56530432"></a> Return Values**

Returns 0 on failure, 1 on success.