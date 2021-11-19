---
lastUpdated: "03/26/2020"
title: "msys.policyeditor.set_binding_group"
description: "msys policyeditor set binding group Assign the message to a named binding group msys policyeditor set binding group ctx vars params Configuration Change This function is deprecated Use msg binding group bndgp to set a binding group For more information see msg binding group Assigns the message to a named..."
---

<a name="lua.ref.msys.policyeditor.set_binding_group"></a> 
## Name

msys.policyeditor.set_binding_group — Assign the message to a named binding group

<a name="idp25059056"></a> 
## Synopsis

`msys.policyeditor.set_binding_group(ctx, vars, params);`

```
ctx: table
vars: table
params: table
```

**Configuration Change. ** This function is deprecated. Use `msg:binding_group(bndgp)` to set a binding group. For more information see [msg:binding_group](/momentum/3/3-reference/3-reference-lua-ref-msg-binding-group).

<a name="idp25064400"></a> 
## Description

Assigns the message to a named binding group. Randomly picks a binding from the named binding group and assigns the message to it. This function will not pick bindings that are unplumbed or that belong to a different node in the cluster; it will always pick a valid binding that belongs to the node.

The `ctx` parameter is the context containing objects from the callout, `vars` is a table containing script variables and `params` is a table containing parameters to be passed to this routine.

The defined parameter for `params` is:

*   `binding_group` the name of the binding group to assign to. If commas appear, it's a list of bindings, and we pick one at random.

<a name="idp25070800"></a> 
## See Also

[msys.policyeditor.set_binding](/momentum/3/3-reference/lua-ref-msys-policyeditor-set-binding)