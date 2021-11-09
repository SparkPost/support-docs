---
lastUpdated: "03/26/2020"
title: "msys.policyeditor.set_binding"
description: "msys policyeditor set binding Assign the message to a named binding msys policyeditor set binding ctx vars params Configuration Change This function is deprecated Use msg binding bnd to set a binding For more information see msg binding Assign the message to a named binding If commas appear it's a..."
---

<a name="lua.ref.msys.policyeditor.set_binding"></a> 
## Name

msys.policyeditor.set_binding — Assign the message to a named binding

<a name="idp25035648"></a> 
## Synopsis

`msys.policyeditor.set_binding(ctx, vars, params);`

```
ctx: table
vars: table
params: table
```

**Configuration Change. ** This function is deprecated. Use `msg:binding(bnd)` to set a binding. For more information see [msg:binding](/momentum/3/3-reference/3-reference-lua-ref-msg-binding).

<a name="idp25040928"></a> 
## Description

Assign the message to a named binding. If commas appear, it's a list of bindings, and we pick one at random.

### Note

If you assign messages to bindings, it is important to ensure that *all* messages are assigned to bindings, or to make sure that the fallback binding (otherwise known as "default") does what you want. Good scripting practice would be to ensure that there is always an `else` clause or some other way of ensuring that all messages are always dealt with in some way. For example, you could create a variable at the top of your script with the most general binding, then `if` blocks to assign a message to a more specific binding if it matches. At the end of the script, assuming no `if` condition applies, the `else` clause would assign the message to the most general binding.

You can use this function to set the binding to the `default` binding. For more information see [the section called “The "default" Binding”](/momentum/3/3-reference/3-reference-conf-ref-binding#conf.ref.binding.default).

The `ctx` parameter is the context containing objects from the callout, `vars` is a table containing script variables and `params` is a table containing parameters to be passed to this routine.

The defined parameter for `params` is:

*   `binding` the name of the binding to assign to. If commas appear, it's a list of bindings, and we pick one at random.

<a name="idp25052256"></a> 
## See Also

[msys.policyeditor.set_binding_group](/momentum/3/3-reference/lua-ref-msys-policyeditor-set-binding-group)