---
lastUpdated: "03/26/2020"
title: "msys.policyeditor.get_mailfrom"
description: "msys policyeditor get mailfrom Return the envelope sender msys policyeditor get mailfrom ctx vars params Configuration Change This function is deprecated Use local mf msg mailfrom to get the sending address For more information see msg mailfrom Return the envelope sender The ctx parameter is the context containing objects from..."
---

<a name="lua.ref.msys.policyeditor.get_mailfrom"></a> 
## Name

msys.policyeditor.get_mailfrom — Return the envelope sender

<a name="idp24877360"></a> 
## Synopsis

`msys.policyeditor.get_mailfrom(ctx, vars, params);`

```
ctx: table
vars: table
params: table
```

**Configuration Change. ** This function is deprecated. Use `local mf = msg:mailfrom()` to get the sending address. For more information see [msg:mailfrom](/momentum/3/3-reference/3-reference-lua-ref-msg-mailfrom).

<a name="idp24882688"></a> 
## Description

Return the envelope sender.

The `ctx` parameter is the context containing objects from the callout, `vars` is a table containing script variables and `params` is a table containing parameters to be passed to this routine.

There are no defined parameters for `params`.

<a name="idp24887072"></a> 
## See Also

[msys.policyeditor.get_rcptto](/momentum/3/3-reference/lua-ref-msys-policyeditor-get-rcptto)