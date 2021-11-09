---
lastUpdated: "03/26/2020"
title: "scpt_setspecific"
description: "scpt setspecific associate an arbitrary pointer with an execution context void scpt setspecific thr key object scpt thread thr const char key void object This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally..."
---

<a name="apis.scpt_setspecific"></a> 
## Name

scpt_setspecific — associate an arbitrary pointer with an execution context

## Synopsis

`#include "modules/scriptlets/ec_scriptlet.h"`

| `void **scpt_setspecific** (` | <var class="pdparam">thr</var>, |   |
|   | <var class="pdparam">key</var>, |   |
|   | <var class="pdparam">object</var>`)`; |   |

`scpt_thread * <var class="pdparam">thr</var>`;
`const char * <var class="pdparam">key</var>`;
`void * <var class="pdparam">object</var>`;<a name="idp59541872"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

associate an arbitrary pointer with an execution context.