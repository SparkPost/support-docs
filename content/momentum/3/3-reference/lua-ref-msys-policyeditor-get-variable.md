---
lastUpdated: "03/26/2020"
title: "msys.policyeditor.get_variable"
description: "msys policyeditor get variable Return the value of a script variable msys policyeditor get variable ctx vars params Configuration Change This function is deprecated You can easily access the value of Lua variables within the Lua policy script Return the value of a script variable The ctx parameter is the..."
---

<a name="lua.ref.msys.policyeditor.get_variable"></a> 
## Name

msys.policyeditor.get_variable — Return the value of a script variable

<a name="idp24943264"></a> 
## Synopsis

`msys.policyeditor.get_variable(ctx, vars, params);`

```
ctx: table
vars: table
params: table
```

**Configuration Change. ** This function is deprecated. You can easily access the value of Lua variables within the Lua policy script.

<a name="idp24947600"></a> 
## Description

Return the value of a script variable

The `ctx` parameter is the context containing objects from the callout, `vars` is a table containing script variables and `params` is a table containing parameters to be passed to this routine.

Defined parameters for params are:

*   `name` the name of the variable to be set value: the value to set it to.

*   `value` the value to set it to

<a name="idp24954448"></a> 
## See Also

[msys.policyeditor.set_variable](/momentum/3/3-reference/lua-ref-msys-policyeditor-set-variable) [“Using Variables”](/momentum/3/3-reference/web-3-policy-editor#web3.policy.editor.variables)