---
lastUpdated: "03/26/2020"
title: "msys.policyeditor.vctx_mess_get"
description: "msys policyeditor vctx mess get Return a message validation context value msys policyeditor vctx mess get ctx vars params Configuration Change This function is deprecated Use local value msg context get msys core ECMESS CTX MESS key to get a message context value For more information see msg context get..."
---

<a name="lua.ref.msys.policyeditor.vctx_mess_get"></a> 
## Name

msys.policyeditor.vctx_mess_get — Return a message validation context value

<a name="idp25115808"></a> 
## Synopsis

`msys.policyeditor.vctx_mess_get(ctx, vars, params);`

```
ctx: table
vars: table
params: table
```

**Configuration Change. ** This function is deprecated. Use `local value = msg:context_get(msys.core.ECMESS_CTX_MESS, "key")` to get a message context value. For more information see [msg:context_get](/momentum/3/3-reference/3-reference-lua-ref-msg-context-get).

<a name="idp25121184"></a> 
## Description

Return a message validation context value.

The `ctx` parameter is the context containing objects from the callout, `vars` is a table containing script variables and `params` is a table containing parameters to be passed to this routine.

The defined parameter for `params` is `key` the name of the context variable to be returned.

<a name="idp25126032"></a> 
## See Also

[msys.policyeditor.vctx_mess_set](/momentum/3/3-reference/lua-ref-msys-policyeditor-vctx-mess-set)