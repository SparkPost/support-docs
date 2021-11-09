---
lastUpdated: "03/26/2020"
title: "vctx:set"
description: "vctx set Set the value of a context variable vctx set type key value Set the value of a context variable The type parameter can be either msys core VCTX MESS or msys core VCTX CONN Example 15 73 vctx set example Because this function is in the msys core..."
---

<a name="lua.ref.vctx_set"></a> 
## Name

vctx:set — Set the value of a context variable

<a name="idp27920384"></a> 
## Synopsis

`vctx:set(type, key, value);`

```
type: numeric
key: string
value: mixed
```
<a name="idp27923104"></a> 
## Description

Set the value of a context variable. The `type` parameter can be either `msys.core.VCTX_MESS` or `msys.core.VCTX_CONN`.

<a name="lua.ref.vctx_set.example"></a> 


```
require("msys.core");
require("msys.brightmail");

local mod = {};
function mod:validate_data(msg, accept, vctx)
  local verdict, is_default, rules, tracker = msys.brightmail.scan(msg, accept, vctx)
    print("verdict:", verdict, " is_default:", is_default, " rules:", rules, " tracker:", tracker)
    vctx:set(msys.core.VCTX_MESS, 'bm_verdict', verdict)
  return msys.core.VALIDATE_CONT;
end
msys.registerModule("bm", mod);
```

Because this function is in the `msys.core` namespace, an explicit `require('msys.core')` is not necessary.

<a name="idp27930128"></a> 
## See Also

[vctx:get](/momentum/3/3-reference/3-reference-lua-ref-vctx-get)