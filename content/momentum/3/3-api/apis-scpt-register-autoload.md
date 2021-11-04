---
lastUpdated: "03/26/2020"
title: "scpt_register_autoload"
description: "scpt register autoload register a set of autoloadable items in a namespace int scpt register autoload name space consts const char name space struct scpt autoload item consts This reference page was automatically generated from functions found in the header files in the development branch The function described here may..."
---

<a name="apis.scpt_register_autoload"></a> 
## Name

scpt_register_autoload — register a set of autoloadable items in a namespace

## Synopsis

`#include "modules/scriptlets/ec_scriptlet.h"`

| `int **scpt_register_autoload** (` | <var class="pdparam">name_space</var>, |   |
|   | <var class="pdparam">consts</var>`)`; |   |

`const char * <var class="pdparam">name_space</var>`;
`struct scpt_autoload_item * <var class="pdparam">consts</var>`;<a name="idp59455104"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

register a set of autoloadable items in a namespace.

Namespace rules as per [scpt_register_funcs](/momentum/3/3-api/apis-scpt-register-funcs).

You should register an __index function via [scpt_register_funcs](/momentum/3/3-api/apis-scpt-register-funcs) and then call [scpt_autoload_ns](/momentum/3/3-api/apis-scpt-autoload-ns) to wire up the items.