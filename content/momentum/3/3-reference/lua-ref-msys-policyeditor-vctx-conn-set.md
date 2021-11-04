---
lastUpdated: "03/26/2020"
title: "msys.policyeditor.vctx_conn_set"
description: "msys policyeditor vctx conn set Set a connection validation context value msys policyeditor vctx conn set ctx vars params Configuration Change This function is deprecated Use msg context set msys core ECMESS CTX CONN key value to set a connection context value For more information see msg context set Set..."
---

<a name="lua.ref.msys.policyeditor.vctx_conn_set"></a> 
## Name

msys.policyeditor.vctx_conn_set — Set a connection validation context value

<a name="idp25132784"></a> 
## Synopsis

`msys.policyeditor.vctx_conn_set(ctx, vars, params);`

```
ctx: table
vars: table
params: table
```

**Configuration Change. ** This function is deprecated. Use `msg:context_set(msys.core.ECMESS_CTX_CONN, "key", "value")` to set a connection context value. For more information see [msg:context_set](/momentum/3/3-reference/3-reference-lua-ref-msg-context-set).

<a name="idp25138144"></a> 
## Description

Set a connection validation context value.

The `ctx` parameter is the context containing objects from the callout, `vars` is a table containing script variables and `params` is a table containing parameters to be passed to this routine.

*   `key` the name of the context variable to be set

*   `value` the value to which it will be set

<a name="idp25144512"></a> 
## See Also

[msys.policyeditor.vctx_conn_get](/momentum/3/3-reference/lua-ref-msys-policyeditor-vctx-conn-get)