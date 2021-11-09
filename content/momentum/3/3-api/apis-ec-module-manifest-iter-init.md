---
lastUpdated: "03/26/2020"
title: "ec_module_manifest_iter_init"
description: "ec module manifest iter init initialize a module manifest iterator void ec module manifest iter init iter ec module manifest iter t iter This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally available..."
---

<a name="apis.ec_module_manifest_iter_init"></a> 
## Name

ec_module_manifest_iter_init — initialize a module manifest iterator

## Synopsis

`#include "module.h"`

| `void **ec_module_manifest_iter_init** (` | <var class="pdparam">iter</var>`)`; |   |

`ec_module_manifest_iter_t * <var class="pdparam">iter</var>`;<a name="idp57884448"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

initialize a module manifest iterator

You must call [ec_module_manifest_iter_destroy](/momentum/3/3-api/apis-ec-module-manifest-iter-destroy) when you have finished using the iterator.

**<a name="idp57888384"></a> Parameters**

<dl class="variablelist">

<dt>iter</dt>

<dd>

the iterator to initialize

</dd>

</dl>