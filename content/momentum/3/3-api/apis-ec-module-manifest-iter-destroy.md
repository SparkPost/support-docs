---
lastUpdated: "03/26/2020"
title: "ec_module_manifest_iter_destroy"
description: "ec module manifest iter destroy destroy a module manifest iterator void ec module manifest iter destroy iter ec module manifest iter t iter This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally available..."
---

<a name="apis.ec_module_manifest_iter_destroy"></a> 
## Name

ec_module_manifest_iter_destroy — destroy a module manifest iterator

## Synopsis

`#include "module.h"`

| `void **ec_module_manifest_iter_destroy** (` | <var class="pdparam">iter</var>`)`; |   |

`ec_module_manifest_iter_t * <var class="pdparam">iter</var>`;<a name="idp57869840"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

destroy a module manifest iterator

Releases resources associated with a manifest iterator.

**<a name="idp57873200"></a> Parameters**

<dl class="variablelist">

<dt>iter</dt>

<dd>

the iterator to destroy

</dd>

</dl>