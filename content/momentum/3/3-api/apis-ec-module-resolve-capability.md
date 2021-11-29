---
lastUpdated: "03/26/2020"
title: "ec_module_resolve_capability"
description: "ec module resolve capability resolve a capability by loading modules int ec module resolve capability capability string out const char capability string string out This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally..."
---

<a name="apis.ec_module_resolve_capability"></a> 
## Name

ec_module_resolve_capability — resolve a capability by loading modules

## Synopsis

`#include "module.h"`

| `int **ec_module_resolve_capability** (` | <var class="pdparam">capability_string</var>, |   |
|   | <var class="pdparam">out</var>`)`; |   |

`const char * <var class="pdparam">capability_string</var>`;
`string * <var class="pdparam">out</var>`;<a name="idp58002528"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

resolve a capability by loading modules

If a module that provides the capability is already loaded, then the function call succeeds.

Otherwise, the first module whose manifest lists the capability string will be loaded along with its dependancies. If a module load fails, loading other modules that provide the capability will be attempted. The function call succeeds if a module providing the capability was loaded.

**<a name="idp58006688"></a> Return Values**

1 on success, 0 on failure.