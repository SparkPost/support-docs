---
lastUpdated: "03/26/2020"
title: "ec_message_parser_defaults2"
description: "ec message parser defaults 2 Obtain message parsing validation defaults void ec message parser defaults 2 pathway params const char pathway struct ec message parser parameters params This reference page was automatically generated from functions found in the header files in the development branch The function described here may not..."
---

<a name="apis.ec_message_parser_defaults2"></a> 
## Name

ec_message_parser_defaults2 — Obtain message parsing/validation defaults

## Synopsis

`#include "ec_message.h"`

| `void **ec_message_parser_defaults2** (` | <var class="pdparam">pathway</var>, |   |
|   | <var class="pdparam">params</var>`)`; |   |

`const char * <var class="pdparam">pathway</var>`;
`struct ec_message_parser_parameters * <var class="pdparam">params</var>`;<a name="idp56108288"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Obtain message parsing/validation defaults.

Sets the default parsing parameters into the supplied struct. The defaults are those configured by the administrator in the `ecelerity.conf`.

**<a name="idp56112176"></a> Parameters**

<dl class="variablelist">

<dt>pathway</dt>

<dd>

the pathway the message came in on.

</dd>

<dt>params</dt>

<dd>

the parser parameter container.

</dd>

</dl>

**Configuration Change. ** This feature is available starting from Momentum 3.0.18.