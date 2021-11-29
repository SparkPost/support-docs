---
lastUpdated: "03/26/2020"
title: "msys.policyeditor.vctx_mess_set"
description: "msys policyeditor vctx mess set Set a message validation context value msys policyeditor vctx mess set ctx vars params Configuration Change This function is deprecated Use msg context set msys core ECMESS CTX MESS key value to set a message context value For more information see msg context set Set..."
---

<a name="lua.ref.msys.policyeditor.vctx_mess_set"></a> 
## Name

msys.policyeditor.vctx_mess_set — Set a message validation context value

<a name="idp25096400"></a> 
## Synopsis

`msys.policyeditor.vctx_mess_set(ctx, vars, params);`

```
ctx: table
vars: table
params: table
```

**Configuration Change. ** This function is deprecated. Use `msg:context_set(msys.core.ECMESS_CTX_MESS, "key", "value")` to set a message context value. For more information see [msg:context_set](/momentum/3/3-reference/3-reference-lua-ref-msg-context-set).

<a name="idp25101760"></a> 
## Description

Set a message validation context value.

The `ctx` parameter is the context containing objects from the callout, `vars` is a table containing script variables and `params` is a table containing parameters to be passed to this routine.

The defined parameters for `params` are:

*   `key` the name of the context variable

*   `value` the value to which it will be set

<a name="idp25108992"></a> 
## See Also

[msys.policyeditor.vctx_mess_get](/momentum/3/3-reference/lua-ref-msys-policyeditor-vctx-mess-get)