---
lastUpdated: "03/26/2020"
title: "scpt_ffi_closure_alloc"
description: "scpt ffi closure alloc allocates an ffi closure via the cache void scpt ffi closure alloc thr cif glue func ref ctx scpt thread thr void cif void glue func int ref void ctx This reference page was automatically generated from functions found in the header files in the development..."
---

<a name="apis.scpt_ffi_closure_alloc"></a> 
## Name

scpt_ffi_closure_alloc — allocates an ffi_closure via the cache

## Synopsis

`#include "modules/scriptlets/ec_scriptlet.h"`

| `void * **scpt_ffi_closure_alloc** (` | <var class="pdparam">thr</var>, |   |
|   | <var class="pdparam">cif</var>, |   |
|   | <var class="pdparam">glue_func</var>, |   |
|   | <var class="pdparam">ref</var>, |   |
|   | <var class="pdparam">ctx</var>`)`; |   |

`scpt_thread * <var class="pdparam">thr</var>`;
`void * <var class="pdparam">cif</var>`;
`void(*)() <var class="pdparam">glue_func</var>`;
`int <var class="pdparam">ref</var>`;
`void * <var class="pdparam">ctx</var>`;<a name="idp59095520"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

allocates an ffi_closure via the cache