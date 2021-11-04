---
lastUpdated: "03/26/2020"
title: "ec_module_manifest_iter_next"
description: "ec module manifest iter next advances a module manifest iterator int ec module manifest iter next iter modulename ec module manifest iter t iter const char modulename This reference page was automatically generated from functions found in the header files in the development branch The function described here may not..."
---

<a name="apis.ec_module_manifest_iter_next"></a> 
## Name

ec_module_manifest_iter_next — advances a module manifest iterator

## Synopsis

`#include "module.h"`

| `int **ec_module_manifest_iter_next** (` | <var class="pdparam">iter</var>, |   |
|   | <var class="pdparam">modulename</var>`)`; |   |

`ec_module_manifest_iter_t * <var class="pdparam">iter</var>`;
`const char ** <var class="pdparam">modulename</var>`;<a name="idp57900368"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

advances a module manifest iterator

Sets modulename to the name of the next module that has manifest information and then advances the iterator.

**<a name="idp57903792"></a> Parameters**

<dl class="variablelist">

<dt>iter</dt>

<dd>

the manifest iterator

</dd>

<dt>modulename</dt>

<dd>

the returned module name

</dd>

</dl>

**<a name="idp57908368"></a> Return Values**

1 if modulename was updated, 0 if there are no more module manifests to be considered.