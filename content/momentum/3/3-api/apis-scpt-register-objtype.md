---
lastUpdated: "03/26/2020"
title: "scpt_register_objtype"
description: "scpt register objtype Register an object type with the scriptlet runtime int scpt register objtype thr objtype scpt thread thr scpt objtype objtype This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally available..."
---

<a name="apis.scpt_register_objtype"></a> 
## Name

scpt_register_objtype — Register an object type with the scriptlet runtime

## Synopsis

`#include "modules/scriptlets/ec_scriptlet.h"`

| `int **scpt_register_objtype** (` | <var class="pdparam">thr</var>, |   |
|   | <var class="pdparam">objtype</var>`)`; |   |

`scpt_thread * <var class="pdparam">thr</var>`;
`scpt_objtype * <var class="pdparam">objtype</var>`;<a name="idp59484160"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Register an object type with the scriptlet runtime.

The object will be registered as an implicit pointer type, and may only be accessed via the methods associated with it.