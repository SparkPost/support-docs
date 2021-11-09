---
lastUpdated: "03/26/2020"
title: "vctx:get"
description: "vctx get Get the value of a context variable vctx get type key Get the value of a context variable The type parameter can be either msys core VCTX MESS or msys core VCTX CONN The key parameter is the name of the context variable that you wish to retrieve..."
---

<a name="lua.ref.vctx_get"></a> 
## Name

vctx:get — Get the value of a context variable

<a name="idp19226688"></a> 
## Synopsis

`vctx:get(type, key);`

```
type: numeric
key: string
```
<a name="idp19229664"></a> 
## Description

Get the value of a context variable. The `type` parameter can be either `msys.core.VCTX_MESS` or `msys.core.VCTX_CONN`. The `key` parameter is the name of the context variable that you wish to retrieve.

Because this function is in the `msys.core` namespace, an explicit `require('msys.core')` is not necessary.

<a name="idp19234784"></a> 
## See Also

[vctx:set](/momentum/4/lua/ref-vctx-set)