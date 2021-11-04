---
lastUpdated: "03/26/2020"
title: "msys.policyeditor.del_header"
description: "msys policyeditor del header Remove a header from the message msys policyeditor del header ctx vars params Configuration Change This function is deprecated Use msg header X hdr to remove a header For more information see msg header Remove a header from the message The ctx parameter is the context..."
---

<a name="lua.ref.msys.policyeditor.del_header"></a> 
## Name

msys.policyeditor.del_header — Remove a header from the message

<a name="idp24825600"></a> 
## Synopsis

`msys.policyeditor.del_header(ctx, vars, params);`

```
ctx: table
vars: table
params: table
```

**Configuration Change. ** This function is deprecated. Use `msg:header("X-hdr", "")` to remove a header. For more information see [msg:header](/momentum/3/3-reference/3-reference-lua-ref-header).

<a name="idp24830896"></a> 
## Description

Remove a header from the message.

The `ctx` parameter is the context containing objects from the callout, `vars` is a table containing script variables and `params` is a table containing parameters to be passed to this routine.

The defined parameter for `params` is: `header` the name of the header to delete.

<a name="idp24835744"></a> 
## See Also

[msys.policyeditor.get_header](/momentum/3/3-reference/lua-ref-msys-policyeditor-get-header)