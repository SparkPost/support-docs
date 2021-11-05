---
lastUpdated: "03/26/2020"
title: "msys.policyeditor.get_header"
description: "msys policyeditor get header Return the value of a header field msys policyeditor get header ctx vars params Configuration Change This function is deprecated Use local x msg header X Custom Hdr to get a header For more information see msg header Return the value of a header field The..."
---

<a name="lua.ref.msys.policyeditor.get_header"></a> 
## Name

msys.policyeditor.get_header — Return the value of a header field

<a name="idp24859344"></a> 
## Synopsis

`msys.policyeditor.get_header(ctx, vars, params);`

```
ctx: table
vars: table
params: table
```

**Configuration Change. ** This function is deprecated. Use `local x = msg:header("X-Custom-Hdr")` to get a header. For more information see [msg:header](/momentum/3/3-reference/3-reference-lua-ref-header).

<a name="idp24864656"></a> 
## Description

Return the value of a header field.

The `ctx` parameter is the context containing objects from the callout, `vars` is a table containing script variables and `params` is a table containing parameters to be passed to this routine.

Defined parameters for `params` are:

*   `header` the name of the header to retrieve

<a name="idp24870672"></a> 
## See Also

[msys.policyeditor.del_header](/momentum/3/3-reference/lua-ref-msys-policyeditor-del-header)