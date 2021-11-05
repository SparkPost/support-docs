---
lastUpdated: "03/26/2020"
title: "ec_message_parser_defaults"
description: "ec message parser defaults Obtain message parsing validation defaults void ec message parser defaults params struct ec message parser parameters params This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally available versions of..."
---

<a name="apis.ec_message_parser_defaults"></a> 
## Name

ec_message_parser_defaults — Obtain message parsing/validation defaults

## Synopsis

`#include "ec_message.h"`

| `void **ec_message_parser_defaults** (` | <var class="pdparam">params</var>`)`; |   |

`struct ec_message_parser_parameters * <var class="pdparam">params</var>`;<a name="idp56092400"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Obtain message parsing/validation defaults.

Sets the default parsing parameters into the supplied struct. The defaults are those configured by the administrator in the `ecelerity.conf`.

**<a name="idp56096288"></a> Parameters**

<dl class="variablelist">

<dt>params</dt>

<dd>

the parser parameter container.

</dd>

</dl>