---
lastUpdated: "03/26/2020"
title: "msys.policyeditor.vctx_conn_get"
description: "msys policyeditor vctx conn get Return a connection validation context value msys policyeditor vctx conn get ctx vars params Configuration Change This function is deprecated Use local value msg context get msys core ECMESS CTX CONN key to get a connection context value For more information see msg context get..."
---

<a name="lua.ref.msys.policyeditor.vctx_conn_get"></a> 
## Name

msys.policyeditor.vctx_conn_get — Return a connection validation context value

<a name="idp25151280"></a> 
## Synopsis

`msys.policyeditor.vctx_conn_get(ctx, vars, params);`

```
ctx: table
vars: table
params: table
```

**Configuration Change. ** This function is deprecated. Use `local value = msg:context_get(msys.core.ECMESS_CTX_CONN, "key")` to get a connection context value. For more information see [msg:context_get](/momentum/3/3-reference/3-reference-lua-ref-msg-context-get).

<a name="idp25156656"></a> 
## Description

Return a connection validation context value.

The `ctx` parameter is the context containing objects from the callout, `vars` is a table containing script variables and `params` is a table containing parameters to be passed to this routine.

The defined parameter for `params` is:

*   `key` the name of the context variable to be returned

<a name="idp25162672"></a> 
## See Also

[msys.policyeditor.vctx_conn_set](/momentum/3/3-reference/lua-ref-msys-policyeditor-vctx-conn-set)