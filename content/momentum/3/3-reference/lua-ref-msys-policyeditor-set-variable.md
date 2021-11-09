---
lastUpdated: "03/26/2020"
title: "msys.policyeditor.set_variable"
description: "msys policyeditor set variable Set the value of a script variable msys policyeditor set variable ctx vars params Configuration Change This function is deprecated You can easily set a Lua variable as follows local x y Set the value of a script variable The ctx parameter is the context containing..."
---

<a name="lua.ref.msys.policyeditor.set_variable"></a> 
## Name

msys.policyeditor.set_variable — Set the value of a script variable

<a name="idp25077552"></a> 
## Synopsis

`msys.policyeditor.set_variable(ctx, vars, params);`

```
ctx: table
vars: table
params: table
```

**Configuration Change. ** This function is deprecated. You can easily set a Lua variable as follows: `local x = y;` .

<a name="idp25082304"></a> 
## Description

Set the value of a script variable

The `ctx` parameter is the context containing objects from the callout, `vars` is a table containing script variables and `params` is a table containing parameters to be passed to this routine.

Defined parameters for params are:

*   `name` the name of the variable to be set

*   `value` the value to set the variable to

<a name="idp25089136"></a> 
## See Also

[msys.policyeditor.get_variable](/momentum/3/3-reference/lua-ref-msys-policyeditor-get-variable), [“Using Variables”](/momentum/3/3-reference/web-3-policy-editor#web3.policy.editor.variables)