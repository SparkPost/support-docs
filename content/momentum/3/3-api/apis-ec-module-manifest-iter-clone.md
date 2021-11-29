---
lastUpdated: "03/26/2020"
title: "ec_module_manifest_iter_clone"
description: "ec module manifest iter clone clone a module manifest iterator void ec module manifest iter clone dst src ec module manifest iter t dst ec module manifest iter t src This reference page was automatically generated from functions found in the header files in the development branch The function described..."
---

<a name="apis.ec_module_manifest_iter_clone"></a> 
## Name

ec_module_manifest_iter_clone — clone a module manifest iterator

## Synopsis

`#include "module.h"`

| `void **ec_module_manifest_iter_clone** (` | <var class="pdparam">dst</var>, |   |
|   | <var class="pdparam">src</var>`)`; |   |

`ec_module_manifest_iter_t * <var class="pdparam">dst</var>`;
`ec_module_manifest_iter_t * <var class="pdparam">src</var>`;<a name="idp57852752"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

clone a module manifest iterator

The cloned iterator starts iterating from the start, regardless of what the source iterator's position is; the source iterator's position is not affected. You must call [ec_module_manifest_iter_destroy](/momentum/3/3-api/apis-ec-module-manifest-iter-destroy) when you have finished using the iterator.

**<a name="idp57856848"></a> Parameters**

<dl class="variablelist">

<dt>dst</dt>

<dd>

the iterator to initialize

</dd>

<dt>src</dt>

<dd>

the iterator to copy from

</dd>

</dl>